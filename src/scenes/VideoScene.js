import { Scene } from 'phaser';
import {scrmng} from "../core/scrmng.js";

export class VideoScene extends Scene {

    constructor () {
        super('VideoScene');
    }

    create() {
        // Центр экрана
        const centerX = scrmng.getCenterX();
        const centerY = scrmng.getCenterY();

        // Создаем массив видео
        const videos = [
            this.add.video(centerX, centerY, 'belatra_video').setOrigin(0.5, 0.5).setVisible(false),
            this.add.video(centerX, centerY, 'video_main_page').setOrigin(0.5, 0.5).setVisible(false)
        ];

        this.videos = videos;

        // Индекс текущего видео
        let currentVideoIndex = 0;

        // Функция для воспроизведения видео по очереди
        const playNextVideo = () => {
            // Скрываем все видео
            videos.forEach(video => video.setVisible(false));

            if (currentVideoIndex > 1) currentVideoIndex = 0;

            // Получаем текущее видео
            const currentVideo = videos[currentVideoIndex];
            currentVideo.setVisible(true); // Делаем текущее видео видимым
            currentVideo.play(); // Запускаем текущее видео

            // Событие завершения текущего видео
            currentVideo.on('complete', () => {
                currentVideo.off('complete');
                currentVideoIndex++;
                playNextVideo();
            });
        };

        // Запускаем первое видео
        playNextVideo();

        // Добавляем обработчик перехода по нажатию клавиши
        this.input.keyboard.on('keydown', () => {
            // Останавливаем все видео
            videos.forEach(video => video.stop());

            if (!this.scale.isFullscreen) {
                this.scale.startFullscreen(); // Включить полноэкранный режим
            } else {
                this.scale.stopFullscreen(); // Выйти из полноэкранного режима
            }

            this.scene.start('GameScene');
        });
    }
}
