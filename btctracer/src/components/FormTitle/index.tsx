interface FormTitleProps {
  icon: string;
  title: string;
}

export const FormTitle = ({ icon, title }: FormTitleProps) => (
  <div className="formTitle">
    <img className="formTitleIcon" src={icon} alt="icon-title" />
    <h1>{title}</h1>
  </div>
);
