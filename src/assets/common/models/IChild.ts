import {IPresent} from "./IPresent";

export interface IChild {
    childName: string,
    age: number,
    id: number
    presents: IPresent[];
}