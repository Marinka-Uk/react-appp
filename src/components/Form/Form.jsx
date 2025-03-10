import { Component } from 'react';
export class Form extends Component {
    state = {
        login: '',
        email:'',
        telephone:''

    }
    handleChange = e =>{
// console.log(e.target);
// console.log(e.target.value);
// console.log(e.target.name);

this.setState({[e.target.name]:e.target.value})
    }
  render() {
    return (
      <form autoComplete='off' validate>
     <label>login<input type='text' name='login' value={this.state.login}  onChange={this.handleChange}/>
     
     </label><br/>
     <label>email<input type='mail' name='email'  value={this.state.email}  onChange={this.handleChange}/>

     </label><br/>
     <label>tel<input type='tel' name='telephone' value={this.state.telephone}  onChange={this.handleChange}/>

     </label><br/>
        <button type="submit">Send</button>
      </form>
    );
  }
}
