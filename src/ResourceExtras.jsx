import React, { useState } from 'react';

const paths = [
 { label:'Research', focus:'Research & discovery', title:'Turn a question into a direction.', prompt:'Help me explore an idea from three different perspectives.', steps:['Define the question','Compare useful perspectives','Choose the next step'], image:'floating-library.png' },
 { label:'Writing', focus:'Writing & ideas', title:'Give a rough idea its first shape.', prompt:'Help me turn my notes into a clear outline for an article.', steps:['Find the central idea','Build a simple outline','Refine the first draft'], image:'floating-library.png' },
 { label:'Planning', focus:'Planning & routines', title:'Make space for what matters.', prompt:'Help me plan a calmer week around my most important work.', steps:['Choose the priorities','Break down the work','Set a realistic rhythm'], image:'atlas-observatory.png' },
 { label:'Building', focus:'Coding & building', title:'Start small. Build something real.', prompt:'Break my next app idea into a few achievable milestones.', steps:['Describe the outcome','Identify the building blocks','Plan the first milestone'], image:'lunar-observatory.png' },
];

export function FeatureJourney({ onLaunch }) {
 const [active,setActive]=useState(0);
 const path=paths[active];
 return <section className="journey-section"><div className="journey-heading"><div><span className="eyebrow">02 / FIND YOUR DIRECTION</span><h2>One workspace.<br/><em>So many beginnings.</em></h2></div><p>A blank page does not have to stay blank. Pick a direction and explore a starting point of your own.</p></div><div className="journey-tabs" role="group" aria-label="Choose a starting point">{paths.map((p,i)=><button key={p.label} aria-pressed={active===i} onClick={()=>setActive(i)}><span>0{i+1}</span>{p.label}<span>↗</span></button>)}</div><div className="journey-panel"><figure><img src={`/${path.image}`} alt={`An imagined celestial setting for ${path.label.toLowerCase()}`} loading="lazy" width="1536" height="1024"/><figcaption>FIELD NOTES / {path.label.toUpperCase()}</figcaption></figure><div className="journey-copy"><span className="eyebrow">A STARTING POINT, NOT A LIMIT</span><h3>{path.title}</h3><blockquote>“{path.prompt}”</blockquote><ol>{path.steps.map(step=><li key={step}>{step}</li>)}</ol><button className="button blue" onClick={()=>onLaunch(undefined,path.focus)}>Explore this direction <span>↗</span></button><p className="journey-note">Opens a demo workspace with this focus. No live AI execution.</p></div></div></section>;
}

export function ResourceQuestions({ download=false }) {
 const entries=download?[
 ['Do I need to install anything?','No. Open the web preview in a current browser and create a demo workspace. Native Orynquill installers are not available.'],
 ['Can I use it on my phone?','Yes. The website adapts to smaller screens, and the same setup flow is available on mobile.'],
 ['Does the web preview save my work?','No. This demo uses page-session state. Reloading or moving to another page clears your workspace.'],
 ]:[
 ['What can I try right now?','Create a named workspace, change its focus and region, browse workflow templates, and preview a sample task sequence.'],
 ['Are these connected AI features?','Not yet. Orynquill is an interactive interface preview. Live models, memory, scheduling, and integrations would require a connected backend.'],
 ['Can I start over?','Yes. Open your workspace and choose New configuration to try another setup.'],
 ];
 return <section className="resource-questions"><div><span className="eyebrow">A FEW THINGS TO KNOW</span><h2>Good questions.<br/><em>Clear answers.</em></h2><a href="/docs/">Read the handbook ↗</a></div><div>{entries.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>;
}

export function DownloadCompanion() {
 return <section className="download-companion"><div><span className="eyebrow">YOUR JOURNEY / AT A GLANCE</span><h2>From a first visit<br/><em>to a fresh perspective.</em></h2><p>Everything you need to explore, with nothing to configure outside your browser.</p><div className="companion-steps">{[['01','Make it yours.','Choose a name and the kind of work you want to explore.'],['02','Find your rhythm.','Browse research, writing, planning, and building templates.'],['03','Follow the next idea.','Preview a task, adjust your focus, and try another direction.']].map(([n,t,d])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div><a className="text-link" href="/workflows/">Discover the workflows ↗</a></div><figure><img src="/atlas-observatory.png" alt="An observatory suspended above clouds" loading="lazy" width="1536" height="1024"/><figcaption>AN OPEN HORIZON / BUILT AROUND YOU</figcaption></figure></section>;
}

export function DocsWelcome({ onTopic }) {
 return <><figure className="docs-welcome-art"><img src="/floating-library.png" alt="An engraved library floating in the clouds" width="1536" height="1024"/><figcaption>THE ORYNQUILL HANDBOOK / A PLACE TO BEGIN</figcaption></figure><div className="docs-quickstart">{[['getting-started','01','Start here','Your first workspace, step by step.'],['workflows','02','Find a workflow','Choose a direction for your ideas.'],['privacy','03','Know your space','Understand the preview and its limits.']].map(([id,n,t,d])=><a href={`#${id}`} onClick={()=>onTopic()} key={id}><span className="eyebrow">{n} / GUIDE ↗</span><h2>{t}</h2><p>{d}</p></a>)}</div></>;
}
