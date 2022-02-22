import style from "../main.css";
import Phaser, { Game } from "phaser";
import BootScene from "./scenes/BootScene";
import GameScene from "./scenes/GameScene";

console.log("Entry Point");

const canvas = document.getElementById("game-canvas");
const config = {
  type: Phaser.WEB_GL,
  width: 720,
  height: 480,
  disableContextMenu: true,
  backgroundColor: "#224",
  canvas,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 400 },
      //   debug: true,
    },
  },
  scene: [BootScene, GameScene],
};

const game = new Game(config);
