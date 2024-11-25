import './App.css';
import { ClickHandler } from './components/clickHandler';
import { NameList } from './components/NameList';
// import { Greet } from './components/greet';
// import { Message } from './components/message';
// import { ParentComponent } from './components/ParentComponent';
import { UserGreeting } from './components/UserGreeting';

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
      {/* <ParentComponent /> */}
      <UserGreeting />
      <NameList />
    </div>
  )
}

export default App;
