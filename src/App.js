import logo from './logo.svg';
import './App.css';
import Body from './Components/Layout/Body';
import Navbar from './Components/Layout/Navbar';
import CategoryList from './Components/Layout/CategoryList';
let list = [];

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Body></Body>
      <CategoryList list={list}></CategoryList>
    </div>
  );
}

export default App;
