import {
	V1Container,
} from '../v1/V1Container';

import {
	V2Container,
} from '../v2/V2Container';

import {
	V3Container,
} from '../v3/V3Container';

import {
	V4Container,
} from '../v4/V4Container';

export const versions: any[] = [
	V1Container,
	V2Container,
	V3Container,
	V4Container,
];

export const latestVersion: number = 4;
