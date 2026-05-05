/**
 * JsonLd — render schema.org structured data.
 *
 * Drop a <JsonLd schema={...} /> wherever you want a script block on a page.
 * Multiple JsonLd components per page are fine — each emits its own block.
 *
 * Schemas can be in <head> or <body> per Google; we keep them in the
 * component tree for simplicity. Crawlers find them either way.
 *
 * Note: requires 'unsafe-inline' in CSP script-src because the
 * <script type="application/ld+json"> block is inline. Most browsers
 * enforce script-src on all <script> tags regardless of type.
 *
 * Helper builders (buildBreadcrumb etc.) live in ../seo/schema.js.
 */

export default function JsonLd({ schema }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
