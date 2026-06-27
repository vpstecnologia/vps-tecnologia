const CONFIG = {
  whatsapp: "5582993631632"
};

function wa(message) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

const links = {
  whatsappHero: "Olá! Vim pelo site da VPS Tecnologia e gostaria de solicitar um diagnóstico gratuito.",
  whatsappFooter: "Olá! Gostaria de falar com a VPS Tecnologia.",
  whatsappFloat: "Olá! Vim pelo site da VPS Tecnologia e preciso de atendimento.",
  whatsappPlan1: "Olá! Tenho interesse no Plano Essencial da VPS Tecnologia.",
  whatsappPlan2: "Olá! Tenho interesse no Plano Profissional da VPS Tecnologia.",
  whatsappPlan3: "Olá! Tenho interesse no Plano Empresarial da VPS Tecnologia."
};

Object.entries(links).forEach(([id, message]) => {
  const element = document.getElementById(id);
  if (element) element.href = wa(message);
});

document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
});

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => menu.classList.remove("open"));
});
