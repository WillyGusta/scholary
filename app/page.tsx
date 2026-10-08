const features = [
  { number: '01', title: 'Add assignments', text: 'Capture every responsibility in one focused place.' },
  { number: '02', title: 'Set what matters', text: 'Choose deadlines and priorities so your next step is clear.' },
  { number: '03', title: 'Stay on track', text: 'Mark work complete and keep momentum throughout the semester.' },
]

export default function Page() {
  return (
    <main className="site-shell">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Study Planner home">
          <span className="brand-mark" aria-hidden="true">SP</span>
          <span>STUDY PLANNER</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a className="nav-cta" href="#learn-more">Read the story <span aria-hidden="true">↗</span></a>
        </div>
      </nav>

      <section id="top" className="hero container">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Student productivity project</p>
          <h1>Stay organized</h1>
          <p className="hero-text">A simple desktop task manager designed to help students turn academic responsibilities into a clear, manageable plan.</p>
          <a className="button button-dark" href="#about">Explore the project <span aria-hidden="true">↓</span></a>
        </div>
        <div className="planner-card" aria-label="Study Planner interface preview">
          <div className="card-top"><span className="window-dots"><i /><i /><i /></span><span>MY ASSIGNMENTS</span><span className="card-date">FALL / 2024</span></div>
          <div className="card-body">
            <div className="card-heading"><div><p className="mini-label">GOOD MORNING, WILLIAM</p><h2>Your week, at a glance.</h2></div><span className="sun" aria-hidden="true">✦</span></div>
            <div className="progress-row"><span>4 of 7 tasks complete</span><strong>57%</strong></div>
            <div className="progress"><span /></div>
            <div className="task-list">
              <div className="task done"><span className="check">✓</span><div><strong>Research paper outline</strong><small>Due today · English 101</small></div><b>DONE</b></div>
              <div className="task"><span className="check" /><div><strong>Study for biology quiz</strong><small>Due Wed · Biology</small></div><b className="high">HIGH</b></div>
              <div className="task"><span className="check" /><div><strong>Read chapters 8–10</strong><small>Due Friday · History</small></div><b>MED</b></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="intro-band"><div className="container intro-grid"><p className="section-tag">THE IDEA</p><div><h2>School gets busy.<br /><span>Your tools shouldn&apos;t.</span></h2><p className="body-copy">Student Study Planner is a Python desktop application that puts assignments, deadlines, and priorities together in one calm, dependable workspace. Built with Tkinter and SQLite, it keeps the essentials close and the distractions out.</p></div></div></section>

      <section id="features" className="features container"><div className="section-heading"><p className="section-tag">HOW IT WORKS</p><h2>Small steps.<br /><span>Real progress.</span></h2></div><div className="feature-grid">{features.map((feature) => <article className="feature" key={feature.number}><span className="feature-number">{feature.number}</span><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div></section>

      <section id="learn-more" className="closing"><div className="container closing-inner"><div><p className="section-tag">BUILT WITH PURPOSE</p><h2>Organization is<br /><em>a superpower.</em></h2></div><div className="closing-side"><p>Created by <strong>William J. Gustave</strong> to make the everyday work of being a student feel a little more possible.</p><a className="button button-yellow" href="https://kean0-my.sharepoint.com/:p:/g/personal/gustavew_kean_edu/IQAxr8OP4AUGSYXUAMD4zMX1AWhKsFB4GgR8-n7VMYGQBkI?e=JovNtw" target="_blank" rel="noreferrer">Read more about the project <span aria-hidden="true">↗</span></a></div></div></section>
      <footer className="footer container"><span>STUDY PLANNER / 2024</span><span>PYTHON · TKINTER · SQLITE</span></footer>
    </main>
  )
}

