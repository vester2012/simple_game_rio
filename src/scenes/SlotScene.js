import {Scene} from "phaser";
import {scrmng} from "../core/scrmng.js";
import {effects} from "../core/effects.js";

const videoDistrib = [
    ['00', 1],
    ['01', 1],
    ['02', 1],
    ['03', 1],
    ['04', 1],
    ['05', 1],
    ['06', 1],
    ['07', 1],
    ['08', 1],
    ['09', 1],
    ['10', 1],
    ['11', 1],
    ['12', 1],
    ['13', 1],
    ['14', 1],
    ['15', 1],
    ['16', 1],
    ['17', 1],
    ['18', 1],
    ['19', 1],
    ['20', 1],
    ['21', 1],
    ['22', 1],
    ['23', 1],
    ['24', 1],
    ['25', 1],
    ['26', 1],
    ['27', 1],
    ['28', 1],
    ['29', 1],
    ['30', 1],
    ['31', 1],
    ['32', 1],
    ['33', 1],
    ['34', 1],
    ['35', 1],
    ['36', 1],
    ['37', 1],
    ['38', 1],
    ['39', 1],
    ['40', 1],
    ['41', 1],
    ['42', 1],
    ['43', 1],
    ['44', 1],
    ['45', 1],
    ['46', 1],
    ['47', 1],
    ['48', 1],
    ['49', 1],
    ['50', 10]
];

const getVideo = (distrib) => {
    // Суммируем все вероятности
    const totalWeight = distrib.reduce((sum, [, probability]) => sum + probability, 0);

    // Генерируем случайное число от 0 до общей суммы вероятностей
    const random = Math.random() * totalWeight;

    // Проходим по распределению и выбираем значение на основе вероятности
    let cumulativeWeight = 0;
    for (const [value, probability] of distrib) {
        cumulativeWeight += probability;
        if (random < cumulativeWeight) {
            return value;
        }
    }
};

export class SlotScene extends Scene {
    constructor() {
        super({key: "SlotScene"});
    }

    create () {
        const centerX = scrmng.getCenterX();
        const centerY = scrmng.getCenterY();
        const nameVideo = getVideo(videoDistrib);

        console.log(nameVideo);

        const video = this.add.video(centerX, centerY, nameVideo).setOrigin(0.5, 0.5).setScale(1.44, 1.43);

        this.cameras.main.fadeIn(300, 255, 255, 255);

        video.play(); // Запускаем текущее видео

        const videoTime = 8200;
        const hideSceneTime = 0;

        if (nameVideo === '50' || nameVideo === 50) {
            this.time.delayedCall(videoTime - hideSceneTime, () => {
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
