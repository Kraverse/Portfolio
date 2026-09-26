/* ============================================================
   Rendering, project visuals, navigation & reveal animations
   ============================================================ */

/* ---------- Abstract project visuals (inline SVG, no stock photos) ---------- */
function projectVisual(type) {
  const arts = {
    dhobixpert: `
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Abstract visual representing the DhobiXpert laundry platform">
        <defs><linearGradient id="gA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#fdeade"/><stop offset="1" stop-color="#f8c8a8"/></linearGradient></defs>
        <rect width="400" height="300" fill="url(#gA)"/>
        <circle cx="320" cy="70" r="90" fill="#f5b8b0" opacity="0.45"/>
        <rect x="60" y="90" width="200" height="140" rx="16" fill="#fff" opacity="0.9"/>
        <rect x="80" y="115" width="90" height="12" rx="6" fill="#f0653c" opacity="0.85"/>
        <rect x="80" y="140" width="150" height="9" rx="4.5" fill="#eaddd2"/>
        <rect x="80" y="158" width="120" height="9" rx="4.5" fill="#eaddd2"/>
        <circle cx="225" cy="195" r="24" fill="#f0653c" opacity="0.9"/>
        <path d="M217 195 l6 6 l12 -12" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="150" cy="70" r="6" fill="#f0653c" opacity="0.5"/>
      </svg>`,
    helpdesk: `
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Abstract visual representing AI knowledge retrieval for HelpDesk AI">
        <defs><linearGradient id="gB" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#fbe3d6"/><stop offset="1" stop-color="#f0a58c"/></linearGradient></defs>
        <rect width="400" height="300" fill="url(#gB)"/>
        <circle cx="70" cy="240" r="100" fill="#f5b8b0" opacity="0.4"/>
        <rect x="90" y="60" width="140" height="180" rx="12" fill="#fff" opacity="0.92"/>
        <rect x="108" y="85" width="70" height="10" rx="5" fill="#f0653c"/>
        <rect x="108" y="110" width="100" height="7" rx="3.5" fill="#eaddd2"/>
        <rect x="108" y="126" width="88" height="7" rx="3.5" fill="#eaddd2"/>
        <rect x="108" y="142" width="96" height="7" rx="3.5" fill="#eaddd2"/>
        <rect x="200" y="130" width="130" height="110" rx="14" fill="#1c1a17" opacity="0.88"/>
        <rect x="216" y="150" width="60" height="9" rx="4.5" fill="#f0653c"/>
        <rect x="216" y="170" width="98" height="6" rx="3" fill="#fff" opacity="0.4"/>
        <rect x="216" y="184" width="86" height="6" rx="3" fill="#fff" opacity="0.3"/>
        <rect x="216" y="198" width="94" height="6" rx="3" fill="#fff" opacity="0.4"/>
        <circle cx="150" cy="212" r="16" fill="#f0653c"/>
        <path d="M144 212 a6 6 0 1 1 6 6" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      </svg>`,
    context: `
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Abstract visual representing context transfer between AI assistants">
        <defs><linearGradient id="gC" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#fdf0e6"/><stop offset="1" stop-color="#f5b8b0"/></linearGradient></defs>
        <rect width="400" height="300" fill="url(#gC)"/>
        <circle cx="340" cy="230" r="90" fill="#f8c8a8" opacity="0.5"/>
        <rect x="50" y="70" width="120" height="80" rx="14" fill="#fff" opacity="0.95"/>
        <rect x="66" y="90" width="70" height="8" rx="4" fill="#eaddd2"/>
        <rect x="66" y="106" width="85" height="8" rx="4" fill="#f0653c" opacity="0.7"/>
        <rect x="66" y="122" width="60" height="8" rx="4" fill="#eaddd2"/>
        <rect x="230" y="150" width="120" height="80" rx="14" fill="#1c1a17" opacity="0.88"/>
        <rect x="246" y="170" width="70" height="8" rx="4" fill="#fff" opacity="0.4"/>
        <rect x="246" y="186" width="55" height="8" rx="4" fill="#f0653c"/>
        <rect x="246" y="202" width="75" height="8" rx="4" fill="#fff" opacity="0.3"/>
        <path d="M170 115 C 215 115, 205 165, 230 180" stroke="#f0653c" stroke-width="3" fill="none" stroke-dasharray="6 6" stroke-linecap="round"/>
        <circle cx="200" cy="147" r="14" fill="#f0653c"/>
        <path d="M195 147 h10 M200 142 v10" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,
    churniq: `
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Abstract visual representing ML analytics for ChurnIQ">
        <defs><linearGradient id="gD" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#fdeade"/><stop offset="1" stop-color="#f0a58c"/></linearGradient></defs>
        <rect width="400" height="300" fill="url(#gD)"/>
        <circle cx="60" cy="60" r="80" fill="#f5b8b0" opacity="0.4"/>
        <rect x="70" y="70" width="260" height="170" rx="16" fill="#fff" opacity="0.94"/>
        <polyline points="95,200 140,170 185,185 230,130 275,145 310,100"
          fill="none" stroke="#f0653c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="230" cy="130" r="7" fill="#f0653c"/>
        <circle cx="310" cy="100" r="7" fill="#1c1a17"/>
        <rect x="95" y="215" width="200" height="7" rx="3.5" fill="#eaddd2"/>
        <rect x="95" y="90" width="80" height="10" rx="5" fill="#1c1a17" opacity="0.85"/>
      </svg>`,
  };
  return arts[type] || arts.dhobixpert;
}

/* ---------- Render tech strip ---------- */
const techList = document.getElementById("tech-list");
TECH_STACK.forEach((t) => {
  const li = document.createElement("li");
  li.textContent = t;
  techList.appendChild(li);
});

/* ---------- Render project cards ---------- */
const grid = document.getElementById("project-grid");
PROJECTS.forEach((p) => {
  const card = document.createElement("article");
  card.className = "project-card reveal";
  const href = p.link || "https://github.com/Kraverse";
  const external = p.link ? ' target="_blank" rel="noopener noreferrer"' : "";
  card.innerHTML = `
    <div class="project-visual">
      ${p.highlight ? `<span class="project-badge">${p.highlight}</span>` : ""}
      <div class="visual-art">${projectVisual(p.visual)}</div>
    </div>
    <div class="project-body">
      <div class="project-title-row">
        <h3 class="project-title">${p.title}</h3>
        <a class="arrow-btn" href="${href}"${external} aria-label="Open ${p.title} project">
          <span aria-hidden="true">↗</span>
        </a>
      </div>
      <p class="project-desc">${p.description}</p>
      <p class="project-tech">${p.category} · ${p.tech.join(" / ")}</p>
    </div>`;
  grid.appendChild(card);
});

/* ---------- Render skill groups ---------- */
const skillWrap = document.getElementById("skill-groups");
SKILL_GROUPS.forEach((g) => {
  const div = document.createElement("div");
  div.className = "skill-group reveal";
  div.innerHTML = `<h3>${g.group}</h3><p>${g.skills.map((s) => `<span>${s}</span>`).join(" · ")}</p>`;
  skillWrap.appendChild(div);
});

/* ---------- Render timeline ---------- */
const timeline = document.getElementById("timeline");
LEARNING.forEach((item) => {
  const li = document.createElement("li");
  li.className = "reveal";
  li.innerHTML = `<h3>${item.title}</h3><p>${item.note}</p>`;
  timeline.appendChild(li);
});

/* ---------- Mobile navigation ---------- */
const toggle = document.getElementById("nav-toggle");
const menu = document.getElementById("nav-menu");
toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
menu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

/* ---------- Scroll reveal ---------- */
const revealEls = document.querySelectorAll(".reveal");
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReduced || !("IntersectionObserver" in window)) {
  revealEls.forEach((el) => el.classList.add("visible"));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
}
