import { TMainButtonAlias } from '@interface/alias';

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
