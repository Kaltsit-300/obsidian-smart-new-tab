# Obsidian Smart New Tab

A lightweight, sandbox-safe Obsidian plugin that intelligently redirects note creation and link clicks to open in a new tab instead of replacing your currently active reading note.

[中文说明](#中文说明)

## Features

1. **Smart New-Note Redirection**: Right-clicking a folder and selecting "New note" (or clicking the new note icon in the file explorer toolbar) will open the newly created note in a **new tab** and focus it, fully preserving your active note's reading progress, scroll position, and cursor state in the original tab.
2. **Link Navigation Redirection**: Left-clicking wiki-links (`[[Note]]`) or markdown links (`[Link](Note.md)`) inside your notes will automatically open them in a **new tab** and focus them.
3. **Sidebar File Clicks**: Clicking on an existing file in the sidebar file explorer tree will still open the file in the current active tab as normal (default behavior).

---

## 中文说明

一个轻量、安全的 Obsidian 插件。它能智能地将新建笔记和链接点击重定向到新标签页打开，防止覆盖您当前正在阅读的笔记。

### 功能特性

1. **智能新建笔记重定向**：在左侧文件树右键新建笔记或点击文件树顶部的新建按钮时，新笔记会在**新标签页**中打开并聚焦，您当前正在阅读的笔记会保留在原标签页中，完全不影响阅读进度和光标位置。
2. **链接跳转重定向**：在笔记中左键点击内部链接（Wiki 链接或 Markdown 链接）时，会自动在**新标签页**中打开。
3. **侧边栏常规浏览**：单击左侧文件树中已有的笔记时，依然会在当前标签页内切换（保持 Obsidian 的默认浏览逻辑）。

---

## Installation

This plugin can be installed manually:

1. Download `main.js` and `manifest.json` from the releases.
2. Copy them to your vault's plugin directory: `<vault>/.obsidian/plugins/obsidian-smart-new-tab/`.
3. Go to **Settings -> Community Plugins** in Obsidian, refresh, and enable **Smart New Tab**.

## License

MIT
