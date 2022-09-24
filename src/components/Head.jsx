import React from 'react';
import {PrimarySearchAppBar} from "./Menu";

export const Head = () => {
  return (
    <section>
      <PrimarySearchAppBar/>
      <div>
        <h3>Super Sales</h3>
      </div>
      <nav>
        <ul>
          <li>Add listing</li>
          <li>Sign in</li>
        </ul>
      </nav>
    </section>
  );
};