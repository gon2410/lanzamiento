"use client";

import { useEffect, useRef } from "react";

export default function FirstTextScroll() {
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
        <div ref={ref} className="opacity-0 translate-y-4 transition-all duration-700">
            <p>Inauguración del primer concesionario</p>
            <p>Oficial Dongfeng en Argentina.</p>
        </div>
    );
}