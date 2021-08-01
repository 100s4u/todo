import { Input, Button, List } from 'antd';
import state from '../state.js';



let todo_text = '';

function isTodoDone(item){
	item.target.classList.toggle('done');
}

function todoText(item){
	todo_text = item.target.value;
}

function addTodo(){
	state.push(todo_text);
	console.log(todo_text);
}


let Todo = () => {
	return(
		<div className="row">
			<div className="input__container">
				<Input className="input__container_input" onChange={todoText} placeholder="Новая задача" />
				<Button onClick={addTodo} type="submit" shape="circle">+</Button>
			</div>
			<div className="todos">
				<List
					size="small"
					className="list"
					itemLayout="horizontal"
					bordered
					dataSource={state}
					renderItem={item => 
						<List.Item className="list__item"><div className="list__item_container"><div className="list__item_container_text" onClick={isTodoDone}>{item}</div><Button type="text">&#10006;</Button></div></List.Item>
					}
				/>
			</div>
		</div>
	)
}

export default Todo;