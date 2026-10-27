// utils/sanitizeHtml.js
import { sanitize } from 'isomorphic-dompurify'

export function sanitizeHTML(html) {
  return sanitize(html)
}
