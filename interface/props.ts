import { TMainButtonAlias } from '@interface/alias';

export interface IAtomsButtonMainProps {
  type: TMainButtonAlias,
  text: string,
  attrDisabled: boolean,
  onClickFunction: () => void,
}

export interface IAtomsButtonSubProps {
  text: string,
  onClickFunction: () => void,
}

export interface IMoleculesNavigatorGnbProps {
  buttonText: string,
  buttonClickFunction: () => void,
}
