"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PasswordField } from "@/features/auth/components/password-field";
import { useState } from "react";

export default function ResetPassword() {
  // 1. declare newPassword and confirmPassword state here

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 2. check newPassword !== confirmPassword, return early if so
    // TODO: wire to better-auth password reset confirm once auth.ts exists
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4">
      <Card className="w-full max-w-md border-gray-200 shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-black">
            {/* 3. your title */}
          </CardTitle>
          <CardDescription className="text-gray-600">
            {/* 4. your description */}
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit} className="text-gray-600">
          <CardContent className="space-y-4">
            {/* 5. two PasswordField instances — id, label, value, onChange, autoComplete for each */}
            
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              className="cursor-pointer w-full bg-primary hover:bg-primary/90"
              type="submit"
            >
              {/* 6. button text */}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
