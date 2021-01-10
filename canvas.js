import {
    Block
} from "./block.js";

class Sketch {
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas);

        window.addEventListener('resize',this.resize.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageWidth * 2;
        this.ctx.scale(2,2);
    }

    animate(t){
        window.requestAnimationFrame(this.animate.bind(this));
        
    }

}