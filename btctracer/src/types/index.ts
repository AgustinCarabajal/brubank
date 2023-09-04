export type CoinType = {
  [name: string]: number;
};

export type CoinCardProps = {
  coin: CoinType;
};

export enum documentType {
  DNI = "dni",
}

export type FormData = {
  dniType: documentType;
  dni: string;
  email: string;
  name: string;
  lastName: string;
  date: string;
  dniFront: string;
  dniBack: string;
  password: string;
  confirm: string;
};

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

export type FileType = {
  dniFront: string;
  dniBack: string;
};

export interface FileInputProps {
  title?: string;
  subtitle?: string;
  buttonLabel: string;
  inputName: string;
  updateForm: (fields: Partial<FileType>) => void;
}

export type DocumentType = {
  dniType: documentType;
  dni: string;
};

export type DocumentInputProps = DocumentType & {
  updateForm: (fields: Partial<DocumentType>) => void;
};

export type DateType = {
  date: string;
};

export type DateInputProps = DateType & {
  updateForm: (fields: Partial<DateType>) => void;
};

export type RequestData = {
  dniType: documentType;
  dni: string;
  name: string;
  lastName: string;
  date: string;
  dniFront: string;
  dniBack: string;
  password: string;
};

export type UserType = {
  dniType: documentType;
  dni: string;
  email: string;
  name: string;
  lastName: string;
  date: string;
};

export type UserFormProps = UserType & {
  updateForm: (fields: Partial<UserType>) => void;
};

export type PasswordType = {
  password: string;
  confirm: string;
};

export type PasswordFormProps = PasswordType & {
  updateForm: (fields: Partial<PasswordType>) => void;
};

export type DocumentFileType = {
  dniFront: string;
  dniBack: string;
};

export type DocumentFormProps = DocumentFileType & {
  updateForm: (fields: Partial<DocumentFileType>) => void;
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};

export interface ErrorAlertProps {
  message: string;
}
