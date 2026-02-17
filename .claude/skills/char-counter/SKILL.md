---
name: char-counter
description: Count characters in text and display 4 pattern combinations based on inclusion/exclusion of newlines and spaces (half-width, full-width, tab). Use when the user asks to count characters, check text length, or measure string size in any language.
---

# Char Counter

Count characters in text with 4 patterns combining newline and space inclusion/exclusion.

## Usage

Run `scripts/count_chars.py` on the target text:

```bash
# From a file
python3 scripts/count_chars.py <file-path>

# From text via stdin
echo "text" | python3 scripts/count_chars.py --stdin
```

For inline text provided by the user, write it to a temporary file first, then run the script.

## Output Format

The script outputs a markdown table with 4 rows:

| パターン | 説明 |
|----------|------|
| 改行あり・スペースあり | All characters included |
| 改行あり・スペースなし | Exclude spaces (half-width ` `, full-width `　`, tab `\t`) |
| 改行なし・スペースあり | Exclude newlines (`\n`, `\r`) |
| 改行なし・スペースなし | Exclude both newlines and spaces |
