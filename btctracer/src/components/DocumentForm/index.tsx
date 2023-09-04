import { FileInput, FormTitle } from "..";
import CameraIcon from "../../assets/camera.svg";

type DocumentType = {
  dniFront: string;
  dniBack: string;
};

type DocumentFormProps = DocumentType & {
  updateForm: (fields: Partial<DocumentType>) => void;
};

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
