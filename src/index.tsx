import './renderer';
import './style.css';

import Overlay from './overlay';
import React from 'react';
import { createRoot } from 'react-dom/client';

createRoot(
    document.getElementById('container'),
).render(<Overlay />);

console.log('Ready!');