
import './App.css';
import Footer from './Pages/Footer';
import Navbar from './Pages/Navbar';
import { AllRoutes } from './Routes/Allroutes';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
