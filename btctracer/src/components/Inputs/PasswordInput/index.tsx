import { useState } from "react";
import { InputProps } from "../../../types";
import { Input } from "..";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

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
