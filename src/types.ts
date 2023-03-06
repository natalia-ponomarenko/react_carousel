export interface NumberInput {
  type: 'HANDLE NUMBER INPUT';
  name: string;
  payload: number;
}

export interface CheckboxInput {
  type: 'HANDLE CHECKBOX';
}

export interface State {
  images: string[];
  itemWidth: number;
  frameSize: number;
  step: number;
  animationDuration: number;
  infinite: boolean;
}

export type Action = NumberInput | CheckboxInput;
