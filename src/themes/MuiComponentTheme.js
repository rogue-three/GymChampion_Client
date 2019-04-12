import { createMuiTheme } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";
import grey from "@material-ui/core/colors/grey";
import red from "@material-ui/core/colors/red";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[50]
    },
    secondary: {
      light: grey[50],
      main: grey[600]
    },
    background: {
      default: teal[300]
    },
    error: {
      main: red[300]
    }
  },
  typography: {
    useNextVariants: true
  }
});

export default theme;
