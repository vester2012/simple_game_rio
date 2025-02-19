class EffectsManager {
    constructor() {
        effects = this;

        this.resolutionX = 3645;
        this.resolutionY = 2160;
    }

    animationText(scene, obj, yS, yF) {

        // Плавное появление логотипа при старте
        obj.setAlpha(0); // Начальная прозрачность
        scene.tweens.add({
            targets: obj,
            alpha: 1, // Полностью видимый логотип
            duration: 300, // Длительность появления
            ease: 'Linear',
        });

        // Эффект плавного покачивания вверх/вниз (левитация)
        scene.tweens.add({
            targets: obj,
            y: { from: yS, to: yF }, // Логотип перемещается немного вверх и вниз
            duration: 4000, // Длительность одного цикла (2 секунды)
            ease: 'Sine.easeInOut', // Плавность движения
            yoyo: true, // Возврат назад
            repeat: -1, // Бесконечное повторение
        });

        // Легкий эффект пульсации (масштабирование)
        scene.tweens.add({
            targets: obj,
            scale: { from: 0.7, to: 0.72 }, // Незначительное увеличение и уменьшение
            duration: 3000, // Длительность одного цикла (1.5 секунды)
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1,
        });
    }
}

let effects = null;

export default EffectsManager;
export { effects }
