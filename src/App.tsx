import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FoodDiaryList } from './components/FoodDiaryList'
import type { FoodDiaryEntry } from './types'

function App() {
  const [count, setCount] = useState(0)

  const [diaryEntries] = useState<FoodDiaryEntry[]>([
    {
      id: '1',
      food: { id: 'a', name: 'Apple', calories: 95 },
      quantity: 1,
      date: '2025-07-13',
      notes: 'Fresh and crisp'
    },
    {
      id: '2',
      food: { id: 'b', name: 'Chicken Breast', calories: 165, protein: 31 },
      quantity: 2,
      date: '2025-07-12'
    }
  ])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <FoodDiaryList entries={diaryEntries} />
    </>
  )
}

export default App
