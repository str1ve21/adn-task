import deathloop from "../assets/games/deathloop.jpg";
import cyberpunk from "../assets/games/cyberpunk.jpg";
import farcry from "../assets/games/farcry.jpg";
import fifa19 from "../assets/games/fifa19.jpg";
import fifa21 from "../assets/games/fifa21.jpg";
import gamedec from "../assets/games/gamedec.jpg";
import gtav from "../assets/games/gtav.jpg";
import morrowind from "../assets/games/morrowind.jpg";
import oblivion from "../assets/games/oblivion.jpg";
import odyssey from "../assets/games/odyssey.jpg";
import r6 from "../assets/games/r6.jpg";
import rdr2 from "../assets/games/rdr2.jpg";
import teso from "../assets/games/teso.jpg";
import unity from "../assets/games/unity.jpg";
import watchdogs2 from "../assets/games/watchdogs2.jpg";

export default function gameListRender() {
  console.time("Games list render");
  const elements = [
    {
      name: "Deathloop",
      price: "2 499 ₽",
      salePrice: null,
      imageURL: deathloop,
      isNew: true,
      isSale: false,
    },
    {
      name: "Cyberpunk 2077",
      price: "3 499 ₽",
      salePrice: null,
      imageURL: cyberpunk,
      isNew: false,
      isSale: false,
    },
    {
      name: "FarCry",
      price: "1 499 ₽",
      salePrice: "2 499 ₽",
      imageURL: farcry,
      isNew: false,
      isSale: true,
    },
    {
      name: "Fifa 19",
      price: "3 499 ₽",
      salePrice: "5 499 ₽",
      imageURL: fifa19,
      isNew: false,
      isSale: true,
    },
    {
      name: "Fifa 21",
      price: "3 499 ₽",
      salePrice: "5 499 ₽",
      imageURL: fifa21,
      isNew: false,
      isSale: true,
    },
    {
      name: "GameDec",
      price: "3 499 ₽",
      salePrice: null,
      imageURL: gamedec,
      isNew: true,
      isSale: false,
    },
    {
      name: "Grand Theft Auto V",
      price: "2 000 ₽",
      salePrice: null,
      imageURL: gtav,
      isNew: false,
      isSale: false,
    },
    {
      name: "Morrowind",
      price: "3 000 ₽",
      salePrice: null,
      imageURL: morrowind,
      isNew: false,
      isSale: false,
    },
    {
      name: "Oblivion",
      price: "1 000 ₽",
      salePrice: null,
      imageURL: oblivion,
      isNew: false,
      isSale: false,
    },
    {
      name: "Odyssey",
      price: "3 200 ₽",
      salePrice: null,
      imageURL: odyssey,
      isNew: false,
      isSale: false,
    },
    {
      name: "Rainbow Six: Siege",
      price: "700 ₽",
      salePrice: "1 200 ₽",
      imageURL: r6,
      isNew: false,
      isSale: true,
    },
    {
      name: "Red Dead Redemption 2",
      price: "2 000 ₽",
      salePrice: null,
      imageURL: rdr2,
      isNew: true,
      isSale: false,
    },
    {
      name: "TES: Online",
      price: "2 000 ₽",
      salePrice: null,
      imageURL: teso,
      isNew: false,
      isSale: false,
    },
    {
      name: "Unity",
      price: "1 500 ₽",
      salePrice: null,
      imageURL: unity,
      isNew: false,
      isSale: false,
    },
    {
      name: "Watch Dogs 2",
      price: "1 500 ₽",
      salePrice: null,
      imageURL: watchdogs2,
      isNew: false,
      isSale: false,
    },
  ];
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
}
