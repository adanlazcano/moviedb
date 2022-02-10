import { useState, useEffect } from "react";

const useChangeBg = (refColor) => {
    const [colors] = useState(["#383838", "#324c6e", "#800000", "#282c34"]);

    const changeBg = (_) => {
        refColor.current.style.background =
            colors[Math.floor(Math.random() * colors.length)];
    };

    useEffect((_) => {
        changeBg();
    });
};

export default useChangeBg;