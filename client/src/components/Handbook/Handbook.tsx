import '../../scss/Handbook.scss';
import { Agriculture } from './Agriculture';
import { WorkTypes } from './WorkTypes';

export function Handbook() {
	return (
		<div className='handbook'>
			<h2 className='handbook__title'>Актуальний список статей</h2>
			<div className='handbook__navigation'>
				<Agriculture />
				<WorkTypes />
			</div>
		</div>
	);
}
