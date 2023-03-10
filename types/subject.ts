import { Activity } from "./activity";


export interface Subject {
    id: number;
    name: string;
    description: string;
    image?: string;
    activities?: Activity[];
}