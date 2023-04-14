import ReactDOM from 'react-dom/client';
import 'react-calendar/dist/Calendar.css'
import 'semantic-ui-css/semantic.min.css'
import './app/layout/styles.css';
import reportWebVitals from './reportWebVitals';
import { store, StoreContext } from './stores/store';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/Routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StoreContext.Provider value={store}>
    <RouterProvider router={router} />
  </StoreContext.Provider>
);
reportWebVitals();
