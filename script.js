// Components

const AppComponent = {
  render: () => {
    return `
      <header>
        <h1>JavaScript Router Example</h1>
      </header>
      <section id="app"></section>
      <nav>
        <a href="#/home">Home</a>
        <a href="#/page1">Page 1</a>
        <a href="#/page2">Page 2</a>
      </nav>
    `;
  },
};

const HomeComponent = {
  render: () => {
    return `
      <section>
        <h1>Home</h1>
        <p>This is just a test of Home</p>
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
  { path: '/home', component: HomeComponent },
  { path: '/page1', component: Page1Component },
  { path: '/page2', component: Page2Component },
];

// Router

const parseLocation = () => location.hash.slice(1).toLowerCase();

const findComponentByPath = (pathRouter, routesRouter) =>
  routesRouter.find((r) => r.path.match(new RegExp(`^${pathRouter}$`))) ||
  undefined;

const router = () => {
  // Find the component based on the current path
  const path = parseLocation();
  // If there's no matching route, get the "Error" component
  const { component = ErrorComponent } =
    findComponentByPath(path, routes) || {};
  // Render the component in the "app" placeholder
  document.getElementById('app').innerHTML = component.render();
};

// Listeners

window.addEventListener('load', () => {
  if (location.hash === '') {
    location.hash = '/home';
  }
  document.getElementById('body').innerHTML = AppComponent.render();
});

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
