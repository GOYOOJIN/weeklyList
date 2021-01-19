export class Block{
    constructor(width, height, x, y){
        this.width = widht;
        this.height = height;
        this.x = x;
        this.y = y;
        this.maxX = width + x;
        this.maxY = height + y;
    }

    draw(ctx){
        const xGap = 100;
        const yGap = 30;

        ctx.fillStyle = "#00ff00";
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
    }

}