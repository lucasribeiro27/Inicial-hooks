import { useState } from "react";

export default function App() {
  
  return(
    <main>
      <Musico/>
      <Example/>
    </main>
  );
}

function Musico(){
  const [cantor, setCantor] = useState("Fernandinho");
  
  const mudarNome = () => {
    setCantor ("Gabriela Rocha");
  };

  return (
    <main>
      <p>{cantor}</p>
      <button onClick={mudarNome}>Trocar cantor</button>
      <button onClick={() => setCantor ("Fernandinho")}>Voltar cantor</button>
    </main>
  );
}

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Clique aqui</button>
      <button onClick={() => setCount(count - 1)}>Clique aqui</button>
      <button onClick={() => setCount(0)}>Resetar</button>
    </div>
  );
}

