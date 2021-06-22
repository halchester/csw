import { IUserdata } from '../interfaces/index';

/**
 * countMaleFemale functions takes array and returns an array of manipulated objects to display on UI
 * @param {IUserdata[]} data
 */

export const countMaleFemale = (data: IUserdata[]) => {
	let male = 0,
		female = 0;
	data.map((person) => (person.gender === 'M' ? (male += 1) : (female += 1)));
	return [
		{ gender: 'male', total: male },
		{ gender: 'female', total: female },
	];
};

/**
 * sortByAge functions takes array and returns an array of manipulated objects to display on UI
 * @param {IUserdata[]} data
 */

export const sortByAge = (data: IUserdata[]) => {
	let youngAdults = 0,
		adults = 0,
		seniors = 0;

	data.map((person) => {
		if (person.age > 0 && person.age <= 35) {
			youngAdults += 1;
		}
		if (person.age > 35 && person.age <= 50) {
			adults += 1;
		}
		if (person.age > 50) {
			seniors += 1;
		}
	});

	return [
		{ title: 'Young Adults', total: youngAdults },
		{ title: 'Adults', total: adults },
		{ title: 'Seniors', total: seniors },
	];
};
