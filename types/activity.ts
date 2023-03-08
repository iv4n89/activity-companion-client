import { Subject } from "./subject";
import { User } from "./user";


export interface Activity {
    name: string;
    title: string;
    content?: string;
    type?: ActivityType;
    subject?: Subject;
    results?: ActivityResult[];
}

export interface ActivityType {
    name: string;
    activities?: Activity[];
}

export interface ActivityResult {
    activity: Activity;
    user: User;
    calification?: number;
}