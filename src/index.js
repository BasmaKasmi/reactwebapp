import React from 'react';
import { createRoot } from 'react-dom/client'; // Importez createRoot à partir de react-dom/client
import App from '../src/App';

const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(<App />);
