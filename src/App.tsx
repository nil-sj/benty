import { AppRouter } from './app/router';
import { ProgressProvider } from './context/ProgressContext';
import './styles/global.css';

function App() {
  return (
    <ProgressProvider>
      <AppRouter />
    </ProgressProvider>
  );
}

export default App;
