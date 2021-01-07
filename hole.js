class Hole{
    constructor(x,y ,width,height){
        this.body= ellipse(200,200 ,50,50);
        
        stroke(200);
        let c = color(112, 52, 18)
        let greenValue= green(c);
        console.log(greenValue);
        let blueValue= blue(c);
        console.log(blueValue);
        let redValue= red(c);
        console.log(redValue);
        this.body.fill("brown");
        
    }
    display(){
     
    }
}