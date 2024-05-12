import {
  ISelectImageQuestionDto,
  ISelectWordQuestionDto,
} from '@interface/dto';
import {
  TAnswerToggleAlias,
  TMainButtonAlias,
} from '@interface/alias';

// components
export interface IAtomsButtonBasicProps {
  type: TMainButtonAlias,
  text: string,
  attrDisabled: boolean,
  onClickFunction: () => void,
}

export interface IAtomsButtonPrimaryProps {
  text: string,
  onClickFunction: () => void,
}

export interface IMoleculesNavigatorGnbProps {
  logoUrl: string,
  buttonText: string,
  logoClickFunction: () => void,
  buttonClickFunction: () => void,
}

// containers
export interface IMiniItemSelectWordProps {
  step: number,
  answerToggle: TAnswerToggleAlias,
  questionList: ISelectWordQuestionDto[],
  onDisplayIcon: (answerToggle: TAnswerToggleAlias) => string,
  onClickAnswer: (rightId: number, selectId: number) => void,
}

export interface IMiniItemSelectImageProps {
  step: number,
  answerToggle: TAnswerToggleAlias,
  questionList: ISelectImageQuestionDto[],
  onDisplayIcon: (answerToggle: TAnswerToggleAlias) => string,
  onClickAnswer: (rightId: number, selectId: number) => void,
}

export interface IMiniItemScoreCardProps {
  score: number,
  passCount: number,
  failCount: number,
}
