import { DashboardRoutes } from "./Routes/DashboardRoutes";
import { ThemeProvider } from "./context/themeContext";
import { LanguageProvider } from "./context/Language/languageContext";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <DashboardRoutes />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
