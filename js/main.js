(function () {
  var WA = "5511995009347";

  // CTAs: monta o link do WhatsApp com a mensagem de cada seção (data-msg)
  document.querySelectorAll("[data-msg]").forEach(function (el) {
    el.href = "https://wa.me/" + WA + "?text=" + encodeURIComponent(el.dataset.msg);
    el.target = "_blank";
    el.rel = "noopener";
    el.addEventListener("click", function () {
      var label = el.dataset.track || "whatsapp";
      if (window.gtag) window.gtag("event", "generate_lead", { method: "whatsapp", cta: label });
      if (window.fbq) window.fbq("track", "Contact", { cta: label });
    });
  });

  // Menu mobile
  var btn = document.getElementById("menu-btn");
  var menu = document.getElementById("mobile-menu");
  if (btn && menu) {
    var toggle = function (open) {
      menu.hidden = !open;
      btn.setAttribute("aria-expanded", String(open));
    };
    btn.addEventListener("click", function () { toggle(menu.hidden); });
    menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { toggle(false); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") toggle(false); });
  }

  // Sombra do cabeçalho ao rolar
  var header = document.getElementById("top");
  var onScroll = function () { header.classList.toggle("shadow-sm", window.scrollY > 8); };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Revelação ao rolar
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (i) { io.observe(i); });
  } else {
    items.forEach(function (i) { i.classList.add("is-visible"); });
  }

  // Navegação: destaca a seção atual
  var links = document.querySelectorAll("[data-nav]");
  var secs = [].map.call(links, function (l) { return document.querySelector(l.getAttribute("href")); });
  if ("IntersectionObserver" in window) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (l) {
          l.classList.toggle("font-bold", l.getAttribute("href") === "#" + e.target.id);
        });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    secs.forEach(function (s) { if (s) so.observe(s); });
  }
})();
