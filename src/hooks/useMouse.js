import { useEffect, useState } from "react";
const initialPosition = { x: 0, y: 0 };
const useMouse = () => {
    const [position, setPosition] = useState(initialPosition);

    useEffect((_) => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;

            setPosition({ x: clientX, y: clientY });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return (_) => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return { position, half: position.x < window.innerWidth / 2 };
};

export default useMouse;