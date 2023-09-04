import { useState } from "react";
import { Button } from "..";
import ArrowIcon from "../../assets/up-arrow.svg";
import { BsEyeSlashFill, BsEyeFill, BsFillTrashFill } from "react-icons/bs";
import { documentType } from "../../pages";

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

type DocumentType = {
  dniType: documentType;
  dni: string;
};

type DocumentInputProps = DocumentType & {
  updateForm: (fields: Partial<DocumentType>) => void;
};

export const DocumentInput = ({
  dni,
  dniType,
  updateForm,
}: DocumentInputProps) => {
  const [val, setVal] = useState(dni);

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
    updateForm({ dni: normalizedValue(e.target.value) });
  };

  return (
    <div className="documentContainer">
      <Input
        type="text"
        className="documentTypeInput"
        value={dniType.toUpperCase()}
        disabled
        label="Tipo"
      />
      <Input
        type="text"
        autoFocus
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

type DateType = {
  date: string;
};
type DateInputProps = DateType & {
  updateForm: (fields: Partial<DateType>) => void;
};

export const DateInput = ({ date, updateForm }: DateInputProps) => {
  const [val, setVal] = useState(date);

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
    const normalized = normalizedValue(e.target.value);
    setVal(normalized);
    if (/^(\d{2}\/{1}\d{2}\/{1}\d{4})$/.test(normalized))
      updateForm({
        date: new Date(`
      ${normalized.split("/")[1]}/
      ${normalized.split("/")[0]}/
      ${normalized.split("/")[2]}
      `)
          .toISOString()
          .split("T")[0],
      });
  };

  return (
    <Input
      type="text"
      placeholder="24/04/1945"
      value={val}
      onChange={handleChange}
      required
      label="Fecha de nacimiento"
      pattern="^(\d{2}\/{1}\d{2}\/{1}\d{4})$"
    />
  );
};

type FileType = {
  dniFront: string;
  dniBack: string;
};

interface FileInputProps {
  title?: string;
  subtitle?: string;
  buttonLabel: string;
  inputName: string;
  updateForm: (fields: Partial<FileType>) => void;
}

export const FileInput = ({
  title,
  subtitle,
  buttonLabel,
  inputName,
  updateForm,
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
      updateForm({ [inputName]: files[0] });
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
                      linkVariant
                      style={{ color: "#fff" }}
                      label="Cancelar"
                    />
                    <Button
                      onClick={handleDelete}
                      linkVariant
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
