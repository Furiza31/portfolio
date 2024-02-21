// eslint-disable-next-line @typescript-eslint/ban-types
export const debounce = (func: Function, delay: number): Function => {
	let timerId: ReturnType<typeof setTimeout>;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return function (this: any, ...args: any[]) {
		if (timerId) {
			clearTimeout(timerId);
		}

		timerId = setTimeout(() => {
			func.apply(this, args);
		}, delay);
	};
};
