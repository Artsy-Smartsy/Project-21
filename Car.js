class Car{
   constructor(speed){
        this.y = height-random([150,250,350,950,1050,1150,1750,1850,1950]);
        this.x = random([100,210,320,440,550,660,770,880,990,1100,1210]);
        this.spt = createSprite(this.x,this.y);
        this.spt.shapeColor = "blue";
        this.spt.scale=0.6;

        if(this.y==height-250 || this.y==height-1050 || this.y==height-1850)
        {
            speed=-speed;
        }
        this.spt.velocityX = speed;
    }
   
}


