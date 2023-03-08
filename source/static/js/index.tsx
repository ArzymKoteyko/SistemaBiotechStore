import React from 'react';
import { createRoot } from 'react-dom/client';

import "../css/index.css"

import { App } from './app';

const root_element = document.getElementById('root')
if (root_element) {
    const root = createRoot(root_element)
    root.render(
        <App/>
    )
}