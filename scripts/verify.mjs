import { build } from 'esbuild';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { access, readFile, unlink } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const temp = new URL('../.verify-render.mjs', import.meta.url);
await build({entryPoints:['src/App.jsx'], bundle:true, platform:'node', format:'esm', external:['react'], outfile:fileURLToPath(temp)});
try {
 const { default:App } = await import(temp.href);
 for(const route of ['/','/explore/','/workflows/','/about/','/features/','/downloads/','/docs/','/missing/']) {
  const html = renderToString(React.createElement(App,{route}));
  if(!html.includes('Orynquill') || /(?:>Atlas|>ATLAS|> atlas)/.test(html)) throw new Error('Brand mismatch at '+route);
  if(!html.includes('id="main"')) throw new Error('Missing main content at '+route);
  for(const [,image] of html.matchAll(/<img[^>]+src="([^"]+)"/g)) await access('public'+image);
  if(route!=='/missing/') await access('dist'+(route==='/'?'/':route)+'index.html');
  if(route==='/missing/'&&!html.includes('404 / OFF THE MAP')) throw new Error('Missing error page');
  console.log('PASS render, branding, artwork, and direct entry: '+route);
 }
 const css=await readFile('src/styles.css','utf8')+await readFile('src/resources.css','utf8');
 const colors=[...css.matchAll(/#([0-9a-f]{3,8})\b/gi)].map(x=>x[1]);
 if(colors.some(h=>h.length<5?!(h[0]===h[1]&&h[1]===h[2]):!(h.slice(0,2)===h.slice(2,4)&&h.slice(2,4)===h.slice(4,6))))throw new Error('Non-monochrome CSS found');
 console.log('PASS monochrome palette');
} finally {await unlink(temp);}
