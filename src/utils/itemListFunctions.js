export const hideButtons = (
	statePosition,
	percentage,
	stateBtnLeft,
	stateBtnRight
) => {
	if (statePosition === 0) {
		stateBtnLeft(true);
	} else {
		stateBtnLeft(false);
	}
	if (statePosition === percentage) {
		stateBtnRight(true);
	} else {
		stateBtnRight(false);
	}
};

export const moveLeft = (statePosition, setState) => {
	let valueToMove = statePosition + 100;

	if (statePosition < 0) {
		setState(valueToMove);
	}
};

export const moveRight = (statePosition, percentage, setState) => {
	let valueToMove = statePosition - 100;

	if (statePosition > percentage) {
		setState(valueToMove);
	}
};
