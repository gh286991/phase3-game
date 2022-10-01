import React , {StrictMode} from "react";
import { createRoot } from "react-dom/client";

import Phaser from "phaser";

import MyGame from "./Phase/MyGame";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: [MyGame],
};

new Phaser.Game(config);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <React.Fragment>
      <h1>Hello World</h1>
    </React.Fragment>
  </StrictMode>
);
