import DashNav from "@/components/dashboard/DashNav";
import React from "react";
import { authOption, CustomSession } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import CreateChat from "@/components/groupChat/CreateChat";

export default async function DashboardPage() {
    const session:CustomSession|null = await getServerSession(authOption);
    return(
        <div>
            <DashNav name={session?.user?.name!} image={session?.user?.image ?? undefined}/>
            <div className="flex flex-col items-center justify-center h-screen">
                <CreateChat user={session?.user!}/>
            </div>
        </div>
    )
};
