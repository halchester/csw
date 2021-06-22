import * as React from 'react';
import { data } from '../../data';
import {
	ResponsiveContainer,
	PieChart,
	Pie,
	Tooltip,
	BarChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Bar,
} from 'recharts';
import { countMaleFemale, sortByAge } from '../lib/helper';
import { Add } from './Add';
import { IUserdata } from '../interfaces/index';

export const Charts = () => {
	const [userdata, setUserdata] = React.useState<IUserdata[]>(data);

	return (
		<>
			<div className='flex flex-row justify-around items-center'>
				<ResponsiveContainer width='30%' height={250}>
					<PieChart width={730} height={250}>
						<Pie
							data={countMaleFemale(userdata)}
							dataKey='total'
							nameKey='gender'
							cx='50%'
							cy='50%'
							outerRadius={50}
							fill='#e8902c'
							label
						/>
						<Tooltip />
					</PieChart>
				</ResponsiveContainer>
				<ResponsiveContainer width='50%' height={250}>
					<BarChart width={730} height={250} data={sortByAge(userdata)}>
						<CartesianGrid />
						<XAxis dataKey='title' />
						<YAxis dataKey='total' />
						<Bar dataKey='total' fill='#e8902c' />
						<Tooltip />
					</BarChart>
				</ResponsiveContainer>
			</div>
			<Add setUserdata={setUserdata} />
		</>
	);
};
