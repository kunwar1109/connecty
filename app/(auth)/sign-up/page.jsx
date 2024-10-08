import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "../_components/password-input";
import { SubmitButton } from "../_components/submit-button";

export default function SignUpPage() {
  return (
    <form
      action=""
      className="w-full max-w-[300px] md:max-w-[500px] flex flex-col gap-8 border border-input p-6 rounded-md"
    >
      <h3 className="text-2xl">Sign Up to Connecty</h3>
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-4 w-full">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            className="focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            className="focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Label htmlFor="userName">Username</Label>
        <Input
          id="userName"
          name="userName"
          className="focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>
      <div className="flex flex-col gap-4">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          className="focus-visible:ring-0 focus-visible:ring-offset-0"
          type="email"
        />
      </div>
      <div className="flex flex-col gap-4">
        <Label htmlFor="password">Password</Label>
        <PasswordInput name="password" />
      </div>
      <div className="flex flex-col gap-4">
        <Label htmlFor="confirm-password">Confirm Password</Label>
        <PasswordInput name="confirm-password" />
      </div>
      <div className="flex justify-start items-center">
        <SubmitButton text="Sign Up" loadingText="Signing Up..." />
      </div>
    </form>
  );
}
