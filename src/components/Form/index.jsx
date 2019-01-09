import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class Form extends Component {

    static propTypes = {
        onClick: PropTypes.func.isRequired,
    }

    static defaultProps = {
        onClick: () => {}
    }
     

    state = {
        inputValue: '',
        textareaValue: '',
        selectValue: '1',
    }

    _handleInputChange = e => {
        const value = e.target.value;

        this.setState({
            inputValue: value
        })
    };

    _handleTextareaChange = e => {
        const value = e.target.value;

        this.setState({
            textareaValue: value
        })
    };

    _handleSelectChange = e => {
        const value = e.target.value;

        this.setState({
           selectValue: value
        })
    };

    _handleSubmit = e => {
        e.preventDefault();

        if(this.state.inputValue === '' || this.state.textareaValue === '') {
            alert('empty field');
           return;
        }

        this.props.onFormSubmit(this.state.inputValue, this.state.textareaValue, this.state.selectValue);

        this.setState({
            inputValue: '',
            textareaValue: '',
            selectValue: '1'
        }) ;
    };


  render() {
    
    const { inputValue, textareaValue, selectValue } = this.state;
 
    return (
        <form className = "Form" onSubmit = {this._handleSubmit}>
            <label>
                <p>Title</p>
                <input type="text" value = { inputValue } onChange = { this._handleInputChange }/>
            </label>

            <label>
                <p>Description</p>
                <textarea value = { textareaValue } onChange = { this._handleTextareaChange }></textarea>
            </label>

            <label>
                <p>Rating</p>
                <select value = { selectValue } onChange = { this._handleSelectChange }>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </label>

                
            <button className = "Form__button" onClick = { this._handleSubmit }>SUBMIT</button>
        </form>
    );
  }
}