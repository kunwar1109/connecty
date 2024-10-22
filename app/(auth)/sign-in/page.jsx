"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "../_components/password-input";
import { SubmitButton } from "../_components/submit-button";
import { useRef, useState } from "react";
import { handler } from "@/actions/signIn";
import { redirect } from "next/navigation";

export default function SignInPage() {
  const [nameErr, setNameErr] = useState(null);
  const passRef = useRef(null);

  const nameErrorValidation = (e) => {
    if (!e.target.value.length) {
      setNameErr("Please enter username or password");
    } else {
      setNameErr(null);
    }
  };

  const signInAction = async (formData) => {
    //return if client side validation failsss
    const user = formData.get("user-id");
    const password = formData.get("password");
    const payload = { password };
    if (
      user.match(
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      )
    ) {
      payload["email"] = user;
    } else {
      payload["userName"] = user;
    }

    console.log(payload);
    const resp = await handler(payload);
    //if success -> redirect to chats
    console.log(resp);
    if (resp?.token) {
      redirect("/chats");
    }
  };
  return (
    <form
      action={signInAction}
      className="w-full max-w-[300px] md:max-w-[500px] flex flex-col gap-4 border border-input p-6 rounded-md"
    >
      <h3 className="text-2xl">Sign IN to Connecty</h3>
      <div className="flex flex-col gap-2">
        <Label htmlFor="user-id">Email or Username</Label>
        <Input
          id="user-id"
          name="user-id"
          className={`focus-visible:ring-0 focus-visible:ring-offset-0 ${
            nameErr && "border-rose-500"
          }`}
          onBlur={nameErrorValidation}
        />
        {nameErr && <small className="text-rose-500 text-xs">{nameErr}</small>}
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Password</Label>
        <PasswordInput name="password" ref={passRef} />
      </div>
      <div className="flex justify-start items-center">
        <SubmitButton text="Sign In" loadingText="Signing In..." />
      </div>
    </form>
  );
}
