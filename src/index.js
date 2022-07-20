import React from 'react';
import ReactDOM from 'react-dom/client';
import App, {MainApp} from './components/app/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* <App/> */}
    <MainApp />
  </React.StrictMode>
)
