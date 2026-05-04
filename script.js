// DARK MODE
function toggleDark() {
  document.body.classList.toggle("dark");
}

// HOMEPAGE DISPLAY
function displayPagodas() {
  const container = document.getElementById("pagodaList");
  if (!container) return;

  for (let key in pagodas) {
    container.innerHTML += `
      <div class="card">
        <img src="images/${pagodas[key].images[0]}">
        <h3>${pagodas[key].name}</h3>
        <a href="pagoda.html?id=${key}">
          <button>Explore</button>
        </a>
      </div>
    `;
  }
}

// LOAD PAGODA PAGE
function loadPagoda() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const pagoda = pagodas[id];
  if (!pagoda) return;

  document.getElementById("title").innerText = pagoda.name;
  document.getElementById("history").innerText = pagoda.history;
  document.getElementById("architecture").innerText = pagoda.architecture;
  document.getElementById("best").innerText = pagoda.best;
  document.getElementById("fact").innerText = pagoda.fact;

  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";
  pagoda.images.forEach(img => {
    gallery.innerHTML += `<img src="images/${img}">`;
  });
}

// TAB SYSTEM
function openTab(tabId) {
  document.querySelectorAll(".tab-content").forEach(tab => {
    tab.classList.remove("active");
  });
  document.getElementById(tabId).classList.add("active");
}

// TRIP PLANNER
function generatePlan() {
  const days = document.getElementById("days").value;
  const result = document.getElementById("planResult");

  if (days == "1") {
    result.innerHTML = `
      <h3>1 Day Plan</h3>
      <p>Morning: Ananda Temple</p>
      <p>Afternoon: Dhammayangyi</p>
      <p>Sunset: Shwezigon</p>
    `;
  } else {
    result.innerHTML = `
      <h3>2 Day Plan</h3>
      <p>Day 1: Ananda, Dhammayangyi</p>
      <p>Day 2: Sulamani, Htilominlo, Shwezigon</p>
    `;
  }
}

// SIMPLE CHATBOT
function sendMessage() {
  const input = document.getElementById("chatInput").value.toLowerCase();
  const reply = document.getElementById("chatReply");

  if (input.includes("sunrise"))
    reply.innerText = "Ananda Temple is beautiful at sunrise.";
  else if (input.includes("sunset"))
    reply.innerText = "Shwezigon and Htilominlo are great for sunset.";
  else
    reply.innerText = "Ask about sunrise or sunset!";
}