"use client";

import Loading from "@/app/loadign";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageLoader() {
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [pathname]);

    if (!loading) return null;

    return <Loading />;
}