import { fetchers } from '@/api/fetchers';
import { Activity } from '@/types/activity';
import React, { useEffect, useState } from 'react'
import { ActivityCard } from './ActivityCard';

export const ActivityCardsContainer = () => {
    const [activities, setActivities] = useState([] as Activity[]);

    useEffect(() => {
      fetchers.activityFetcher.getAll().then(setActivities);
    }, []);


  return !!activities && (
    <div>
        {
            activities.map(activity => (<ActivityCard activity={activity} key={activity.id} />))
        }
    </div>
  ) || <div>Loading</div>
}
