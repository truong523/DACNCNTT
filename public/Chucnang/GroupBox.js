function sendMessage() {
  const input = document.getElementById("chatInput");
  const messageText = input.value.trim();
  if (messageText === "") return;

  const message = document.createElement("div");
  message.className = "message from-me";
  message.textContent = messageText;

  document.getElementById("messages").appendChild(message);
  input.value = "";
  input.focus();
}
