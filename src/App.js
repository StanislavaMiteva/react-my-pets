import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Categories from './Components/Categories/Categories'

import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <main id="site-content">
        <Categories />
      </main>
      <Footer />
    </div>
  );
}

export default App;
