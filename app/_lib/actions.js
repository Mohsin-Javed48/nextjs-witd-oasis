"use server";

import { signIn, signOut as nextAuthSignOut } from "./auth";

export async function signInWithGoogle() {
  await signIn("google", {
    redirectTo: "/account",
  });
}

export async function signOut() {
  await nextAuthSignOut({
    redirectTo: "/",
  });
}
