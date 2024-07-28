export interface CellOptions {
  /** Text cell */
  text: string;
  /** If the text is bold */
  bold?: boolean;
  /** If the text is italic */
  italic?: boolean;
  /** A custom class for the cell */
  class?: string;
  /** Contains a non-negative integer value that indicates how many columns the cell spans or extends. */
  colSpam?: number;
  /** Contains a non-negative integer value that indicates how many rows the cell spans or extends. */
  rowSpam?: number;
}
export interface CellHeaderOptions extends CellOptions {
  /** If the column is sortable */
  sortable?: boolean;
  /** Indicates whether the sort icon is being displayed */
  hasIcon?: boolean;
}
