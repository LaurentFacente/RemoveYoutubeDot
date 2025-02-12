# YouTube Cleanup Extension

## Description

This Google Chrome extension automatically removes the `newness-dot` element on YouTube, which appears in the sidebar menu.

## Installation

1. Download or clone this repository.
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click on "Load unpacked".
5. Select the folder containing the extension.

## Files

- `manifest.json`: Declares the extension's permissions and scripts.
- `content.js`: Script that detects and removes the targeted element on YouTube.

## How It Works

- The `content.js` script runs automatically on YouTube pages.
- It removes the `#newness-dot.style-scope.ytd-guide-entry-renderer` element as soon as it appears.
- A `MutationObserver` watches for DOM changes to ensure continuous removal.

## License

This project is free to use and modify.
