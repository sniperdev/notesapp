import React from 'react';
import {useState} from 'react'
import Note from "./Note";

const NotesList = () => {
  return (
    <section className={"overflow-auto h-fit"}>
      <Note/>
      <Note/>
      <Note/>
    </section>
  );
};

export default NotesList;
