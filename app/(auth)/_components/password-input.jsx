"use client";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { forwardRef, useState } from "react";

export const PasswordInput = forwardRef(({ name, value }, ref) => {
  const [passwordState, setPasswordState] = useState("password");
  const [passError, sePasserror] = useState(null);

  const changeToText = () => setPasswordState("text");
  const changeToPass = () => setPasswordState("password");

  const passValidation = (e) => {
    if (!e.target.value.length) {
      sePasserror("Please Enter a Password");
      ref.error = "please enter a password";
    } else if (e.target.value.length < 6) {
      sePasserror("Password should atleast have 6 character");
      ref.error = "Password should atleast have 6 character";
    } else {
      sePasserror("");
      ref.error = null;
    }
  };

  const confPassValidation = (e) => {
    if (!e.target.value.length) {
      sePasserror("Please re-enter your Password");
      ref.error = "Please re-enter your Password";
    } else if (e.target.value !== value.current.value) {
      sePasserror("Password doesn't match");
      ref.error = "Password doesn't match";
    } else {
      sePasserror("");
      ref.error = null;
    }
  };

  return (
    <>
      <div
        className={`flex items-center justify-center border border-input rounded-md gap-2 pr-3 ${
          passError && "border-rose-500"
        }`}
      >
        <Input
          id={name}
          name={name}
          className="border-none flex-1 focus-visible:ring-0 focus-visible:ring-offset-0"
          type={passwordState}
          onBlur={name === "password" ? passValidation : confPassValidation}
          ref={ref}
        />
        {passwordState === "password" ? (
          <Eye
            className={`w-5 h-5 cursor-pointer ${passError && "text-rose-500"}`}
            onClick={changeToText}
          />
        ) : (
          <EyeOff
            className={`h-5 w-5 cursor-pointer ${passError && "text-rose-500"}`}
            onClick={changeToPass}
          />
        )}
      </div>
      {passError && (
        <small className="text-rose-500 text-xs">{passError}</small>
      )}
    </>
  );
});
