import { useEffect, useState } from "react";

function Example({cities}) {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        localStorage.setItem("count", count.toString());
        document.title = `Count: ${count}`;
        console.log("Hello from useEffect")
    }, [count, cities]);

    return (
        <div>
            <p>Counter: {count}</p>
            <button className="border-zinc-300 rounded-lg text-3xl" onClick={() => setCount(count+1)}>Increment</button>
        </div>
    )
}

export default Example