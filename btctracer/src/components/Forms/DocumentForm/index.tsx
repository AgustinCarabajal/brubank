import { FormTitle } from "..";
import { FileInput } from "../..";
import { DocumentFormProps } from "../../../types";
import CameraIcon from "../../../assets/camera.svg";

/**
 * The DocumentForm component renders a form for uploading documentation, including a file input for
 * the front and back of a DNI (national identification document).
 * @param {DocumentFormProps}  - - `updateForm`: a function that is passed down from the parent
 * component and is used to update the form data. It is called with the updated form data whenever a
 * file is selected in the `FileInput` component.
 * @returns The DocumentForm component is returning a JSX element, which is a div containing two
 * FileInput components.
 */
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
