import React, { useState } from 'react'

function index() {
    const [count, setCount] = useState(0);
    return (
        <>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
        </>
    )
};

module.exports = index