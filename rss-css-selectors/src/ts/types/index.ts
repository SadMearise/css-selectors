type Levels = {
  completed: boolean;
  usedHint: boolean;
};

export type State = {
  currentLevel: number;
  levels: Record<number, Levels>
};

export type ViewerMarkup = {
  selector: string;
  class?: string;
  attributes?: Record<string, string>;
  child?: ViewerMarkup[];
};

export type Board = {
  selector: string;
  classes?: string[];
  attributes?: Record<string, string>;
  child?: Board[];
};

type Content = {
  order: string;
  title: string;
  subtitle: string;
  levelName: string;
  description: string;
  examples: string[];
  markup: ViewerMarkup[];
  board: Board[];
  result: string;
  strobeElements: number;
};

export type LevelsContent = Record<number, Content>;
