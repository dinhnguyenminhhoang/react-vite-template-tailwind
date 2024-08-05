import useWindowSize from "../../hooks/useWindowSize";

export default function WindowSizeComponent() {
    const { width, height } = useWindowSize();

    return (
        <div>
            {width} x {height}
        </div>
    );
}
