import { IQuestion } from '@interface/data';

export const QUESTION_LIST: IQuestion[] = [
  {
    id: 0,
    type: 'picture-example',
    question: '그림에 맞는 글자를 찾으세요.',
    picture: '/icons/ic-word-apple.svg',
    answerId: 0,
    answerList: [
      {
        id: 0,
        text: '사과',
      },
      {
        id: 1,
        text: '바나나',
      },
    ],
  },
  {
    id: 1,
    type: 'picture-example',
    question: '그림에 맞는 글자를 찾으세요.',
    picture: '/icons/ic-word-apple.svg',
    answerId: 0,
    answerList: [
      {
        id: 0,
        text: '사과',
      },
      {
        id: 1,
        text: '바나나',
      },
    ],
  },
];
