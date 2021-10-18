const paddedString = (num: number, length: number): string => {
	if (num > length * 100) return (num + 1).toString();
	return `00${num + 1}`.slice(-length);
};
export default paddedString;
