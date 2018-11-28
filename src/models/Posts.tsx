import * as React from 'react';
import {
    Style
} from './Style';

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

export function loadData(): Post[] {
    return require('../data/data.json');
}

export function getFileLocation(date: string, postName: string, fileName: string = "") : string {
    const  folderLocation = `${date}_${postName}`;
    return `${folderLocation}/${fileName}`;
}

export function loadMarkdown(post: Post) {
    const fileLocation = getFileLocation(post.date, post.name, `${post.name}.md`);
    return fetch(require(`../data/posts/${fileLocation}`))
}

export function loadImagesToComponent(post: Post, style: Style|null = null): React.ReactFragment {
    return (
        <React.Fragment>
            {
                post.images.map((imageName, i) => {
                    const fileLocation = getFileLocation(post.date, post.name, imageName);
                    return (
                        <img
                        style={style === null ? {} : style}
                        src={require(`../data/posts/${fileLocation}`)}
                        key={i}
                        />
                    );
                  })
            }
        </React.Fragment>
    )
}

export function getTitle(post: Post): string {
    return post.title;
}