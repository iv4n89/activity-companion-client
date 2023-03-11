import { Subject } from "./subject";
import { User } from "./user";


export interface Activity {
    id: number;
    name: string;
    title: string;
    image?: string;
    content: ActivityContent;
    type?: ActivityType;
    subject?: Subject;
    results?: ActivityResult[];
}

export interface ActivityType {
    id: number;
    name: string;
    activities?: Activity[];
}

export interface ActivityResult {
    id: number;
    activity: Activity;
    user: User;
    calification?: number;
}

export interface ActivityContent {
    parts: ContentPart[];
    points: number;
}

export interface ContentPart {
    text: string;
    possibles: string[];
    correct: string;
}