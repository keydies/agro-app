import '../../scss/Handbook.scss';

export function WorkTypesIcon() {
	return (
		<svg
			className='handbook-icon'
			viewBox='0 0 16 16'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				fill='var(--ci-primary-color, currentColor)'
				d='m5.5 5c-.27614 0-.5.22386-.5.5v2c0 .27614.22386.5.5.5h5c.2761 0 .5-.22386.5-.5v-2c0-.27614-.2239-.5-.5-.5zm.5 2v-1h4v1z'
			/>
			<path
				fill='var(--ci-primary-color, currentColor)'
				d='m4.5 2c-1.38071 0-2.5 1.11929-2.5 2.5v7c0 1.3807 1.11929 2.5 2.5 2.5h7c1.3807 0 2.5-1.1193 2.5-2.5v-7c0-1.38071-1.1193-2.5-2.5-2.5zm-1.5 2.5c0-.82843.67157-1.5 1.5-1.5h7c.8284 0 1.5.67157 1.5 1.5v7c0 .8284-.6716 1.5-1.5 1.5h-7c-.82843 0-1.5-.6716-1.5-1.5z'
			/>
		</svg>
	);
}
