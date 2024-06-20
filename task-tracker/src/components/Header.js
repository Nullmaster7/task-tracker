import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1> {title} </h1>
            {location.pathname === '/' && <Button
                color={showAdd ? 'darkRed' : 'green'}
                text={showAdd ? 'Close' : 'Add'}
                onClick={onAdd} />}
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header

// If we want to create a class based component :
// import React from 'react'

// class App extends React.Component {
// render() {
// return <h1>hi<h1>
// }
// }
// export default App