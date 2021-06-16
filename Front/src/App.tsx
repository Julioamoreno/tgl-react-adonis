import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from './Auth/ProtectedRoute';

import HomeScreen from './screens/Home';
import NewBetScreen from './screens/NewBet';
import AuthenticationScreen from './screens/Authentication';
import LogoutScreen from './screens/logout';
import Footer from './components/Footer';
import NotFoundScreen from './screens/404';

function App() {
	return (
		<Router>
			<Switch>
				<ProtectedRoute exact path='/' component={HomeScreen} />
				<ProtectedRoute path='/newbet' component={NewBetScreen} />
				<Route path='/login' component={AuthenticationScreen} />
				<ProtectedRoute path='/logout' component={LogoutScreen} />
				<Route path='*' component={NotFoundScreen} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
