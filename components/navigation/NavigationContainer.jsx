import { NavigationView } from "./NavigationView";
import {useEffect, useState} from "react";

export function NavigationContainer() {
    const [yOffset, setYOffset] = useState();

    useEffect(() => {
        const scroll = (e) => {
            const { pageYOffset } = window;
            setYOffset(pageYOffset);
        };
        document.addEventListener("scroll", scroll);
        () => document.removeEventListener("scroll", scroll);
    }, []);

    return (
        <NavigationView yOffset={yOffset} />
    )
}
