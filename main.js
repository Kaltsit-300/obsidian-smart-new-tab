const { Plugin, WorkspaceLeaf } = require('obsidian');

module.exports = class SmartNewTabPlugin extends Plugin {
    async onload() {
        console.log("Loading Smart New Tab Plugin...");
        const originalOpenFile = WorkspaceLeaf.prototype.openFile;
        const plugin = this;

        // Keep track of link clicks
        let isLinkClick = false;
        
        const clickHandler = (e) => {
            const target = e.target.closest('.internal-link, .cm-hmd-internal-link, .cm-link, .markdown-link');
            if (target) {
                isLinkClick = true;
                setTimeout(() => { isLinkClick = false; }, 100);
            }
        };

        // Register event listener with capture phase to detect link clicks before Obsidian processes them
        window.addEventListener('click', clickHandler, true);

        WorkspaceLeaf.prototype.openFile = async function(file, state) {
            const stack = new Error().stack || "";
            const isNewNote = stack.includes('afterCreate');
            const isLink = isLinkClick;

            if (isNewNote || isLink) {
                // Only intercept if the current leaf is active, has a file open, and it's a different file
                if (this.view && this.view.file && this.view.file.path !== file.path) {
                    // Create a new tab leaf
                    const newLeaf = this.app.workspace.getLeaf('tab');
                    // Open the file in the new tab and focus it
                    return await originalOpenFile.apply(newLeaf, [file, state]);
                }
            }

            return await originalOpenFile.apply(this, [file, state]);
        };

        this.register(() => {
            window.removeEventListener('click', clickHandler, true);
            WorkspaceLeaf.prototype.openFile = originalOpenFile;
            console.log("Unloaded Smart New Tab Plugin.");
        });
    }
}
