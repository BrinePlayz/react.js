module.exports = function() {
    function getNewDate() {
        return new Date().toLocaleString()
    }
    return (
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>React.js Starter</title>
        </head>
        <body>
            <h1>{getNewDate()}</h1>
        </body>
        </html>
    )
}