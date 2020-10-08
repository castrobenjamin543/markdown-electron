const marked = require('marked')

const markdownview = document.querySelector('#markdown')
const html = document.querySelector('#html')

const renderToHtml = (markdow) => {
    html.innerHTML = marked(markdow, {sanitize: true})
}

markdownview.addEventListener('keyup', (e) => {

    renderToHtml(e.target.value)

})