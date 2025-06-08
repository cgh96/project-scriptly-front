import { useTheme } from './providers/ThemeProvider';
import { GlobalStyle } from './styles/GlobalStyles.styles';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <GlobalStyle theme={theme} />
      <button type="button" onClick={toggleTheme}>
        버튼
      </button>
      <div>App Component</div>
    </>
  );
}

export default App;
