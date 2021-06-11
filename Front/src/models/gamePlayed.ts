interface GamePlayed
	extends Array<{
		numbers: string;
		created_at: string;
		price: number;
		game: {
			type: string;
			color: string;
		};
	}> {}

export default GamePlayed;
