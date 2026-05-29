# Webapp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Deployment

This project is deployed to **GitHub Pages** automatically via GitHub Actions.

### Live URL

```
https://ahmadpasha7798.github.io/Angular-Portfolio/
```

### How it works

The workflow file at `.github/workflows/deploy.yml` runs on every push to `main`:

1. Checks out the code
2. Installs Node.js dependencies with `npm ci`
3. Builds the app with `ng build --base-href /Angular-Portfolio/`
4. Uploads the built files from `dist/webapp/browser/` as a GitHub Pages artifact
5. Deploys the artifact to GitHub Pages

### GitHub Pages configuration (one-time setup)

1. Go to **Settings → Pages** in the repository
2. Under **Source**, select **GitHub Actions**
3. Save — no branch or folder selection needed

### Triggering a deployment

Push any commit to the `main` branch. The workflow starts automatically and the site is usually live within 2–3 minutes.

### Deep-link routing

The app uses Angular's HTML5 router. A `404.html` redirect script is included in `public/` so that navigating directly to any route (e.g. `/Angular-Portfolio/forms`) works correctly even after a hard refresh or shared link.

### Building locally

```bash
npm ci
ng build --base-href /Angular-Portfolio/
```

Output lands in `dist/webapp/browser/`.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
