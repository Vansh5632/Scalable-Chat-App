"use client";

import React from "react";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";

export default function SessionProvider({children}:{children: React.ReactNode}) {
    return(
        <NextAuthSessionProvider>
            {/** Children components will have access to the session context */}
            {children}
        </NextAuthSessionProvider>
    )
}