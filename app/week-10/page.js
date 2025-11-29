"use client";

import { useRouter } from "next/navigation";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const router = useRouter();

async function handleSignIn() {
    try {
        await gitHubSignIn();
    } catch (err) {
        console.error("Error signing in:", err);
    }
}

async function handleSignOut() {
    try {
        await firebaseSignOut();
        } catch (err) {
        console.error("Error signing out:", err);
    }
}

function handleContinue() {
    router.push("/week-10/shopping-list");
}

return (
    <main>
        <h1 className="text-4xl font-bold mb-5">Shopping List App</h1>
    {!user && (
        <div className="space-y-4">
            <button
                onClick={handleSignIn}>
                Sign in with GitHub
            </button>
        </div>
        )}

    {user && (
        <div>
            <p>
                Signed in as ({user.email || user.displayName}).
            </p>
            <p>
                <button
                    onClick={handleSignOut}
                    className="font-semibold hover:underline">
                    Sign out
                </button>
            </p>
            <p>
                <button
                    onClick={handleContinue}
                    className="font-semibold hover:underline">
                    Continue to your Shopping List
                </button>
            </p>
        </div>
        )}
    </main>
);
}
