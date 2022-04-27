export  class PTB2 {
    x:number;
    y:number;
    z:number;
    constructor(x:number, y:number, z:number) {
        this.x=x;
        this.y=y;
        this.z=z;
    }
    get_x(){
        return this.x
    }
    get_y(){
        return this.y
    }
    get_z(){
        return this.z
    }

    getDiscriminant(){
        return this.y*this.y-4*this.x*this.z;
    }

    show(){
        if(this.getDiscriminant()>0){
            let x1=(-this.y+Math.sqrt(this.getDiscriminant()))/(2*this.x)
            let x2=(-this.y-Math.sqrt(this.getDiscriminant()))/(2*this.x)
            console.log("x1= "+x1, " x2 = "+x2)

        }else if(this.getDiscriminant()==0){
            let x=-this.y/(2*this.x)
            console.log(x)

        }else {
            console.log("vo nghiem")
        }
    }



}