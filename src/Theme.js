import { pink, purple } from '@mui/material/colors';
import {createTheme} from '@mui/material/styles';

const Theme=createTheme({
    palette:{
      primary:{
        main:pink[500]
      },
      secondary:{
        main:purple[500]
      },
    },
  });
  export default Theme;