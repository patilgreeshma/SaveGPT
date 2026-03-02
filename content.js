(function () {
function extractChat() {
  const messages = [];
  const nodes = document.querySelectorAll('[data-message-author-role]');

  nodes.forEach(node => {
    const role = node.getAttribute('data-message-author-role');
    let content = "";

    node.childNodes.forEach(child => {
      if (child.tagName === "PRE") {
        const code = child.innerText;
        content += "\n```\n" + code + "\n```\n";
      } else {
        content += child.innerText || "";
      }
    });

    if (content.trim()) {
      messages.push({ role, content: content.trim() });
    }
  });

  return messages;
}

function downloadJSON(data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json"
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

  a.href = url;
  a.download = `chatgpt-chat-${timestamp}.json`;
  a.click();

  URL.revokeObjectURL(url);
}

function downloadMarkdown(messages) {
  let md = "";

  messages.forEach(msg => {
    md += `## ${msg.role.toUpperCase()}\n\n`;
    md += msg.content + "\n\n";
  });

  const blob = new Blob([md], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  const title =
    document.title.replace(" - ChatGPT", "").replace(/[^\w\s]/gi, "");

  const timestamp = new Date().toISOString().split("T")[0];

  a.href = url;
  a.download = `${title || "chat"}-${timestamp}.md`;
  a.click();

  URL.revokeObjectURL(url);
}
function saveChat() {
  const chat = extractChat();

  if (!chat.length) {
    alert("No messages found.");
    return;
  }

  showFormatSelector(chat);
}

function showFormatSelector(chat) {
  const container = document.createElement("div");

  container.style.position = "fixed";
  container.style.bottom = "120px";
  container.style.right = "20px";
  container.style.background = "var(--tw-bg-opacity, #2f2f2f)";
  container.style.padding = "15px";
  container.style.borderRadius = "10px";
  container.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
  container.style.zIndex = 9999;
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.gap = "10px";
  container.style.color = "white";
  container.style.border = "1px solid rgba(255,255,255,0.15)";
  container.style.backdropFilter = "blur(6px)";

  const jsonBtn = document.createElement("button");
  jsonBtn.innerText = "Save as JSON";
  styleButton(jsonBtn);
  jsonBtn.onclick = () => {
    downloadJSON(chat);
    container.remove();
    showToast("Saved as JSON ✅");
  };

  const mdBtn = document.createElement("button");
  mdBtn.innerText = "Save as Markdown";
  styleButton(mdBtn);
  mdBtn.onclick = () => {
    downloadMarkdown(chat);
    container.remove();
    showToast("Saved as Markdown ✅");
  };

  container.appendChild(jsonBtn);
  container.appendChild(mdBtn);

  document.body.appendChild(container);
}

  function showToast(message) {
    const toast = document.createElement("div");
    toast.innerText = message;
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.background = "#10a37f";
    toast.style.color = "white";
    toast.style.padding = "10px 16px";
    toast.style.borderRadius = "8px";
    toast.style.zIndex = 9999;
    toast.style.fontSize = "14px";

    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  }

function shouldShowSaveButton() {
  try {
    return !window.top.location.href.includes('/c/');
  } catch {
    return !window.location.href.includes('/c/');
  }
}
  function injectButton() {
     if (!shouldShowSaveButton()) return;
    if (document.getElementById("chat-save-button")) return;

    const button = document.createElement("button");
    button.id = "chat-save-button";
    button.innerText = "Save Chat";
    button.onclick = saveChat;

   button.style.position = "fixed";
button.style.bottom = "70px";
button.style.right = "20px";
button.style.padding = "10px 16px";
button.style.background = "black";
button.style.color = "white";
button.style.border = "1px solid rgba(255,255,255,0.2)";
button.style.borderRadius = "10px";
button.style.cursor = "pointer";
button.style.fontSize = "14px";
button.style.zIndex = 9999;
button.style.transition = "all 0.2s ease";

button.onmouseenter = () => {
  button.style.opacity = "0.85";
};
button.onmouseleave = () => {
  button.style.opacity = "1";
};

    document.body.appendChild(button);
  }
function styleButton(button) {
  button.style.padding = "8px 14px";
  button.style.background = "transparent";
  button.style.color = "inherit";
  button.style.border = "1px solid rgba(255,255,255,0.2)";
  button.style.borderRadius = "8px";
  button.style.cursor = "pointer";
  button.style.fontSize = "14px";
  button.style.transition = "all 0.15s ease";

  button.onmouseenter = () => {
    button.style.background = "rgba(255,255,255,0.08)";
  };

  button.onmouseleave = () => {
    button.style.background = "transparent";
  };
}
document.addEventListener("keydown", function (e) {
  const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;

  if (
    (isMac ? e.metaKey : e.ctrlKey) &&
    e.shiftKey &&
    e.key.toLowerCase() === "s"
  ) {
    e.preventDefault();

    const chat = extractChat();
    if (chat.length) {
      downloadJSON(chat);
      showToast("Quick saved as JSON ⌘⇧S");
    }
  }
});
  // Wait for page to fully load
  window.addEventListener("load", () => {
    setTimeout(injectButton, 1500);
  });

  
})();