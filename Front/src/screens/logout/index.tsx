import { authenticationAction, recentGamesPlayedAction } from '../../store';

import { useDispatch } from 'react-redux';

const Logout = () => {
	const dispatch = useDispatch();
	dispatch(authenticationAction.logout());
	dispatch(recentGamesPlayedAction.reset());
	return <> </>;
};

export default Logout;
