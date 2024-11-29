import Phaser from "phaser";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }

  preload() {
    // Tải background và cây
    if (this.isMobileDevice()) {
      this.load.image("background", "/assets/images/background.png");
    } else {
      this.load.image("background", "/assets/images/background.png");
    }
    
    this.load.image("tree", "/assets/images/tree.png");
  }

  create() {
    const { width, height } = this.scale; // Lấy kích thước màn hình

    // Thêm background và làm đầy toàn màn hình
    this.background = this.add
      .image(width / 2, height / 2, "background") // Đặt background giữa màn hình
      .setOrigin(0.5) // Đặt tâm ảnh
      .setDisplaySize(width, height); // Căng ảnh ra toàn màn hình

    // Thêm cây
    this.tree = this.add
      .sprite(width / 2, height - 150, "tree")
      .setOrigin(0.5, 1)
      .setScale(0.6);

    this.tree.setInteractive();
    this.tree.on('pointerdown', () => {
      console.log("Cây được click");
    });

    // Căn chỉnh khi thay đổi kích thước màn hình
    this.scale.on("resize", this.resizeBackground, this);
    this.resizeBackground(this.scale.gameSize);
  }

  resizeBackground(gameSize) {
    const { width, height } = gameSize;

    // Điều chỉnh lại background khi màn hình thay đổi
    this.background
      .setPosition(width / 2, height / 2)
      .setDisplaySize(width, height);

    // Điều chỉnh lại vị trí của cây nếu cần
    this.tree.setPosition(width / 2, height - 150);
  }

  // update() {
  //   // Logic cập nhật (nếu có)
  // }

  isMobileDevice() {
    // Kiểm tra xem thiết bị có phải là di động hay không
    return /Mobi|Android/i.test(navigator.userAgent);
  }
}