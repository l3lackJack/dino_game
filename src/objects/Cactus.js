class Cactus{
    constructor(scene) {
        this.scene = scene;
        this.sprite = scene.physics.add.sprite(700,470,'tiles', 2)
            .setScale(2)
            .setSize(5,15)
            .setCollideWorldBounds(true);

        this.sprite.body.customBoundsRectangle.left = -100;
        this.sprite.body.customBoundsRectangle.right = 740;

        this.update();
    }

    update() {
        this.sprite.setVelocityX(-150);
    }
}

export default Cactus;