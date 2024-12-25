# Unhandled Error: Invalid User ID in Express.js Route

This repository demonstrates a common error in Express.js route handlers:  failure to handle invalid or unexpected input.  Specifically, this example shows a route that fetches a user by ID but lacks proper error handling if the ID is not a valid integer.

## The Bug

The `bug.js` file contains an Express.js route handler that retrieves a user from a list based on their ID.  However, it directly parses the incoming ID as an integer without any checks for validity. If the ID is not an integer (e.g., a string, or null), the `parseInt()` function might return `NaN`, leading to an error when the route attempts to compare it to user IDs.

## The Solution

The `bugSolution.js` file provides a corrected version of the route handler. It incorporates checks to ensure that the ID is a valid integer before attempting to fetch the user.  It also includes more robust error handling to provide appropriate responses for various failure scenarios.

## How to reproduce the bug

1. Clone this repository.
2. Navigate to the `bug` directory.
3. Run `node bug.js`.
4. Make a request to `/users/abc` or `/users/`.  The response should fail in the original code.
