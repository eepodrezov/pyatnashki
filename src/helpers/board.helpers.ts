import _ from 'lodash'
import { SixteenNumber, SixteenNumberValue } from '../features/solvers'

export function formatInputValueToBoardArr(selectedValue: string, rowLength?: number): SixteenNumberValue[][] {
    const defaultSubArraySize = 4
    //разделяем строчку и переводим каждый элемент в элемент шеснадцатиричной системы
    const initialArr = (selectedValue.split('') as SixteenNumberValue[]).map(el => new SixteenNumber(el).value)
    return _.chunk(initialArr, rowLength || defaultSubArraySize)
}