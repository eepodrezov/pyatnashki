const sixteenNumberValues = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'] as SixteenNumberValue[]
export type SixteenNumberValue = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F'

export class SixteenNumber {
    public value: SixteenNumberValue
    private valueIdx: number
  
    constructor(value: SixteenNumberValue) {
      this.value = value;
      this.valueIdx = sixteenNumberValues.findIndex(el => el === value)
    }
  
    // Метод для получения текущей расстановки пятнашек
    inc(by?: number): SixteenNumberValue {
      return sixteenNumberValues[this.valueIdx + (by || 1)] || 'F'
    }
  
    // Метод для получения размерности доски
    dec(by?: number): SixteenNumberValue {
      return sixteenNumberValues[this.valueIdx - (by || 1)] || '0'
    }
  
}