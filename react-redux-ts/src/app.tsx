import React, { Fragment, useContext } from 'react';
import { Link } from '@reach/router';

import { Store } from '../src/store/store';

export default function App(props: any): JSX.Element {
  const { state } = useContext(Store);

  return (
    <Fragment>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: 'gold',
          fontFamily: 'Caveat',
        }}
      >
        <h1
          style={{
            backgroundColor: 'white',
            fontFamily: 'Caveat',
            width: '30%',
            height: 'auto',
            border: 'solid 3px black',
          }}
        >
          Rick & Morty episode picker
        </h1>
        {/* <div>
          <img>Logo</img>
        </div> */}

        <h4
          style={{
            backgroundColor: 'white',
            fontFamily: 'Caveat',
            width: '20%',
            height: '20%',
            border: 'solid 3px black',
            textAlign: 'center',
          }}
        >
          Pick your fave show
        </h4>
      </header>
      <nav
        style={{
          margin: '1px',
          padding: '15px',
          display: 'flex',
          justifyContent: 'space-between',
          position: 'sticky',
          backgroundColor: 'deepSkyBlue',
          fontFamily: 'Caveat',
          border: '3px solid darkSlateGray',
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/my-favourites">
          My Favourites Currently at {state.favourites.length}
        </Link>
      </nav>
      {props.children}
    </Fragment>
  );
}
