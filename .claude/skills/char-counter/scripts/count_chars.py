#!/usr/bin/env python3
"""Count characters in text with 4 pattern combinations."""

import argparse
import sys


def count_chars(text: str) -> dict[str, int]:
    spaces = set(" \t\u3000")  # half-width, tab, full-width space
    newlines = set("\n\r")

    total = len(text)
    n_newlines = sum(1 for c in text if c in newlines)
    n_spaces = sum(1 for c in text if c in spaces)

    return {
        "incl_newline_incl_space": total,
        "incl_newline_excl_space": total - n_spaces,
        "excl_newline_incl_space": total - n_newlines,
        "excl_newline_excl_space": total - n_newlines - n_spaces,
    }


def main():
    parser = argparse.ArgumentParser(description="Count characters in text (4 patterns)")
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument("file", nargs="?", help="Path to text file")
    group.add_argument("--stdin", action="store_true", help="Read from stdin")
    args = parser.parse_args()

    if args.stdin:
        text = sys.stdin.read()
    else:
        with open(args.file, encoding="utf-8") as f:
            text = f.read()

    counts = count_chars(text)

    print("## 文字数カウント結果\n")
    print(f"| パターン | 文字数 |")
    print(f"|----------|--------|")
    print(f"| 改行あり・スペースあり | {counts['incl_newline_incl_space']:,} |")
    print(f"| 改行あり・スペースなし | {counts['incl_newline_excl_space']:,} |")
    print(f"| 改行なし・スペースあり | {counts['excl_newline_incl_space']:,} |")
    print(f"| 改行なし・スペースなし | {counts['excl_newline_excl_space']:,} |")
    print()
    print(f"※ スペース = 半角スペース, 全角スペース, タブ")


if __name__ == "__main__":
    main()
