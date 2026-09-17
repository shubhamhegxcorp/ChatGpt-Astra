import React, { useEffect, useRef, useState } from 'react';

function Modal({ titleId, onClose, children }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    const previous = document.activeElement;
    dialog.showModal();
    return () => { dialog.close(); previous?.focus(); };
  }, []);
  return <dialog ref={ref} aria-labelledby={titleId} onCancel={e => { e.preventDefault(); onClose(); }} onClick={e => {
    if(e.target !== ref.current) return;
    const r = ref.current.getBoundingClientRect();
    if(e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) onClose();
  }}>
    <button className="dialog-close" aria-label="Close dialog" onClick={onClose}>×</button>
    {children}
  </dialog>;
}

const taskIdeas = {
  'Research & discovery': 'Map out three promising directions for my next research project.',
  'Writing & ideas': 'Turn a rough idea into an outline for a thoughtful article.',
  'Planning & routines': 'Design a calmer week with a practical morning routine.',
  'Coding & building': 'Break my next app idea into small, achievable milestones.'
};

export function LaunchDialog({ initial, agent, onAgent, onClose }) {
  const [configuring, setConfiguring] = useState(initial.configure);
  const [name, setName] = useState(agent?.name || '');
  const [region, setRegion] = useState(agent?.region || 'Mumbai');
  const [plan, setPlan] = useState(initial.plan);
  const [focus, setFocus] = useState(agent?.focus || 'Research & discovery');
  const [previewed, setPreviewed] = useState(false);
  const nameRef = useRef(null);
  const taskRef = useRef(null);
  useEffect(() => { if(configuring) nameRef.current?.focus(); else taskRef.current?.focus(); }, [configuring]);
  function submit(e) {
    e.preventDefault();
    if(!name.trim()) { nameRef.current.setCustomValidity('Please give your agent a name.'); nameRef.current.reportValidity(); return; }
    onAgent({ name: name.trim(), region, plan, focus });
    setPreviewed(false);
    setConfiguring(false);
  }
  return <Modal titleId={configuring ? 'dialog-title' : 'workspace-name'} onClose={onClose}>
    {configuring ? <div>
      <span className="eyebrow">ATLAS / NEW BEGINNINGS</span>
      <h2 id="dialog-title">Your corner<br />of the cloud.</h2>
      <p className="dialog-intro">Explore a demo workspace. No charges or live AI services.</p>
      <form onSubmit={submit}>
        <label>Agent name<input ref={nameRef} name="agentName" placeholder="e.g. Sunday explorer" maxLength={40} required autoComplete="off" value={name} onChange={e => { setName(e.target.value); e.target.setCustomValidity(''); }} /></label>
        <div className="form-row">
          <label>Region<select value={region} onChange={e => setRegion(e.target.value)}>{['Mumbai','Singapore','London','New York','Tokyo'].map(x => <option key={x}>{x}</option>)}</select></label>
          <label>Plan<select value={plan} onChange={e => setPlan(e.target.value)}>{['Spark','Orbit','Cosmos'].map(x => <option key={x}>{x}</option>)}</select></label>
        </div>
        <label>Give your agent a focus<select value={focus} onChange={e => setFocus(e.target.value)}>{Object.keys(taskIdeas).map(x => <option key={x}>{x}</option>)}</select></label>
        <button className="button blue" type="submit">Create workspace <span>↗</span></button>
      </form>
    </div> : <div>
      <span className="eyebrow">ATLAS / YOUR WORKSPACE</span>
      <h2 id="workspace-name">{agent.name}</h2>
      <div className="workspace-status">✳ Workspace ready</div>
      <dl>{Object.entries({ Region: agent.region, Plan: agent.plan, Focus: agent.focus }).map(([key,value]) => <React.Fragment key={key}><dt>{key}</dt><dd>{value}</dd></React.Fragment>)}</dl>
      <div className="task-card"><span className="eyebrow">YOUR FIRST EXPLORATION</span><p>{taskIdeas[agent.focus]}</p>
        {!previewed ? <button ref={taskRef} className="button outline" onClick={() => setPreviewed(true)}>Preview a task <span>↗</span></button> : <p id="task-result" role="status">Task preview: define the goal → gather context → outline the next steps. Connect an AI service to run this workflow.</p>}
      </div>
      <button className="text-link" onClick={() => setConfiguring(true)}>New configuration ↗</button>
    </div>}
  </Modal>;
}

export function PrivacyDialog({ onClose }) {
  return <Modal titleId="info-title" onClose={onClose}>
    <h2 id="info-title">Your space, respected.</h2>
    <div id="info-content"><p>Your workspace configuration stays in this page and clears when you reload. This site does not collect payments or send your configuration to a server.</p><p>Google Fonts supplies the typefaces and may receive ordinary connection information.</p></div>
  </Modal>;
}
