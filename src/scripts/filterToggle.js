export default function filterLogic() {
  const filterButton = document.querySelectorAll(".filter__element");
  filterButton.forEach((elem) => {
    elem.addEventListener("click", () => {
      const arrow = document.querySelector(
        `#${elem.id} .filter__element-arrow`
      );
      arrow.classList.toggle("filter__element-arrow_rotated");
    });
  });
}
