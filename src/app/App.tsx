import { SplitView } from '@/shared/ui/layout/FlexSplit';
import { Page } from '@/shared/ui/layout/Page';

import { useTheme } from './providers/ThemeProvider';
import { GlobalStyle } from './styles/GlobalStyles.styles';

function App() {
  const { theme } = useTheme();

  return (
    <>
      <GlobalStyle theme={theme} />
      <Page>
        <SplitView></SplitView>
      </Page>
    </>
  );
}

export default App;
