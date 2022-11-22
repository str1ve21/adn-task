import gamesData from "./gamesData";
import gameListRender from "./gameListRender";

export default function search() {
  const input = document.querySelector("#headerSearch");
  input.addEventListener("input", () => {
    const elements = gamesData();
    if (input.value === "") {
      return gameListRender(elements);
    }
    const filtered = elements.filter((item) =>
      item.name.toUpperCase().startsWith(input.value.toUpperCase())
    );
    gameListRender(filtered);
  });
}
