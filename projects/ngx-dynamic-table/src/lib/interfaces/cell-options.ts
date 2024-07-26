export interface CellOptions {
  /** Text cell */
  text: string;
  /** If the text is bold */
  bold?: boolean;
  /** If the text is italic */
  italic?: boolean;
  /** A custom class for the cell */
  class?: string;
}
export interface CellHeaderOptions extends CellOptions {
  /** If the column is sortable */
  sortable?: boolean;
}
