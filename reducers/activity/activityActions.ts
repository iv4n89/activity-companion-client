import { fetchers } from "@/api/fetchers";
import { Activity } from "@/types/activity"
import { Dispatch } from "react"
import { ActivityActionType, ActivityState } from "./activityReducer"


export class ActivityActions implements ActivityActions {
    constructor(
        private readonly dispatch: Dispatch<ActivityActionType>,
        private readonly state: ActivityState
    ) {}

    public setAllActivities(activity: Activity[]): void {
        this.dispatch({ type: 'Activity - SetAll', payload: { activity } });
    }

    public addActivity(activity: Activity): void {
        this.dispatch({ type: 'Activity - Add', payload: { activity } });
    }

    public async updateActivity(id: number, activity: Activity): Promise<Activity> {
        const updatedActivity = await fetchers.activityFetcher.updateOne(id, activity);
        this.dispatch({ type: 'Activity - Update', payload: { id, activity: updatedActivity } });
        return updatedActivity;
    }

    public async deleteActivity (id: number): Promise<void> {
        await fetchers.activityFetcher.deleteOne(id);
        this.dispatch({ type: 'Activity - Delete', payload: { id } });
    }

    public setCurrentActivity(activity: Activity): void {
        this.dispatch({ type: 'Activity - SetCurrentActivity', payload: { activity } })
    }

    public getAllActivities(): Activity[] {
        return this.state.activities;
    }

    public getOneActivity(id: number): Activity {
        return this.state.activities.find(activity => activity.id === id)!;
    }

    public getCurrentActivity(): Activity {
        return this.state.currentActivity;
    }

    public getMethods() {
        return {
            setAllActivities: this.setAllActivities,
            addActivity: this.addActivity,
            updateActivity: this.updateActivity,
            deleteActivity: this.deleteActivity,
            setCurrentActivity: this.setCurrentActivity,
            getAllActivities: this.getAllActivities,
            getOneActivity: this.getOneActivity,
            getCurrentActivity: this.getCurrentActivity,
        }
    }
}