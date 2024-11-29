import GameScene from '@/scenes/GameScenes';
import Phaser from 'phaser';
import { useEffect } from 'react';

const GameContainer = () => {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      scale: {
        mode: Phaser.Scale.FIT, // Chế độ điều chỉnh kích thước
        width: 580,
        height: 1024,
        autoCenter: Phaser.Scale.CENTER_BOTH
      },
      scene: [GameScene],
      parent: 'game-container',
    };
    new Phaser.Game(config);
  }, []);

  return <div id="game-container" />;
};

export default GameContainer;
