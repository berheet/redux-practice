import React, {Component}  from 'react';

export default class PostForm extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            title: '',
            body: ''
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body:this.state.body
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    render(){
        return(
            <div>
                <h1>Add Post </h1>
                <form>
                    <div>
                        <label onSubmit={this.onSubmitHandler}> Title: </label> <br/>
                        <input type='text' name='title' value={this.state.title} onChange={this.onChangeHandler}/>
                        </div>
                        <div>
                            <br/>
                        <label> Body: </label> <br/>
                        <textarea name='body' value={this.state.body} onChange={this.onChangeHandler}/>
                        </div>
                        <br/>
                        <button type='submit'> Submit </button>
                    </form>
                </div>
        )
    }
}