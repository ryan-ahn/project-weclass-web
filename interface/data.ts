export interface IQuestion {
  id: number,
  type: string,
  question: string,
  picture: string,
  answerId: number,
  answerList: IAnswer[],
}

export interface IAnswer {
  id: number,
  text: string,
}
