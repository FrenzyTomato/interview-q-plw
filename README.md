# User Practice API Playwright Tests

Boilerplate Playwright API tests for the User Practice API.

## Setup

Install dependencies:

```bash
npm install
```

Start the API in the `interview-q` project:

```bash
cd /Users/sinc/repo/interview-q
npm start
```

Run the Playwright tests from this project with the required environment variables:

```bash
cd /Users/sinc/repo/interview-q-plw
API_BASE_URL=<api-url> ADMIN_SECRET=<admin-secret> npm test
```

## Environment

Required:

```text
API_BASE_URL=<api-url>
ADMIN_SECRET=<admin-secret>
```

Example command format:

```bash
API_BASE_URL=<api-url> ADMIN_SECRET=<admin-secret> npm test
```

The project intentionally has no fallback defaults. If either variable is missing, Playwright exits before running tests.

## What Is Included

- `tests/api/users.spec.js`: working examples for `/health`, `/create`, `/update`, and `/verify`
- `tests/api/tester-todos.spec.js`: TODO placeholders where testers create more cases
- `tests/helpers/apiClient.js`: small helpers for creating users and updating phone numbers

The TODO file intentionally contains passing placeholders so the boilerplate runs cleanly before testers fill in their own assertions.
