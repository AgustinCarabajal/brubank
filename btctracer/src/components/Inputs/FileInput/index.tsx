import { useState } from "react";
import { FileInputProps } from "../../../types";
import { Button, Link } from "../..";
import { BsFillTrashFill } from "react-icons/bs";
import ArrowIcon from "../../../assets/up-arrow.svg";

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
                    <Link
                      onClick={() => setConfirmDelete(false)}
                      style={{ color: "#fff" }}
                      label="Cancelar"
                    />
                    <Link
                      onClick={handleDelete}
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
            data-testid={inputName}
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
