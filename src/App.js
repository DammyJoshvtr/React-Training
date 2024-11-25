import './App.css';
import { ClickHandler } from './components/clickHandler';
// import { Greet } from './components/greet';
import { Message } from './components/message';
import { ParentComponent } from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <Greet name='Druce' heroName='Batman' />
      <Greet name='Clark' heroName='Ironman' />
      <Greet name='Diana' heroName='Spiderman' >
        <button>Action</button>
      </Greet>
      <Greet name='Vishwaz' heroName='WonderWoman' >
        <p>This is Children Props</p>
      </Greet> */}
      {/* <Message />
      <ClickHandler /> */}
      <ParentComponent />
    </div>
  )
}

export default App;
