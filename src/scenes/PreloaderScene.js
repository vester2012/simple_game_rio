import { Scene } from 'phaser';
import {scrmng} from "../core/scrmng.js";

export class PreloaderScene extends Scene {
    constructor () {
        super('PreloaderScene');
    }

    init () {
        //  A simple progress bar. This is the outline of the bar.
        this.add.rectangle(scrmng.getCenterX(), scrmng.getCenterY(), 468, 32).setStrokeStyle(1, 0xffffff);

        //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        const bar = this.add.rectangle(scrmng.getCenterX()-230, scrmng.getCenterY(), 4, 28, 0xffffff);

        //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        this.load.on('progress', (progress) => {
            //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
            bar.width = 4 + (460 * progress);
        });
    }

    preload () {
        //  Load the assets for the game - Replace with your own assets
        this.load.setPath('./src/assets/');

        this.load.image('back', 'back.jpg');
        this.load.image('start', 'start.webp');
        this.load.image('finish', 'finish.webp');

        this.load.spine('background_base_SPO', 'background_base.json', 'background_base.txt');
        this.load.spine('intro_SPO', 'intro.json', 'intro.txt');
        this.load.spine('booster_SPO', 'booster.json', 'booster.txt');

        this.load.audio('spin_mig', [ 'spin_mig.mp3' ]);
        this.load.audio('spin_mig_win', [ 'spin_mig_win.mp3' ]);
        this.load.audio('spin_mig_congratulation', [ 'spin_mig_congratulation.mp3' ]);

        this.load.setPath('./src/assets/video/');

        this.load.video('belatra_video', 'belatra-intro.webm');
        this.load.video('video_main_page', 'video-main-page.webm');

        for (let i= 0; i < 61; i++) {
            this.load.video((i > 9) ? i : '0' + i, i + '.webm');
        }
    }

    create () {
        this.input.keyboard.on('keydown-SPACE', () => {
            this.input.keyboard.off('keydown-SPACE');

            if (!this.scale.isFullscreen) {
                this.scale.startFullscreen(); // Включить полноэкранный режим
            }

            this.scene.start('VideoScene');
        });

        //this.scene.start('VideoScene');
    }
}
