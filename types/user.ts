import { ActivityResult } from "./activity";


export interface User {
    name: string;
    last_name: string;
    username: string;
    email: string;
    password?: string;
    remember_token?: string;
    avatar?: string;
    activityResults?: ActivityResult[];
}