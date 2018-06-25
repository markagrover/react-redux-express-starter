import React from 'react';
import ReactDOM from 'react-dom';
import Store from 'helpers/Store';

import App from 'components/App';


ReactDOM.render(
    <Store>
        <App/>
    </Store>
    ,document.getElementById('root'));

