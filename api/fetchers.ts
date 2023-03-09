import { Activity, ActivityType } from "@/types/activity";
import { Subject } from "@/types/subject";
import { BaseFetcher } from "./BaseFetcher";

const baseUrls = {
    subject: '/subject',
    activity: '/activity',
    activityType: '/activityType'
}

export const fetchers = {
    subjectFetcher: new BaseFetcher<Subject>(baseUrls.subject),
    activityFetcher: new BaseFetcher<Activity>(baseUrls.activity),
    activityTypeFetcher: new BaseFetcher<ActivityType>(baseUrls.activityType)
};