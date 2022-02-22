import { Scene } from "phaser";

class BootScene extends Scene {
  constructor() {
    super("scene-boot");
  }

  preload() {
    this.load.image("default", "res/gfx/default_image.png");
  }

  create() {
    this.scene.start("scene-game");
  }
}

export default BootScene;
