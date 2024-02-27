import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { apiUrl } from './API/axios';

import './App.css'

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async () => {
      try {
          const response = await apiUrl.get();
          setTasks(response.data);
      } catch(error) {
          console.error("Erreur Fetch tasks:", error.message);
          throw error;
      }
    })();

  }, [])

  return (
    <>
    <header></header>

      <main>
      <Outlet context={[tasks, setTasks]}/>
      </main>

    <footer></footer>
    </>
  )
}

export default App
