import React from 'react';
import { AppCtx } from '../../core/AppCtx';

type Context = {
  url: string;
  author: string;
  name: string;
};

function forms(): JSX.Element {
  const appContext = React.useContext<Context>(AppCtx);
  return (
    <div>
      Url: {appContext.url}
      <form
        // ref={formRef}
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
          const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: number };
          };
          const email = target.email.value; // typechecks!
          const password = target.password.value; // typechecks!
          // etc...
          if (typeof password !== 'number') {
            return alert('Password must be number');
          }
          alert(`${email} tipo string e ${password} tipo number`);
        }}
      >
        <div>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
        </div>
        <div>
          <input type="submit" value="Log in" />
        </div>
      </form>
    </div>
  );
}

export default forms;
