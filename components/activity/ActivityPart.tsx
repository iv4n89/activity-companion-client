import { ContentPart } from "@/types/activity";
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

type Props = {
  part: ContentPart;
};

export const ActivityPart = ({ part }: Props) => {

    const [textSplitted, settextSplitted] = useState([] as string[]);
    const [correct, setCorrect] = useState('');
    const [possibles, setPossibles] = useState([] as string[]);
    const [input, setInput] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);

    useEffect(() => {
      settextSplitted(divideText(part.text));
      setCorrect(part.correct);
      setPossibles(part.possibles);
    }, [part])

    useEffect(() => {
        checkAnswer();
    }, [input]);

    const checkAnswer = () => {
        setIsCorrect(input.length >= correct.length && input === correct);
    }
    

    const divideText = (text: string) => text.split('__');

  return (
    <div>
      <Typography>
        <span>{textSplitted[0]}</span>
        <input type="text" onChange={e => setInput(e.target.value)} />
        <span>{ textSplitted[1] }</span>
        <span style={{ color: 'green' }} hidden={!isCorrect || input.length < correct.length}> V </span>
        <span style={{ color: 'red' }} hidden={isCorrect || input.length < correct.length}> X </span>
        </Typography>
    </div>
  );
};
