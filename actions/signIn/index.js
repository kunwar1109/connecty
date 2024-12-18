"use server";
import { cookies } from "next/headers";

export async function signInHandler(data) {
  const { userName, email, password } = data;

  const response = await fetch("http://localhost:8000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName,
      email,
      password,
    }),
  });
  const res = await response.json();
  await cookies().set("userId", res.userId);
  return res;
}
