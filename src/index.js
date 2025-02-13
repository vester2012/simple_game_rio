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
