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

// Router

const parseLocation = () => {
  location.hash.slice(1).toLowerCase() || '/';
};

const findComponentByPath = (path, routes) => {
  routes.find((r) => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) ||
    undefined;
};

const router = () => {
  // Find the component based on the current path
  const path = parseLocation();
  // If there's no matching route, get the "Error" component
  const { component = ErrorComponent } =
    findComponentByPath(path, routes) || {};
  // Render the component in the "app" placeholder
  document.getElementById('app').innerHTML = component.render();
};
