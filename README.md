# Greenspark Frontend Task

## [Netlify Deployed Application Link 👈](https://greensparktaskbyjohnny.netlify.app/)

## Foreword

As per the provided task instructions, the application aims to fulfill the stakeholder(user) requirements with _- subjetively in this case -_ production grade code.

The tech stack mentioned in the task description were my weapons of choice, with a slight change in the store state manager.

- Vue 3
- TypeScript
- Pinia _(in place of Vuex, but still using Options API structure to ensure familiarity with Vuex syntax)_
- PostCSS instead of SASS/SCSS, to keep Vite's [recommendation](https://vite.dev/guide/features.html#css-pre-processors) about preprocessors

During developent my goals were to:

1. Making industry standard, performant, quality code with adherence to fundamental coding principles. (looking at you Uncle Bob)
2. Fulfill every Technical and Non-technical task requirements.
3. Showcase my understanding regarding the JavaScript / TypeScript / VueJs ecosystem.
4. Finish within the one week timeframe.
5. Try to mirror pixel perfection design from Figma,<br />
   but lacking a preagreed design system, or exportable Figma variables, the desired accuracy is only on the acceptable side.

With temporary work contracts already agreed upon due to my recent unemplyoment, time constraint became an unexpected factor. Hence I had to opt-out from the optional unit tests and Storybook development in favor of timely delivery, just as most real life scenario would dictate on mid-to-large scale projects unfortunately.

Things I would have loved to develop, but missed due to lack of time or being out-of-scope:

- Proper `vitest` and `@vue/test-utils` suit
- Storybook
- More comprehensive Typing
- Localized measurement for the widgets impact amount units
- Mock dashboard for showcasing the modified widgets
- Add more setting options for the widgets, like sizing, variable fonts, etc.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
