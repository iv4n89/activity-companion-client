import { fetchers } from "@/api/fetchers";
import { Subject } from "@/types/subject";
import { Grid } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { SubjectCard } from "./SubjectCard";

interface Props {
  subjects: Subject[];
}

export const SubjectContainer = ({ subjects }: Props) => {


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
