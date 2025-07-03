import './App.css'
import {HeaderHelloWorld, ParagraphHelloWorld} from "./hello-world/HelloWorld.jsx"
import Container from './hello-world/Container.jsx'
import TodoList from './todo-list/TodoList.jsx';

function App() {
  return (
    <Container>
      <HeaderHelloWorld />
      <ParagraphHelloWorld />
      <TodoList />
    </Container>
  );
}

export default App;
