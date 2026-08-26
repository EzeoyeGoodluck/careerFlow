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
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SignUp() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);
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
        <form className="text-gray-600">
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-gray-700">
                Full Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

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

            <div className="space-y-2">
              <label htmlFor="password" className="text-gray-700">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pr-10"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                  type="button"
                >
                  {showPassword ? (
                    <Eye className=" w-5 h-5 " />
                  ) : (
                    <EyeOff className=" w-5 h-5 " />
                  )}
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-gray-700">
                Confirm Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  value={password}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="pr-10"
                />
                <button
                  onClick={() => setConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                  type="button"
                >
                  {showConfirmPassword ? (
                    <Eye className=" w-5 h-5 " />
                  ) : (
                    <EyeOff className=" w-5 h-5 " />
                  )}
                </button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 ">
            <Button
              className="cursor-pointer w-full bg-primary hover:bg-primary/90"
              type="submit"
            >
              Sign Up
            </Button>
            <p className="text-center text-sm text-gray-600 cursor-pointer">
              {" "}
              {"Already have an account"} <Link href="/sign-in"> Sign-In </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
