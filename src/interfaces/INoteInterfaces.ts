export type Note = {
  id: string;
};
export type Tag = {
  id: string;
  label: string;
};
export interface NoteData extends Note {
  title: string;
  markdown: string;
  tags: Tag[];
}
