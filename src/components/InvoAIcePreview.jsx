import { useState } from 'react'

const METRICS = [
  { label: 'Total Invoices (MTD)', value: '2,847', sub: '↑ 18% vs last month', subCls: 'green' },
  { label: 'Auto-Approved', value: '90.1%', sub: '↑ 4.2pts improvement', subCls: 'green' },
  { label: 'Fraud Flagged', value: '3', sub: '↑ 0% vs last month', subCls: 'muted' },
  { label: 'Exceptions', value: '12', sub: '↓ 29% vs last month', subCls: 'green' },
]

const STAGES = [
  { label: 'Intake', cls: 'ocr', count: '8', sub: 'Received' },
  { label: 'OCR', cls: 'ai', count: '5', sub: 'Extracting' },
  { label: 'Validate', cls: 'match', count: '12', sub: 'Checking' },
  { label: 'Fraud Check', cls: 'fraud', count: '2', sub: 'Screening' },
  { label: 'Match', cls: 'match', count: '7', sub: '3-Way Match' },
  { label: 'Approval', cls: 'pend', count: '4', sub: 'Pending' },
  { label: 'Posted', cls: 'done', count: '1,051', sub: 'Complete' },
]

const TILES = [
  { label: 'Touchless', value: '90%', trend: '↑ 4.2 pts' },
  { label: 'Avg cycle', value: '14s', trend: '↓ 17 days' },
  { label: 'Volume', value: '2,847', trend: '↑ 18%' },
  { label: 'Exceptions', value: '12', trend: '↓ 29%' },
]

const INVOICES = [
  { status: 'Auto-Approved', cls: 'auto', vendor: 'Hudson Yard Logistics', po: 'PO-2814', match: '3-way', amount: '$8,420', due: '15 Jul', conf: '90%' },
  { status: 'Pending Approval', cls: 'pending', vendor: 'Gulfport Diesel', po: 'PO-2815', match: '3-way', amount: '$1,290', due: '17 Jul', conf: '90%' },
  { status: 'Auto-Approved', cls: 'auto', vendor: 'Triangle Fleet Maintenance', po: null, match: 'Non-PO', amount: '$3,650', due: '20 Jul', conf: '90%' },
  { status: 'Auto-Approved', cls: 'auto', vendor: 'Capital City Permit', po: 'PO-2816', match: '2-way', amount: '$420', due: '21 Jul', conf: '90%' },
  { status: 'On-Hold', cls: 'hold', vendor: 'Five Boroughs Warehouse', po: 'PO-2820', match: '3-way', amount: '$24,990', due: '25 Jul', conf: '90%' },
  { status: 'Exception', cls: 'exception', vendor: 'Biscayne Bay Tire Pros', po: null, match: 'Non-PO', amount: '$2,180', due: '28 Jul', conf: '90%' },
]

const NAV = ['Dashboard', 'Invoices', 'Approvals', 'Vendors', 'Reports', 'Settings']

export default function InvoAIcePreview() {
  const [view, setView] = useState('dashboard')

  return (
    <div className="inv-preview">
      <div className="inv-preview-stage">
        <article className={`inv-preview-card${view === 'dashboard' ? ' is-visible' : ' is-hidden'}`} aria-hidden={view !== 'dashboard'}>
          <div className="inv-preview-header">
            <div className="inv-preview-dots" aria-hidden="true"><span /><span /><span /></div>
            <div className="inv-preview-url">app.invoaice.io / dashboard</div>
          </div>
          <div className="inv-preview-body inv-preview-body--metrics">
            {METRICS.map(m => (
              <div key={m.label} className="inv-preview-metric">
                <div className="inv-preview-m-label">{m.label}</div>
                <div className="inv-preview-m-value">{m.value}</div>
                <div className={`inv-preview-m-sub inv-preview-m-sub--${m.subCls}`}>{m.sub}</div>
              </div>
            ))}
            <div className="inv-preview-pipeline">
              <div className="inv-preview-pipe-title">
                <span className="inv-preview-pulse" aria-hidden="true" />
                Live processing pipeline
              </div>
              <div className="inv-preview-stages">
                {STAGES.map((s, i) => (
                  <div key={s.label} className="inv-preview-stage-item">
                    <span className={`inv-preview-badge inv-preview-badge--${s.cls}`}>{s.label}</span>
                    <div className="inv-preview-stage-count">{s.count}</div>
                    <div className="inv-preview-stage-lbl">{s.sub}</div>
                    {i < STAGES.length - 1 && <span className="inv-preview-arrow" aria-hidden="true">→</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>

        <article className={`inv-preview-card inv-preview-card--invoices${view === 'invoices' ? ' is-visible' : ' is-hidden'}`} aria-hidden={view !== 'invoices'}>
          <div className="inv-preview-header">
            <div className="inv-preview-dots" aria-hidden="true"><span /><span /><span /></div>
            <div className="inv-preview-url">app.invoaice.io / invoices</div>
          </div>
          <div className="inv-preview-invoices">
            <aside className="inv-preview-sidebar">
              {NAV.map(item => (
                <div key={item} className={`inv-preview-nav${item === 'Invoices' ? ' is-active' : ''}`}>
                  <span className="inv-preview-nav-dot" />
                  {item}
                </div>
              ))}
            </aside>
            <div className="inv-preview-invoices-content">
              <div className="inv-preview-tiles">
                {TILES.map(t => (
                  <div key={t.label} className="inv-preview-tile">
                    <div className="inv-preview-tile-label">{t.label}</div>
                    <div className="inv-preview-tile-value">{t.value}</div>
                    <div className="inv-preview-tile-trend">{t.trend}</div>
                  </div>
                ))}
              </div>
              <div className="inv-preview-table">
                <div className="inv-preview-row inv-preview-row--head">
                  <span>Status</span>
                  <span>Vendor</span>
                  <span>PO Number</span>
                  <span>Match</span>
                  <span className="inv-preview-align-right">Amount</span>
                  <span>Due Date</span>
                  <span>Conf.</span>
                  <span>Curr</span>
                </div>
                {INVOICES.map(row => (
                  <div key={`${row.vendor}-${row.amount}`} className="inv-preview-row">
                    <span className="inv-preview-status">
                      <span className={`inv-preview-status-dot inv-preview-status-dot--${row.cls}`} aria-hidden="true" />
                      <span className="inv-preview-status-label">{row.status}</span>
                    </span>
                    <span className="inv-preview-vendor">{row.vendor}</span>
                    <span className={row.po ? 'inv-preview-po' : 'inv-preview-po-empty'}>{row.po || '—'}</span>
                    <span className="inv-preview-match">{row.match}</span>
                    <span className="inv-preview-align-right">{row.amount}</span>
                    <span className="inv-preview-due">{row.due}</span>
                    <span className="inv-preview-conf">{row.conf}</span>
                    <span>USD</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>

      <div className="inv-preview-tabs" role="tablist" aria-label="InvoAIce dashboard views">
        <button
          type="button"
          role="tab"
          aria-selected={view === 'dashboard'}
          aria-label="Dashboard view"
          className={`inv-preview-tab${view === 'dashboard' ? ' is-active' : ''}`}
          onClick={() => setView('dashboard')}
        >
          Dashboard view
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={view === 'invoices'}
          aria-label="Invoices view"
          className={`inv-preview-tab${view === 'invoices' ? ' is-active' : ''}`}
          onClick={() => setView('invoices')}
        >
          Invoices view
        </button>
      </div>
    </div>
  )
}
