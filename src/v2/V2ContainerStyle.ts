import { Style } from 'src/models/Style';

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  } as Style,


  container_h1: {
    textAlign: 'center',
  } as Style,

  container_contents: {
    flexDirection: 'column',
    justifyContent: 'center',
  } as Style,

  menu: {
    display: 'flex',
    flexDirection: 'row',
  } as Style,

  menu_p: {
    flex: 1,
    textAlign: 'center',
  } as Style,
};
