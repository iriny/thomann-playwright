# 🎭 Thomann UI Automation Project

Automated UI tests using [Playwright](https://playwright.dev/) with TypeScript and Page Object Model (POM).

---

## 🛠 Setup Instructions

This guide walks you through installing and running the project on both **macOS** and **Windows**.

### ✅ Prerequisites

- [Node.js (LTS version)](https://nodejs.org/) (≥ 18.x recommended)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) (recommended editor)

---

### 📦 1. Clone the Repository

```bash
git clone <your-repo-url>
cd qa-playwright
```

---

### 📥 2. Install Dependencies

```bash
npm install
```

This will install:
- Playwright test runner
- Browsers (via `npx playwright install`)
- TypeScript and other dev dependencies

---

### 🧭 3. Install Playwright Browsers (if not auto-installed)

```bash
npx playwright install
```

This installs Chromium, Firefox, and WebKit.

---

## ▶️ Running Tests

### Run All Tests (Headless)

```bash
npx playwright test
```

### Run Tests in Headed Mode (for debugging)

```bash
npx playwright test --headed
```

### Run Tests with UI (Playwright Test Explorer)

```bash
npx playwright test --ui
```

---

## 🧪 Run a Specific Test

```bash
npx playwright test tests/your-test-file.spec.ts
```

---

## 📊 Generate & View HTML Report

### Generate Report (automatically created after test run):

```bash
npx playwright show-report
```

This opens an interactive HTML report in your browser.

> Report is also saved in `playwright-report/` folder.

---

## 💡 Project Structure

```
qa-playwright/
├── tests/               # Spec files (test cases)
├── pages/               # Page Object classes
├── playwright.config.ts # Global test config
├── package.json         # Scripts and dependencies
└── README.md
```