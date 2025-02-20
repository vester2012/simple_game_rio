import { Scene } from 'phaser';
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

export class GameScene extends Scene {
    constructor () {
        super('GameScene');
    }

    create () {
        const centerX = scrmng.getCenterX();
        const centerY = scrmng.getCenterY();

        const spin_mig = this.sound.add('spin_mig');
        const spin_mig_win = this.sound.add('spin_mig_win');

        this.add.image(centerX, centerY, 'back').setOrigin(0.5, 0.5).setScale(3);
        this.add.spine(centerX, 2166, 'background_base_SPO', 'live', true).setScale(2);

        const girlAnim = this.add.spine(centerX + 10, centerY + 100, 'intro_SPO', 'intro', true).setScale(0.75);

        const txtImage = this.add.image(centerX, centerY + 800, 'start').setOrigin(0.5, 0.5).setScale(0.75);

        const videoName = getVideo(videoDistrib);

        effects.animationText(this, txtImage, centerY + 800, centerY + 780);

        this.input.keyboard.on('keydown-SPACE', () => {
            this.input.keyboard.off('keydown-SPACE');

            this.videoName = getVideo(videoDistrib);

            if (videoName == '50') {
                spin_mig_win.play();
            }
            else {
                spin_mig.play();
            }

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
                    this.scene.start('SlotScene', {videoName: videoName});
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
