import React from 'react';
import ReactDom from 'react-dom/client';
import App from './Components/App.jsx';

// const appElement = document.getElementById('app');

// ReactDOM.render(
//   <App />,
//   appElement
// )


ReactDom.createRoot(document.getElementById('root')).render(<App />);
// const root = ReactDom.createRoot(document.getElementById('root'));
// root.render(<App/>);