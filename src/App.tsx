import React from 'react'
import { Link } from '@reach/router';
import { Store } from './Store';
import './index.css';

export default function App(props):JSX.Element { 
    const { state } = React.useContext(Store);

    return (
        <header className='header'> 
            <div>
                <h1>Rick and Morty</h1>
                <p>Pick your favourite episode</p>
            </div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/faves'>Fvourite(s): {state.favourites.length}</Link>
            </div>
            {props.children}
        </header>
    )
}
