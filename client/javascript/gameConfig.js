import LoginScene from './loginScene.js';
import GameScene from './gameScene.js';

export default class GameConfig {

    getConfig() {
        return {
            type: Phaser.AUTO,
            parent: 'phaser-canvas',
            url: null,
            version: "0.0.2",
            fps: 30,
            width: 1200,
            height: 600,

            scale: {
                autoCenter: Phaser.Scale.FIT,
            },

            physics: {
                default: 'arcade',
                arcade: {
                    debug: false,
                    gravity: {x: 0, y: 0}
                }
            },

            scene: [
                LoginScene,
                GameScene
            ],
        };
    }
}