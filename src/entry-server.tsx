import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
export { routes, SITE_URL, structuredData } from './seo';
export { default as worker } from './worker';
export function renderPage(path:string) {return renderToString(<StrictMode><App initialPath={path}/></StrictMode>);}
