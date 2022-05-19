import {Tennis} from "./Tennis";
import {Player} from "./Player";

let Player1=new Player("phu",5)
let Player2=new Player("p",4)

let tennis=new Tennis(Player1,Player2)
// console.log(tennis);
console.log(tennis.CompareToScore());