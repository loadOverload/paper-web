import MarkdownIt from 'markdown-it'
import footnotePlugin from 'markdown-it-footnote'
import './style.css'

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
})

md.use(footnotePlugin)

// Fix: make footnote backrefs work without href="#" noise
md.renderer.rules.footnote_anchor = (tokens, idx) => {
  const token = tokens[idx]
  const id = token.attrs?.[0]?.[1] ?? ''
  return `<a href="#${id}" class="footnote-backref">↩</a>`
}

const res = await fetch('/paper.md')
const text = await res.text()
const html = md.render(text)

document.getElementById('paper').innerHTML = html

// Wrap tables for responsive horizontal scroll
document.querySelectorAll('#paper table').forEach(table => {
  const wrapper = document.createElement('div')
  wrapper.className = 'table-wrapper'
  table.parentNode.insertBefore(wrapper, table)
  wrapper.appendChild(table)
})
