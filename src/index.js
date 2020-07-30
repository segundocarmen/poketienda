import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

const RootComponent = () => (
	<Routes />
)

ReactDOM.render(
    <RootComponent />,
	document.getElementById('root')
);