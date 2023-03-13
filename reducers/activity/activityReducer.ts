import { Activity } from "@/types/activity";


export type ActivityActionType = 
    | { type: 'Activity - Add', payload: { activity: Activity } }
    | { type: 'Activity - SetAll', payload: { activity: Activity[] } }
    | { type: 'Activity - Update', payload: { id: number, activity: Activity } }
    | { type: 'Activity - Delete', payload: { id: number } }
    | { type: 'Activity - SetCurrentActivity', payload: { activity: Activity } }

export interface ActivityState {
    activities: Activity[];
    currentActivity: Activity;
}

export const ActivityStateInitialState: ActivityState = {
    activities: [] as Activity[],
    currentActivity: {} as Activity
};

export const activityReducer = ( state: ActivityState, action: ActivityActionType ): ActivityState => {

    switch(action.type) {

        case 'Activity - SetAll':
            return {
                ...state,
                activities: action.payload.activity
            }

        case 'Activity - Add':
            return {
                ...state,
                activities: { ...state.activities, ...action.payload.activity }
            }

        case 'Activity - Update':
            return {
                ...state,
                activities: state.activities.map(activity => activity.id === action.payload.id ? action.payload.activity : activity)
            }

        case 'Activity - Delete':
            return {
                ...state,
                activities: state.activities.filter(activity => activity.id !== action.payload.id)
            }

        case 'Activity - SetCurrentActivity':
            return {
                ...state,
                currentActivity: action.payload.activity
            }

        default:
            return state;
    }
}