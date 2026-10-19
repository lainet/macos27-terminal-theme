# macOS 27 Terminal — VS Code Theme

A VS Code theme faithful to the appearance and official ANSI color palette of the **macOS 27 Terminal**.

## Features

- **Accurate Dark Slate Tone**: Calibrated to `#161B24` with matching UI chrome to replicate the translucent-composited appearance of macOS 27 Terminal.
- **Authentic ANSI Palette**: Syntax highlighting maps directly to the official terminal ANSI colors (Red `#B45648`, Green `#6CAA71`, Yellow `#C4AC62`, Blue `#6D96B4`, Cyan `#7CCBCD`, Magenta `#BD7BCD`, Bright Blue `#67B5ED`, etc.).
- **Consistent Workbench**: Custom styled editor, tabs, title bar, sidebar, and integrated terminal.

## Installation

### From VSIX
1. Package the extension:
   ```bash
   npx @vscode/vsce package
   ```
2. Install in VS Code:
   ```bash
   code --install-extension macos27-terminal-theme-1.1.0.vsix
   ```

### Activating the Theme
Open the Command Palette (`Cmd + Shift + P`), type **Preferences: Color Theme**, and choose **macOS 27 Terminal**.

## License

[MIT](LICENSE)
