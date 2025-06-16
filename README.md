<p align="center">
  <a href="" rel="noopener">
 <img width=90px height=90px src="./public/logo.png" alt="logo"></a>
</p>

<h3 align="center">NEXTJS 14.2.24 Boilerplate</h3>

## 📝 Table of Contents

- [📝 Table of Contents](#-table-of-contents)
- [📦 Technologies ](#-technologies-)
- [🚀 Getting Started ](#-getting-started-)
  - [Prerequisites](#prerequisites)
  - [Using Docker](#using-docker)
  - [Local Development](#local-development)
  - [Database Management](#database-management)
  - [Git Hooks with Lefthook](#git-hooks-with-lefthook)
    - [Available Hooks](#available-hooks)
    - [Using Lefthook](#using-lefthook)
    - [Customizing Hooks](#customizing-hooks)

## 📦 Technologies <a name="technologies"></a>

- **Main Framework**: Next.js 15.3.3 with App Router
- **Language**: TypeScript 5.7.3
- **Testing**:

  - Vitest 3.0.7 with @testing-library/react 16.2.0
  - Test coverage with @vitest/coverage-istanbul
  - Jest DOM for DOM testing

- **State Management**:

  - Zustand 5.0.3 for global state
  - React Hook Form 7.54.2 for forms
  - Zod 3.24.2 for schema validation

- **Styling**:

  - TailwindCSS 4.0.7
  - Class Variance Authority 0.7.1
  - Tailwind Merge for class composition

- **Code Quality**:

  - ESLint 9.20.1
  - Prettier 3.5.1
  - Lefthook for git hooks
  - Commitlint for commit standardization
  - Lint-staged for code verification

- **Database & ORM**:

  - Prisma ORM for type-safe database access
  - PostgreSQL database support
  - Database migrations and seeding
  - Type-safe database queries

- **Authentication**:

  - Auth0 for authentication and authorization
  - Multiple login providers support
  - Route protection and authentication middleware

- **Additional Features**:
  - PWA configured with next-pwa
  - Icon support with @iconify/react
  - Utility hooks with usehooks-ts
  - Ky for HTTP requests
  - Faker.js for mock data
  - Auth0 for secure authentication
  - Route protection middleware
  - Multiple login providers (Google, GitHub, etc.)
  - Docker containerization
  - Database migrations and seeding with Prisma

## 🚀 Getting Started <a name="getting-started"></a>

### Prerequisites

Before starting, you'll need to set up the following environment variables:

```env
# Auth0 Configuration

AUTH0_SECRET=""
APP_BASE_URL='http://localhost:3002'
AUTH0_DOMAIN=""
AUTH0_CLIENT_ID=""
AUTH0_CLIENT_SECRET=""

# Database Configuration
POSTGRES_DB=""
POSTGRES_USER=""
POSTGRES_PASSWORD=""
DATABASE_URL="postgresql://POSTGRES_USER:POSTGRES_PASSWORD@localhost:5432/POSTGRES_DB"
```

### Using Docker

To run the project using Docker:

```bash
# Build and start the containers
docker-compose up -d

```

### Local Development

To create a new project using this boilerplate:

```bash
npx create-next-app@15.3.3 -e https://github.com/italobarrosme/nezuko-3
```

To run the project locally:

```bash
# Install dependencies
npm install

# Set up the database
npx prisma generate
npx prisma migrate dev

# Start development server
npm run dev
```

Available scripts:

```bash
npm run dev         # Starts development server with Turbo
npm run build      # Generates production build
npm run start      # Starts production server
npm test          # Runs tests
npm run test:coverage  # Runs tests with coverage
npm run test:deploy    # Runs tests for deployment
npm run test:snapshot  # Updates test snapshots
```

### Database Management

The project uses Prisma as its ORM. Here are some useful commands:

```bash
# Generate Prisma Client
npx prisma generate

# Create a new migration
npx prisma migrate dev --name migration_name

# Reset the database
npx prisma migrate reset

# Open Prisma Studio
npx prisma studio

# Seed the database
npx prisma db seed

# Reset database and run seed
npx prisma migrate reset --seed
```

### Git Hooks with Lefthook

This project uses Lefthook to manage Git hooks. Lefthook helps maintain code quality by running checks before commits and pushes.

#### Available Hooks

The following hooks are configured in `lefthook.yml`:

```yaml
pre-commit:
  parallel: true
  commands:
    lint:
      glob: '*.{ts,tsx}'
      run: npm run lint
    type-check:
      glob: '*.{ts,tsx}'
      run: npm run type-check
    format:
      glob: '*.{ts,tsx,json,md}'
      run: npm run format

pre-push:
  parallel: true
  commands:
    test:
      glob: '*.{ts,tsx}'
      run: npm run test
    build:
      glob: '*.{ts,tsx}'
      run: npm run build
```

#### Using Lefthook

```bash
# Install Lefthook globally (optional)
npm install -g @lefthook/cli

# Run hooks manually
lefthook run pre-commit
lefthook run pre-push

# Skip hooks for a specific commit
git commit -m "your message" --no-verify

# Skip hooks for a specific push
git push --no-verify
```

#### Customizing Hooks

To modify the Git hooks:

1. Edit the `lefthook.yml` file in the project root
2. Add or remove commands as needed
3. Run `lefthook install` to update the hooks

For more information, visit the [Lefthook documentation](https://github.com/evilmartians/lefthook).
