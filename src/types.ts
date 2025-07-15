
export type Food = {
  id: string
  name: string
  calories: number
  protein?: number
  carbs?: number
  fat?: number
}

export type FoodDiaryEntry = {
  id: string
  food: Food
  quantity: number // e.g., grams or servings
  date: string // ISO date string
  notes?: string
}
