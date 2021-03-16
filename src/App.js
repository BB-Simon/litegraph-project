import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import "rsuite/dist/styles/rsuite-default.css";

import theme from "./theme";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
