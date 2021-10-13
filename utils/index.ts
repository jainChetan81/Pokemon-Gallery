const paddedString = (index: number, length: number): string => {
	if (index > length * 10) return (index + 1).toString();
	return `00${index + 1}`.slice(-length);
};
export default paddedString;
