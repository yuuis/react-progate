import * as React from 'react';

import {Main} from './Main';
import {Header} from './Header';
import {Footer} from './Footer';
import {ContactForm} from './ContactForm';

export const App = () => {
    return (
        <div>
            <Header />
            <Main />
            <ContactForm />
            <Footer />
        </div>
    );
}
