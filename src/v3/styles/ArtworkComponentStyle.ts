import { Style } from 'src/models/Style';

export const styles: { [key: string]: Style } = {
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
        marginTop: '30px',
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
    } as Style,

    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
    } as Style,

    division: {
        paddingBottom: '40px',
        borderBottom: '2px solid #ced4da',
    } as Style,
}