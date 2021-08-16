import React from 'react'
import { TodoForm } from './TodoForm';
export const CreateTodo = () => {
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        history.push('/')
    }
    return (
        <div className="container">
            <div className="mt-3">
                <h3>Create Todo Item</h3>
                <TodoForm todo={todo} onSubmit={onSubmit} />
            </div>
        </div>
    )
}