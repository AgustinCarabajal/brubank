import { useState } from "react";
import { InputProps } from "../../../types";
import { Input } from "..";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

/* The code is defining a functional component called `PasswordInput` that takes in `props` of type
`InputProps`. */
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
