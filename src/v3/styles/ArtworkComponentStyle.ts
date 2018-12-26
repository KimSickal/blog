import {
	CSSProperties,
} from 'react';

export const styles: { [key: string]: CSSProperties} = {
	artwork: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: 'white',
		margin: '10px',
		marginTop: '0px',
		marginBottom: '0px',
		padding: '100px',
		paddingBottom: '0px',
		paddingTop: '0px',
	},

	title: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: '30px',
	},

	title_p: {
		margin: '0px',
		fontSize: '20px',
		maxWidth: '100%',
	},

	summary: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: '20px',
	},

	summary_p: {
		margin: '0px',
		color: '#868e96',
	},

	markdown: {
		display: 'flex',
		flex: '1',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		paddingBottom: '10px',
		paddingTop: '10px',
	},

	content: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: '20px',
	},

	division: {
		paddingBottom: '40px',
		borderBottom: '2px solid #ced4da',
	},
};
