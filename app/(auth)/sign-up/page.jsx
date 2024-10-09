"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "../_components/password-input";
import { SubmitButton } from "../_components/submit-button";
import { useRef, useState } from "react";

export default function SignUpPage() {
  const [errors, setErrors] = useState({});
  const passRef = useRef(null);
  const confPassRef = useRef(null);

  const firstNameValidation = (e) => {
    if (!e.target.value.length) {
      setErrors((prev) => ({ ...prev, fNameError: "Please enter First Name" }));
    } else if (e.target.value.length < 3) {
      setErrors((prev) => ({
        ...prev,
        fNameError: "First Name is too short",
      }));
    } else {
      setErrors((prev) => ({ ...prev, fNameError: null }));
    }
  };

  const lastNameValidation = (e) => {
    if (!e.target.value.length) {
      setErrors((prev) => ({ ...prev, lNameError: "Please enter Last Name" }));
    } else if (e.target.value.length < 3) {
      setErrors((prev) => ({
        ...prev,
        lNameError: "Last Name is too short",
      }));
    } else {
      setErrors((prev) => ({ ...prev, lNameError: null }));
    }
  };

  const userNameValidation = (e) => {
    if (!e.target.value.length) {
      setErrors((prev) => ({ ...prev, uNameError: "Please enter Username" }));
    } else if (e.target.value.length < 3) {
      setErrors((prev) => ({
        ...prev,
        uNameError: "Username is too short",
      }));
    } else {
      setErrors((prev) => ({ ...prev, uNameError: null }));
    }
  };

  const emailValidation = (e) => {
    if (!e.target.value.length) {
      setErrors((prev) => ({ ...prev, emailError: "Please enter Email" }));
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e.target.value)
    ) {
      setErrors((prev) => ({
        ...prev,
        emailError: "Enter a valid email",
      }));
    } else {
      setErrors((prev) => ({ ...prev, emailError: null }));
    }
  };

  return (
    <form
      action=""
      className="w-full max-w-[350px] md:max-w-[500px] flex flex-col gap-4 border border-input p-6 rounded-md"
    >
      <h3 className="text-2xl mb-2">Sign Up to Connecty</h3>
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            className={`focus-visible:ring-0 focus-visible:ring-offset-0 ${
              errors["fNameError"] && "border-rose-500"
            }`}
            onBlur={firstNameValidation}
          />
          {
            <small className="text-rose-500 text-xs">
              {errors["fNameError"]}
            </small>
          }
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            onBlur={lastNameValidation}
            className={`focus-visible:ring-0 focus-visible:ring-offset-0 ${
              errors["lNameError"] && "border-rose-500"
            }`}
          />
          {
            <small className="text-rose-500 text-xs">
              {errors["lNameError"]}
            </small>
          }
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="userName">Username</Label>
        <Input
          id="userName"
          name="userName"
          onBlur={userNameValidation}
          className={`focus-visible:ring-0 focus-visible:ring-offset-0 ${
            errors["uNameError"] && "border-rose-500"
          }`}
        />
        {errors["uNameError"] && (
          <small className="text-rose-500 text-xs">
            {errors["uNameError"]}
          </small>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          onBlur={emailValidation}
          className={`focus-visible:ring-0 focus-visible:ring-offset-0 ${
            errors["emailError"] && "border-rose-500"
          }`}
          type="email"
        />
        {errors["emailError"] && (
          <small className="text-rose-500 text-xs">
            {errors["emailError"]}
          </small>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Password</Label>
        <PasswordInput name="password" ref={passRef} />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="confirm-password">Confirm Password</Label>
        <PasswordInput
          name="confirm-password"
          value={passRef}
          ref={confPassRef}
        />
      </div>
      <div className="flex justify-start items-center">
        <SubmitButton text="Sign Up" loadingText="Signing Up..." />
      </div>
    </form>
  );
}
