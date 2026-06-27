const CONFIG = {
  // Troque pelo WhatsApp oficial da VPS Tecnologia.
  // Formato: 55 + DDD + número. Exemplo: 5582999999999
  whatsapp: "5582993631632",
  mensagem: "Olá! Vim pelo site da VPS Tecnologia e gostaria de solicitar um atendimento."
};

function linkWhatsApp(texto) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`;
}

const links = {
  whatsappHero: "Olá! Vim pelo site da VPS Tecnologia e gostaria de solicitar um diagnóstico.",
  whatsappFooter: "Olá! Gostaria de falar com a VPS Tecnologia.",
  whatsappPlan1: "Olá! Tenho interesse no Plano Essencial da VPS Tecnologia.",
  whatsappPlan2: "Olá! Tenho interesse no Plano Profissional da VPS Tecnologia.",
  whatsappPlan3: "Olá! Tenho interesse no Plano Empresarial da VPS Tecnologia."
};

Object.entries(links).forEach(([id, msg]) => {
  const el = document.getElementById(id);
  if (el) el.href = linkWhatsApp(msg);
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
