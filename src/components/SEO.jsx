/**
 * SEO component — sets per-page metadata using React 19's native head hoisting.
 *
 * React 19 automatically lifts <title>, <meta>, and <link> tags rendered inside
 * any component into <head>, so we don't need react-helmet / react-helmet-async.
 *
 * Drop a single <SEO /> at the top of each page's return.
 *
 * Usage:
 *   <SEO
 *     title="Products"
 *     description="..."
 *     path="/products"
 *   />
 */

const SITE = 'https://ciyahi.com'
const SITE_NAME = 'Ciyahi Limited'
const DEFAULT_TITLE = 'Ciyahi — Enterprise AI Implementation'
const DEFAULT_DESC =
  'Ciyahi is an enterprise AI implementation company. We design, build, and ship AI systems — multi-agent pipelines, LLM process automation, and AI-native products. Our flagship, InvoAIce.io, is live in production today.'
const DEFAULT_IMAGE = '/og-image.png' // 1200x630 — drop one in /public
const DEFAULT_KEYWORDS = 'enterprise AI implementation, AI agent development, multi-agent AI, LLM process automation, AI strategy advisory, insurance claims AI, AP automation, InvoAIce, AI harness, LLM orchestration'

export default function SEO({
  title,
  description = DEFAULT_DESC,
  path = '',
  image = DEFAULT_IMAGE,
  type = 'website',
  keywords = DEFAULT_KEYWORDS,
  noindex = false,
}) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : DEFAULT_TITLE
  const url = `${SITE}${path}`
  const imageUrl = image.startsWith('http') ? image : `${SITE}${image}`

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </>
  )
}
