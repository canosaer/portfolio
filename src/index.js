import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Store} from './store/store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faFile, faChevronRight, faChevronLeft, } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

library.add(faLinkedinIn, faEnvelope, faFile, faChevronRight, faChevronLeft)

ReactDOM.render(
    <Store>
        <App />
    </Store>,
  document.getElementById('root')
);