import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { State } from '../store';

interface PrivateRouteProps extends RouteProps {
	// tslint:disable-next-line:no-any
	component: any;
}

export const ProtectedRoute = (props: PrivateRouteProps) => {
	const { authenticated } = useSelector((state: State) => state.authentication);
	const { component: Component, ...rest } = props;
	return (
		<Route
			{...rest}
			render={(props) => {
				if (authenticated) {
					//Autenticado
					return <Component children {...props} />;
				} else {
					//Não Autenticado
					return (
						<Redirect
							to={{
								pathname: '/login', //retorna para a pagina de login
								state: {
									from: props.location,
								},
							}}
						/>
					);
				}
			}}
		/>
	);
};
