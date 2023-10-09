import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
// import {ThemeContextProvider} from './components/ThemeProvider'

/*
1. [x] Create the context
2. [ ] Provide the context 
3. [ ] Consume the context
*/

const root = ReactDOM.createRoot(document.getElementById('root'))
.render(
  // <ThemeContextProvider>
    <App />
  // </ThemeContextProvider>,
);
