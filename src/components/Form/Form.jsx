import { Component } from 'react';
export class Form extends Component {
  state = {
    login: '',
    email: '',
    telephone: '',
    expirience: 'middle',
    agree: false
  };
  handleChange = e => {
    // console.log(e.target);
    // console.log(e.target.value);
    // console.log(e.target.name);

    this.setState({ [e.target.name]: e.target.value });
  };


handleCheck = e =>{
  this.setState((prevstate)=>({agree:!prevstate.agree})
)}

  render() {
    return (
      <form autoComplete="off" validate>
        <label>
          login
          <input
            type="text"
            name="login"
            value={this.state.login}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          email
          <input
            type="mail"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          tel
          <input
            type="tel"
            name="telephone"
            value={this.state.telephone}
            onChange={this.handleChange}
          />
        </label>
        <br />
      <hr/>
        <b>Ваш рівень</b><br/>
        <label>junior 
          <input type="radio" c onChange={this.handleChange} checked={this.state.expirience === "junior"}name="expirience" value="junior"/>
        </label><br/>
        <label> middle
          <input type="radio" onChange={this.handleChange} checked={this.state.expirience === "middle"} name="expirience" value="middle" />
        </label><br/>
        <label> senoir
          <input type="radio" onChange={this.handleChange} checked={this.state.expirience === "senoir"} name="expirience" value="senoir"/>
        </label><br/>
        <label> Погоджуюсь з умовами 
          <input type="checkbox" onChange={this.handleCheck} checked={this.state.agree} name="agree"/>
        </label><br/>
        <button type="submit">Send</button>
      </form>
    );
  }
}
