const marked = require('marked') //converts markdown to html
const sanitizeHtmlLibrary = require('sanitize-html');
const TurndownService = require('turndown');

function sanizitzeMarkdown(markdownContent){
    const turndownService = new TurndownService();

    const convertedHtmlContent = marked.parse(markdownContent);
    const sanitizedHtmlContent = sanitizeHtmlLibrary(convertedHtmlContent , {
        allowedTags : sanitizeHtmlLibrary.defaults.allowedTags
    })
    const sanitizedMarkdownContent = turndownService.turndown(sanitizedHtmlContent)
    
    return sanitizedMarkdownContent
}

module.exports = sanizitzeMarkdown