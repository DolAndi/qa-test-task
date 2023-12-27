# QA Test Challenge

This repository contains my solution to a QA testing challenge.

## Solution

I opted to utilize Cypress as the automation testing framework, JavaScript for scripting, and the Mochawesome report for generating test reports. 

Additionally, there is a GitHub Actions pipeline in place, which could be scheduled to run daily, although currently, it triggers upon each commit.

## Prerequisites

Before running the tests, make sure you have the following tools installed on your system:

- Node.js (version 12 or higher)
- NPM or Yarn (I recommend NPM)

## How to install

Clone this repository to your computer using the command:
```bash
git clone https://github.com/DolAndi/qa-test-task.git
```

Install project dependencies and Cypress using NPM:
```bash
npm install
```

```bash
npm install cypress --save-dev
```
## UI Tests - How to run 

### Headless mode:
```bash
npm run cy:ui-regression
```
### Windowed mode:
```bash
npm run cy:open
```

## API Tests - How to run 

```bash
npm run cy:run
```
