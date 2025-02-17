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


        this.load.setPath('./src/assets/video/');

        this.load.video('belatra_video', 'belatra-intro.webm');
        this.load.video('video_main_page', 'video-main-page.webm');

        this.load.video('00', '0.webm');
        this.load.video('01', '1.webm');
        this.load.video('02', '2.webm');
        this.load.video('03', '3.webm');
        this.load.video('04', '4.webm');
        this.load.video('05', '5.webm');
        this.load.video('06', '6.webm');
        this.load.video('07', '7.webm');
        this.load.video('08', '8.webm');
        this.load.video('09', '9.webm');
        this.load.video('10', '10.webm');
        this.load.video('11', '11.webm');
        this.load.video('12', '12.webm');
        this.load.video('13', '13.webm');
        this.load.video('14', '14.webm');
        this.load.video('15', '15.webm');
        this.load.video('16', '16.webm');
        this.load.video('17', '17.webm');
        this.load.video('18', '18.webm');
        this.load.video('19', '19.webm');
        this.load.video('20', '20.webm');
        this.load.video('21', '21.webm');
        this.load.video('22', '22.webm');
        this.load.video('23', '23.webm');
        this.load.video('24', '24.webm');
        this.load.video('25', '25.webm');
        this.load.video('26', '26.webm');
        this.load.video('27', '27.webm');
        this.load.video('28', '28.webm');
        this.load.video('29', '29.webm');
        this.load.video('30', '30.webm');
        this.load.video('31', '31.webm');
        this.load.video('32', '32.webm');
        this.load.video('33', '33.webm');
        this.load.video('34', '34.webm');
        this.load.video('35', '35.webm');
        this.load.video('36', '36.webm');
        this.load.video('37', '37.webm');
        this.load.video('38', '38.webm');
        this.load.video('39', '39.webm');
        this.load.video('40', '40.webm');
        this.load.video('41', '41.webm');
        this.load.video('42', '42.webm');
        this.load.video('43', '43.webm');
        this.load.video('44', '44.webm');
        this.load.video('45', '45.webm');
        this.load.video('46', '46.webm');
        this.load.video('47', '47.webm');
        this.load.video('48', '48.webm');
        this.load.video('49', '49.webm');
        this.load.video('50', '50.webm');
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
