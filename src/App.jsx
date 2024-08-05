import DebugInformationComponent from "@/components/DebugInformationComponent/DebugInformationComponent";
import { useState } from "react";
import "./App.css";
import { FaBeer } from "react-icons/fa";
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Hello world! <FaBeer />?
            </h1>{" "}
            <DebugInformationComponent />
        </>
    );
}

export default App;
