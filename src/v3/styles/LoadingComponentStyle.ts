import {
	CSSProperties,
} from 'react';

export const styles: { [key: string]: CSSProperties} = {
	loading_spinner: {
		display: 'block',
		width: '46px',
		height: '46px',
		margin: '1px',
		borderRadius: '50%',
		border: '5px solid #e9ecef',
		borderColor: '#ced4da #e9ecef #e9ecef #e9ecef',
		animation: 'rotation 1s ease infinite',
	},
};
