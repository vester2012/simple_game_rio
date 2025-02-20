import { Scene } from 'phaser';
import {scrmng} from "../core/scrmng.js";
import {effects} from "../core/effects.js";

export class GameScene extends Scene {
    constructor () {
        super('GameScene');
    }

    create () {
        const centerX = scrmng.getCenterX();
        const centerY = scrmng.getCenterY();

        const spin_mig = this.sound.add('spin_mig');

        this.add.image(centerX, centerY, 'back').setOrigin(0.5, 0.5).setScale(3);
        this.add.spine(centerX, 2166, 'background_base_SPO', 'live', true).setScale(2);

        const girlAnim = this.add.spine(centerX + 10, centerY + 100, 'intro_SPO', 'intro', true).setScale(0.75);

        const txtImage = this.add.image(centerX, centerY + 800, 'start').setOrigin(0.5, 0.5).setScale(0.75);

        effects.animationText(this, txtImage, centerY + 800, centerY + 780);

        this.input.keyboard.on('keydown-SPACE', () => {
            this.input.keyboard.off('keydown-SPACE');

            spin_mig.play();

            this.timer.destroy();
            this.timer = null;

            this.add.spine(centerX + 10, centerY + 100, 'booster_SPO', 'booster_hs').setScale(1.3);

            this.tweens.add({
                targets: [girlAnim, txtImage],
                alpha: 0,
                ease: 'Power1',
                duration: 500,
                delay: 0
            });

            this.time.delayedCall(2000, () => {

                this.cameras.main.fadeOut(300, 255, 255, 255); // Затемнение экрана
                this.time.delayedCall(300, () => {
                    this.scene.start('SlotScene');
                });
            });
        });

        this.timer = this.time.delayedCall(60000 * 3, () => {
            this.timer.destroy();
            this.timer = null;

            this.scene.start('VideoScene');
        });

        this.cameras.main.fadeIn(300, 0, 0, 0);
    }
}
