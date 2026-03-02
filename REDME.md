💾 ChatGPT Chat Saver – Chrome Extension

A lightweight Chrome extension that lets you quickly export your ChatGPT conversations as JSON or Markdown files.

Perfect for archiving chats, sharing conversations, creating documentation, or importing into other tools.

✨ Features

✅ Save current ChatGPT conversation as JSON

✅ Save current ChatGPT conversation as Markdown (.md)

✅ Floating “Save Chat” button (only in specific chat modes — see below)

✅ Keyboard shortcut:

Mac: ⌘ + ⇧ + S

Windows/Linux: Ctrl + Shift + S

✅ Clean UI with toast confirmation

✅ No external servers — everything runs locally in your browser

✅ No tracking, no analytics, no data collection

📌 Where the Save Button Appears

The “Save Chat” button is intentionally limited to:

🟡 Temporary Chats

🔓 Logged-out (anonymous) Chats

The button does NOT appear in regular logged-in persistent chats.

This is controlled by checking the URL structure (the button is hidden when the URL contains /c/, which indicates a saved conversation thread).

Why?

Temporary and logged-out chats are not automatically saved to your ChatGPT history.
This extension helps you preserve those conversations before they disappear.

📦 What It Does

The extension:

Extracts all visible chat messages using the data-message-author-role attribute.

Preserves:

User messages

Assistant messages

Code blocks (wrapped properly in triple backticks)

Allows you to download:

A structured .json file

A formatted .md Markdown file

📁 Output Format
JSON Structure
[
  {
    "role": "user",
    "content": "Hello"
  },
  {
    "role": "assistant",
    "content": "Hi there!"
  }
]
Markdown Structure
## USER

Hello

## ASSISTANT

Hi there!
⌨️ Keyboard Shortcut

Quick save as JSON:

Mac: ⌘ + ⇧ + S

Windows/Linux: Ctrl + Shift + S

The shortcut works in the same contexts where the save button is available (temporary and logged-out chats).

🚀 Installation (Developer Mode)

Download or clone this repository.

Open Chrome.

Go to:

chrome://extensions/

Enable Developer mode (top right).

Click Load unpacked.

Select the extension folder.

The extension will now be active on supported ChatGPT pages.

🧠 How It Works

Injects a floating “Save Chat” button after page load.

Only injects the button if the page is:

A temporary chat, or

A logged-out chat.

Extracts message nodes from the DOM.

Builds a structured array of { role, content }.

Generates a downloadable Blob.

Triggers a local file download.

All processing is done client-side.

🔒 Privacy

This extension:

Does NOT send data anywhere

Does NOT store your chats

Does NOT use background servers

Does NOT require external APIs

Everything happens locally in your browser session.