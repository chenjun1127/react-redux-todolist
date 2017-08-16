/**
 * Created by 0easy-23 on 2017/8/15.
 */
import React, {Component} from 'react';
export default class extends Component{
    render(){
        const {onClick,completed,text,delClick} = this.props;
        return(
            <li>
                <em onClick={onClick} className={completed ? 'selected' : null}></em>
                <p onClick={onClick} style={{
                    textDecoration: completed
                        ? 'line-through'
                        : 'none'
                }}>
                    {text}

                </p>
                <span onClick={delClick}>&times;</span>
            </li>
        )
    }
}