import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/shared/header'
import SearchMovie from './components/movies/searchMovie'
import Favourite from './components/movies/favourite'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'

class App extends React.Component {

render(){
    return (
        <div>
            <Header />
            <BrowserRouter>
                <Route path="/" exact component={SearchMovie} />
                <Route path="/favourite" component={Favourite} />
            </BrowserRouter>
        </div>
    )
}
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);