/* LIVE TIME */
const liveTime = document.getElementById("liveTime");
setInterval(() => {
  liveTime.textContent = "⏰ " + new Date().toLocaleTimeString();
}, 1000);

/* SCROLL PROGRESS */
window.addEventListener("scroll", () => {
  const scrolled =
    (window.scrollY /
      (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById("progress").style.width = scrolled + "%";
});

/* SCROLL REVEAL */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

/* SIMPLE AI CHAT */
function getAIReply(msg) {
  if (msg.includes("hi") || msg.includes("hello"))
    return "Hello 👋 Welcome to my portfolio.";
  if (msg.includes("skill"))
    return "I work with HTML, CSS, JavaScript and UI/UX.";
  if (msg.includes("project"))
    return "I build modern, animated and responsive websites.";
  if (msg.includes("contact"))
    return "You can contact me via Instagram or Email below.";
  return "Thanks for your message! I'm always improving 🚀";
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const log = document.getElementById("chatLog");

  if (!input.value.trim()) return;

  log.innerHTML += `<p><b>You:</b> ${input.value}</p>`;
  log.innerHTML += `<p><b>AI:</b> ${getAIReply(input.value.toLowerCase())}</p>`;
  input.value = "";
  log.scrollTop = log.scrollHeight;
    }
