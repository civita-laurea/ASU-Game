import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class QuizzesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            question: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            answer: '',
        }
    }

    handleChangeInputQuestion = async event => {
        const question = event.target.value
        this.setState({ question })
    }

    handleChangeInputOption1 = async event => {
        const option1 = event.target.value
        this.setState({ option1 })
    }

    handleChangeInputOption2 = async event => {
        const option2 = event.target.value
        this.setState({ option2 })
    }

    handleChangeInputOption3 = async event => {
        const option3 = event.target.value
        this.setState({ option3 })
    }

    handleChangeInputOption4 = async event => {
        const option4 = event.target.value
        this.setState({ option4 })
    }

    handleChangeInputAnswer = async event => {
        const answer = event.target.value
        this.setState({ answer })
    }

    handleIncludeQuiz = async () => {
        const { question, option1, option2, option3, option4, answer } = this.state
        const payload = { question, option1, option2, option3, option4, answer }

        await api.insertQuiz(payload).then(res => {
            window.alert(`Quiz inserted successfully`)
            this.setState({
                question: '',
                option1: '',
                option2: '',
                option3: '',
                option4: '',
                answer: '',
            })
        })
    }

    render() {
        const { question, option1, option2, option3, option4, answer } = this.state
        return (
            <Wrapper>
                <Title>Create Quiz</Title>

                <Label>Question: </Label>
                <InputText
                    type="text"
                    value={question}
                    onChange={this.handleChangeInputQuestion}
                />

                <Label>Option1: </Label>
                <InputText
                    type="text"
                    value={option1}
                    onChange={this.handleChangeInputOption1}
                />

                <Label>Option2: </Label>
                <InputText
                    type="text"
                    value={option2}
                    onChange={this.handleChangeInputOption2}
                />

                <Label>Option3: </Label>
                <InputText
                    type="text"
                    value={option3}
                    onChange={this.handleChangeInputOption3}
                />

                <Label>Option4: </Label>
                <InputText
                    type="text"
                    value={option4}
                    onChange={this.handleChangeInputOption4}
                />

                <Label>Answer: </Label>
                <InputText
                    type="text"
                    value={answer}
                    onChange={this.handleChangeInputAnswer}
                />

                <Button onClick={this.handleIncludeQuiz}>Add Quiz</Button>
                <CancelButton href={'/quizpage'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default QuizzesInsert
