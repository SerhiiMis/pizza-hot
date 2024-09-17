async function loadHTML(selector, file) {
  const response = await fetch(file);
  const text = await response.text();
  document.querySelector(selector).innerHTML = text;
}

loadHTML("#hero", "../pages/hero.html");
loadHTML("#about-us", "../pages/about-us.html");
loadHTML("#our-menu", "../pages/our-menu.html");
loadHTML("#footer", "../pages/footer.html");
