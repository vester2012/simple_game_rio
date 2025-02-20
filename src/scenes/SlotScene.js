import {Scene} from "phaser";
import {scrmng} from "../core/scrmng.js";
import {effects} from "../core/effects.js";



export class SlotScene extends Scene {
    constructor() {
        super({key: "SlotScene"});
    }

    init(data) {
        this.videoName = data.videoName;
    }

    create () {
        const centerX = scrmng.getCenterX();
        const centerY = scrmng.getCenterY();

        const video = this.add.video(centerX, centerY, this.videoName).setOrigin(0.5, 0.5).setScale(1.44, 1.43);

        const spin_mig_congratulation = this.sound.add('spin_mig_congratulation');

        this.cameras.main.fadeIn(300, 255, 255, 255);

        video.play(); // Запускаем текущее видео

        const videoTime = 8200;
        const hideSceneTime = 0;

        if (this.videoName == '50') {
            this.time.delayedCall(videoTime - hideSceneTime, () => {

                spin_mig_congratulation.play();

                this.add.spine(centerX + 10, centerY + 100, 'intro_SPO', 'winbanner4').setScale(0.75);

                const txtImage = this.add.image(centerX, centerY + 600, 'finish').setOrigin(0.5, 0.5).setScale(0.75);

                effects.animationText(this, txtImage, centerY + 600, centerY + 580);

                this.time.delayedCall(3333, () => {
                    this.scene.start('GameScene');
                });
            });

        } else {
            this.time.delayedCall(videoTime - hideSceneTime, () => {
                this.cameras.main.fadeOut(hideSceneTime, 0, 0, 0); // Затемнение экрана
                this.time.delayedCall(hideSceneTime, () => {
                    this.scene.start('GameScene');
                });
            });
        }
    }
}
