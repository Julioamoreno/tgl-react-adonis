import { authenticationAction } from '../../store';

import { useDispatch } from 'react-redux';

const Logout = () => {
	const dispatch = useDispatch();
	dispatch(authenticationAction.logout());
	return <> </>;
};

export default Logout;
