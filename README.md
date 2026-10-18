# Multi-step Registration Form

A Vue 3 registration wizard with username and email validation, a review screen, and a bonus description checker. Built with Vite and Tailwind CSS, with Cypress component tests.

![Registration review screen](src/assets/imgs/03-review.png)

## Form walkthrough

### 1. Personal information

Choose a username containing 4–30 characters. Letters, numbers, and underscores are allowed. Invalid values show an inline error, and **Next Step** validates the field before continuing.

![Username step](src/assets/imgs/01-username.png)

### 2. Account information

Enter an email address. The form checks its format in the browser; it does not verify that the mailbox exists. **Prev Step** returns to the username field without clearing the entered values.

![Email step](src/assets/imgs/02-email.png)

### 3. Review

Review the username and email together. Return to the previous step to edit the details, or select **Check Description.vue** to open the bonus demo below. The review screen is pictured at the top of this README.

### 4. Description checker

The bonus component checks whether parentheses `()`, square brackets `[]`, and braces `{}` are correctly paired and nested. Feedback updates after a 100 ms typing pause. For example, `{[()]}` is balanced, while `([)]` is not.

![Description checker](src/assets/imgs/04-description.png)

## Does it use an API?

**No. This is a frontend-only demo.** There is no registration endpoint, backend service, database, authentication, or email delivery. The form does not send entered data anywhere or create an account.

Username and email values live in the wizard's Vue component state. They remain available when moving between form steps, but disappear on a page reload. No local storage or cookies are used to persist them. The description checker also runs entirely in the browser.

No API keys, environment variables, or backend setup are required. To turn this into a working registration flow, add a backend endpoint, validate data on the server, and implement submission and response handling.

## Run locally

Use Node.js 20.19+ or a recent Node.js 22 release, with npm. The project was verified with Node.js 22.21.1.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

### Production build

```sh
npm run build
npm run preview
```

The build is generated in `dist/`. The preview server usually runs at `http://localhost:4173`. For deployment, serve `dist/` with an SPA fallback to `index.html` because the router uses HTML5 history.

## Tests

```sh
# Headless Cypress component tests
npm run test:unit

# Interactive Cypress component runner
npm run test:unit:dev
```

The component specs cover username and email validation, navigation, review details, and balanced/unbalanced descriptions. Cypress must have its browser binary installed; if needed, run `npx cypress install`.

The package also includes `test:e2e` and `test:e2e:dev` scripts. No end-to-end spec files are currently included; `test:e2e` expects an existing production build.

## Project structure

| Path | Purpose |
| --- | --- |
| `src/components/Wizard.vue` | Form state, validation, navigation, and review |
| `src/components/FormStepper.vue` | Clickable step indicator |
| `src/components/Description.vue` | Stack-based bracket-balance checker |
| `src/components/__tests__/` | Cypress component specs |
| `src/views/HomeView.vue` | Registration page |
| `src/router/index.js` | Home route and starter About route |
| `src/assets/main.css` | Tailwind CSS entry point |
| `src/assets/imgs/` | Screenshots of the running form |

## Current behavior and limitations

- Validation runs while typing and when selecting **Next Step**. The button remains clickable for invalid input so the form can display its error message.
- The sidebar allows jumping directly between the three main steps, including skipping validation. This is a UI demo, not an enforced registration flow.
- The review screen leads to the description demo; it has no final registration submission.
- Description text is reset when its component is left and reopened.

The original exercise focused on a three-step wizard and a separate description component. This implementation also adds responsive Tailwind styling and exposes the description demo after review.
