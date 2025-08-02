"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ArmandoTextScroll() {
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
        <Image
            src="/armando.svg"
            alt="texto"
            width={400}
            height={200}
            ref={ref}
            className="absolute z-10 top-[55%] left-1/2 -translate-x-1/2 opacity-0 translate-y-4 transition-all duration-700"
        />
    );
}