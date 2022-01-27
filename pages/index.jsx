let React, { useState } = require('react')

module.exports = function () {
    let [count, setCount] = useState(0)
    return (
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>React.js Starter</title>
        </head>
        <body>
            <button onClick={() => setCount(count + 1)}>This Button Is Clicked {count} Times</button>
        </body>
        </html>
    )
};