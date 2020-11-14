import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route,HashRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Subs from './sub';

const Routers = ()=>{
    return (
        <div>
            <div>
                top
            </div>
        <HashRouter>
           <Route path='/' exact component={App}></Route> 
           <Route path='/sub' exact component={Subs}></Route> 
        </HashRouter>
        <div>boottton</div>
        </div>
    );
}

const Cc = hot(module)(Routers);
ReactDOM.render(<Cc/>, document.getElementById('root'));