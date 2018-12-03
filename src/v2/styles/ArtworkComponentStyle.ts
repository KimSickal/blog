import { Style } from 'src/models/Style';

export const styles = {
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
    } as Style,

    title: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '40px',
    } as Style,

    title_p: {
        margin: '0px',
        fontSize: '20px',
        maxWidth: '100%',
    } as Style,

    summary: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '20px',
        paddingBottom: '30px',
        borderBottom: '2px solid #ced4da',
    } as Style,

    summary_p: {
        margin: '0px',
        color: '#868e96',
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
}