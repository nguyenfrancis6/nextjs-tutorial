'use client'
import { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";

export const Counter = () => {
    // const { isLoaded, userId, sessionId, getToken } = useAuth();
    const { isLoaded, isSignedIn, user } = useUser();
    

    console.log("counter component")
    const [count, setCount] = useState(0);

    // checks if component is mounted and is signed out, then we will not show the counter component
    if (!isLoaded || !isSignedIn) {
        return null;
    }

    return (
        <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    )
}