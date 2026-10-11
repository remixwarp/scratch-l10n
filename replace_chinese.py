import json
import re

input_file_path = r"d:\Github\scratch-l10n\editor\blocks\zh-cn.json"
output_file_path = r"d:\Github\scratch-l10n\editor\blocks\____.json"

# Read the JSON content
with open(input_file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

# Regex to find placeholders like %{var} or {emoji}
placeholder_regex = re.compile(r'(%\{[^}]+\}|{[^}]+})')
chinese_char_regex = re.compile(r'[\u4e00-\u9fa5]')

def replace_chinese_in_string(text):
    # Store placeholders and replace them with unique markers
    placeholders = []
    def store_placeholder(match):
        placeholders.append(match.group(0))
        return f'__PLACEHOLDER_{len(placeholders) - 1}__'
    
    text_with_markers = placeholder_regex.sub(store_placeholder, text)

    # Replace Chinese characters with underscores
    replaced_text = chinese_char_regex.sub('_', text_with_markers)

    # Restore placeholders
    def restore_placeholder(match):
        index = int(match.group(1))
        return placeholders[index]

    final_text = re.sub(r'__PLACEHOLDER_(\d+)__', restore_placeholder, replaced_text)
    return final_text

def process_json_value(value):
    if isinstance(value, str):
        return replace_chinese_in_string(value)
    elif isinstance(value, dict):
        return {k: process_json_value(v) for k, v in value.items()}
    elif isinstance(value, list):
        return [process_json_value(item) for item in value]
    else:
        return value

# Process the entire JSON structure
modified_data = process_json_value(data)

# Write the modified JSON content to the new file
with open(output_file_path, 'w', encoding='utf-8') as f:
    json.dump(modified_data, f, ensure_ascii=False, indent=2)

print(f"File processed and saved to {output_file_path}")
