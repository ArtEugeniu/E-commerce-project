import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import App from './components/app/App.tsx'
import 'normalize.css'
import './styles/global.scss'
import '@smastrom/react-rating/style.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
    </Provider>
  </StrictMode>
)
