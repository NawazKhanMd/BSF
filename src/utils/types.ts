export type TextFieldProps = {
  control?: any;
  onChangeEvent?: any;
  errors?: any;
  name: string;
  label?: string;
  type?: string;
  placeHolder?: string;
};
export type ButtonProps = {
  title?: string;
  onPress?: any;
  onLongPress?: any;
  width?: string;
  height?: number;
  bgColor?: string;
  txtColor?: string;
  txtSize?: number;
  txtWeight?: string;
};

export type ActionType = string;

export type Action = {
  type: ActionType;
  payload?: any;
};
export type ListViewProps = {
  current: Array<string>;
  handleRemove: any;
};
