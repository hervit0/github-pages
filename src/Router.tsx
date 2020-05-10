import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import NewStoryPage from './pages/newStory/newStoryPage';
import NotFoundPage from './pages/notFound/notFoundPage';
import SignInPage from './pages/signIn/signInPage';
import DemoStoryPage from './pages/story/demoStoryPage';
import StoryPage from './pages/story/storyPage';
import UserDashboardPage from './pages/userDashboard/userDashboardPage';
import WelcomePage from './pages/welcome/welcomePage';

const Router = () => (
  <HashRouter basename='/'>
    <Switch>
      <Route exact path="/" component={WelcomePage}/>
      <Route path={`/${RouteNames.signin}`} component={SignInPage}/>
      <Route path={`/${RouteNames.dashboard}`} component={UserDashboardPage}/>
      <Route path={`/${RouteNames.newStory}`} component={NewStoryPage}/>
      <Route path={`/${RouteNames.story}`} component={StoryPage}/>
      <Route path={`/${RouteNames.demoStory}`} component={DemoStoryPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </HashRouter>
);

const RouteNames = {
  signin: 'signin',
  dashboard: 'dashboard',
  newStory: 'newStory',
  story: 'story',
  demoStory: 'demoStory',
};

export const Routes = {
  signin: `#${RouteNames.signin}`,
  dashboard: `#${RouteNames.dashboard}`,
  newStory: `#${RouteNames.newStory}`,
  story: `#${RouteNames.story}`,
  demoStory: `#${RouteNames.demoStory}`,
};

export default Router;