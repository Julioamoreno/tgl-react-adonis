interface GamePlayed
	extends Array<{
		selectedNumbers: Array<string>;
		date: string;
		type: string;
		price: number;
		color: string;
	}> {}

export default GamePlayed;
