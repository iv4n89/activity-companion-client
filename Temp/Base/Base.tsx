import { Container } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";
import { ActivityBar } from "../LeftBar/ActivityBar";
import { SubjectBar } from "../LeftBar/SubjectBar";
import { Topbar } from "../TopBar/Topbar";

type LeftBarType = "subject" | "activity" | "profile";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const bars = {
  subject: <SubjectBar />,
  activity: <ActivityBar />,
  profile: <></>,
};

export const Base = ({ children }: Props) => {
  const { pathname } = useRouter();

  const getLeftBar = () => {
    const barType = pathname.substring(1);

    return bars[barType as LeftBarType];
  };

  return (
    <>
      <Topbar />
      <div style={{
        display: 'flex'
      }}>
        {getLeftBar()}
        <Container css={{ margin: "2vh 2vw 2vh 250px" }}>{children}</Container>
      </div>
    </>
  );
};
