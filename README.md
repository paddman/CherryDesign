# CherryDesign

CherryDesign is a lightweight, browser-first creative editor for making social graphics and campaign layouts. It is designed around the familiar workflow of modern online design tools while keeping the first version dependency-free and easy to host.

## Current editor capabilities

- Template starter library with four ready-made layouts
- Drag-and-drop canvas elements with resize handles
- Text, shape, circle, triangle, line, and local image layers
- Text styling, alignment, color, opacity, radius, rotation, and layer order
- Upload images directly from the device
- Undo/redo, keyboard movement, duplicate, delete, and rename
- Grid toggle, zoom controls, fit-to-screen, preview mode
- SVG and 2× PNG export
- Local browser autosave through `localStorage`

## Run locally

The editor is a static app. Open `index.html` directly, or serve the folder with any static web server:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Product direction

The next useful layers for turning this MVP into a full collaborative design platform are accounts and projects, cloud asset storage, real-time collaboration, reusable brand kits, richer image tools, comments, and a backend export queue.
