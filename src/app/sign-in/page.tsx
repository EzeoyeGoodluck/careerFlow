"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function SignUp() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4">
      <div className="w-full max-w-md border-gray-200 shadow-lg">
        <form className="text-gray-600">
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
            <Input
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
}
