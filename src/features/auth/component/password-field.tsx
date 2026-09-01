"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type PasswordFieldProps = {
  id: string;
  label: string;
  value: string;
  type: "text" | "password";
  onChange: (value: string) => void;
  autoComplete: "new-password" | "current-password";
  placeholder?: string;
};

export function PasswordField({
  id,
  label,
  value,
  onChange,
  type,
  autoComplete,
  placeholder = "*********",
}: PasswordFieldProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="space-y-2">
      <Label htmlFor={value} className="text-gray-700">
        {label}
      </Label>
      <div className="relative">
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
          className="pr-10"
          autoComplete={autoComplete}
        />
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
          type="button"
        >
          {isVisible ? (
            <Eye className=" w-5 h-5 " />
          ) : (
            <EyeOff className=" w-5 h-5 " />
          )}
        </button>
      </div>
    </div>
  );
}
