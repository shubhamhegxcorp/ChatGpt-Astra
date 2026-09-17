import { mkdir, readFile, writeFile } from 'node:fs/promises';
const html = await readFile('dist/index.html', 'utf8');
for (const [route, title] of Object.entries({ explore: 'Explore the possibilities', workflows: 'Find your next workflow', about: 'Built around curiosity' })) {
  await mkdir(`dist/${route}`, { recursive: true });
  await writeFile(`dist/${route}/index.html`, html.replace(/<title>.*?<\/title>/, `<title>Orynquill Cloud — ${title}</title>`));
}
await writeFile('dist/404.html', html.replace(/<title>.*?<\/title>/, '<title>Orynquill Cloud — Page not found</title>'));
