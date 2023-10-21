import Home from '../routes/home';
import { LocalizationProvider } from '../localization';

export default function App() {
  return (
    <LocalizationProvider>
      <div id="app">
        <Home />
      </div>
    </LocalizationProvider>
  );
}
