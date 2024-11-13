'use client';
import { useState } from 'react';
import './App.css';
import { GlobalLayout } from './GlobalLayout';
import { Hello } from './Hello';

function App() {
  const [name, setName] = useState<string>('Gérald')
  const [newName, setNewName] = useState<string>('')

  const onValidate = () => {
    setName(newName)
    setNewName('')
  }

  return (
    <GlobalLayout>
      <Hello name={name}>How are you ?</Hello>
      <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      <button onClick={onValidate}>Ok</button>
    </GlobalLayout>
  );
}

export default App;
