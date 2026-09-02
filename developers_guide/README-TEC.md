<div align='center'>
  <h1> Project Architecture & Technology Stack </h1>
</div>

# Table of Contents

- [File Structure Tree](#file-structure-tree)
- [Dependencies](#dependencies)
- [Technologies](#technologies)

---

# File Structure Tree

```bash
developers_guide/
└── README-TEC.md

ds_and_algo/
├── implementations/
│   ├── javascript/
│   │   ├── algorithms/
│   │   ├── data-structures/
│   │   └── README.md
│   ├── python/
│   │   ├── algorithms/
│   │   ├── data-structures/
│   │   ├── README.md
│   │   └── __init__.py
│   ├── VERSION.txt
│   └── __init__.py
│
├── interview_prep/
│   ├── leetcode/
│   │   ├── javascript/
│   │   └── python/
│   ├── questions/
│   │   └── README.md
│
├── theory/
│   ├── algorithms/
│   │   ├── divide_and_conquer/
│   │   ├── dynamic_programming/
│   │   ├── recursion/
│   │   ├── searching/
│   │   ├── shortest_path/
│   │   ├── sorting/
│   │   └── traversal/
│   ├── data_structures/
│   │   ├── arrays/
│   │   ├── bloom_filters/
│   │   ├── graphs/
│   │   ├── hash_tables/
│   │   ├── intro/
│   │   ├── pointers/
│   │   ├── queues/
│   │   ├── stacks/
│   │   ├── trees/
│   │   └── vectors/
│   └── README.md

.editorconfig
.flake8
.gitattributes
.gitignore
.pre-commit-config.yaml
.yarnrc.yml
LICENSE.md
README.md
eslint.config.cjs
package.json
pyproject.toml
uv.lock
yarn.lock
```

---

# Dependencies

- `pytest`: framework for writing and running unit tests.
- `black`: opinionated code formatter for consistent Python style.
- `flake8`: linting tool for enforcing style and catching errors.
- `pre-commit`: framework for managing Git pre-commit hooks to enforce code quality checks before commits.

---

# Technologies 

Code Formatters

- **Prettier:** opinionated code formatter for JavaScript, TypeScript, and other files. It enforces consistent style by applying its own formatting rules.

- **Black:** opinionated code formatter for Python. It generally follows PEP 8, but prioritizes its own rules when conflicts arise.

- A code formatter is a tool that automatically enforces consistent code style (e.g., indentation, line breaks, quotes, and semicolons).

Linters

- **ESLint:** linter for JavaScript/TypeScript. Commonly used **alongside Prettier**.

- **Flake8:** linter for Python. Commonly used **alongside Black** to enforce PEP 8 style guidelines.

- A linter is a static code analysis tool that detects **syntax errors** (e.g., typos), flags **code issues** (e.g., unused variables and missing imports), and enforces coding standards. Some have limited logic/semantic checks (e.g., unreachable code and shadowed variables).

Code Quality & CI/CD

- **SonarQube:** a tool for Static Application Security Testing (SAST) and code quality across multiple languages. Offers static code analysis for security (OWASP top 10), reliability (bug detection), maintainability (code smells such as long method, unused variables, magic numbers, dead code, deeply nested loops/conditionals), and code duplication.

- **Pre-commit:** provides git hooks to run linters/formatters locally before every commit, blocking non-compliant code.

- **GitHub Actions:** for automated linting, testing, and code quality checks on every push and pull request.
