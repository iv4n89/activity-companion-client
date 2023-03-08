import { Activity } from "./activity";


export interface Subject {
    name: string;
    activities?: Activity[];
}