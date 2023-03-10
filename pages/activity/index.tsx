import { fetchers } from "@/api/fetchers";
import { ActivityCard } from "@/components/activity/ActivityCard";
import { ActivityCardsContainer } from "@/components/activity/ActivityCardsContainer";
import ActivityForm from "@/components/activity/ActivityForm";
import { Base } from "@/Temp/Base/Base";
import { Activity } from "@/types/activity";
import { useEffect, useState } from "react";


export default function ActivityIndex() {

    const [activities, setActivities] = useState([] as Activity[]);

    useEffect(() => {
      fetchers.activityFetcher.getAll().then(setActivities);
    }, []);

    return (
        <Base>
            <div>
                <ActivityCardsContainer activities={activities}/>
            </div>
        </Base>
    )
}