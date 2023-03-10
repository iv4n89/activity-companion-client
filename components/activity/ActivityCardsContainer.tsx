import { fetchers } from "@/api/fetchers";
import { Activity } from "@/types/activity";
import { Grid } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { ActivityCard } from "./ActivityCard";

interface Props {
  activities: Activity[];
}

export const ActivityCardsContainer = ({ activities }: Props) => {

  return (
    <Grid.Container gap={2} justify="flex-start">
      {activities.map((activity) => (
        <Grid xs={6} sm={3} key={activity.id}>
          <ActivityCard activity={activity} key={activity.id} />
        </Grid>
      ))}
    </Grid.Container>
  );
};
