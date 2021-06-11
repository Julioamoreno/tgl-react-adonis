interface Games
	extends Array<{
		type: string;
		description: string;
		range: number;
		price: number;
		max_number: number;
		color: string;
		min_cart_value: number;
	}> {}

export default Games;
