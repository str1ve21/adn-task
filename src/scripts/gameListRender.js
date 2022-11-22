export default function gameListRender(elements) {
  console.time("Games list render");
  const renderData = [];
  const parent = document.querySelector("#games__list");
  elements.forEach((item) => {
    const element = `
      <div class="game-card">
        <img class="game-card__img" src="${item.imageURL}" alt="Deathloop">
        ${item.isNew ? `<span class="game-card__new">Новинка</span>` : ``}
        ${item.isSale ? `<span class="game-card__sale">Скидка</span>` : ``}
        <div class="game-card__info">
          <h4 class="game-card__info-title">${item.name}</h4>
          ${
            item.salePrice
              ? `<span class="game-card__info-oldprice">${item.salePrice}</span>`
              : ``
          }
          <h4 class="game-card__info-price">${item.price}</h4>
        </div>
      </div>
    `;
    renderData.push(element);
  });
  parent.innerHTML = renderData.join("");
  console.timeEnd("Games list render");
  console.log(`Items rendered: ${elements.length}`);
}
