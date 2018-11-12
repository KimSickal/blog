import { Style } from 'src/models/Style';

export const styles = {
    artwork: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        margin: '10px',
        marginTop: '0px',
        paddingTop: '10px',
        paddingBottom: '10px',
        borderRadius: '5px',
        paddingLeft: '100px',
        paddingRight: '100px',
    } as Style,

    title: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '10px',
        marginBottom: '10px',
    } as Style,

    title_h2: {
        display: 'flex',
        margin: '0px',
    } as Style,

    markdown: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderTopStyle: 'solid',
        borderTopWidth: '2px',
        borderTopColor: '#868e96',
        paddingBottom: '10px',
        paddingTop: '10px',
    } as Style,

    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderTopStyle: 'solid',
        borderTopWidth: '2px',
        borderTopColor: '#868e96',
        paddingBottom: '10px',
        paddingTop: '10px',
    } as Style,

    content_img: {
        display: 'flex',
        marginBottom: '10px',
        maxWidth: '100%',
    } as Style,

}