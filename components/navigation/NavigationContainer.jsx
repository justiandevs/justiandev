import { NavigationView } from "./NavigationView";
import {useEffect, useState} from "react";

export function NavigationContainer() {
    const [yOffset, setYOffset] = useState();

    useEffect(() => {
        const scroll = (e) => {
            const { pageYOffset } = window;
            setYOffset(pageYOffset);

            // if(pageYOffset > 80) {
            //     nav.classList.remove('py-6')
            //     nav.classList.add('py-2');
            //     nav.classList.add('bg-white');
            // } else {
            //     nav.classList.remove('bg-white');
            //     nav.classList.remove('py-2');
            //     nav.classList.add('py-6');
            // }
        };
        document.addEventListener("scroll", scroll);
        () => document.removeEventListener("scroll", scroll);
    }, []);

    return (
        <NavigationView yOffset={yOffset} />
    )
}
