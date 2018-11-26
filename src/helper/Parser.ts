export function getFileLocation(date: string, postName: string, fileName: string = "") : string {
    const  folderLocation = `${date}_${postName}`;
    return `${folderLocation}/${fileName}`;
}
