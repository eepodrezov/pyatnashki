import { SixteenNumber, SixteenNumberValue } from "./sixteen-number";

export class Position {
    private board: SixteenNumberValue[][]; // Двумерный массив для хранения текущей расстановки пятнашек
    private size: number; // Размерность доски
  
    constructor(board: SixteenNumberValue[][]) {
      this.board = board;
      this.size = board.length;
    }
  
    // Метод для получения текущей расстановки пятнашек
    getBoard(): SixteenNumberValue[][] {
      return this.board;
    }
  
    // Метод для получения размерности доски
    getSize(): number {
      return this.size;
    }
  
    // Метод для проверки, является ли текущая расстановка пятнашек решением
    isSolved(): boolean {
      const N = this.size;
      let value = new SixteenNumber('1')
  
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          if (i === N - 1 && j === N - 1) {
            // Пустая клетка находится в правом нижнем углу
            // и ожидается, что она содержит ноль
            if (this.board[i][j] !== new SixteenNumber('0').value) {
              return false;
            }
          } else {
            // В остальных клетках ожидается последовательная нумерация значений
            if (this.board[i][j] !== value.value) {
              return false;
            }
            value.inc();
          }
        }
      }
      return true;
    }
  
    // Метод для нахождения координат пустой клетки
    findEmptyCell(): number[] {
      const N = this.size;
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          if (this.board[i][j] === new SixteenNumber('0').value) {
            return [i, j];
          }
        }
      }
      return [-1, -1]; // Возвращает [-1, -1], если пустая клетка не найдена
    }
  
    // Методы для генерации новых состояний путем перемещения пятнашек в пустую клетку
    moveLeft(): Position | null {
      const [emptyRow, emptyCol] = this.findEmptyCell();
  
      if (emptyCol > 0) {
        const newBoard = this.deepCopy(this.board);
        const temp = newBoard[emptyRow][emptyCol - 1];
        newBoard[emptyRow][emptyCol - 1] = new SixteenNumber('0').value
        newBoard[emptyRow][emptyCol] = temp;
        return new Position(newBoard);
      }
  
      return null;
    }
  
    moveRight(): Position | null {
      const [emptyRow, emptyCol] = this.findEmptyCell();
  
      if (emptyCol > 0) {
        const newBoard = this.deepCopy(this.board);
        const temp = newBoard[emptyRow][emptyCol + 1];
        newBoard[emptyRow][emptyCol + 1] = new SixteenNumber('0').value;
        newBoard[emptyRow][emptyCol] = temp;
        return new Position(newBoard);
      }
  
      return null;
    }
  
    moveUp(): Position | null {
      const [emptyRow, emptyCol] = this.findEmptyCell();
  
      if (emptyCol > 0) {
        const newBoard = this.deepCopy(this.board);
        const temp = newBoard[emptyRow + 1][emptyCol];
        newBoard[emptyRow + 1][emptyCol] = new SixteenNumber('0').value;
        newBoard[emptyRow][emptyCol] = temp;
        return new Position(newBoard);
      }
  
      return null;
    }
  
    moveDown(): Position | null {
      const [emptyRow, emptyCol] = this.findEmptyCell();
  
      if (emptyCol > 0) {
        const newBoard = this.deepCopy(this.board);
        const temp = newBoard[emptyRow - 1][emptyCol];
        newBoard[emptyRow - 1][emptyCol] = new SixteenNumber('0').value;
        newBoard[emptyRow][emptyCol] = temp;
        return new Position(newBoard);
      }
  
      return null;
    }
  
    // Вспомогательный метод для создания глубокой копии двумерного массива
    private deepCopy(arr: SixteenNumberValue[][]): SixteenNumberValue[][] {
      return arr.map((row) => row.slice());
    }
}
  