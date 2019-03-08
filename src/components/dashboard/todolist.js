import React, { Component } from 'react';
import * as actionTypes from '../../store/action';
import { connect } from 'react-redux';

class Todolist extends Component {

    constructor() {
        super();
    }

    render() {

        return (

            <div className="col-xl-6">
                <div className="card card-default todo-table" id="todo" data-scroll-height="550" style={{ 'height': '550px' }}>
                    <div className="card-header justify-content-between">
                        <h2>To Do List</h2>
                        <button className="btn btn-primary btn-pill" id="add-task" role="button" onClick={this.props.taskAdd}> Add task </button>
                    </div>
                    <div className="card-body slim-scroll scroller">
                        {this.props.addTask ?
                            <div className="todo-single-item d-none d-block" id="todo-input">

                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Enter Todo" autoFocus onKeyDown={this.props.addTaskToList} />
                                </div>

                            </div> : null
                        }
                        <div className="todo-list " id="todo-list">
                            {this.props.todoList.reverse().map((list, index) =>
                                <div className={list.status ? "todo-single-item d-flex flex-row justify-content-between finished" : "todo-single-item d-flex flex-row justify-content-between "} key={index}>
                                    <i className="mdi" onClick={this.props.finishTask.bind(this, index)}></i>
                                    <span >{list.title}</span>
                                    <span className={list.posted_on === 'Today' ? "badge badge-primary" : "badge badge-success"}>{list.added_on}</span>
                                </div>
                            )}


                        </div>
                    </div>
                    <div className="mt-3"></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        'todoList': state.todoList,
        'addTask': state.addTask
    }
}

const mapDispatchToProps = dispatch => {
    return {
        taskAdd: () => dispatch({ type: actionTypes.ADD_TASK }),
        addTaskToList: event => {

            if (event.keyCode == 13) {
                dispatch({
                    type: actionTypes.ADD_NEW_ELEMENT,
                    result: event.target.value
                });
            }

        },
        finishTask: id => dispatch({ type: actionTypes.UPDATE_TASK_STATUS, ids: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);