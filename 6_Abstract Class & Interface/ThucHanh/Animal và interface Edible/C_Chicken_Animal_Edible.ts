import {Ab_Animal} from "./Ab_Animal";
import {In_Edible} from "./In_Edible";

export class C_Chicken_Animal_Edible extends Ab_Animal implements In_Edible{
    hoToEat(): string {
        return "Chicken: cluck-cluck!";
    }

    makeSound(): string {
        return "Could be fried";
    }

}