import './App.css';
import './appStyles.css'
import styles from './appStyles.module.css'
// import { ClickHandler } from './components/clickHandler';
// import { NameList } from './components/NameList';
// import { Stylesheet } from './components/Stylesheet';
import { Inline } from './components/inline';
// import { Greet } from './components/greet';
// import { Message } from './components/message';
// import { ParentComponent } from './components/ParentComponent';
// import { UserGreeting } from './components/UserGreeting';
import { Form } from './components/form';

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
      {/* <UserGreeting />
      <NameList />
      < Stylesheet /> */}
      {/* <Inline />
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      <Form />
    </div>
  )
}

export default App;
