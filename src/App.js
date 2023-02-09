import {useEffect} from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AOS from 'aos';
import "aos/dist/aos.css";

// Styles
import './styles/index.css';

// Pages
import Home from './pages/Home';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      // loader: rootLoader,
      // children: [
      //   {
      //     path: "team",
      //     element: <Team />,
      //     loader: teamLoader,
      //   },
      // ],
    },
  ]);

  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
