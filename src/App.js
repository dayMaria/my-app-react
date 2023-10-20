import { Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetups';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route element={<AllMeetupsPage />} path='/' exact />
        <Route element={<NewMeetupsPage />} path='/new-meetup' />
        <Route element={<FavoritesPage />} path='/favorites' />
      </Routes>
    </Layout>

  );
}

export default App;
