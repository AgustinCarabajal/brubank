import { FormTitle } from "..";
import { FileInput } from "../..";
import { DocumentFormProps } from "../../../types";
import CameraIcon from "../../../assets/camera.svg";

export const DocumentForm = ({ updateForm }: DocumentFormProps) => {
  return (
    <div>
      <FormTitle title="Subir documentación" icon={CameraIcon} />
      <FileInput
        buttonLabel="Subir"
        title="Subir frente de DNI"
        inputName="dniFront"
        updateForm={updateForm}
      />
      <FileInput
        buttonLabel="Subir"
        title="Subir dorso de DNI"
        subtitle="(Es la parte de atrás)"
        inputName="dniBack"
        updateForm={updateForm}
      />
    </div>
  );
};
