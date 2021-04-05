import {Switch, Route} from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Categories from './Components/Categories/Categories';
import PetDetails from './Components/PetDetails/PetDetails';
import CreatePet from './Components/CreatePet/CreatePet';
import EditPetDetails from './Components/EditPetDetails/EditPetDetails';

import './App.css';

function App() {
  return (
    <div className="container">
      <Header />

      <main id="site-content">
        <Switch>
          <Route path="/" exact component={Categories} />
          <Route path="/categories/:category"  component={Categories} />
          <Route path="/pets/details/:petId" exact component={PetDetails} />
          <Route path="/pets/details/:petId/edit" component={EditPetDetails} />
          <Route path="/pets/create" component={CreatePet}/>
        </Switch>        
      </main>

      <Footer />
    </div>
  );
}

export default App;
