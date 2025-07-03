import './App.css'
import {HeaderHelloWorld, ParagraphHelloWorld} from "./hello-world/HelloWorld.jsx"
import Container from './hello-world/Container.jsx'

function App() {
  return (
    <Container>
      <HeaderHelloWorld />
      <ParagraphHelloWorld />
    </Container>
  );
}

export default App;
