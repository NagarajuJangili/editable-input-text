import {Component} from 'react'

import './index.css'

class EditForm extends Component {
  state = {userInput: '', formShow: true}

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  clickEdit = () => {
    this.setState({formShow: true})
  }

  clickSave = () => {
    this.setState({formShow: false})
  }

  formCard = () => {
    const {userInput} = this.state

    return (
      <div className="row-card">
        <input
          type="text"
          className="input-bar"
          onChange={this.onChangeInput}
          value={userInput}
        />
        <button type="button" className="button" onClick={this.clickSave}>
          Save
        </button>
      </div>
    )
  }

  textCard = () => {
    const {userInput} = this.state

    return (
      <div className="row-card">
        <p className="text">{userInput}</p>
        <button type="button" className="button" onClick={this.clickEdit}>
          Edit
        </button>
      </div>
    )
  }

  render() {
    const {formShow} = this.state

    return (
      <div className="bg-container">
        <div className="result-card">
          <h1 className="heading">Editable Text Input</h1>
          {formShow ? this.formCard() : this.textCard()}
        </div>
      </div>
    )
  }
}

export default EditForm
