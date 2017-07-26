class CellKind {
  constructor() {}

  static get number() { return 1;}
  static get wall() { return 2;}
  static get space() { return 3;}
}

class Cell {
  constructor(kind, x, y) {
    this._kind = kind;
    this._x = x;
    this._y = y;
  }

  get kind() { return this._kind;}
  get x() { return this._x;}
  get y() { return this._y;}

  isNumber() { return this.kind === CellKind.number;}
  isWall() { return this.kind === CellKind.wall;}
  isSpace() { return this.kind === CellKind.space;}

}



export class Board {
  static isValidStr(str) {
    //ToDo
    return false;
  }

  constructor(str) {
    //ToDo
    this.str = str;
  }

  getCell(x, y) {
    //ToDo
    return null;
  }

  answerSpaceCount() {
    //ToDo
    return 0;
  }

  answerWallCount() {
    //ToDo
    return 0;
  }

  hasSquareWalls() {
    //ToDo
    return false;
  }

  isSolved() {
    //ToDo
    return false;
  }

  isInvalid() {
    //ToDo
    return true;
  }

  solve() {
    //ToDo
    return this;
  }

  toString() {
    //ToDo
    return this.str;
  }
}


// This module is referred by both browser and node.
if (typeof(window) !== "undefined") {
  window.Board = Board;
}
