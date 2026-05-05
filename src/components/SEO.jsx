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
const DEFAULT_TITLE = 'Ciyahi — AI Finance Automation, Starting With InvoAIce.io'
const DEFAULT_DESC =
  'Ciyahi builds AI-native finance products. Our flagship — InvoAIce.io — is an AI AP automation platform live in production today, integrated with SAP, Oracle, NetSuite, D365, and QuickBooks. Live in 4 weeks.'
const DEFAULT_IMAGE = '/og-image.png' // 1200x630 — drop one in /public
const DEFAULT_KEYWORDS = 'AI finance automation, AP automation, accounts payable AI, invoice automation, InvoAIce, AI AP platform, finance AI agents, SAP AP automation, Oracle AP automation, NetSuite AP automation, AI invoice processing, AP automation software'

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
