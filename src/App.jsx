import { useState } from 'react'
import './App.css'

const navigation = [
  { label: 'Overview', icon: '◫' },
  { label: 'Stream Analysis', icon: '⌁' },
  { label: 'Chat Insights', icon: '◌' },
  { label: 'Voice Insights', icon: '⌁' },
]

function App() {
  const [activePage, setActivePage] = useState('Overview')

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#overview" aria-label="StreamSense AI home" onClick={() => setActivePage('Overview')}>
          <span className="brand-mark"><span /></span>
          <span>stream<span className="brand-light">sense</span><small>AI</small></span>
        </a>

        <div className="workspace-label">WORKSPACE</div>
        <nav className="nav-list" aria-label="Main navigation">
          {navigation.map((item) => (
            <button key={item.label} className={`nav-item ${activePage === item.label ? 'active' : ''}`} onClick={() => setActivePage(item.label)}>
              <span className="nav-icon">{item.icon}</span>{item.label}
              {item.label === 'Overview' && <span className="nav-active-dot" />}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-tip"><span className="tip-spark">✳</span><strong>Your channel, decoded.</strong><p>Make every stream your best one yet.</p><span className="tip-orb" /></div>
          <button className={`nav-item settings-link ${activePage === 'Settings' ? 'active' : ''}`} onClick={() => setActivePage('Settings')}><span className="nav-icon">⚙</span>Settings</button>
          <div className="profile"><div className="avatar">J</div><div className="profile-copy"><strong>Jordan Lee</strong><span>Creator account</span></div><span className="more">···</span></div>
        </div>
      </aside>

      <main className="main-content" id="overview">
        <header className="topbar"><div className="breadcrumbs">Workspace <span>/</span> <strong>{activePage}</strong></div><div className="top-actions"><span className="demo-pill"><i /> DEMO MODE</span><button className="icon-button" aria-label="Notifications">♧<b /></button><div className="top-avatar">J</div></div></header>

        <section className="welcome-row">
          <div><div className="eyebrow"><span className="eyebrow-line" /> YOUR CREATOR DASHBOARD</div><h1>Your stream, <span>understood.</span></h1><p className="welcome-copy">A clearer view of what’s working and where to go next.</p></div>
          <button className="date-button"><span>▦</span> Last 7 days <span className="chevron">⌄</span></button>
        </section>

        <div className="demo-notice"><span className="notice-icon">i</span><span><strong>Demo dashboard</strong> — All metrics, coaching suggestions, and activity below are sample data for preview only.</span><button aria-label="Dismiss notice">×</button></div>

        <section className="metrics-grid" aria-label="Demo summary metrics">
          <article className="metric-card engagement-card"><div className="metric-top"><span className="metric-label">VIEWER ENGAGEMENT</span><span className="metric-icon violet">◉</span></div><div className="metric-value">78<span className="metric-unit">%</span></div><div className="metric-foot"><span className="trend up">↗ 12%</span><span>vs. previous period</span><span className="metric-tag">DEMO</span></div><div className="sparkline purple-line"><svg viewBox="0 0 180 45" preserveAspectRatio="none"><path d="M0 36 C15 34 13 23 28 28 S47 35 58 19 S77 31 89 22 S104 28 117 11 S136 20 147 14 S164 17 180 3" /></svg></div></article>
          <article className="metric-card chat-card"><div className="metric-top"><span className="metric-label">CHAT ACTIVITY</span><span className="metric-icon blue">◌</span></div><div className="metric-value">1,284</div><div className="metric-foot"><span className="trend up">↗ 8.4%</span><span>messages this week</span><span className="metric-tag">DEMO</span></div><div className="sparkline blue-line"><svg viewBox="0 0 180 45" preserveAspectRatio="none"><path d="M0 35 C15 30 16 34 29 24 S45 31 58 22 S75 26 88 16 S103 22 116 12 S135 17 146 11 S163 15 180 3" /></svg></div></article>
          <article className="metric-card health-card"><div className="metric-top"><span className="metric-label">STREAM HEALTH</span><span className="metric-icon green">✳</span></div><div className="metric-value">Great<span className="health-dot" /></div><div className="metric-foot"><span className="trend steady">● Stable</span><span>across 6 demo sessions</span><span className="metric-tag">DEMO</span></div><div className="health-bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div></article>
        </section>

        <section className="content-grid">
          <article className="panel coaching-panel"><div className="panel-header"><div><div className="panel-kicker"><span className="spark">✳</span> COACHING CORNER <span className="panel-demo">DEMO</span></div><h2>Live Coaching</h2><p>Small shifts, stronger streams.</p></div><button className="panel-menu" aria-label="Coaching options">···</button></div>
            <div className="coaching-list">
              <div className="coaching-item"><div className="coach-icon purple-icon">◷</div><div className="coach-copy"><div className="coach-tags"><span className="tag lavender">PACING</span><span className="sample-label">SAMPLE SUGGESTION</span></div><h3>Give big moments room to land</h3><p>Your demo highlight peaked after a brief pause. Try letting the suspense build before the next play.</p><div className="coach-source">↗ Demo observation · Sample only</div></div><span className="priority-dot purple-dot" /></div>
              <div className="coaching-item"><div className="coach-icon blue-icon">☻</div><div className="coach-copy"><div className="coach-tags"><span className="tag sky">COMMUNITY</span><span className="sample-label">SAMPLE SUGGESTION</span></div><h3>Bring a chat question into your intro</h3><p>Demo chat activity was liveliest early on. Invite viewers to weigh in while everyone settles in.</p><div className="coach-source">↗ Demo observation · Sample only</div></div><span className="priority-dot blue-dot" /></div>
              <div className="coaching-item"><div className="coach-icon peach-icon">♫</div><div className="coach-copy"><div className="coach-tags"><span className="tag peach">ENERGY</span><span className="sample-label">SAMPLE SUGGESTION</span></div><h3>Keep your momentum between matches</h3><p>A short recap can keep the energy up during downtime and help new viewers catch up.</p><div className="coach-source">↗ Demo observation · Sample only</div></div><span className="priority-dot peach-dot" /></div>
            </div><button className="text-link">Explore coaching insights <span>→</span></button>
          </article>

          <article className="panel activity-panel"><div className="panel-header"><div><div className="panel-kicker">YOUR CHANNEL <span className="panel-demo">DEMO DATA</span></div><h2>Recent Stream Activity</h2><p>A snapshot of your recent sessions.</p></div><button className="panel-menu" aria-label="Activity options">···</button></div>
            <div className="activity-summary"><div className="activity-big"><strong>6</strong><span>DEMO STREAMS</span></div><div className="activity-summary-divider" /><div className="activity-big"><strong>18.5<span>h</span></strong><span>DEMO HOURS</span></div><div className="activity-summary-divider" /><div className="activity-big"><strong>+14%</strong><span>DEMO AVG. VIEWERS</span></div></div>
            <div className="activity-head"><span>STREAM</span><span>DATE</span><span>AVG. VIEWERS</span></div>
            <div className="stream-row"><span className="stream-title"><i className="live-dot"/><span><strong>Late night ranked ✦</strong><small>Just Chatting · 3h 24m</small></span></span><span className="stream-date">Oct 24</span><span className="stream-viewers">248 <small>DEMO</small></span></div>
            <div className="stream-row"><span className="stream-title"><i className="live-dot blue-dot"/><span><strong>We go again 🎮</strong><small>Valorant · 2h 51m</small></span></span><span className="stream-date">Oct 22</span><span className="stream-viewers">216 <small>DEMO</small></span></div>
            <div className="stream-row"><span className="stream-title"><i className="live-dot peach-dot"/><span><strong>First playthrough!</strong><small>Hollow Knight · 4h 10m</small></span></span><span className="stream-date">Oct 20</span><span className="stream-viewers">193 <small>DEMO</small></span></div>
            <button className="text-link activity-link">View all demo activity <span>→</span></button>
          </article>
        </section>

        <footer>StreamSense AI <span>·</span> Preview dashboard <span className="footer-right">Sample data only · No account connected</span></footer>
      </main>
    </div>
  )
}

export default App
