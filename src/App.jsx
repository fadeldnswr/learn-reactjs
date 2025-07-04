import './App.css'
import {HeaderHelloWorld, ParagraphHelloWorld} from "./hello-world/HelloWorld.jsx"
import Container from './hello-world/Container.jsx'
import TodoList from './todo-list/TodoList.jsx';
import Table from './table/Table.jsx';

function App() {
  return (
    <Container>
      <HeaderHelloWorld />
      <ParagraphHelloWorld />
      <TodoList />
      <Table />
    </Container>
  );
}

export default App;
