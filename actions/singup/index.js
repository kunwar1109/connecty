"use server";

export async function signUpHandler(data) {
  const { firstName, lastName, userName, email, password } = data;

  const response = await fetch("http://localhost:8000/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      userName,
      email,
      password,
    }),
  });
  const res = await response.json();
  return res;
}
