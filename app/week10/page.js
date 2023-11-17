"use client"
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page(){
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleGithubSignIn = async () => {
      await gitHubSignIn();
  }

  const handleFirebaseSignOut = async () => {
      await firebaseSignOut();
  }

  return(
<div className="flex flex-col justify-center items-center h-screen">
    <h1 className="text-6xl font-bold mb-2">Hello,</h1>
    {!user && (
        <button className="hover:text-green-400 mt-4" onClick={handleGithubSignIn}>Log into GitHub</button>
    )}

    {user && (
        <div className="mt-4">
            <p>Welcome, {user.displayName} ({user.email})</p>
            <button className="hover:text-red-600 mt-2" onClick={handleFirebaseSignOut}>Log Out</button>
            <Link href="./week10/shopping-list" className="hover:text-blue-600 ml-6">View Shopping List</Link>
        </div>
    )}
</div>
  )
}