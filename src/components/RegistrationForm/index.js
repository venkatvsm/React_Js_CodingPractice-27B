// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    name: '',
    password: '',
    formISsubmitted: false,
    nameEmpty: false,
    passwordEmpty: false,
  }

  nameblurevent = () => {
    const {name} = this.state
    if (name === '') {
      this.setState({nameEmpty: true})
    } else {
      this.setState({nameEmpty: false})
    }
  }

  passwordlurevent = () => {
    const {password} = this.state
    if (password === '') {
      this.setState({passwordEmpty: true})
    } else {
      this.setState({passwordEmpty: false})
    }
  }

  anotherResponse = () => {
    this.setState({formISsubmitted: false})
  }

  submitForm = event => {
    const {name, password} = this.state
    event.preventDefault()
    if (password !== '' && name !== '') {
      this.setState({formISsubmitted: true, name: '', password: ''})
    } else {
      if (name === '') {
        this.setState({nameEmpty: true})
      }
      if (password === '') {
        this.setState({passwordEmpty: true})
      }
    }
  }

  onChangeNameEvent = event => {
    this.setState({name: event.target.value})
  }

  onChangepasswordEvent = event => {
    this.setState({password: event.target.value})
  }

  renderingResult = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="successImage"
      />
      <p className="successpara">Submitted Successfully</p>
      <button
        className="submitBtn btnEl2"
        type="submit"
        onClick={this.anotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  renderingForm = () => {
    const {name, password, nameEmpty, passwordEmpty} = this.state
    const colorChangeName = nameEmpty ? 'inputerror' : null
    const colorChangePwd = passwordEmpty ? 'inputerror' : null

    return (
      <>
        <label className="label" htmlFor="name">
          FIRST NAME
        </label>
        <input
          type="text"
          value={name}
          placeholder="First name"
          className={`Inputsearch ${colorChangeName}`}
          id="name"
          onBlur={this.nameblurevent}
          onChange={this.onChangeNameEvent}
        />
        {nameEmpty ? <p className="errormsg">Required</p> : null}
        <label className="label" htmlFor="passwordEl">
          LAST NAME
        </label>
        <input
          type="text"
          value={password}
          placeholder="Last name"
          className={`Inputsearch ${colorChangePwd}`}
          id="passwordEl"
          onBlur={this.passwordlurevent}
          onChange={this.onChangepasswordEvent}
        />
        {passwordEmpty ? <p className="errormsg">Required</p> : null}
        <button className="submitBtn" type="submit" onClick={this.submitForm}>
          submit
        </button>
      </>
    )
  }

  render() {
    const {formISsubmitted} = this.state

    return (
      <div className="bg_container">
        <h1 className="heading">Registration</h1>
        <form className="formConatiner">
          {formISsubmitted ? this.renderingResult() : this.renderingForm()}
        </form>
      </div>
    )
  }
}
export default RegistrationForm
