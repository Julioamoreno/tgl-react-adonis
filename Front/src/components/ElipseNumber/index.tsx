import React from 'react';

import { Elipse } from './styles';

const ElipseNumber: React.FC<{
	number: string;
	selectNumber: (number: string) => void;
	active: boolean;
}> = (props) => {
	return (
		<Elipse
			onClick={() => props.selectNumber(props.number)}
			aria-checked={props.active}
			role='checkbox'
			{...(props.active ? { color: 'blue' } : { color: '#adc0c4' })}
		>
			<p>{props.number}</p>
		</Elipse>
	);
};

export default ElipseNumber;
