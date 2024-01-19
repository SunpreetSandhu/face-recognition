import React from "react";
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
    };
  }
  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitSignIn = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    return (
      <article class="br3 ba b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main class="pa4 white-80">
          <div class="measure">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
              <legend class="f1 fw6 ph0 mh0">Register</legend>
              <div class="mt3">
                <label class="db fw6 lh-copy f6" for="name">
                  Name
                </label>
                <input
                  class="white pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>

              <div class="mt3">
                <label class="db fw6 lh-copy f6" for="email-address">
                  Email
                </label>
                <input
                  class="white pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div class="mv3">
                <label class="db fw6 lh-copy f6" for="password">
                  Password
                </label>
                <input
                  onChange={this.onPasswordChange}
                  class="white b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div class="">
              <input
                onClick={this.onSubmitSignIn}
                class="white b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
