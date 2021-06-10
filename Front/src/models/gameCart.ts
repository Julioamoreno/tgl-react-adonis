interface GameCart
	extends Array<{
		selectedNumbers: Array<string>;
		date: string;
		type: string;
		price: number;
		color: string;
		total: number;
		complete: boolean;
		minCartValue: number;
	}> {}

export default GameCart;
