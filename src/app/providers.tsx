
"use client";

import { PlanProvider } from "@/app/context/PlanContext";

export default function Providers({children,}: { children: React.ReactNode;}) {
    return (
        <PlanProvider>
            {children}
        </PlanProvider>
    );
}
