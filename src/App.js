import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Categories from './Components/Categories/Categories';
import PetDetails from './Components/PetDetails/PetDetails';
import CreatePet from './Components/CreatePet/CreatePet';
import EditPetDetails from './Components/EditPetDetails/EditPetDetails';
import EditPet from './Components/EditPet/EditPet';
import CreatePetNew from './Components/CreatePetNew/CreatePetNew';
import Register from './Components/common/Register/Register';
import Login from './Components/common/Login/Login';

import { auth } from './utils/firebase';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />

      <main id="site-content">
        <Switch>
          <Route path="/" exact component={Categories} />
          <Route path="/categories/:category" component={Categories} />
          <Route path="/pets/details/:petId" exact component={PetDetails} />
          <Route path="/pets/details/:petId/edit" component={EditPetDetails} />
          <Route path="/pets/:petId/edit" component={EditPet} />
          <Route path="/pets/create" component={CreatePet} />
          <Route path="/pets/createNew" component={CreatePetNew} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/logout" render={(props) => {
            auth.signOut();
            return <Redirect to="/" />;
          }} />
        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default App;
