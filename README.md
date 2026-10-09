# Orbit V3.2 — Local-first graph workspace

A small, local-first thinking tool for connected ideas, planning, and an idea inbox. It is designed to be understandable and runnable by other people, not tied to one user's account.

## What V3.2 includes

- **Graph Studio:** create multiple independent graphs, each with its own nodes and relationships. Examples include learning maps, personal cash flow, decision analysis, causal diagrams, and reminders.
- **Sketch-like canvas:** bright paper surface, dotted grid, hand-drawn-style cards, draggable nodes, pan/zoom, minimap, and connectable handles.
- **Idea Inbox:** capture quick thoughts in a separate workspace, search them, delete them, or move them to the graph composer.
- **Planning Board:** targets with a start/end date, notes, and completion state.
- **Local persistence:** app data is stored in browser `localStorage`; there is no login, Supabase, analytics, cloud database, or automatic syncing.
- **No seeded roadmap:** the canvas starts empty. Two sample graphs are included to illustrate graph modularity; delete them if you want a completely blank workspace.
- **Light theme only.**
- **Docker support** for a reproducible local run.

## Requirements

- Docker Desktop (recommended), or Node.js 20.9+ and npm.
- A modern browser.

## Run with Docker

From the project root:

```bash
docker compose up --build -d
```

Open <http://localhost:3000>.

Stop it with:

```bash
docker compose down
```

### Important about persistence

This version stores data in the browser's local storage, not in a database volume. Your data normally remains in that browser profile across restarts and Docker rebuilds, because the browser owns the storage. Clearing site data, switching browser profiles, or using another browser/device will not carry the data over. Export/import and image export are planned for a later phase, so keep browser site data intact for now.

## Run without Docker

Install Node.js 20.9+ and run:

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>. For a production build:

```bash
npm run build
npm start
```

## Use the app

1. Select **Graph Studio** to work with connected diagrams.
2. Choose **New graph** and name it for one question or system.
3. Add nodes from the left sidebar. Drag nodes around the canvas; drag from one node handle to another to create a relationship.
4. Select **Idea Inbox** to capture unstructured thoughts without cluttering the canvas.
5. Select **Planning Board** to add date-range targets.

## Privacy and limitations

- This project does not require accounts or transmit your graph content to a hosted backend.
- Google Fonts are referenced by the stylesheet for typography; remove the `@import` in `app/globals.css` if you want to avoid that external font request and use local system fonts only.
- Browser storage is not encrypted and is not a backup. Do not store secrets, passwords, or highly sensitive financial credentials here.
- Graph JSON export/import, PNG/SVG image export, templates, integrations, advanced styling, and automatic layout are intentionally future-phase features.
- The current implementation is a functional MVP, not a tested or audited financial application. Use it for personal thinking and tracking, not accounting or tax records.

## Project structure

```text
app/                 Next.js routes and light-theme styles
components/           Main workspace and graph editor
Dockerfile            Multi-stage production image
docker-compose.yml    Local run configuration
```

## License

Choose a license before publishing this repository publicly. MIT is a common choice for a small open-source utility, but select one that matches your intent.


## V3.2 changes
- Added real React Flow connection handles on nodes. Drag from one node handle to another to create a relationship.
- Select a node and use **Delete selected node** in the sidebar or toolbar. Deleting a node also deletes its connected edges. Select an edge and press Delete/Backspace to remove it.
- Added a light/dark theme toggle in the top bar. Theme choice is stored locally.
