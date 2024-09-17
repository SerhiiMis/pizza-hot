document
  .querySelector("#open-menu-button")
  .addEventListener("click", function () {
    document.querySelector("#backdrop").classList.add("is-open");
  });

document.querySelector("#menu-close").addEventListener("click", function () {
  document.querySelector("#backdrop").classList.remove("is-open");
});
