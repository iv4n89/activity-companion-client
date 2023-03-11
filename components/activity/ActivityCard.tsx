import { fetchers } from "@/api/fetchers";
import { Activity } from "@/types/activity";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ActivityPart } from "./ActivityPart";

type Props = {
    activity: Activity;
}

export const ActivityCard = ({activity}: Props) => {

  const { push } = useRouter();

  const routeToConcreteActivity = ({ id }: Activity) => {
    push({
      pathname: `/activity/${ id }`
    });
  }

  return (
    <>
      <Card isPressable onClick={() => routeToConcreteActivity(activity)}>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={ "https://hoseco.com.au/wp-content/uploads/2018/03/Light-Blue-Box.jpg" }
            objectFit="cover"
            width="100%"
            height={140}
            alt={activity.name}
          />
        </Card.Body>
        <Card.Footer css={{ justifyItems: 'flex-start' }}>
          <Row wrap="wrap" justify="space-between" align="center">
            <Text b>{ activity.name }</Text>
            <Text css={{ color: '$accents7', fontWeight: '$semibold', fontSize: '$sm' }}>
              { activity.subject?.name }
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
};
