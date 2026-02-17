#!/bin/bash
# a2a-chat.sh - The Orchestrator for A2A2A sessions

# Setup
SCRIPT_DIR="$(dirname "$0")"
WS_CHAT="$SCRIPT_DIR/ws-chat.sh"
SESSION_KEY="agent:main:main"
POLL_INTERVAL=5
MAX_RETRIES=60 # 5s * 60 = 5 minutes timeout

if [ ! -f "$WS_CHAT" ]; then
    echo "Error: ws-chat.sh not found at $WS_CHAT"
    exit 1
fi

chmod +x "$WS_CHAT"

# Parse Args
MESSAGE=""
CHECK_ONLY=false
SHOW_LAST=false

while [[ "$#" -gt 0 ]]; do
    case $1 in
        --session) SESSION_KEY="$2"; shift ;;
        --count) CHECK_ONLY=true ;;
        --last) SHOW_LAST=true ;;
        --help) echo "Usage: $0 [--session key] [message]"; exit 0 ;;
        *) MESSAGE="$1" ;;
    esac
    shift
done

# Initial Check
echo ">>> Connecting to session: $SESSION_KEY"
raw_history=$("$WS_CHAT" --history --session "$SESSION_KEY" --json)
initial_count=$(echo "$raw_history" | jq '.messages | length' 2>/dev/null || echo "0")

if [[ "$CHECK_ONLY" == "true" ]]; then
    echo "Message count: $initial_count"
    exit 0
fi

if [[ "$SHOW_LAST" == "true" ]]; then
    echo "--- Last Message ---"
    echo "$raw_history" | jq -r '.messages[-1].content'
    exit 0
fi

# Send Message (if provided)
if [[ -n "$MESSAGE" ]]; then
    echo ">>> Sending: $MESSAGE"
    "$WS_CHAT" --session "$SESSION_KEY" "$MESSAGE" > /dev/null
    echo ">>> Sent. Waiting for response (initial: $initial_count msgs)..."
else
    echo ">>> Waiting for new messages (initial: $initial_count msgs)..."
fi

# Polling Loop
retries=0
while [ $retries -lt $MAX_RETRIES ]; do
    sleep $POLL_INTERVAL
    
    current_history=$("$WS_CHAT" --history --session "$SESSION_KEY" --json)
    current_count=$(echo "$current_history" | jq '.messages | length' 2>/dev/null || echo "0")
    
    if [[ "$current_count" -gt "$initial_count" ]]; then
        echo ">>> Response received ($current_count msgs)"
        echo "---------------------------------------------------"
        # Display only new messages
        # In a real impl, we might want to iterate. For now, show the last one.
        echo "$current_history" | jq -r '.messages[-1].content'
        echo "---------------------------------------------------"
        exit 0
    fi
    
    # Progress indicator
    echo -ne "."
    retries=$((retries + 1))
done

echo ""
echo "!!! Timeout waiting for response !!!"
exit 1
