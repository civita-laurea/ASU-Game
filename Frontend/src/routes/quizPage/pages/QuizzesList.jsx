import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateQuiz extends Component {
    updateUser = event => {
        event.preventDefault()
        if (
            window.confirm(
                `Do tou want to update the question ${this.props.id}?`,
            )
        ) {
            //api.deleteQuizById(this.props.id)
            window.location.href = `/quizzes/update/${this.props.id}`        
        } else {
            return false
        }
        
    }

    render() {
        return <Link to="/quizzes/update/60810f314ec4f500c0011bed" className="nav-link">
                                Edit
                            </Link>
        //return <Update onClick={this.updateUser}>Edit</Update>
    }
}

class DeleteQuiz extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the question ${this.props.id} permanently?`,
            )
        ) {
            api.deleteQuizById(this.props.id)
            window.location.href = `/quizpage/`
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class QuizzesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quizzes: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllQuizzes().then(quizzes => {
            this.setState({
                quizzes: quizzes.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { quizzes, isLoading } = this.state

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Question',
                accessor: 'question',
                filterable: true,
            },
            {
                Header: 'Option1',
                accessor: 'option1',
                filterable: true,
            },
            {
                Header: 'Option2',
                accessor: 'option2',
                filterable: true,
            },
            {
                Header: 'Option3',
                accessor: 'option3',
                filterable: true,
            },
            {
                Header: 'Option4',
                accessor: 'option4',
                filterable: true,
            },
            {
                Header: 'Answer',
                accessor: 'answer',
                filterable: true,
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteQuiz id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateQuiz id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!quizzes.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={quizzes}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default QuizzesList
