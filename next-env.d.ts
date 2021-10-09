/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next/image-types/global" />

// declare module "*.css" for ts check by eslint
declare module "*.css" {
	const classes: { [key: string]: string };
	export default classes;
}


// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
