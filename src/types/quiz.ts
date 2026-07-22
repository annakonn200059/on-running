export type ShoeId =
  | 'cloud'
  | 'cloudx'
  | 'cloudflow'
  | 'cloudventure'
  | 'cloudsurfer'
  | 'cloudventure_waterproof'
  | 'cloudventure_peak'
  | 'cloudflyer'

export interface Shoe {
  id: ShoeId
  name: string
  rating: number
}

export interface Answer {
  id?: number
  copy: string
  nextQuestion: number | ''
  ratingIncrease: Record<ShoeId, number>
}

export interface Question {
  id: number
  copy: string
  answers: Answer[]
}

export interface Quiz {
  shoes: Shoe[]
  questions: Question[]
}
