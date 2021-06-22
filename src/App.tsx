import React, { useState } from 'react';
import { Charts } from './components/Charts';

function App() {
	return (
		<div className='mt-6'>
			<p className='text-center my-8 text-2xl'>Important data</p>
			<Charts />
		</div>
	);
}

export default App;
