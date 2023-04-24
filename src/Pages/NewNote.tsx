import React from "react";

import { NoteData, Tag } from "../interfaces/INoteInterfaces";
import { NoteForm } from "../Components/NoteForm/NoteForm";
type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};
const NewNote = ({ onSubmit, onAddTag, availableTags }: NoteFormProps) => {
  return (
    <>
      <h2 className="my-5">New Note</h2>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
};

export default NewNote;
