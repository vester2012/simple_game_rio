import { Scene } from 'phaser';
import {scrmng} from "../core/scrmng.js";

export class GameScene extends Scene {
    constructor () {
        super('GameScene');
    }

    create () {
        const centerX = scrmng.getCenterX();
        const centerY = scrmng.getCenterY();

        this.add.image(centerX, centerY, 'back').setOrigin(0.5, 0.5).setScale(3);
        this.add.spine(centerX, 2166, 'background_base_SPO', 'live', true).setScale(2);

        const girlAnim = this.add.spine(centerX + 10, centerY + 100, 'intro_SPO', 'intro', true).setScale(0.75);

        this.createText();

        this.input.keyboard.on('keydown-SPACE', () => {

            /*if (!this.scale.isFullscreen) {
                this.scale.startFullscreen(); // Включить полноэкранный режим
            } else {
                this.scale.stopFullscreen(); // Выйти из полноэкранного режима
            }*/

            this.timer.destroy();
            this.timer = null;

            this.add.spine(centerX + 10, centerY + 100, 'booster_SPO', 'booster_hs').setScale(1.3);

            this.tweens.add({
                targets: girlAnim,
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

            //this.scene.start('SlotScene');

        });

        this.timer = this.time.delayedCall(60000 * 3, () => {
            this.timer.destroy();
            this.timer = null;

            this.scene.start('MainMenu');
        });

        this.cameras.main.fadeIn(300, 0, 0, 0);
    }

    createText () {
        const centerX = scrmng.getCenterX();
        const centerY = scrmng.getCenterY();

        // Добавляем текст на сцену
        const text = this.add.text(centerX, centerY + 240, 'GET YOUR FORTUNE\nTEST YOUR LUCK!', {
            font: '40px Arial',
            fill: '#ffffff', // Это значение заменится градиентом
            align: 'center'
        });

        // Получаем контекст Canvas 2D
        const canvas = text.canvas;
        const context = canvas.getContext('2d');

        // Создаем градиент
        const gradient = context.createLinearGradient(0, 0, 0, text.height);
        gradient.addColorStop(0, '#FFD700'); // Светло-золотой
        gradient.addColorStop(1, '#FFA500'); // Золотой

        // Устанавливаем градиент в текст
        text.setFill(gradient);
        text.setOrigin(0.5, 0.5);
    }
}
