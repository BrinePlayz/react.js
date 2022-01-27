import React, { useState } from 'react'

function index() {
    let [count, setCount] = useState(0)
    return (
        <button onClick={() => setCount(count + 1)}>This Button Is Clicked {count} Times</button>
    )
};

module.exports = index