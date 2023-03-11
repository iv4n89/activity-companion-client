import { fetchers } from "@/api/fetchers";
import { Activity } from "@/types/activity";
import { Card, Col, Container, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ActivityPart } from "./ActivityPart";
import { plainImageColors } from "../../util/noImageHolders";

interface Props {
  activity: Activity;
}

export const ActivityConcrete = () => {
  const [activity, setActivity] = useState({} as Activity);
  const { query } = useRouter();

  useEffect(() => {
    const activityId = query.id;
    fetchers.activityFetcher.getOne(Number(activityId)).then(setActivity);
  }, [query]);

  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card
        css={{
          gap: "$3",
          width: "400px",
          height: "260px",
          margin: "25px 0",
        }}
      >
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={plainImageColors[0]}
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </Card.Body>
        <Card.Footer isBlurred css={{
            position: 'absolute',
            bgBlur: "#ffffff66",
            borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
            bottom: 0,
            zIndex: 1
        }}>
          <Col>
            <Text size={12} weight="bold">
              {activity.name}
            </Text>
            <Text h3>{activity.title}</Text>
          </Col>
        </Card.Footer>
      </Card>
      {activity.content?.parts.map((part, index) => (
        <ActivityPart part={part} key={index} />
      ))}
    </Container>
  );
};
