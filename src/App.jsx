// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/layout/Header';
// import Footer from './components/layout/Footer';
// import Login from './pages/Auth/Login';
// import Signup from './pages/Auth/Signup';
// import Profile from './pages/Auth/Profile';
// import Home from './pages/Dashboard/Home';
// import Subscription from './pages/Dashboard/Subscription';
// import FAQ from './pages/FAQ';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <main className="container my-4">
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/subscription" element={<Subscription />} />
//           <Route path="/faq" element={<FAQ />} />
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </main>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Dashboard/Home';
// import Header from './components/layout/Header';
// import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <main className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Ajoute ici d'autres routes */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
