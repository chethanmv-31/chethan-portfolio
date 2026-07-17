import { useEffect, useState, RefObject } from "react";

export function useIntersection(
    elementRef: RefObject<Element | null>,
    options?: IntersectionObserverInit
): boolean {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            // Trigger once and disconnect if we only want enter animations
            if (entry.isIntersecting) {
                setIsIntersecting(true);
                observer.unobserve(element);
            }
        }, options);

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [elementRef, options]);

    return isIntersecting;
}
