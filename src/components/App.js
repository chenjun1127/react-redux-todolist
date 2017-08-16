import React,{Component} from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';
export default class extends Component{
    render(){
        return(
            <div className="container">
                <AddTodo/>
                <VisibleTodoList/>
                <Footer/>
            </div>
        )
    }
}