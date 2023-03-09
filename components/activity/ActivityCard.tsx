import { fetchers } from "@/api/fetchers";
import { Activity } from "@/types/activity";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ActivityPart } from "./ActivityPart";

type Props = {
    activity: Activity;
}

export const ActivityCard = ({activity}: Props) => {

  return (
    <div>
      <Card variant="outlined">
        <CardHeader
            title={activity.name}
            subheader={activity.subject?.name}
        />
        <CardContent>
            <>
                <Typography variant="body2" color="text.secondary">
                    { activity.title}
                </Typography>
                {
                    activity.content.parts.map((p, index) => (
                        <ActivityPart part={p} key={index} />
                    ))
                }
            </>
        </CardContent>
      </Card>
      {/* <pre>
        { JSON.stringify(activity.content, null, 2) }
      </pre> */}
    </div>
  );
};
