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
import { PasswordField } from "@/features/auth/component/password-field";
import Link from "next/link";
import { useState } from "react";

export default function SignUp() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4">
      <Card className="w-full max-w-md border-gray-200 shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-black">
            Sign In
          </CardTitle>
          <CardDescription className="text-gray-600">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <form className="text-gray-600">
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-gray-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="John@Example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <PasswordField
              id="password"
              value={password}
              onChange={setPassword}
              autoComplete="new-password"
              label="Password"
            />
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 ">
            <Button
              className="cursor-pointer w-full bg-primary hover:bg-primary/90"
              type="submit"
            >
              Sign In
            </Button>
            <p className="text-center text-sm text-gray-600 cursor-pointer">
              {" "}
              Dont have an account <Link href="/sign-up"> Sign-Up </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
