# My React App Boilerplate

## Prerequisites:

-   Node.js LTS version

## Start local dev environment

Install npm dependencies:

```zsh
yarn
```

Then you can use following command to start dev environment for frontend:

```zsh
yarn start
```

## Repository Structure

-   `frontend`
    -   `public`: Contains html skeleton of the application, can edit meta tags, icons, titles, ...
    -   `src`: Contains source code
        -   `pages`: Contains app's main page
        -   `components`: Contains components used in the app, component folders are named after pages
        -   `styles`: Contains global.scss
        -   `types`: Contains TypeScript common custom type
        -   `utils`: Contains common utility functions
        -   `constants`: Contants common const values
        -   `redux`: Contains Redux's store and Redux's hooks
    -   `index.tsx`: App entry
    -   `routes.tsx`: Contains app's url mapping (using React Router)
    -   And a lot of config, including `craco` , `ESLint`, `Prettier`, `TailwindCSS`, ...

## Tools used

### **CRACO**

Create React App Configuration Override is an easy and comprehensible configuration layer for create-react-app.

[Go To Documentation](https://github.com/gsoft-inc/craco)

### **TailwindCSS**

A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

[Go To Documentation](https://tailwindcss.com/docs)

### **React Redux**

Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.

[Go To Documentation](https://redux.js.org/introduction/getting-started)

### **ESLint**

A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. Maintain your code quality with ease.

[Go To Documentation](https://eslint.org/docs/user-guide/getting-started)

### **Prettier**

An opinionated code formatter; Supports many languages; Integrates with most editors.

[Go To Documentation](https://prettier.io/docs/en/index.html)

### **lint-staged**

The concept of lint-staged is to run configured linter (or other) tasks on files that are staged in git.

[Go To Documentation](https://github.com/okonet/lint-staged)

### **Husky**

Husky improves your commits and more 🐶 woof!

You can use it to lint your commit messages, run tests, lint code, etc... when you commit or push. Husky supports all Git hooks.

[Go To Documentation](https://typicode.github.io/husky/#/)

# License

MIT

# Contributing

Please follow below guideline when contributing to this project

-   Conventional commit: https://www.conventionalcommits.org/en/v1.0.0/
