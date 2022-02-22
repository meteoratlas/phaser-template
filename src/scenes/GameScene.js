import { Scene } from "phaser";

class GameScene extends Scene {
  constructor() {
    super("scene-game");
  }

  create() {
    // Add, scale, and make up a speed for our creature
    this.testsSprite = this.physics.add.sprite(64, 64, "default");
    this.testsSprite.body.setAllowGravity(false);
    this.testsSpriteSpeed = 300;
    // Create a helper object for our arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    // Listen for keyboard input
    const { left, right, up, down } = this.cursors;
    if (left.isDown) {
      this.testsSprite.setVelocityX(-this.testsSpriteSpeed);
    } else if (right.isDown) {
      this.testsSprite.setVelocityX(this.testsSpriteSpeed);
    } else {
      this.testsSprite.setVelocityX(0);
    }
    if (up.isDown) {
      this.testsSprite.setVelocityY(-this.testsSpriteSpeed);
    } else if (down.isDown) {
      this.testsSprite.setVelocityY(this.testsSpriteSpeed);
    } else {
      this.testsSprite.setVelocityY(0);
    }
  }
}
export default GameScene;
