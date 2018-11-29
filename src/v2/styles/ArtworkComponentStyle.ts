import { Style } from 'src/models/Style';

export const styles = {
    artwork: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        margin: '10px',
        marginTop: '0px',
        marginBottom: '0px',
        padding: '20px',
        paddingLeft: '100px',
        paddingRight: '100px',
    } as Style,

    title: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    } as Style,

    title_p: {
        display: 'flex',
        margin: '0px',
    } as Style,

    markdown: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingBottom: '10px',
        paddingTop: '10px',
        borderBottomStyle: 'solid',
        borderBottomWidth: '2px',
        borderBottomColor:'#ced4da',
    } as Style,

    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '10px',
        paddingTop: '10px',
    } as Style,

    content_img: {
        display: 'flex',
        marginBottom: '10px',
        maxWidth: '100%',
    } as Style,

    summary: {
        color: '#ced4da',
    }as Style,

}