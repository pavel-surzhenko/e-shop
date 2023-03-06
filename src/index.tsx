import { render } from 'react-dom'
import { QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { queryClient } from './hooks/queryClient'
import './index.css'
import { store } from './redux/init/store'

render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </QueryClientProvider>
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
