import "./style/style.css"
import "./renderer/controller";

import * as React from "react";
import { createRoot } from 'react-dom/client';
import App from './views/App';
import { enable } from './renderer';

const root: HTMLDivElement = document.createElement("div");
root.classList.add("app");
document.body.appendChild(root);
createRoot(root).render(<App />);

export function removeLoader() {
    const loader = document.getElementById("loader");
    loader.classList.add("hide");
    setTimeout(() => loader.remove(), 500);
}

enable();
