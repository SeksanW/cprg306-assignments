"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn } = useUserAuth();
    const router = useRouter();

    useEffect(() => {
    if (user) {
        router.push("/week-9/shopping-list");
    }
    }, [user, router]);

return (
    <div>
        <h1 className="text-2xl font-bold">
        Week 9 - Authentication using Firebase
        </h1>

        {!user && (
            <button onClick={gitHubSignIn}>Sign In with GitHub</button>
        )}
    </div>
);
}
