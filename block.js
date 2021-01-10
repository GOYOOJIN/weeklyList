export class Block{
    constructor(width, height, x, y){
        this.width = widht;
        this.height = height;
        this.x = x;
        this.y = y;
        this.maxX = width + x;
        this.maxY = height + y;
    }
}