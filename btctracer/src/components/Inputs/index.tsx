interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value?: string;
  onChange?: () => void;
  placeholder?: string;
  required?: boolean;
}

export const Input = (props: InputProps) => {
  const { label } = props;
  return (
    <div className="inputWrapper">
      <label className="label">{label}</label>
      <input className="input" {...props} />
    </div>
  );
};

export const DocumentInput = () => {
  return (
    <div className="documentContainer">
      <Input className="documentTypeInput" label="Tipo" />
      <Input label="Documento" />
    </div>
  );
};
