import main from "../index.html";

import clearInput from "./scripts/clearInput";
import filterLogic from "./scripts/filterToggle";
import gameListRender from "./scripts/gameListRender";

import "./styles/reset.scss";
import "./styles/index.scss";
import "./styles/header.scss";
import "./styles/catalog.scss";

clearInput("#clearHeaderSearch", "#headerSearch");
filterLogic();
gameListRender();
