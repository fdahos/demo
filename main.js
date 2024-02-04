window.addEventListener("load", () => {
  Loading();
});

window.addEventListener("scroll", () => {
  Loading();
});

const Loading = () => {
  document.querySelectorAll("body *").forEach((element) => {
    if (
      element.getBoundingClientRect().top <=
      window.scrollY + window.innerHeight
    ) {
      setTimeout(() => {
        if (!element.classList.contains("d")) {
          element.classList.add("d");
        }
      }, 500);
    }
  });
};
