interface GameCart
	extends Array<{
		id: number;
		numbers: Array<string>;
		type: string;
		price: number;
		color: string;
		total: number;
		minCartValue: number;
	}> {}

export default GameCart;
