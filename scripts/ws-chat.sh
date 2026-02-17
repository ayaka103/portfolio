#!/bin/bash
# ws-chat.sh - A low-level wrapper for OpenClaw Remote API via Cloudflare Access

# Configuration
HOST="https://moltbot-sandbox.uekarada.workers.dev"
# This token bypasses CF Access (Service Token). Verify this is still valid.
# But for now, we use cloudflared to handle access.
# If a token is required by the Worker itself, append it to query params.
WORKER_TOKEN="d3b63e2bd8e884dea2070fc822ed4dda02b1f7fe761aa124a3402bd74036ab88"

# Default session
SESSION_KEY="agent:main:main"

# Function to display usage
usage() {
    echo "Usage: $0 [OPTIONS] [MESSAGE]"
    echo ""
    echo "Options:"
    echo "  --health            Check API health"
    echo "  --status            Check worker process status"
    echo "  --history           Get chat history"
    echo "  --session KEY       Set session key (default: agent:main:main)"
    echo "  --json              Output raw JSON"
    echo ""
    echo "Examples:"
    echo "  $0 --health"
    echo "  $0 'Hello world'"
    echo "  $0 --session agent:task-a:main 'Do task A'"
    exit 1
}

# Parse Args
MODE="chat"
MESSAGE=""
RAW_JSON=false

while [[ "$#" -gt 0 ]]; do
    case $1 in
        --health) MODE="health" ;;
        --status) MODE="status" ;;
        --history) MODE="history" ;;
        --session) SESSION_KEY="$2"; shift ;;
        --json) RAW_JSON=true ;;
        -h|--help) usage ;;
        *) MESSAGE="$1" ;;
    esac
    shift
done

# Helper to run curl with cloudflared
run_api() {
    local endpoint="$1"
    local method="$2"
    local data="$3"
    local url="${HOST}${endpoint}"
    
    # Append worker token
    if [[ "$url" == *"?"* ]]; then
        url="${url}&token=${WORKER_TOKEN}"
    else
        url="${url}?token=${WORKER_TOKEN}"
    fi

    # Append session key if relevant
    if [[ "$MODE" == "history" || "$MODE" == "chat" ]]; then
        url="${url}&sessionKey=${SESSION_KEY}"
    fi

    if [[ "$method" == "POST" ]]; then
        cloudflared access curl "$url" -X POST -H "Content-Type: application/json" -d "$data" 2>/dev/null
    else
        cloudflared access curl "$url" 2>/dev/null
    fi
}

# Execute
case $MODE in
    health)
        run_api "/remote/health" "GET"
        ;;
    status)
        run_api "/remote/status" "GET"
        ;;
    history)
        run_api "/remote/history" "GET"
        ;;
    chat)
        if [[ -z "$MESSAGE" ]]; then
            echo "Error: Message required for chat mode."
            usage
        fi
        payload=$(jq -n --arg msg "$MESSAGE" --arg sk "$SESSION_KEY" '{message: $msg, sessionKey: $sk}')
        run_api "/remote/chat" "POST" "$payload"
        ;;
esac

echo "" # Newline
