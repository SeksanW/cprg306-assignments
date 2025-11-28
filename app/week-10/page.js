"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn } = useUserAuth();
    const router = useRouter();

    useEffect(() => {
        if (user?.uid) {
    router.push("/week-10/shopping-list");
    }
    }, [user, router]);

return (
    <div>
        <h1 className="text-2xl font-bold">
            Week 9 - Authentication using Firebase
        </h1>

        <button onClick={gitHubSignIn}>Sign In with Github</button>
    </div>
);
}
