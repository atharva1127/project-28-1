class Mango{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.mango=Bodies.circle(x,y,r,options);
        this.r=r;
        this.image=loadImage("Images/mango.png");
        World.add(world,this.mango)

    }

    display(){
        var pos=this.mango.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0,this.r,this.r);
        pop();
    }

}