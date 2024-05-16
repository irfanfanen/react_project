import './App.css';
import {Button, Button2} from './Button';
import { ListComp } from './component/list';
import { FormComp } from './component/formComp';

function App() {

  let nameButton = "100";

  return (
    <div>
      <h1>Hello, Word!</h1>
      <FormComp />
      <ListComp />
      <Button text="Tombol 11"/>
      <br />
      <Button2 text={nameButton} />
    </div>
  );
}

export default App;
