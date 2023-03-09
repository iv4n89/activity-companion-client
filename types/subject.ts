import { Activity } from "./activity";


export interface Subject {
    id: number;
    name: string;
    description: string;
    activities?: Activity[];
}