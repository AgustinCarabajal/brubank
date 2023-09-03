import { useState } from "react";
import { Button } from "..";
import ArrowIcon from "../../assets/up-arrow.svg";
import { BsEyeSlashFill, BsEyeFill, BsFillTrashFill } from "react-icons/bs";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  const [val, setVal] = useState("");

  const normalizedValue = (value: string): string => {
    if (!value) return value;
    const nums = value.replace(/[^\d]/g, "");
    if (nums.length === 2) return `${nums}`;
    if (nums.length === 5) return `${nums.slice(0, 2)}.${nums.slice(2)}`;

    if (nums.length <= 2) return nums;
    if (nums.length <= 5) return `${nums.slice(0, 2)}.${nums.slice(2)}`;
    return `${nums.slice(0, 2)}.${nums.slice(2, 5)}.${nums.slice(5, 8)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(normalizedValue(e.target.value));
  };

  return (
    <div className="documentContainer">
      <Input className="documentTypeInput" value="DNI" disabled label="Tipo" />
      <Input
        className="documentValueInput"
        placeholder="00.000.000"
        label="Documento"
        value={val}
        onChange={handleChange}
        required
        pattern="^(\d{2}\.{1}\d{3}\.\d{3})|(\d{2}\s{1}\d{3}\s\d{3})$"
      />
    </div>
  );
};

export const DateInput = () => {
  const [val, setVal] = useState("");

  const normalizedValue = (value: string): string => {
    if (!value) return value;
    const nums = value.replace(/[^\d]/g, "");
    if (nums.length === 2) return `${nums}`;
    if (nums.length === 4) return `${nums.slice(0, 2)}/${nums.slice(2)}`;

    if (nums.length <= 2) return nums;
    if (nums.length <= 4) return `${nums.slice(0, 2)}/${nums.slice(2)}`;
    return `${nums.slice(0, 2)}/${nums.slice(2, 4)}/${nums.slice(4, 8)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(normalizedValue(e.target.value));
  };

  return (
    <Input
      placeholder="24/04/1945"
      value={val}
      onChange={handleChange}
      required
      label="Fecha de nacimiento"
      pattern="^(\d{2}\/{1}\d{2}\/\d{4})$"
    />
  );
};

interface FileInputProps {
  title?: string;
  subtitle?: string;
  buttonLabel: string;
  inputName: string;
}

export const FileInput = ({
  title,
  subtitle,
  buttonLabel,
  inputName,
}: FileInputProps) => {
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState("No hay archivos agregados");
  const [imgLoading, setImgLoading] = useState(false);

  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleClick = () => {
    const element = document.querySelector(
      `input[name='${inputName}']`
    ) as HTMLElement;
    element.click();
  };

  const handleChange = ({
    target: { files },
  }: React.ChangeEvent<HTMLInputElement>) => {
    files?.[0] && setFileName(files[0].name);
    if (files) {
      setImage(URL.createObjectURL(files[0]));
    }
  };

  const handleDelete = () => {
    setImage(null);
    setFileName("No hay archivos agregados");
    setConfirmDelete(false);
  };

  return (
    <div>
      {image ? (
        <div className="imageContainer">
          {imgLoading ? (
            <div className="loadingContainer">
              <span>Subiendo...</span>
            </div>
          ) : (
            <>
              <img
                loading="lazy"
                style={
                  confirmDelete
                    ? {
                        filter: "brightness(40%)",
                      }
                    : {}
                }
                src={image}
                onLoadStart={() => setImgLoading(true)}
                onLoad={() => setImgLoading(false)}
                alt={fileName}
              />

              {confirmDelete ? (
                <div className="deleteWrapper">
                  <span>¿Seguro que querés borrar?</span>
                  <div>
                    <Button
                      onClick={() => setConfirmDelete(false)}
                      link
                      style={{ color: "#fff" }}
                      label="Cancelar"
                    />
                    <Button
                      onClick={handleDelete}
                      link
                      style={{ color: "#FF3636" }}
                      label="Borrar"
                    />
                  </div>
                </div>
              ) : (
                <div
                  className="deleteIcon"
                  onClick={() => setConfirmDelete(true)}
                >
                  {<BsFillTrashFill />}
                </div>
              )}
            </>
          )}
        </div>
      ) : (
        <div className="fileContainer">
          <img width={42} height={42} src={ArrowIcon} alt="file upload" />
          {title && <h1>{title}</h1>}
          {subtitle && <h3>{subtitle}</h3>}
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            hidden
            name={inputName}
            required
          />
          <Button
            type="button"
            style={{ width: "86px", background: "#000" }}
            label={buttonLabel}
            onClick={handleClick}
          />
        </div>
      )}
    </div>
  );
};

export const PasswordInput = (props: InputProps) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="passWrapper">
      <Input {...props} type={showPass ? "text" : "password"} />
      <div className="passIcon" onClick={() => setShowPass((prev) => !prev)}>
        {showPass ? <BsEyeFill /> : <BsEyeSlashFill />}
      </div>
    </div>
  );
};
