type TabKey = 'dashboard' | '3d' | '2d' | 'conjunctions' | 'weather' | 'settings'

export function TopBar({ active, onChange }: { active: TabKey; onChange: (k: TabKey) => void }) {
  const tabs: { key: TabKey; label: string; icon: string }[] = [
    { key: 'dashboard', label: 'Dashboard', icon: '◉' },
    { key: '3d', label: '3D Map', icon: '◆' },
    { key: '2d', label: '2D Map', icon: '▢' },
    { key: 'conjunctions', label: 'Conjunctions', icon: '⚠' }
  ]
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      padding: '14px 24px',
      background: 'linear-gradient(180deg, rgba(10, 15, 26, 0.98) 0%, rgba(5, 8, 16, 0.98) 100%)',
      borderBottom: '1px solid rgba(71, 85, 105, 0.25)',
      backdropFilter: 'blur(12px)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        fontWeight: 700,
        fontSize: 18,
        letterSpacing: 1,
        color: '#f1f5f9'
      }}>
        <span style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
          boxShadow: '0 0 12px rgba(59, 130, 246, 0.6)'
        }} />
        OrbitWatch
      </div>
      <nav style={{ display: 'flex', gap: 4 }}>
        {tabs.map(t => (
          <button
            key={t.key}
            onClick={() => onChange(t.key)}
            style={{
              padding: '10px 18px',
              background: active === t.key ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
              border: active === t.key ? '1px solid rgba(59, 130, 246, 0.5)' : '1px solid transparent',
              color: active === t.key ? '#93c5fd' : '#94a3b8',
              borderRadius: 10,
              cursor: 'pointer',
              fontSize: 14,
              fontWeight: active === t.key ? 600 : 500,
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }}
          >
            <span style={{ opacity: 0.8, fontSize: 12 }}>{t.icon}</span>
            {t.label}
          </button>
        ))}
      </nav>
    </header>
  )
}
