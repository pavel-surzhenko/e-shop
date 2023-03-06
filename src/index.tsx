import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { App } from './App'
import './index.css'
import { store } from './redux/init/store';

render(
        <Provider store = { store }>
            <App />
        </Provider>,
        document.getElementById('root'),
        () => {
            // eslint-disable-next-line no-console
        console.log('%c Приложение успешно запущено ', 'background: #00ff00; color: #000000; padding: 2.5px;');
    },

)
