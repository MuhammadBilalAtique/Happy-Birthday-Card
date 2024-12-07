document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("open-btn");
  const welcomePage = document.getElementById("welcome-page");
  const diary = document.getElementById("diary");
  const nextBtns = document.querySelectorAll(".next-btn");
  const animation = document.getElementById("animation");

  // Open the card
  openBtn.addEventListener("click", () => {
    welcomePage.classList.remove("active");
    welcomePage.classList.add("hidden");
    diary.classList.remove("hidden");
  });

  // Navigate through diary pages
  nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const currentPage = btn.parentElement;
      const targetPageId = btn.getAttribute("data-target");

      currentPage.classList.add("hidden");
      if (targetPageId === "animation") {
        animation.classList.remove("hidden");
      } else {
        document.getElementById(targetPageId).classList.remove("hidden");
      }
    });
  });
});
