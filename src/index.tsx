import { render } from 'react-dom'
import { QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { queryClient } from './hooks/queryClient'

import { persister, store } from './redux/init/store'

import { App } from './App'

import './index.css'
import 'material-react-toastify/dist/ReactToastify.css'

render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
            <QueryClientProvider client={queryClient}>
                <HashRouter>
                    <App />
                </HashRouter>
            </QueryClientProvider>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
    () => {
        // eslint-disable-next-line no-console
        console.log(
            '%c Приложение успешно запущено ',
            'background: #00ff00; color: #000000; padding: 2.5px;'
        )
    }
)
