import Navbar from "./components/Navbar";
import NotesList from "./components/NotesList";

function App() {
  return (
    <div className={"h-screen"}>
      <Navbar/>
      <NotesList/>
    </div>
  );
}

export default App;