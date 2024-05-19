import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { BlogCreatePage } from '../../pages/blog-create';
import { BlogListPage } from '../../pages/blog-list';
import { BlogViewPage } from '../../pages/blog-view';
import { HomePage } from '../../pages/home';
import { LoginPage } from '../../pages/login';
import { ProfilePage } from '../../pages/profile';
import { RegisterPage } from '../../pages/register';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={HomePage} />

        <Route>
          <Route path='/login' Component={LoginPage} />
          <Route path='/register' Component={RegisterPage} />
        </Route>

        <Route>
          <Route path='/profile' Component={ProfilePage} />
          <Route path='/blog-list' Component={BlogListPage} />
          <Route path='/blog-create' Component={BlogCreatePage} />
          <Route path='/blog-view' Component={BlogViewPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
