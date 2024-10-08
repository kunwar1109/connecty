"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export const SubmitButton = ({ text, loadingText }) => {
  const { pending } = useFormStatus();

  if (pending) {
    return (
      <Button size="lg" type="submit">
        <Spinner />
        {loadingText}
      </Button>
    );
  }
  return (
    <Button size="lg" type="submit">
      {text}
    </Button>
  );
};
