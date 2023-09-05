interface FormTitleProps {
  icon: string;
  title: string;
  success?: boolean;
}

/**
 * The `FormTitle` component renders a title with an icon and optional success styling.
 * @param {FormTitleProps}  - - `icon`: The icon to be displayed next to the title.
 */
export const FormTitle = ({ icon, title, success }: FormTitleProps) => (
  <div className={success ? "successTitle" : "formTitle"}>
    <img className="formTitleIcon" src={icon} alt="icon-title" />
    <h1 style={{ color: success ? "white" : "black" }}>{title}</h1>
  </div>
);
