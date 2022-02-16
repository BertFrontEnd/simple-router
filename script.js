// Components

const HomeComponent = {
  render: () => {
    return `
      <section>
        <h1>Home</h1>
        <p>This is just a test</p>
      </section>
    `;
  },
};

const Page1Component = {
  render: () => {
    return `
      <section>
        <h1>Page 1</h1>
        <p>This is just a test of Page 1</p>
      </section>
    `;
  },
};

const Page2Component = {
  render: () => {
    return `
      <section>
        <h1>Page 2</h1>
        <p>This is just a test of Page 2</p>
      </section>
    `;
  },
};

const ErrorComponent = {
  render: () => {
    return `
      <section>
        <h1>Error</h1>
        <p>This is just a test of Error</p>
      </section>
    `;
  },
};

// Routes

const routes = [
  { path: '/', component: HomeComponent },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
];
