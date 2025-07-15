import { useState } from 'react'
import './App.css'
import { FoodDiaryList } from './components/FoodDiaryList'
import type { FoodDiaryEntry } from './types'

function App() {
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
      <FoodDiaryList entries={diaryEntries} />
    </>
  )
}

export default App
