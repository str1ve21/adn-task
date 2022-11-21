export default function clearInput(buttonID, inputID) {
  const button = document.querySelector(buttonID);
  if (button) {
    button.addEventListener("mousedown", () => {
      const input = document.querySelector(inputID);
      if (input) {
        input.value = "";
      }
    });
  }
}
