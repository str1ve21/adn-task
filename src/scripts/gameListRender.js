export default function gameListRender() {
  const elements = ["owo", "uwu"];
  const parent = document.querySelector("#games__list");
  elements.forEach((item) => {
    const element = `
      <div>${item}</div>
    `;
    parent.innerHTML += element;
  });
}
