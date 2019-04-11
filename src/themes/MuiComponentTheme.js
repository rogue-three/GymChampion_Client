import { createMuiTheme } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";

const theme = createMuiTheme({
  palette: {
    main: teal[50],
    background: {
      default: teal[300]
    }
  },
  typography: {
    useNextVariants: true
  }
});

export default theme;
