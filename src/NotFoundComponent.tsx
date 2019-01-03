import * as React from 'react';

import {
	styles,
} from './NotFoundComponentStyle';

export class NotFoundComponent extends React.Component {
	public render() {
		return (
			<div
				style={styles.container}
			>
				<p
					style={styles.text404}
				>
					{'404'}
				</p>
				<p
					style={styles.text}
				>
					{'Page not found'}
				</p>
			</div>
		);
	}
}
