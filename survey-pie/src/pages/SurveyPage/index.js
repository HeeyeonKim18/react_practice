import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionBox from '../../components/QuestionBox';

export default function SurveyPage() {
  const params = useParams();

  const questions = [
    {
      title: '질문1입니다.',
      desc: '설명1입니다.',
      type: 'text',
      required: false,
      options: [],
    },
    {
      title: '질문2입니다.',
      desc: '설명2입니다.',
      type: 'text',
      required: false,
      options: [],
    },
  ];

  const step = parseInt(params.step);

  const [answers, setAnswers] = useState([]);

  return (
    <>
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        step={step}
        questionsLength={questions.length}
        answer={answers[step]}
        setAnswer={(newAnswer) => {
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;
            return newAnswers;
          });
        }}
      />
    </>
  );
}
