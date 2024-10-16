// Hooki w React są specjalnymi funkcjami, które pozwalają nam "zahaczyć się" w mechanizmy Reacta,
// takie jak stan czy cykl życia komponentu, bez potrzeby korzystania z klas.
import React, { useState, useEffect, useContext, createContext } from 'react';

// Tworzymy kontekst
const UserContext = createContext();
// createContext w React służy do tworzenia kontekstu, który pozwala na przekazywanie danych do wielu
// komponentów bez potrzeby ręcznego przekazywania ich przez propsy na każdym poziomie drzewa komponentów



function App() {
  // useState: Pozwala na dodanie lokalnego stanu
  // do komponentu funkcyjnego. Zwraca dwie wartości: 
  // aktualny stan oraz funkcję do jego aktualizacji.
  const [count, setCount] = useState(0)
  // count to aktualna wartość stanu,
  // setCount to funkcja, która zmienia stan.
  // useEffect: Umożliwia zarządzanie efektami ubocznymi,
  // np. pobieraniem danych, subskrypcjami czy aktualizacją DOM po każdej zmianie. 

  return (
    <UserContext.Provider value="Jan Kowalski">
      <Counter />
    </UserContext.Provider>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0); // useState do zarządzania stanem licznika
  const userName = useContext(UserContext); // useContext do pobrania danych z kontekstu

  useEffect(() => {
    document.title = `Licznik: ${count}`; // Zmiana tytułu dokumentu po każdej zmianie stanu
    console.log(`Zaktualizowano licznik: ${count}`);
  }, [count]); // Efekt uruchamiany po każdej zmianie stanu count

  return (
    <div>
      <h1>Cześć, {userName}!</h1>
      <p>Licznik: {count}</p>
      <button onClick={() => setCount(count + 1)}>Zwiększ licznik</button>
    </div>
  );
};

// useState: Używamy go do zarządzania stanem licznika count, który można zwiększać przyciskiem.
// useEffect: Efekt zmienia tytuł strony na aktualną wartość licznika po każdej jego zmianie oraz wyświetla komunikat w konsoli.
// useContext: Wykorzystujemy kontekst UserContext, aby wyświetlić imię użytkownika w interfejsie.

export default App;

