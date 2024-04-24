let start = document.querySelectorAll(".star-campo");

start.forEach((container) => {
  let stars = container.querySelectorAll(".star");

  stars.forEach((star, index) => {
    star.addEventListener("click", function () {
      container.setAttribute("star-campo", index + 1);

      updateStars(container, index + 1);
    });
  });
});

function updateStars(container, rating) {
  container
    .querySelectorAll(".star")
    .forEach((star) => star.classList.remove("active"));

  container.querySelectorAll(".star").forEach((star, index) => {
    if (index < rating) {
      star.classList.add("active");
    }
  });
}
