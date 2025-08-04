"use client";

import { useEffect, useRef } from "react";

export default function ThirdTextScroll() {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                entry.target.classList.add("opacity-100", "translate-y-0");
                }
            },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div style={{fontFamily: "helvetica"}} ref={ref} className="opacity-0 translate-y-4 transition-all duration-1000">
            <div className="text-4xl space-y-0">
                <p>jueves</p>
                <p>14.08.25</p>
            </div>
        </div>
    );
}