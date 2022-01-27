const { useEffect } = require('react')

module.exports = function() {
    let [count, setCount] = useEffect(0)
    return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
};