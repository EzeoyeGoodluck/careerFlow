"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4">
      <div className="w-full max-w-md border-gray-200 shadow-lg">
        <form className="text-gray-600">
          <div className="space-y-2">
            <label htmlFor="name" className="text-gray-700">
              Name
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
        </form>
      </div>
    </div>
  );
}
