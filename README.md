# 💾 SaveGPT

> Save temporary and anonymous ChatGPT conversations as JSON or Markdown — instantly.

SaveGPT is a lightweight Chrome extension that lets you export chats that would otherwise disappear.

---

## ✨ Features

- ✅ Export chat as **JSON**
- ✅ Export chat as **Markdown (.md)**
- ✅ Floating **Save Chat** button
- ✅ Keyboard shortcut support  
- ✅ Preserves code blocks
- ✅ 100% client-side processing
- ✅ No tracking. No data collection.

---

## 📌 Where It Works

SaveGPT intentionally shows the **Save Chat** button only in:

- 🟡 Temporary chats  
- 🔓 Logged-out (anonymous) chats  

It does **NOT** appear in regular logged-in saved conversations.

Why?  
Temporary and logged-out chats are not stored in your history. SaveGPT helps you preserve them before they disappear.

---

## ⌨️ Keyboard Shortcut

Quick save as JSON:

- **Mac:** `⌘ + ⇧ + S`
- **Windows/Linux:** `Ctrl + Shift + S`

The shortcut works in the same contexts where the Save button is available.

---

## 📦 Installation (Developer Mode)

1. Download or clone this repository.
2. Open Chrome.
3. Navigate to:
```chrome://extensions/ ```




6. Enable **Developer Mode** (top right).
7. Click **Load unpacked**.
8. Select the extension folder.

The extension will now be active.


## 📁 Output Format

### JSON

```json
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

```
### Markdown

```markdown
## USER

Hello

## ASSISTANT

Hi there!
```






## 🧠 How It Works

- Extracts messages using the `data-message-author-role` attribute
- Preserves code blocks using triple backticks
- Builds a structured message array
- Generates a downloadable file using the browser Blob API
- Triggers a local file download

Everything runs directly inside your browser.

---

## 🔒 Privacy

SaveGPT:

- Does NOT send data to external servers
- Does NOT store your chats
- Does NOT use analytics
- Does NOT run background tracking

All processing happens locally.

---

## ⚠️ Notes

- Works only on ChatGPT pages
- Relies on the current page structure
- If ChatGPT updates its layout, minor adjustments may be required
