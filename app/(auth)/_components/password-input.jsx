"use client";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export const PasswordInput = ({ name }) => {
  const [passwordState, setPasswordState] = useState("password");

  const changeToText = () => setPasswordState("text");
  const changeToPass = () => setPasswordState("password");

  return (
    <div className="flex items-center justify-center border border-input rounded-md gap-2 pr-3">
      <Input
        id={name}
        name={name}
        className="border-none flex-1 focus-visible:ring-0 focus-visible:ring-offset-0"
        type={passwordState}
      />
      {passwordState === "password" ? (
        <Eye className="w-5 h-5 cursor-pointer" onClick={changeToText} />
      ) : (
        <EyeOff className="h-5 w-5 cursor-pointer" onClick={changeToPass} />
      )}
    </div>
  );
};
