class ScreenManager {
    constructor() {
        scrmng = this;
        
        this.resolutionX = 3645;
        this.resolutionY = 2160;
    }
    
    getCenterX() {
        return this.resolutionX / 2;
    }
    
    getCenterY() {
        return this.resolutionY / 2;
    }
}

let scrmng = null;

export default ScreenManager;
export { scrmng }