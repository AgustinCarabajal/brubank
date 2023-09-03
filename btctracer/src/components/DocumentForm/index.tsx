import { FileInput, FormTitle } from "..";
import CameraIcon from "../../assets/camera.svg";

export const DocumentForm = () => {
  return (
    <div>
      <FormTitle title="Subir documentación" icon={CameraIcon} />
      <FileInput
        buttonLabel="Subir"
        title="Subir frente de DNI"
        inputName="dniFront"
      />
      <FileInput
        buttonLabel="Subir"
        title="Subir dorso de DNI"
        subtitle="(Es la parte de atrás)"
        inputName="dniBack"
      />
    </div>
  );
};
