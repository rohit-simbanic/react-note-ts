# What things I learned from this project specially?

- how to use useLocalStorage custom hook
- how to extend types in typescript 
```ruby
export type RawNote = {
  id: string;
} & RawNoteData;

export type RawNoteData = {
  title: string;
  markdown: string;
  tagIds: string[];
};
```
- used Module.css pattern for styling

