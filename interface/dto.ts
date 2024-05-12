import {
  IImageModel,
  IWordModel,
} from '@interface/model';
import { TQuestionTypeAlias } from '@interface/alias';

export interface ISelectWordQuestionDto {
  id: number,
  type: TQuestionTypeAlias,
  question: string,
  picture: string,
  answerId: number,
  answerList: IWordModel[],
}

export interface ISelectImageQuestionDto {
  id: number,
  type: TQuestionTypeAlias,
  question: string,
  word: string,
  answerId: number,
  answerList: IImageModel[],
}
