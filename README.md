## Dependencies

- Playwright v1.58.1
- Node v24.13.0
- npm v11.6.2


## Setting up project

Create your .env file following the [.env.example](.env.example)

Install playwright with dependencies
`npx playwright install --with-deps`


## Run the project
- `npm run test-ui` runs all ui tests with all browsers
- `npm run test-ui-c` runs all ui tests only on chromium browser
- `npm run test-ci-cd` runs all tests for github actions