import {Switch, Route} from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Categories from './Components/Categories/Categories';
import PetDetails from './Components/PetDetails/PetDetails';

import './App.css';

function App() {
  return (
    <div className="container">
      <Header />

      <main id="site-content">
        <Switch>
          <Route path="/" exact component={Categories} />
          <Route path="/categories/:category"  component={Categories} />
          <Route path="/pets/details/:petId" component={PetDetails} />
        </Switch>        
      </main>

      <Footer />
    </div>
  );
}

export default App;
