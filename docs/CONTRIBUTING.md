# Contributing to Arthur Companies Website

Thank you for your interest in contributing to the Arthur Companies website! This document provides guidelines and instructions for maintaining our high code quality standards.

## Quality Gates

All contributions must pass the following quality gates before being merged:

### 1. ESLint (@vercel/nextjs config)
- Run: `pnpm lint`
- Must pass with `--max-warnings 0`
- Fix issues with: `pnpm lint:fix`

### 2. TypeScript Strict Mode
- Run: `pnpm type-check`
- Must pass with no errors
- We use strict TypeScript settings including:
  - `noImplicitAny: true`
  - `exactOptionalPropertyTypes: true`
  - `noImplicitReturns: true`
  - `noFallthroughCasesInSwitch: true`

### 3. Test Coverage ≥ 90%
- Run: `pnpm test:coverage`
- Must achieve ≥90% coverage on branches, functions, lines, and statements
- Write tests using Vitest + React Testing Library
- Place tests in `test/` directory with `.test.tsx` or `.test.ts` extension

### 4. E2E Tests
- Run: `pnpm e2e`
- Must pass all Playwright tests
- Tests cover:
  - Homepage loads correctly
  - Navigation links work
  - 404 page renders properly
  - Contact form functionality

### 5. Build Success
- Run: `pnpm build`
- Must complete without warnings
- Uses Next.js 14 with strict TypeScript configuration

### 6. Lighthouse Scores ≥ 95
- Performance: ≥95
- Accessibility: ≥95
- Best Practices: ≥95
- SEO: ≥95
- PWA: ≥95

## Development Workflow

1. **Setup**
   \`\`\`bash
   pnpm install
   pnpm dev
   \`\`\`

2. **Before committing**
   \`\`\`bash
   pnpm doctor  # Runs all quality checks
   \`\`\`

3. **Running individual checks**
   \`\`\`bash
   pnpm lint           # ESLint
   pnpm type-check     # TypeScript
   pnpm test           # Unit tests
   pnpm test:coverage  # Coverage report
   pnpm e2e            # E2E tests
   pnpm build          # Production build
   \`\`\`

## Code Standards

### TypeScript
- Use strict TypeScript settings
- Prefer `type` over `interface` for object shapes
- Use `const` assertions where appropriate
- Avoid `any` - use proper typing

### React
- Use Server Components by default
- Client Components only when necessary (interactivity, hooks)
- Prefer composition over inheritance
- Use proper TypeScript props interfaces

### Styling
- Use shadcn/ui components only
- No custom CSS unless tokenized in `tailwind.config.ts`
- Follow responsive design principles
- Use semantic HTML elements

### Data Fetching
- Use tRPC for type-safe API calls
- Implement proper error handling
- Use React Query for client-side caching
- Validate data with Zod schemas

### Testing
- Write tests for all components and utilities
- Use React Testing Library best practices
- Mock external dependencies appropriately
- Aim for meaningful test descriptions

## File Structure

\`\`\`
├── app/                 # Next.js App Router pages
├── components/          # Reusable React components
│   └── ui/             # shadcn/ui components
├── lib/                # Utility functions and configurations
│   ├── data/           # Static data files
│   ├── trpc/           # tRPC setup and routers
│   └── validators.ts   # Zod schemas
├── test/               # Unit tests
├── e2e/                # E2E tests
└── docs/               # Documentation
\`\`\`

## Git Workflow

1. Create feature branch from `main`
2. Make changes following code standards
3. Run `pnpm doctor` to verify all quality gates pass
4. Commit with descriptive messages
5. Push and create pull request
6. Ensure CI passes before requesting review

## Common Issues

### ESLint Errors
- Import order: Use the configured import sorting
- Unused variables: Remove or prefix with underscore
- React hooks: Follow rules of hooks

### TypeScript Errors
- Missing types: Add proper type annotations
- Strict null checks: Handle undefined/null cases
- Exact optional properties: Use `?` only when truly optional

### Test Failures
- Component tests: Ensure proper mocking of dependencies
- Coverage: Add tests for uncovered branches
- E2E tests: Check for timing issues and proper selectors

## Getting Help

- Check existing issues and documentation
- Run `pnpm doctor` to identify specific problems
- Review CI logs for detailed error messages
- Ask questions in pull request comments

Remember: **Keep the gates green!** 🟢

All quality gates must pass before merging. This ensures our codebase remains maintainable, performant, and reliable.
