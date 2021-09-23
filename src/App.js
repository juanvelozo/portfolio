import { DashboardRoutes } from "./Routes/DashboardRoutes";
import { ThemeProvider } from "./context/themeContext";
import { LanguageProvider } from "./context/Language/languageContext";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <LanguageProvider>
          <DashboardRoutes />
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
