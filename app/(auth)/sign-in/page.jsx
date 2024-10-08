import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "../_components/password-input";
import { SubmitButton } from "../_components/submit-button";

export default function SignInPage() {
  return (
    <form
      action=""
      className="w-full max-w-[300px] md:max-w-[500px] flex flex-col gap-8 border border-input p-6 rounded-md"
    >
      <h3 className="text-2xl">Sign In to Connecty</h3>
      <div className="flex flex-col gap-4">
        <Label htmlFor="user-id">Email or Username</Label>
        <Input
          id="user-id"
          name="user-id"
          className="focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>
      <div className="flex flex-col gap-4">
        <Label htmlFor="password">Password</Label>
        <PasswordInput />
      </div>
      <div className="flex justify-start items-center">
        <SubmitButton text="Sign In" loadingText="Signing In..." />
      </div>
    </form>
  );
}
