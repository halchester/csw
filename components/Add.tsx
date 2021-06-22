import React, { Dispatch, SetStateAction } from 'react';
import { Formik } from 'formik';
import shortid from 'shortid';
import { IUserdata } from '../interfaces/index';

let formikInitialValues = {
	name: 'Chester',
	age: 18,
	gender: 'M',
};

interface Props {
	setUserdata: Dispatch<SetStateAction<IUserdata[]>>;
}

export const Add = ({ setUserdata }: Props) => {
	return (
		<div className='max-w-md px-4 py-12 mx-auto'>
			<Formik
				initialValues={formikInitialValues}
				onSubmit={async ({ name, age, gender }) => {
					const payload = {
						name,
						age,
						gender,
						id: shortid.generate(),
					};
					setUserdata((prev: IUserdata[]) => prev.concat(payload));
				}}
			>
				{({ values, handleChange, handleBlur, handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<div className='mb-2 mt-3'>
							<label className='block text-gray-700 text-sm font-semibold mb-2'>
								Name
							</label>
							<input
								id='name'
								onChange={handleChange}
								type='text'
								value={values.name}
								className='w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 font-body'
							/>
						</div>
						<div className='mb-2 mt-3'>
							<label className='block text-gray-700 text-sm font-semibold mb-2'>
								Age
							</label>
							<input
								value={values.age}
								id='age'
								onChange={handleChange}
								type='number'
								className='w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 font-body'
							/>
						</div>
						<div className='mb-2 mt-3'>
							<label className='block text-gray-700 text-sm font-semibold mb-2'>
								Gender
							</label>
							<select
								value={values.gender}
								id='gender'
								onChange={handleChange}
								className='w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 font-body'
							>
								<option value='M'>M</option>
								<option value='F'>F</option>
							</select>
						</div>
						<button
							type='submit'
							onClick={() => handleSubmit}
							className='w-full mt-2 font-body justify-self-auto self-center border border-gray-400 p-1 rounded-lg px-3 '
						>
							Add
						</button>
					</form>
				)}
			</Formik>
		</div>
	);
};
