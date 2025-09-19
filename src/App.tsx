import { useState } from 'react'
import './App.css'
import PlanningStateView from './components/PlanningStateView'
import ETMatrix from './components/ETMatrix'

function App() {
  const [activeView, setActiveView] = useState<'planning' | 'matrix'>('planning')

  return (
    <div className="app">
      <header className="app-header">
        <h1>Interactive Brainstorming Tool</h1>
        <nav>
          <button 
            className={activeView === 'planning' ? 'active' : ''}
            onClick={() => setActiveView('planning')}
          >
            Planning State
          </button>
          <button 
            className={activeView === 'matrix' ? 'active' : ''}
            onClick={() => setActiveView('matrix')}
          >
            ET Matrix
          </button>
        </nav>
      </header>
      
      <main className="app-main">
        {activeView === 'planning' && <PlanningStateView />}
        {activeView === 'matrix' && <ETMatrix />}
      </main>
    </div>
  )
}

export default App