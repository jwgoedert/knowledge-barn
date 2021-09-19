import logo from './logo.svg';
import knobaIcon from './Icon-KNOBA.svg';
import './App.css';
import Body from './Components/Layout/Body';
import Navbar from './Components/Layout/Navbar';
import CategoryList from './Components/Layout/CategoryList';
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import CategoriesPage from './Components/Pages/CategoriesPage';
import SubCategoriesPage from './Components/Pages/SubCategoriesPage';
import SubjectsPage from './Components/Pages/SubjectsPage';
import SubjectPage from './Components/Pages/SubjectPage';


function App() {
  let list = [];
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <img src={logo} alt="logo"></img>
        <img src={knobaIcon} alt="logo"></img>
        <Switch>
          <Route path="/SubCategories" component={SubCategoriesPage} />
          <Route path="/SubjectsPage" component={SubjectsPage} />
          <Route path="/SubjectPage" component={SubjectPage}/>
          <Route path="/" exact component={CategoriesPage} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
