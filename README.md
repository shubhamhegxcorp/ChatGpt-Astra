# Orynquill Cloud

An original responsive website inspired by https://portal.nousresearch.com/cloud.

Install with `npm install`, then run `npm run dev`. Build for production with `npm run build`, or inspect the production build with `npm run preview`.

## Share on the same Wi-Fi

In VS Code's PowerShell terminal, stop any existing development server with Ctrl+C, then run `npm.cmd run share`. Keep the terminal and this computer running. A friend on the same Wi-Fi can open `http://192.168.1.34:5173` (the Wi-Fi IPv4 address checked during this update; it may change after reconnecting). If Windows asks, allow Node.js on Private networks. Guest Wi-Fi/client isolation can block device-to-device access.

## Pages

- `/`: homepage, plans, features, FAQs, and art previews.
- `/explore/`: illustrated exploration of research, writing, and building spaces.
- `/workflows/`: six workflows with category filters, selectable details, and setup actions with the matching focus.
- `/about/`: illustrated brand story and principles.

Production builds emit a real HTML entry for each route, so direct links and refreshes work on static hosting.

Built completely in React with Vite. React owns the page, navigation state, billing selection, accessible dialogs, controlled setup form, and workspace state. The generated `dist` folder can be hosted by any static website host. The monochrome treatment preserves the original artwork through a grayscale presentation filter.

## Included

Original identity and observatory illustration; responsive navigation; six features; walkthrough; monthly/yearly plan controls; accessible FAQ disclosures; native modal dialogs; validated demo setup; session-only agent workspace; privacy information. Visible design credits and concept labels have been removed.

The agent flow is a clearly labeled interactive demo. It does not provision cloud infrastructure, perform AI inference, charge payments, or persist user information. Demo configuration resets on reload.

## Design references

- Hermes Cloud: https://portal.nousresearch.com/cloud — saturated blue, editorial structure, surreal cloud imagery.
- Hermes Garden: https://github.com/opencolin/hermes-garden — additional research on scientific-instrument aesthetics.
- Fonts: DM Sans and IBM Plex Mono from Google Fonts, with system fallbacks.

Orynquill is independent and not affiliated with Nous Research. Code, copy, and identity are original.

## Additional original artwork

Generated with the built-in image-generation tool, without text, logos, or watermarks:

- `public/floating-library.png`: A surreal floating library with arched corridors and stacks of books spiraling through clouds. Antique scientific engraving, intricate fine crosshatching and meticulously drawn black ink linework on white. Wide 3:2, atmospheric scene with graceful arches and a sweeping spiral of books, richly detailed yet spacious. Monochrome black ink on white only. No typography, letters, logos, watermark, interface, borders, or colored tones.
- `public/lunar-observatory.png`: A lone small explorer overlooking a monumental lunar observatory and a ringed planet above a cloud ocean. Vintage astronomical etching with intricate engraved linework and fine crosshatching. Cinematic wide 3:2, small explorer establishing the immense scale of the observatory and celestial backdrop. Black and white only. No typography, letters, text, logo, watermark, interface, borders, or colored tones.

## Original artwork

Asset: `dist/atlas-observatory.png`. Generated once with the built-in image-generation tool.

Final prompt:

Use case: stylized-concept. Asset type: original website hero illustration, landscape 3:2, to fill the right half of the Atlas Cloud homepage. Primary request: surreal cyanotype engraving of a futuristic observatory — a monumental armillary sphere suspended on a rocky floating island above voluminous clouds. Scene/backdrop: deep electric ultramarine blue sky with distant small orbital moons; billowing ivory clouds occupy the lower composition. Subject: striking sculptural central armillary observatory, intricate concentric orbital rings and fine scientific instrument structures, carried by a dramatic floating crag of rock. Style/medium: intricate antique scientific etching, cyanotype print, fine engraved contour lines, stippled halftone grain. Composition/framing: landscape 3:2, central subject fills the frame confidently, complete sphere visible, cinematic sense of scale and depth, edge-to-edge composition without border. Color palette: strictly cobalt/electric ultramarine blue and ivory white only. Constraints: no text, no letters, no logo, no UI, no watermark.
