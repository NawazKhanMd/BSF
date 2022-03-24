export type TextFieldProps = {
  control?: any;
  onChangeEvent?: any;
  errors?: any;
  name: string;
  label?: string;
  type?: string;
  placeHolder?: string;
};

export type ActionType = string;

export type Action = {
  type: ActionType;
  payload?: any;
};
