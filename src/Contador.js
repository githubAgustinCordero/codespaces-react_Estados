import React, { useState } from 'react';

function Contador(props) {
  // Declara una nueva variable de estado llamada "count"
  const [count, setCount] = useState(props.inicial);

  return (
    <div>
      <p>El contador está a {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrementar
      </button>
    </div>
  );
}

export default Contador;
