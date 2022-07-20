import { html } from 'lit-html';
import { Header } from './Header';
import './page.css';

export const Page = ({ user, onLogin, onLogout, onCreateAccount }) => html`
  <article>
    ${Header({
      user,
      onLogin,
      onLogout,
      onCreateAccount,
    })}

    <section>
      <h2>Pages in Storybook</h2>
      
    </section>
  </article>
`;
