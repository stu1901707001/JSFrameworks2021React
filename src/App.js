import TVDetails from './pages/TVDetails';
import DefaultLayout from './layouts/Default';
import TVList from './pages/TVList';
import Actors from './pages/Actors';
import ActorDetails from './pages/ActorDetails';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const routes = [
  {
    path: '/actors',
    exact: true,
    main: () => <DefaultLayout>
      <Actors></Actors>
    </DefaultLayout>
  },
  {
    path: '/actor/:id',
    main: () => <DefaultLayout>
      <ActorDetails></ActorDetails>
    </DefaultLayout>
  },
  {
    path: '/tv/:id',
    main: () => <DefaultLayout>
      <TVDetails></TVDetails>
    </DefaultLayout>
  },
  {
    path: '/',
    main: () => <DefaultLayout>
      <TVList></TVList>
    </DefaultLayout>
  },
]

const getRoutes = () => {
  const routeComponents = routes.map((route, index) => {
    return <Route
      key={index}
      exact={route.exact}
      path={route.path}
    >
      {route.main}
    </Route>
  })
  return routeComponents
}


function App() {
  return (
    <Router>
      <Switch>
        {getRoutes()}
      </Switch>
    </Router>
  );
}

export default App;
