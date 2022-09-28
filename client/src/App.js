import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/home/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import Footer from './components/shared/Footer';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Cats from './components/cats/Cats';
import CatForm from './components/cats/CatForm';

const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* protected routes are only for pages accessed when we are logged in */}
          <Route path='/' element={<ProtectedRoute /> }>
            <Route path='/cats' element={<Cats />} />
            <Route path='/:id/updateCat' element={<CatForm />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/*' element={<Nomatch />} />
        </Routes>
      </>
    </FetchUser>
    <Footer />
  </>
)

export default App;