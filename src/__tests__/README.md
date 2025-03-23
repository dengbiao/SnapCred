# SnapCred Testing Documentation

This directory contains all the tests for the SnapCred application. We use Jest and React Testing Library for unit and integration testing.

## Test Structure

The test directory structure mirrors the application structure:

```
__tests__/
├── app/              # Tests for app components
│   ├── components/   # Tests for components
│   ├── pages/        # Tests for pages
│   └── routes/       # Tests for routing
├── domain/           # Tests for domain logic
├── infrastructure/   # Tests for infrastructure
├── utils/            # Tests for utility functions
├── types/            # TypeScript type definitions
├── test-utils.tsx    # Testing utilities
└── README.md         # This file
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode (during development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Testing Guidelines

1. **Component Tests**:

   - Test the component renders correctly
   - Test user interactions (clicks, form inputs, etc.)
   - Mock external dependencies and services

2. **Utility Function Tests**:

   - Test all edge cases
   - Test both valid and invalid inputs
   - Aim for high coverage

3. **Test Naming Conventions**:

   - Use descriptive test names with the format `[component/function].[test|spec].tsx`
   - Inside test files, use descriptive `describe` and `it` blocks

4. **Mocking**:
   - Use `jest.mock()` for external dependencies
   - Use `jest.fn()` for function mocks
   - Keep mocks as simple as possible

## Best Practices

- Keep tests focused and isolated
- Clean up after tests using `afterEach()` or `afterAll()`
- Use `data-testid` attributes sparingly; prefer using accessible roles
- Use the `test-utils.tsx` utilities to simplify test setup

## Coverage Goals

We aim for:

- 80% coverage overall
- 90% coverage for critical business logic
- 70% coverage for UI components

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Library Cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet)
