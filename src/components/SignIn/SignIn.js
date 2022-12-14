import React from "react";


const SignIn = () => {
  return (
    <article className="br3 ba dark-gray b--black-40 mv4 w-100 w-50-m w-25-l mw6 shadow-2 center">
      <main className="pa4 black-80">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="black f3 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f4" for="email-address">Email</label>
              <input 
                className="pa2 input-reset br2 ba bg-transparent hover-bg-mid-gray hover-white w-100" type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f4" for="password">Password</label>
              <input
                className="b pa2 input-reset br2 ba bg-transparent hover-bg-mid-gray hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
            />
          </div>
          <div className="lh-copy mt3">
            <a href="#0" className="f6 link dim black db">Sign up</a>
          </div>
        </form>
      </main>
    </article>
  );
}

export default SignIn;