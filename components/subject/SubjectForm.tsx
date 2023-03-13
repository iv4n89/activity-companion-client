import { fetchers } from "@/api/fetchers";
import { Subject } from "@/types/subject";
import { Button, Col, Container, Input, Row, Text, Textarea } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SubjectCard } from "./SubjectCard";

export const SubjectForm = () => {
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) =>
    fetchers.subjectFetcher
      .create(data)
      .then(() => push({ pathname: "/subject" }));
  const onSubmit2 = (data: any) => console.log(data);

  const [preview, setPreview] = useState({} as Subject);

  const updatePreview = (object: Partial<Subject>) =>
    setPreview((prev) => ({ ...prev, ...object }));

  return (
    <Container
      css={{
        margin: "$20 $10 $10 $36",
      }}
    >
      <Row align="center">
        <Col
          css={{
            p: 0,
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)} style={{ gap: 30 }}>
            <div
              style={{
                marginBottom: "25px",
              }}
            >
              <Input
                underlined
                labelPlaceholder="Name"
                color="secondary"
                clearable
                {...register("name", { required: true })}
                width="100%"
                onChange={(e) => updatePreview({ name: e.target.value })}
              />
            </div>
            <div
              style={{
                marginBottom: "25px",
              }}
            >
              <Input
                underlined
                labelPlaceholder="Image"
                color="secondary"
                clearable
                {...register("image")}
                width="100%"
                onChange={(e) => updatePreview({ image: e.target.value })}
              />
            </div>
            <div style={{
              marginBottom: '25px'
            }}>
              <Textarea
                labelPlaceholder="Description"
                status="secondary"
                width="100%"
                minRows={ 100 }
                { ...register('description') }
              />
            </div>
            <div>
              <Button shadow animated color="secondary" type="submit">
                <Text b color="white" size="$lg">
                  Submit
                </Text>
              </Button>
            </div>
          </form>
        </Col>
        <Col css={{ padding: 50, display: 'flex', justifyContent: 'center' }}>
          <SubjectCard subject={preview} />
        </Col>
      </Row>
    </Container>
  );
};
