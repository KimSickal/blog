import * as React from 'react';

import {
	Style
} from './Style';

import {
	defaultText
} from 'src/constants/text';

export interface Post {
	date: string;
	name: string;
	title: string;
	images: string[];
	type: PostKeys;
}

export enum PostKeys {
	POST = 'POST',
	ARTWORK = 'ARTWORK',
}

export function requireData(): Post[] {
	return require('../data/data.json').sort((a: Post, b: Post) => a.date === b.date ? 0 : (a.date > b.date ? -1 : 1));
}

function requireFileOfPost(post: Post, fileName: string, extension: string = "") {
	return require(`../data/posts/${getFileLocation(post, fileName, extension)}`);
}

function getFileLocation(post: Post, fileName: string, extension: string = ""): string {
	return `${getFolderLocation(post)}${fileName}${extension}`;
}


function getFolderLocation(post: Post): string {
	return `${post.date}_${post.name}/`;
}

export function loadMarkdown(post: Post) {
	return fetch(requireFileOfPost(post, post.name, '.md'));
}

export function loadImagesToComponent(post: Post, style: Style | null = null): React.ReactFragment {
	return (
		getImages(post).map((imageName, i) => {
			return (
				<img
					style={style === null ? {} : style}
					src={requireFileOfPost(post, imageName)}
					key={i}
					onClick={()=>window.open(requireFileOfPost(post, imageName))}
				/>
			);
		})
	)
}

function returnAfterNullcheck(obj: any, defaultValue: any): any {
	if (obj === null || obj === undefined) {
		return defaultValue;
	}
	return obj;
}

export function getTitle(post: Post): string {
	return returnAfterNullcheck(post.title, defaultText.title);
}

export function getImages(post: Post): string[] {
	return returnAfterNullcheck(post.images, []);
}

export function getPostType(post: Post): string {
	return returnAfterNullcheck(post.type, defaultText.type);
}

export function getDate(post: Post): string {
	return returnAfterNullcheck(post.date, Date.now.toString());
}