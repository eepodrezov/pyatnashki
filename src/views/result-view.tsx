import { BackButton } from "../features"
import { Position } from "../features/solvers/position"
import { formatInputValueToBoardArr } from "../helpers/board.helpers";

export const ResultView = () => {
    const selectedValue = localStorage.getItem('selectedValue')
    console.log(formatInputValueToBoardArr(selectedValue!), selectedValue,'f')
    // Пример использования класса PuzzleState:
    const initialBoard = formatInputValueToBoardArr(selectedValue!)
    const puzzleState = new Position(initialBoard);
    console.log(puzzleState.getBoard()); // Выводит текущую расстановку пятнашек
    console.log(puzzleState.getSize()); // Выводит размерность доски
    console.log(puzzleState.isSolved()); // Проверяет, является ли текущая расстановка решением
    const newPuzzleState = puzzleState.moveLeft(); // Генерирует новое состояние путем перемещения пятнашек влево
    console.log(newPuzzleState?.getBoard()); // Выводит новую расстановку пятнашек после перемещения влево
  return (
    <div>
      <BackButton />
      result-view
    </div>
  )
}
