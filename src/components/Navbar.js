import React from 'react';

const Navbar = () => {
  return (
    <nav className={"h-16 flex justify-between p-2 border-b-4"}>
      <h1 className={"self-center"}>NotesApp</h1>
      <button className={"border-2 w-10 h-10"}>+</button>
    </nav>
  );
};

export default Navbar;
