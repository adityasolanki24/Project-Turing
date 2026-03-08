type TabKey = 'dashboard' | '3d' | '2d' | 'conjunctions' | 'weather' | 'settings'

export function TopBar({ active, onChange }: { active: TabKey; onChange: (k: TabKey) => void }) {
  const tabs: { key: TabKey; label: string }[] = [
    { key: 'dashboard', label: 'Dashboard' },
    { key: '3d', label: '3D Map' },
    { key: '2d', label: '2D Map' },
    { key: 'conjunctions', label: 'Conjunctions' }
  ]
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      padding: '16px 28px',
      background: 'linear-gradient(180deg, rgba(17, 24, 39, 0.98) 0%, rgba(3, 7, 18, 0.98) 100%)',
      borderBottom: '1px solid rgba(55, 65, 81, 0.4)',
      backdropFilter: 'blur(20px)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        fontWeight: 700,
        fontSize: 20,
        letterSpacing: -0.5,
        color: '#f9fafb'
      }}>
        <div style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 18,
          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)'
        }}>◉</div>
        OrbitWatch
      </div>
      <nav style={{ display: 'flex', gap: 4 }}>
        {tabs.map(t => (
          <button
            key={t.key}
            onClick={() => onChange(t.key)}
            style={{
              padding: '12px 20px',
              background: active === t.key ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
              border: 'none',
              color: active === t.key ? '#93c5fd' : '#9ca3af',
              borderRadius: 10,
              cursor: 'pointer',
              fontSize: 14,
              fontWeight: active === t.key ? 600 : 500,
              transition: 'all 0.2s',
              position: 'relative'
            }}
          >
            {t.label}
            {active === t.key && (
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 20,
                right: 20,
                height: 2,
                background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
                borderRadius: 1
              }} />
            )}
          </button>
        ))}
      </nav>
    </header>
  )
}
