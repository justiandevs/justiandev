import {LayoutView} from "./LayoutView";
import {useEffect, useState} from "react";

export function LayoutContainer({ children }) {
    const [height, setHeight] = useState();

    useEffect(() => {
        setHeight(document.getElementById('nav').offsetHeight);
    }, [])

    return (
        <LayoutView children={children} height={height} />
    )
}