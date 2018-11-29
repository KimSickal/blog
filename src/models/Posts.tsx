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
    return require('../data/data.json');
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
                />
            );
        })
    )
}

export function getTitle(post: Post): string {
    if(post.title === null || post.title === undefined){
        return defaultText.title;
    }
    return post.title;
}

export function getImages(post: Post): string[] {
    if(post.images === null || post.images === undefined){
        return [];
    }
    return post.images;
}