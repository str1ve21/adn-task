import main from "../index.html";

import clearInput from "./scripts/clearInput";
import filterLogic from "./scripts/filterToggle";
import gameListRender from "./scripts/gameListRender";
import gamesData from "./scripts/gamesData";
import search from "./scripts/search";

import "./styles/reset.scss";
import "./styles/index.scss";
import "./styles/header.scss";
import "./styles/catalog.scss";

gameListRender(gamesData());
filterLogic();
search();
clearInput("#clearHeaderSearch", "#headerSearch");
