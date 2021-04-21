import React from 'react';
import '../App.css';

class UploadFile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { file: null };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onFormSubmit(event) {
        const URL = 'http://localhost:3001/quizzes';
        event.preventDefault();
        const formData = new FormData();
        formData.append('uploaded_file', this.state.file);
        fetch(URL, {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: formData
        })
            .then(function(response) {
                alert('Successfully uploaded file');
                console.log(response.json());
            })
            .catch(function(err) {
                alert(`Failed to upload the file: ${err}`);
            });

    }

    onChange(event) {
        this.setState({ file: event.target.files[0] });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h2>Upload Quiz File</h2>
                <input type="file" name="uploaded_file" onChange={this.onChange} />
                <button type="submit">Upload Quiz</button>
            </form>
        )
    }
}

export default UploadFile;
