---
name: Bug report
about: Create a report to help us improve
title: '[BUG] '
labels: bug
assignees: ''
---

## Describe the bug
A clear and concise description of what the bug is.

## To Reproduce
Steps to reproduce the behavior:
1. Install version '...'
2. Add code '....'
3. Perform action '....'
4. See error

## Expected behavior
A clear and concise description of what you expected to happen.

## Screenshots
If applicable, add screenshots to help explain your problem.

## Environment:
 - React Cloudbox Alerts Version: [e.g. 1.0.0]
 - React Version: [e.g. 18.2.0]
 - Browser [e.g. chrome, safari]
 - OS: [e.g. Windows, macOS]
 - Node.js Version: [e.g. 18.15.0]

## Minimal reproduction code
```jsx
// If possible, provide minimal code to reproduce the issue
import { AlertContainer, AlertService } from 'react-cloudbox-alerts';

function App() {
  return (
    <div>
      <AlertContainer />
      <button onClick={() => AlertService.success('Test')}>
        Show Alert
      </button>
    </div>
  );
}
```

## Additional context
Add any other context about the problem here.