import { useEffect, useRef } from "react";

export default function useRenderCount() {
    const count = useRef(0); // Start counting from 0
    useEffect(() => {
        count.current += 1; // Increment the count on every render
    });
    return count.current;
}
