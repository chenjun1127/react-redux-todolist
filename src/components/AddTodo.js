/**
 * Created by 0easy-23 on 2017/8/15.
 */
import React, {Component} from 'react';
import {addTodo} from '../actions/index';
export default class extends Component {
    render() {
        const {dispatch} = this.props;
        return (
            <div className="inner">
                <form onSubmit={e => {
                    e.preventDefault();
                    if (!this.input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(this.input.value));
                    this.input.value = ''
                }}>
                    <input type="text" placeholder="React-Redux Todolist" ref={node => {
                        this.input = node
                    }}/>
                    <button type="submit">
                        Add Todo
                    </button>
                </form>
            </div>
        )
    }
}
