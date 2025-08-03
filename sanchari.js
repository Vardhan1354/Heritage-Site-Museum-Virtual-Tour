document.getElementById("chat-toggle").addEventListener("click", function () {
  const chat = document.getElementById("sanchari-chat");
  chat.style.display = chat.style.display === "none" ? "block" : "none";
});

const botui = new BotUI('sanchari-chat');

botui.message.add({
  content: '👋 Namaste! I am <strong>Sanchari</strong>, your heritage guide.'
}).then(function () {
  return botui.message.add({
    content: 'How can I help you today?'
  });
}).then(function () {
  return botui.action.button({
    delay: 800,
    action: [
      { text: 'Suggest a place to visit 🏛️', value: 'suggest' },
      { text: 'Tell me a historical fact 📖', value: 'fact' },
      { text: 'Show museum tours 🖼️', value: 'museum' }
    ]
  });
}).then(function (res) {
  if (res.value === 'suggest') {
    return botui.message.add({
      content: 'You should definitely check out the <strong>Ajanta Caves</strong> — a UNESCO World Heritage Site with stunning murals! 🧱'
    });
  } else if (res.value === 'fact') {
    return botui.message.add({
      content: 'Did you know? The <strong>Konark Sun Temple</strong> was designed as a colossal chariot with 12 wheels pulled by 7 horses! 🌞'
    });
  } else if (res.value === 'museum') {
    return botui.message.add({
      content: 'Sure! Visit the <a href="https://artsandculture.google.com/project/indian-culture" target="_blank">National Museum Virtual Tour</a> or check out the 360° museum tours on our homepage.'
    });
  }
});
