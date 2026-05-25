# User Practice API Playwright Tests

Boilerplate Playwright API tests for the local User Practice API.

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

Run the Playwright tests from this project:

```bash
cd /Users/sinc/repo/interview-q-plw
npm test
```

## Environment

Defaults:

```text
API_BASE_URL=http://localhost:3015
ADMIN_SECRET=1001
```

Override when needed:

```bash
API_BASE_URL=https://interview.sinccloud.com ADMIN_SECRET=1001 npm test
```

## What Is Included

- `tests/api/users.spec.js`: working examples for `/health`, `/create`, `/update`, and `/verify`
- `tests/api/tester-todos.spec.js`: TODO placeholders where testers create more cases
- `tests/helpers/apiClient.js`: small helpers for creating users and updating phone numbers

The TODO file intentionally contains passing placeholders so the boilerplate runs cleanly before testers fill in their own assertions.
