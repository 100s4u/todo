import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './Todo/Todo.js';
import 'antd/dist/antd.css';

ReactDOM.render(
	<React.StrictMode>
		<Todo />
	</React.StrictMode>,
	document.getElementById('root')
);
