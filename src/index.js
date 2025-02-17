import Phaser from 'phaser';
import { GameScene } from './scenes/GameScene.js';
import { VideoScene } from './scenes/VideoScene.js';
import { PreloaderScene } from './scenes/PreloaderScene.js';
import {SlotScene} from "./scenes/SlotScene.js";
import ScreenManager, {scrmng} from "./core/scrmng.js";

new ScreenManager();

// Find out more information about the GameScene Config at:
// https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: scrmng.resolutionX,
    height: scrmng.resolutionY,
    parent: 'phaser',
    backgroundColor: '#028af8',
    scene: [
        PreloaderScene,
        VideoScene,
        GameScene,
        SlotScene
    ],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    plugins: {
        scene: [
            {key: 'SpinePlugin', plugin: window.SpinePlugin, mapping: 'spine'}
        ]
    }
};

const game = new Phaser.Game(config);

// Устанавливаем ширину и высоту контейнера и канваса
const phaserElement = document.getElementById('phaser');

// Функция для принудительной установки ширины и высоты
const enforceDimensions = () => {
    // Для контейнера
    phaserElement.style.width = '100%';
    phaserElement.style.height = '100%';

    // Для канваса
    const canvas = phaserElement.querySelector('canvas');
    if (canvas) {
        canvas.style.width = '100%';
        canvas.style.height = '100%';
    }
};

// Используем MutationObserver для отслеживания изменений стилей
const observer = new MutationObserver(() => {
    enforceDimensions(); // Принудительно устанавливаем размеры
});

// Настраиваем наблюдение за изменениями стилей контейнера
observer.observe(phaserElement, { attributes: true, attributeFilter: ['style'] });

// Сразу задаём размеры после запуска игры
game.events.once('ready', enforceDimensions);
