import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import NewStoryPage from './pages/newStory/newStoryPage';
import NotFoundPage from './pages/notFound/notFoundPage';
import SignInPage from './pages/signIn/signInPage';
import DemoStoryPage from './pages/story/demoStoryPage';
import StoryPage from './pages/story/storyPage';
import UserDashboardPage from './pages/userDashboard/userDashboardPage';
import WelcomePage from './pages/welcome/welcomePage';

const getHomePath = () =>
  process.env.NODE_ENV === 'production' ? '/github-pages/' : '/';

const Router = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path={getHomePath()} component={WelcomePage}/>
        <Route path={`/${Routes.signin}`} component={SignInPage}/>
        <Route path={`/${Routes.dashboard}`} component={UserDashboardPage}/>
        <Route path={`/${Routes.newStory}`} component={NewStoryPage}/>
        <Route path={`/${Routes.story}`} component={StoryPage}/>
        <Route path={`/${Routes.demoStory}`} component={DemoStoryPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export const Routes = {
  signin: 'signin',
  dashboard: 'dashboard',
  newStory: 'newStory',
  story: 'story',
  demoStory: 'demoStory',
};

export default Router;