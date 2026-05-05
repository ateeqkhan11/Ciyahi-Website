/**
 * Schema.org helpers — pure data builders. Keep this file framework-free
 * (no JSX) so we can import freely without tripping react-refresh rules.
 */

const SITE = 'https://ciyahi.com'

/**
 * buildBreadcrumb — build a BreadcrumbList schema from a list of {name, path}.
 * Always anchors at Home unless the first item is the home page itself.
 */
export function buildBreadcrumb(items, baseUrl = SITE) {
  const fullList = items[0]?.path === '/' ? items : [{ name: 'Home', path: '/' }, ...items]
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: fullList.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${baseUrl}${item.path}`,
    })),
  }
}
