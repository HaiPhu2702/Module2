
export class Instructor {
    name:string;
    role:string;

    // @ts-ignore
    constructor( {name, role = "assistant"}={}) {
        this.role = role;
        this.name = name;
    }

    // Instance method
    renderDetails() {
        console.log(`${this.name} - ${this.role}`);
    }

    static helloword(){
        console.log("hhffdhfgfgfdsh")
    }
    static canTeach(instructor:Instructor){
      if(instructor.role==="classroom")
          return true;
        else
            return false;
    }

}