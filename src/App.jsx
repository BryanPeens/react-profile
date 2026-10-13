// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import './App.css'
import Footer from './components/Footer';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div className="site-shell">
      <Nav />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
