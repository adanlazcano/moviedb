import useMouse from "./useMouse";
import { useMemo } from "react";

const useBackground = () => {
    const { position, half } = useMouse();

    const background = useMemo(
        (_) => (half ? "SaddleBrown" : "PapayaWhip"),

        [half]
    );

    return { position, half, background };
};

export default useBackground;