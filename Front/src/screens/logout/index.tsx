import {
	authenticationAction,
	cartGameAction,
	cartTotalAction,
	gamePlayedAction,
	recentGamesPlayedAction,
} from '../../store';

import { useDispatch } from 'react-redux';

const Logout = () => {
	const dispatch = useDispatch();
	dispatch(authenticationAction.logout());
	dispatch(recentGamesPlayedAction.reset());
	dispatch(gamePlayedAction.reset());
	dispatch(cartGameAction.clearCart());
	dispatch(cartTotalAction.clear());
	return <> </>;
};

export default Logout;
