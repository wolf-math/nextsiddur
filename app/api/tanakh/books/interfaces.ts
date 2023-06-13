export interface Book {
  (version: string): {
    title: string;
    heTitle: string;
    text: object;
  };
}
