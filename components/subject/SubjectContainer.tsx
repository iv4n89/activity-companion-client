import { fetchers } from "@/api/fetchers";
import { Subject } from "@/types/subject";
import { Grid } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { SubjectCard } from "./SubjectCard";

export const SubjectContainer = () => {
  const [subjects, setSubjects] = useState([] as Subject[]);

  useEffect(() => {
    fetchers.subjectFetcher.getAll().then(setSubjects);
  }, []);

  return (
    <Grid.Container gap={2}>
      {subjects.map((subject) => (
        <Grid key={subject.id}>
          <SubjectCard subject={subject} />
        </Grid>
      ))}
    </Grid.Container>
  );
};
