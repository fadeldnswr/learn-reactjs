import './App.css'
import {HeaderHelloWorld, ParagraphHelloWorld} from "./hello-world/HelloWorld.jsx"
import Container from './hello-world/Container.jsx'
import TodoList from './todo-list/TodoList.jsx';
import Table from './table/Table.jsx';
import AlertButton from './button/AlertButton.jsx';
import MyButton from './button/MyButton.jsx';
import Toolbar from './button/Toolbar.jsx';
import SearchForm from './form/SearchForm.jsx';

function App() {
  return (
    <Container>
      <HeaderHelloWorld />
      <ParagraphHelloWorld />
      <TodoList />
      <Table />
      <AlertButton text="Click Me!" message="Oh no! I've been clicked!" />
      <MyButton text="Click Me!" onSmash={() => alert("I've been clicked!")} />
      <Toolbar onClick={(e) => {
        e.stopPropagation(); // Prevents the event from bubbling up to parent elements
        alert("Toolbar clicked!");
      }} />
      <SearchForm />
    </Container>
  );
}

export default App;
