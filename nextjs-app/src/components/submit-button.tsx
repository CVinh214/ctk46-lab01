"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
  className?: string;
  pendingText?: string;
  children: React.ReactNode;
}

export default function SubmitButton({
  className = "",
  pendingText = "Đang gửi...",
  children,
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className={className}
    >
      {pending ? pendingText : children}
    </Button>
  );
}
