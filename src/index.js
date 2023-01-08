import { createRoot } from 'react-dom/client';
import App from "/src/App";

const container = document.getElementById('root');
const root = createRoot(container);

// Check if content is loaded then remove transition class
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("body").classList.remove("remove-transition", "init-loading-pending");
});

root.render(<App />);