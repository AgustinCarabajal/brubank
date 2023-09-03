interface FormTitleProps {
  icon: string;
  title: string;
  success?: boolean;
}

export const FormTitle = ({ icon, title, success }: FormTitleProps) => (
  <div className={success ? "successTitle" : "formTitle"}>
    <img className="formTitleIcon" src={icon} alt="icon-title" />
    <h1 style={{ color: success ? "white" : "black" }}>{title}</h1>
  </div>
);
