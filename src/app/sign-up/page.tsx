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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordField } from "@/features/auth/components/password-field";

import Link from "next/link";
import { useState } from "react";

export default function SignUp() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      // TODO: surface a real error state once you have one
      return;
    }
    // TODO: wire to better-auth sign-up once auth.ts exists
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4">
      <Card className="w-full max-w-md border-gray-200 shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-black">
            Sign Up
          </CardTitle>
          <CardDescription className="text-gray-600">
            Create your account to get started with CareerFlow.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit} className="text-gray-600">
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="John@Example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>

            <PasswordField
              id="password"
              value={password}
              onChange={setPassword}
              autoComplete="new-password"
              label="Password"
            />
            <PasswordField
              id="confirm-password"
              value={confirmPassword}
              onChange={setConfirmPassword}
              autoComplete="new-password"
              label="Confirm Password"
            />
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              className="cursor-pointer w-full bg-primary hover:bg-primary/90"
              type="submit"
            >
              Sign Up
            </Button>
            <p className="text-center text-sm text-gray-600">
              {"Already have an account? "}
              <Link href="/sign-in" className="underline">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
