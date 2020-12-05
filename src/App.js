import Paper from "./component/Paper";
import "./App.css";

function App() {
  return (
    <Paper>
      <section className="header">
        <button className="header-btn main-black-color">Add</button>
        <div className="header-title">Title TodoList</div>
        <button className="header-btn main-red-color">Clear</button>
      </section>
      <section className="add">
        <form action="" className="add-form">
          <input type="text" className="add-input" />
          <button className="add-btn main-black-color">Add</button>
        </form>
      </section>
      <section className="todos">
        <div className="todo">Learn React</div>
        <div className="todo">Learn React</div>
        <div className="todo">Learn React</div>
        <div className="todo">Learn React</div>
        <div className="todo">Learn React</div>
        <div className="todo">Learn React</div>
        <div className="todo">Learn React</div>
        <div className="todo">Learn React</div>
      </section>
    </Paper>
  );
}

export default App;
