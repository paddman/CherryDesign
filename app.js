const CANVAS_WIDTH = 1080;
const CANVAS_HEIGHT = 720;
const STORAGE_KEY = "cherrydesign-local-v1";

const ICONS = {
  layout: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="5" rx="1.5"/><rect x="13" y="10" width="8" height="11" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/></svg>',
  shapes: '<svg viewBox="0 0 24 24"><circle cx="8" cy="8" r="4"/><path d="M14 4h6v6h-6z"/><path d="M4 15.5 8 12l4 4.5-2.3 3H6.2z"/><path d="m14 15 3-3 4 4"/></svg>',
  type: '<svg viewBox="0 0 24 24"><path d="M4 5h16M12 5v14M8 19h8"/></svg>',
  upload: '<svg viewBox="0 0 24 24"><path d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5"/><path d="M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24"><path d="m12 3 1.3 4.7L18 9l-4.7 1.3L12 15l-1.3-4.7L6 9l4.7-1.3z"/><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7z"/></svg>',
  help: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.7 9a2.4 2.4 0 1 1 3.8 1.9c-.9.7-1.5 1.1-1.5 2.6"/><path d="M12 17h.01"/></svg>',
  play: '<svg viewBox="0 0 24 24"><path d="m9 6 9 6-9 6z"/></svg>',
  download: '<svg viewBox="0 0 24 24"><path d="M12 3v12m0 0 4.5-4.5M12 15 7.5 10.5M5 19h14"/></svg>',
  "chevron-down": '<svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>',
  image: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9" r="1.5"/><path d="m4 17 5-5 3.5 3.5 2.5-2.5 5 5"/></svg>',
  code: '<svg viewBox="0 0 24 24"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/></svg>',
  "panel-left": '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 4v16"/><path d="m14 9-3 3 3 3"/></svg>',
  search: '<svg viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/></svg>',
  undo: '<svg viewBox="0 0 24 24"><path d="M9 8 4 12l5 4"/><path d="M4 12h9a6 6 0 0 1 6 6"/></svg>',
  redo: '<svg viewBox="0 0 24 24"><path d="m15 8 5 4-5 4"/><path d="M20 12h-9a6 6 0 0 0-6 6"/></svg>',
  grid: '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 10h16M10 4v16M16 4v16M4 16h16"/></svg>',
  minus: '<svg viewBox="0 0 24 24"><path d="M5 12h14"/></svg>',
  plus: '<svg viewBox="0 0 24 24"><path d="M5 12h14M12 5v14"/></svg>',
  maximize: '<svg viewBox="0 0 24 24"><path d="M8 4H4v4M16 4h4v4M20 16v4h-4M4 16v4h4"/></svg>',
  lightbulb: '<svg viewBox="0 0 24 24"><path d="M9 18h6M10 21h4"/><path d="M8.4 14.5a6 6 0 1 1 7.2 0c-.8.6-1.1 1.3-1.1 2.2H9.5c0-.9-.3-1.6-1.1-2.2Z"/></svg>',
  copy: '<svg viewBox="0 0 24 24"><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>',
  trash: '<svg viewBox="0 0 24 24"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>',
  x: '<svg viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  "chevron-up": '<svg viewBox="0 0 24 24"><path d="m6 15 6-6 6 6"/></svg>',
  "chevron-right": '<svg viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></svg>',
  "align-left": '<svg viewBox="0 0 24 24"><path d="M5 6h14M5 10h10M5 14h14M5 18h8"/></svg>',
  "align-center": '<svg viewBox="0 0 24 24"><path d="M5 6h14M8 10h8M5 14h14M8 18h8"/></svg>',
  "align-right": '<svg viewBox="0 0 24 24"><path d="M5 6h14M9 10h10M5 14h14M11 18h8"/></svg>',
  bold: '<svg viewBox="0 0 24 24"><path d="M8 5h5a3 3 0 0 1 0 6H8zm0 6h6a4 4 0 0 1 0 8H8z"/></svg>',
  lock: '<svg viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
  "move-up": '<svg viewBox="0 0 24 24"><path d="m8 10 4-4 4 4M12 6v12M5 20h14"/></svg>',
  "move-down": '<svg viewBox="0 0 24 24"><path d="m8 14 4 4 4-4M12 18V6M5 20h14"/></svg>',
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function hydrateIcons(root = document) {
  $$('[data-icon]', root).forEach((node) => {
    const svg = ICONS[node.dataset.icon];
    if (svg) node.innerHTML = svg;
  });
}

function uid(prefix = "item") {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeXml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function hexColor(value, fallback = "#6d4aff") {
  const normalized = String(value || "").trim();
  return /^#[0-9a-f]{6}$/i.test(normalized) ? normalized : fallback;
}

function textElement(options = {}) {
  return {
    id: uid("text"),
    type: "text",
    name: "ข้อความ",
    x: 100,
    y: 100,
    w: 400,
    h: 90,
    rotation: 0,
    opacity: 1,
    text: "ข้อความใหม่",
    fontFamily: "Inter, ui-sans-serif, sans-serif",
    fontSize: 34,
    fontWeight: 700,
    lineHeight: 1.08,
    color: "#202038",
    align: "left",
    ...options,
  };
}

function shapeElement(options = {}) {
  return {
    id: uid("shape"),
    type: "shape",
    name: "รูปทรง",
    x: 100,
    y: 100,
    w: 220,
    h: 140,
    rotation: 0,
    opacity: 1,
    shape: "rect",
    fill: "#6d4aff",
    radius: 22,
    ...options,
  };
}

function lineElement(options = {}) {
  return {
    id: uid("line"),
    type: "line",
    name: "เส้น",
    x: 100,
    y: 100,
    w: 260,
    h: 5,
    rotation: 0,
    opacity: 1,
    fill: "#6d4aff",
    ...options,
  };
}

const TEMPLATE_DEFINITIONS = [
  {
    id: "cherry",
    name: "Cherry campaign",
    meta: "Social • 1080 × 720",
    background: "#fff8f1",
    create() {
      return [
        textElement({ name: "ป้ายแคมเปญ", x: 88, y: 72, w: 430, h: 30, text: "CHERRY DESIGN  /  2026", fontSize: 16, fontWeight: 800, color: "#e86088" }),
        textElement({ name: "หัวข้อหลัก", x: 84, y: 130, w: 590, h: 170, text: "Design that\nfeels like you.", fontSize: 65, fontWeight: 850, lineHeight: 0.96, color: "#27233f" }),
        textElement({ name: "คำโปรย", x: 91, y: 337, w: 475, h: 78, text: "A playful canvas for bold ideas, beautiful layouts, and everyday magic.", fontSize: 21, fontWeight: 500, lineHeight: 1.24, color: "#716d7e" }),
        shapeElement({ name: "วงกลมชมพู", x: 714, y: 72, w: 280, h: 280, shape: "circle", fill: "#ff789d", radius: 140, opacity: 0.26 }),
        shapeElement({ name: "วงกลมหลัก", x: 757, y: 123, w: 198, h: 198, shape: "circle", fill: "#ff6d98", radius: 99 }),
        textElement({ name: "เชอร์รี่", x: 771, y: 156, w: 170, h: 155, text: "🍒", fontFamily: "Arial, sans-serif", fontSize: 118, fontWeight: 400, lineHeight: 1, align: "center" }),
        shapeElement({ name: "การ์ดสถิติ", x: 658, y: 437, w: 318, h: 157, fill: "#ffffff", radius: 27, opacity: 0.9 }),
        textElement({ name: "ตัวเลข", x: 688, y: 461, w: 105, h: 70, text: "01", fontSize: 44, fontWeight: 850, color: "#6d4aff" }),
        textElement({ name: "คำอธิบายการ์ด", x: 773, y: 470, w: 165, h: 75, text: "Make space\nfor good ideas.", fontSize: 18, fontWeight: 750, lineHeight: 1.08, color: "#34304c" }),
        lineElement({ name: "เส้นตกแต่ง", x: 88, y: 525, w: 410, h: 5, fill: "#27233f" }),
        textElement({ name: "ฟุตเตอร์", x: 91, y: 560, w: 380, h: 30, text: "CHERRYDESIGN.CO  •  CREATE BOLDLY", fontSize: 12, fontWeight: 800, color: "#a39eac" }),
      ];
    },
  },
  {
    id: "midnight",
    name: "Make noise",
    meta: "Campaign • Bold",
    background: "#24233e",
    create() {
      return [
        textElement({ name: "ป้ายแบรนด์", x: 82, y: 75, w: 300, h: 30, text: "CHERRY / STUDIO", fontSize: 15, fontWeight: 800, color: "#f9c65c" }),
        textElement({ name: "คำประกาศ", x: 78, y: 152, w: 640, h: 222, text: "MAKE\nNOISE.", fontSize: 100, fontWeight: 900, lineHeight: 0.84, color: "#ffffff" }),
        textElement({ name: "คำอธิบาย", x: 88, y: 445, w: 410, h: 65, text: "Your next idea does not need permission.\nIt needs a place to begin.", fontSize: 18, fontWeight: 500, lineHeight: 1.3, color: "#b9b4d3" }),
        shapeElement({ name: "วงกลมเหลือง", x: 744, y: 88, w: 232, h: 232, shape: "circle", fill: "#ffc95e", radius: 116 }),
        textElement({ name: "ไอคอนเชอร์รี่", x: 776, y: 126, w: 170, h: 140, text: "✦", fontSize: 106, fontWeight: 400, align: "center", color: "#24233e" }),
        shapeElement({ name: "แถบไล่ระดับ", x: 686, y: 456, w: 295, h: 112, fill: "#7058ef", radius: 24 }),
        textElement({ name: "คำบนป้าย", x: 719, y: 482, w: 230, h: 52, text: "START\nSOMETHING.", fontSize: 21, fontWeight: 850, lineHeight: 0.95, color: "#ffffff" }),
        lineElement({ name: "เส้นสีชมพู", x: 86, y: 587, w: 270, h: 4, fill: "#ff759d" }),
      ];
    },
  },
  {
    id: "sunny",
    name: "New drop",
    meta: "Product • Launch",
    background: "#ffbd65",
    create() {
      return [
        textElement({ name: "ป้ายสินค้า", x: 79, y: 62, w: 350, h: 30, text: "THE CHERRY EDIT  /  001", fontSize: 15, fontWeight: 850, color: "#3a2649" }),
        textElement({ name: "หัวข้อสินค้า", x: 76, y: 137, w: 580, h: 174, text: "NEW\nDROP", fontSize: 92, fontWeight: 900, lineHeight: 0.82, color: "#3a2649" }),
        textElement({ name: "คำโปรยสินค้า", x: 83, y: 356, w: 345, h: 70, text: "Small details.\nBig energy.", fontSize: 25, fontWeight: 700, lineHeight: 1.05, color: "#3a2649" }),
        shapeElement({ name: "กล่องส้ม", x: 665, y: 93, w: 274, h: 375, fill: "#e97855", radius: 140 }),
        shapeElement({ name: "กล่องครีม", x: 702, y: 153, w: 199, h: 270, fill: "#fff0d8", radius: 100 }),
        textElement({ name: "ไอคอนสินค้า", x: 726, y: 211, w: 150, h: 126, text: "✷", fontSize: 110, fontWeight: 500, align: "center", color: "#e97855" }),
        shapeElement({ name: "ป้ายราคา", x: 669, y: 507, w: 294, h: 92, fill: "#3a2649", radius: 19 }),
        textElement({ name: "ราคาสินค้า", x: 698, y: 534, w: 230, h: 37, text: "LIMITED / 24H ONLY", fontSize: 16, fontWeight: 850, color: "#ffbd65", align: "center" }),
      ];
    },
  },
  {
    id: "clean",
    name: "Ideas in motion",
    meta: "Presentation • Clean",
    background: "#f1f0e8",
    create() {
      return [
        textElement({ name: "หมวดหมู่", x: 86, y: 74, w: 250, h: 30, text: "CHERRY DESIGN  /  NOTES", fontSize: 14, fontWeight: 850, color: "#2e6666" }),
        textElement({ name: "หัวข้อคลีน", x: 82, y: 160, w: 660, h: 135, text: "Ideas in\nmotion.", fontSize: 76, fontWeight: 850, lineHeight: 0.9, color: "#25494b" }),
        textElement({ name: "คำอธิบายคลีน", x: 89, y: 374, w: 450, h: 58, text: "A simple framework for turning\nthoughts into useful things.", fontSize: 19, fontWeight: 500, lineHeight: 1.28, color: "#6b7c7b" }),
        shapeElement({ name: "แผ่นสีเขียว", x: 692, y: 98, w: 260, h: 198, fill: "#8cb9aa", radius: 30 }),
        textElement({ name: "เลขหน้า", x: 731, y: 132, w: 174, h: 90, text: "03", fontSize: 67, fontWeight: 850, color: "#f1f0e8", align: "center" }),
        shapeElement({ name: "แผ่นส้ม", x: 693, y: 341, w: 260, h: 198, fill: "#e5a06e", radius: 30 }),
        textElement({ name: "คำสั้น", x: 728, y: 402, w: 190, h: 55, text: "MAKE\nIT REAL", fontSize: 25, fontWeight: 850, lineHeight: 0.9, color: "#fff7e9", align: "center" }),
        lineElement({ name: "เส้นคลีน", x: 87, y: 589, w: 420, h: 4, fill: "#2e6666" }),
      ];
    },
  },
];

function createInitialState() {
  const first = TEMPLATE_DEFINITIONS[0];
  return {
    title: "Cherry social campaign",
    background: first.background,
    zoom: 0.68,
    showGrid: false,
    activePanel: "templates",
    panelOpen: true,
    search: "",
    elements: first.create(),
    selectedId: null,
    history: [],
    future: [],
  };
}

let state = createInitialState();
let saveTimer = null;
let toastTimer = null;
let fieldSnapshots = new Map();

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!stored || !Array.isArray(stored.elements)) return;
    state = {
      ...createInitialState(),
      ...stored,
      history: [],
      future: [],
      selectedId: null,
      panelOpen: stored.panelOpen !== false,
    };
  } catch (error) {
    console.warn("CherryDesign state could not be loaded", error);
  }
}

function saveState() {
  const saveDot = $(".save-dot");
  const saveStatus = $("#saveStatus");
  if (saveDot) saveDot.classList.add("is-saving");
  if (saveStatus) saveStatus.textContent = "กำลังบันทึก...";
  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        title: state.title,
        background: state.background,
        zoom: state.zoom,
        showGrid: state.showGrid,
        activePanel: state.activePanel,
        panelOpen: state.panelOpen,
        elements: state.elements,
      }));
    } catch (error) {
      console.warn("CherryDesign state could not be saved", error);
    }
    if (saveDot) saveDot.classList.remove("is-saving");
    if (saveStatus) saveStatus.textContent = "บันทึกแล้ว";
  }, 350);
}

function designSnapshot() {
  return JSON.stringify({
    title: state.title,
    background: state.background,
    elements: state.elements,
  });
}

function recordHistory(snapshot = designSnapshot()) {
  if (state.history.at(-1) === snapshot) return;
  state.history.push(snapshot);
  if (state.history.length > 60) state.history.shift();
  state.future = [];
}

function applySnapshot(snapshot) {
  const parsed = JSON.parse(snapshot);
  const selected = state.selectedId;
  state.title = parsed.title;
  state.background = parsed.background;
  state.elements = parsed.elements;
  state.selectedId = state.elements.some((item) => item.id === selected) ? selected : null;
}

function undo() {
  if (!state.history.length) return;
  state.future.push(designSnapshot());
  applySnapshot(state.history.pop());
  renderAll();
  saveState();
  showToast("ย้อนกลับการแก้ไขแล้ว");
}

function redo() {
  if (!state.future.length) return;
  state.history.push(designSnapshot());
  applySnapshot(state.future.pop());
  renderAll();
  saveState();
  showToast("ทำซ้ำการแก้ไขแล้ว");
}

function mutate(mutator, options = {}) {
  if (options.history !== false) recordHistory();
  mutator();
  renderAll();
  saveState();
}

function selectedItem() {
  return state.elements.find((item) => item.id === state.selectedId) || null;
}

function elementLabel(item) {
  if (!item) return "องค์ประกอบ";
  if (item.name) return item.name;
  if (item.type === "text") return "ข้อความ";
  if (item.type === "image") return "รูปภาพ";
  if (item.type === "line") return "เส้น";
  return "รูปทรง";
}

function elementKind(item) {
  return ({ text: "ข้อความ", shape: "รูปทรง", image: "รูปภาพ", line: "เส้น" })[item?.type] || "องค์ประกอบ";
}

function createElementNode(item, isSelected = false, scale = 1) {
  const node = document.createElement("div");
  node.className = `canvas-element element-${item.type}${isSelected ? " is-selected" : ""}`;
  node.dataset.id = item.id;
  node.title = `${elementLabel(item)} • ลากเพื่อย้าย`;
  node.style.left = `${item.x * scale}px`;
  node.style.top = `${item.y * scale}px`;
  node.style.width = `${Math.max(2, item.w * scale)}px`;
  node.style.height = `${Math.max(2, item.h * scale)}px`;
  node.style.opacity = item.opacity ?? 1;
  node.style.zIndex = String(Math.max(1, state.elements.indexOf(item) + 1));
  node.style.transform = `rotate(${item.rotation || 0}deg)`;

  if (item.type === "text") {
    const content = document.createElement("div");
    content.className = "text-content";
    content.textContent = item.text || "";
    content.style.fontFamily = item.fontFamily || "Inter, sans-serif";
    content.style.fontSize = `${(item.fontSize || 20) * scale}px`;
    content.style.fontWeight = item.fontWeight || 600;
    content.style.lineHeight = item.lineHeight || 1.1;
    content.style.color = item.color || "#202038";
    content.style.textAlign = item.align || "left";
    node.appendChild(content);
  }

  if (item.type === "shape") {
    const content = document.createElement("div");
    content.className = "shape-content";
    content.style.background = item.fill || "#6d4aff";
    content.style.borderRadius = item.shape === "circle" ? "50%" : `${(item.radius ?? 22) * scale}px`;
    if (item.shape === "triangle") content.style.clipPath = "polygon(50% 0, 100% 100%, 0 100%)";
    node.appendChild(content);
  }

  if (item.type === "line") {
    const content = document.createElement("div");
    content.className = "line-content";
    content.style.background = item.fill || "#6d4aff";
    node.appendChild(content);
  }

  if (item.type === "image") {
    if (item.src) {
      const image = document.createElement("img");
      image.src = item.src;
      image.alt = item.name || "รูปภาพในงานออกแบบ";
      image.draggable = false;
      image.style.borderRadius = `${(item.radius ?? 16) * scale}px`;
      node.appendChild(image);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "image-placeholder";
      placeholder.textContent = "วางรูปภาพที่นี่";
      node.appendChild(placeholder);
    }
  }

  if (isSelected && scale === 1) {
    const handle = document.createElement("span");
    handle.className = "resize-handle";
    handle.dataset.resizeHandle = "true";
    node.appendChild(handle);
  }
  return node;
}

function renderCanvas() {
  const canvas = $("#designCanvas");
  const wrap = $("#canvasWrap");
  const container = $("#canvasElements");
  if (!canvas || !wrap || !container) return;
  canvas.style.backgroundColor = state.background;
  canvas.style.transform = `scale(${state.zoom})`;
  canvas.classList.toggle("show-grid", state.showGrid);
  wrap.style.width = `${CANVAS_WIDTH * state.zoom}px`;
  wrap.style.height = `${CANVAS_HEIGHT * state.zoom}px`;
  container.replaceChildren(...state.elements.map((item) => createElementNode(item, item.id === state.selectedId)));
}

function renderTemplates() {
  const query = state.search.trim().toLowerCase();
  const templates = TEMPLATE_DEFINITIONS.filter((template) => `${template.name} ${template.meta}`.toLowerCase().includes(query));
  return `
    <p class="panel-intro">เริ่มจากไอเดียที่ใช่ แล้วปรับทุกอย่างให้เป็นสไตล์ของคุณได้ในไม่กี่คลิก</p>
    <div class="template-grid">
      ${templates.map((template) => `
        <button class="template-card" type="button" data-action="apply-template" data-template="${template.id}">
          <span class="template-thumb thumb-${template.id}"></span>
          <strong>${escapeHtml(template.name)}</strong>
          <small>${escapeHtml(template.meta)}</small>
        </button>
      `).join("") || '<div class="panel-intro">ไม่พบเทมเพลตที่ค้นหา ลองใช้คำอื่นดูนะ</div>'}
    </div>
    <div class="section-label"><span>เริ่มจากศูนย์</span></div>
    <div class="asset-list">
      <button class="asset-action" type="button" data-action="new-blank">
        <span class="asset-icon"><span class="icon" data-icon="plus"></span></span>
        <span><strong>ผืนผ้าใบเปล่า</strong><small>สร้างงานจากหน้าว่าง</small></span>
      </button>
    </div>
  `;
}

function renderElements() {
  return `
    <p class="panel-intro">เติมรายละเอียดให้เลย์เอาต์ของคุณด้วยรูปทรง เส้น และองค์ประกอบเล็ก ๆ</p>
    <div class="section-label"><span>เพิ่มองค์ประกอบ</span></div>
    <div class="asset-list">
      <button class="asset-action" type="button" data-action="add-shape" data-shape="rect"><span class="asset-icon"><span class="icon" data-icon="shapes"></span></span><span><strong>สี่เหลี่ยมมุมมน</strong><small>การ์ด ป้าย และพื้นผิว</small></span></button>
      <button class="asset-action" type="button" data-action="add-shape" data-shape="circle"><span class="asset-icon" style="color:#ff709a;background:#fff0f5"><span class="icon" data-icon="plus"></span></span><span><strong>วงกลม</strong><small>จุดเด่นและพื้นหลัง</small></span></button>
      <button class="asset-action" type="button" data-action="add-shape" data-shape="triangle"><span class="asset-icon" style="color:#f29a43;background:#fff6e9"><span class="icon" data-icon="chevron-up"></span></span><span><strong>สามเหลี่ยม</strong><small>จังหวะและทิศทาง</small></span></button>
      <button class="asset-action" type="button" data-action="add-line"><span class="asset-icon" style="color:#31a995;background:#ebfaf7"><span class="icon" data-icon="minus"></span></span><span><strong>เส้นคั่น</strong><small>จัดกลุ่มเนื้อหา</small></span></button>
    </div>
    <div class="section-label"><span>สีเร็ว</span><button type="button" data-action="apply-background" data-color="#fff8f1">พื้นหลัง</button></div>
    <div class="color-palette">
      ${["#6d4aff", "#ff6d98", "#ffc75f", "#75c9b7", "#24233e", "#fff8f1", "#f1f0e8", "#ffffff"].map((color) => `<button class="color-swatch" type="button" style="background:${color}" data-action="apply-color" data-color="${color}" aria-label="ใช้สี ${color}"></button>`).join("")}
    </div>
  `;
}

function renderTextPanel() {
  return `
    <p class="panel-intro">เลือกสไตล์ข้อความ แล้วแก้คำให้เป็นเสียงของคุณได้ทันที</p>
    <div class="asset-list">
      <button class="asset-action" type="button" data-action="add-text" data-variant="heading"><span class="asset-icon"><strong style="font-size:17px">T</strong></span><span><strong>หัวข้อใหญ่</strong><small>ตัวอักษรที่หยุดสายตา</small></span></button>
      <button class="asset-action" type="button" data-action="add-text" data-variant="subheading"><span class="asset-icon"><strong style="font-size:14px">Tt</strong></span><span><strong>หัวข้อรอง</strong><small>พาเรื่องราวเดินต่อ</small></span></button>
      <button class="asset-action" type="button" data-action="add-text" data-variant="body"><span class="asset-icon"><strong style="font-size:11px">Aa</strong></span><span><strong>เนื้อหา</strong><small>อธิบายรายละเอียดให้อ่านง่าย</small></span></button>
      <button class="asset-action" type="button" data-action="add-text" data-variant="label"><span class="asset-icon"><strong style="font-size:10px;letter-spacing:.08em">LABEL</strong></span><span><strong>ป้ายกำกับ</strong><small>ข้อมูลสั้น ๆ ที่ช่วยจัดระบบ</small></span></button>
    </div>
    <div class="section-label"><span>ฟอนต์แนะนำ</span></div>
    <div class="asset-list">
      <button class="asset-action" type="button" data-action="apply-font" data-font="Inter, ui-sans-serif, sans-serif"><span><strong style="font-size:14px">Inter</strong><small>Clean & friendly</small></span></button>
      <button class="asset-action" type="button" data-action="apply-font" data-font="Georgia, serif"><span><strong style="font-family:Georgia,serif;font-size:14px">Georgia</strong><small>Editorial & warm</small></span></button>
    </div>
  `;
}

function renderUploads() {
  return `
    <p class="panel-intro">นำภาพจากเครื่องของคุณเข้ามา แล้วลากวาง ปรับขนาด และจัดเลเยอร์ได้เลย</p>
    <button class="upload-dropzone" type="button" data-action="open-upload">
      <span class="upload-icon"><span class="icon" data-icon="upload"></span></span>
      <strong>อัปโหลดรูปภาพ</strong>
      <small>PNG, JPG, WEBP หรือ GIF ขนาดไม่เกิน 10 MB</small>
    </button>
    <div class="section-label"><span>เคล็ดลับรูปภาพ</span></div>
    <div class="brand-card">
      <div class="brand-mini"><span class="brand-mini-mark">✦</span> รูปของคุณยังเป็นของคุณ</div>
      <p>CherryDesign จัดเก็บงานไว้ในเบราว์เซอร์เครื่องนี้ก่อน คุณจึงเริ่มออกแบบได้โดยไม่ต้องตั้งค่าระบบเพิ่ม</p>
    </div>
  `;
}

function renderBrandPanel() {
  return `
    <p class="panel-intro">กำหนดโทนของแบรนด์ แล้วใช้สีเดิมซ้ำให้ทุกชิ้นงานดูเป็นทีมเดียวกัน</p>
    <div class="brand-card">
      <div class="brand-mini"><span class="brand-mini-mark">✦</span> CherryDesign Studio</div>
      <p>พื้นที่สำหรับเก็บสี ฟอนต์ และองค์ประกอบประจำแบรนด์ของคุณ</p>
    </div>
    <div class="section-label"><span>สีแบรนด์</span></div>
    <div class="color-palette">
      ${["#6d4aff", "#ff6d98", "#24233e", "#ffc75f", "#75c9b7", "#fff8f1"].map((color) => `<button class="color-swatch" type="button" style="background:${color}" data-action="apply-brand-color" data-color="${color}" aria-label="ใช้สีแบรนด์ ${color}"></button>`).join("")}
    </div>
    <div class="section-label"><span>แนวทาง</span></div>
    <div class="asset-list">
      <div class="asset-action" style="cursor:default"><span class="asset-icon"><span class="icon" data-icon="sparkles"></span></span><span><strong>สร้างให้สม่ำเสมอ</strong><small>ใช้สีหลัก 1–2 สี และเว้นที่ว่างให้ไอเดียหายใจ</small></span></div>
    </div>
  `;
}

function renderPanel() {
  const panel = $("#assetPanel");
  const content = $("#assetPanelContent");
  if (!panel || !content) return;
  panel.style.display = state.panelOpen ? "flex" : "none";
  $(".editor-shell").style.gridTemplateColumns = state.panelOpen ? "" : "76px minmax(560px, 1fr) 286px";
  const labels = { templates: "เทมเพลต", elements: "องค์ประกอบ", text: "ข้อความ", uploads: "อัปโหลด", brand: "แบรนด์" };
  $("#panelTitle").textContent = labels[state.activePanel] || "เทมเพลต";
  $$(".sidebar-tool[data-panel]").forEach((button) => button.classList.toggle("is-active", button.dataset.panel === state.activePanel));
  if (!state.panelOpen) return;
  content.innerHTML = ({ templates: renderTemplates, elements: renderElements, text: renderTextPanel, uploads: renderUploads, brand: renderBrandPanel }[state.activePanel] || renderTemplates)();
  hydrateIcons(content);
}

function colorField(label, field, value, extra = "") {
  const safe = hexColor(value);
  return `<div class="field"><label>${label}</label><div class="color-input-row"><input type="color" data-field="${field}" value="${safe}" aria-label="${label}" /><input type="text" data-field="${field}" value="${safe}" ${extra} /></div></div>`;
}

function renderSelectedInspector(item) {
  const commonStyle = `
    <div class="inspector-section">
      <div class="inspector-section-title">ตำแหน่งและขนาด</div>
      <div class="field-row four">
        <div class="field"><label>X</label><input type="number" data-field="x" value="${Math.round(item.x)}" /></div>
        <div class="field"><label>Y</label><input type="number" data-field="y" value="${Math.round(item.y)}" /></div>
        <div class="field"><label>W</label><input type="number" min="2" data-field="w" value="${Math.round(item.w)}" /></div>
        <div class="field"><label>H</label><input type="number" min="2" data-field="h" value="${Math.round(item.h)}" /></div>
      </div>
      <div class="field-row">
        <div class="field"><label>หมุน <span>${Math.round(item.rotation || 0)}°</span></label><input type="number" data-field="rotation" value="${Math.round(item.rotation || 0)}" /></div>
        <div class="field"><label>ความทึบ <span data-opacity-label>${Math.round((item.opacity ?? 1) * 100)}%</span></label><input type="range" min="0" max="1" step="0.01" data-field="opacity" value="${item.opacity ?? 1}" /></div>
      </div>
    </div>
  `;

  let styleSection = "";
  if (item.type === "text") {
    styleSection = `
      <div class="inspector-section">
        <div class="inspector-section-title">สไตล์ข้อความ</div>
        <div class="field"><label>ข้อความ</label><textarea data-field="text" spellcheck="false">${escapeHtml(item.text || "")}</textarea></div>
        <div class="field"><label>ฟอนต์</label><select data-field="fontFamily"><option value="Inter, ui-sans-serif, sans-serif" ${item.fontFamily?.startsWith("Inter") ? "selected" : ""}>Inter / Sans</option><option value="Georgia, serif" ${item.fontFamily === "Georgia, serif" ? "selected" : ""}>Georgia / Serif</option><option value="Arial, sans-serif" ${item.fontFamily === "Arial, sans-serif" ? "selected" : ""}>Arial</option><option value="Courier New, monospace" ${item.fontFamily === "Courier New, monospace" ? "selected" : ""}>Courier New</option></select></div>
        <div class="field-row">
          <div class="field"><label>ขนาด <span>${Math.round(item.fontSize)} px</span></label><input type="number" min="6" max="220" data-field="fontSize" value="${Math.round(item.fontSize)}" /></div>
          <div class="field"><label>น้ำหนัก</label><select data-field="fontWeight"><option value="400" ${String(item.fontWeight) === "400" ? "selected" : ""}>Regular</option><option value="500" ${String(item.fontWeight) === "500" ? "selected" : ""}>Medium</option><option value="700" ${String(item.fontWeight) === "700" ? "selected" : ""}>Bold</option><option value="850" ${String(item.fontWeight) === "850" ? "selected" : ""}>Black</option><option value="900" ${String(item.fontWeight) === "900" ? "selected" : ""}>Heavy</option></select></div>
        </div>
        ${colorField("สีตัวอักษร", "color", item.color)}
        <div class="field"><label>การจัดวาง</label><div class="segmented">${["left", "center", "right"].map((align) => `<button type="button" class="${item.align === align ? "is-active" : ""}" data-field="align" data-value="${align}" aria-label="จัดชิด${align === "left" ? "ซ้าย" : align === "center" ? "กลาง" : "ขวา"}"><span class="icon" data-icon="align-${align}"></span></button>`).join("")}</div></div>
      </div>
    `;
  } else if (item.type === "shape") {
    styleSection = `
      <div class="inspector-section">
        <div class="inspector-section-title">สไตล์รูปทรง</div>
        ${colorField("สีรูปทรง", "fill", item.fill)}
        <div class="field"><label>ความมน <span>${Math.round(item.radius || 0)} px</span></label><input type="range" min="0" max="180" data-field="radius" value="${item.radius || 0}" /></div>
      </div>
    `;
  } else if (item.type === "line") {
    styleSection = `
      <div class="inspector-section">
        <div class="inspector-section-title">สไตล์เส้น</div>
        ${colorField("สีเส้น", "fill", item.fill)}
        <div class="field"><label>ความหนา <span>${Math.round(item.h)} px</span></label><input type="range" min="2" max="40" data-field="h" value="${item.h}" /></div>
      </div>
    `;
  } else if (item.type === "image") {
    styleSection = `
      <div class="inspector-section">
        <div class="inspector-section-title">สไตล์รูปภาพ</div>
        <div class="field"><label>มุมโค้ง <span>${Math.round(item.radius || 0)} px</span></label><input type="range" min="0" max="80" data-field="radius" value="${item.radius || 0}" /></div>
        <button class="mini-button" type="button" data-action="replace-upload"><span class="icon" data-icon="upload"></span> เปลี่ยนรูปภาพ</button>
      </div>
    `;
  }

  return `
    <div class="inspector-header">
      <div><div class="eyebrow">SELECTED LAYER</div><h2>${escapeHtml(elementLabel(item))}</h2><div class="inspector-type">${elementKind(item)}</div></div>
      <button class="icon-button" type="button" data-action="delete-selected" aria-label="ลบองค์ประกอบ"><span class="icon" data-icon="trash"></span></button>
    </div>
    <div class="inspector-section inspector-actions"><button class="mini-button" type="button" data-action="duplicate-selected"><span class="icon" data-icon="copy"></span> ทำสำเนา</button><button class="mini-button" type="button" data-action="rename-selected"><span class="icon" data-icon="type"></span> เปลี่ยนชื่อ</button></div>
    ${styleSection}
    ${commonStyle}
    <div class="inspector-section">
      <div class="inspector-section-title">ลำดับเลเยอร์</div>
      <div class="layer-order"><button class="mini-button" type="button" data-action="move-up"><span class="icon" data-icon="move-up"></span> ขึ้นบน</button><button class="mini-button" type="button" data-action="move-down"><span class="icon" data-icon="move-down"></span> ลงล่าง</button></div>
    </div>
  `;
}

function renderLayers() {
  const sorted = [...state.elements].reverse();
  if (!sorted.length) return '<div class="panel-intro">ยังไม่มีเลเยอร์ในงานนี้</div>';
  return sorted.map((item) => {
    const preview = item.type === "text" ? escapeHtml((item.text || "T").slice(0, 2)) : item.type === "image" ? "▧" : item.type === "line" ? "—" : "◆";
    return `<button class="layer-item ${item.id === state.selectedId ? "is-active" : ""}" type="button" data-layer-id="${item.id}"><span class="layer-preview">${preview}</span><span class="layer-name">${escapeHtml(elementLabel(item))}</span><span class="layer-kind">${elementKind(item)}</span></button>`;
  }).join("");
}

function renderInspector() {
  const inspector = $("#inspector");
  if (!inspector) return;
  const item = selectedItem();
  inspector.innerHTML = `
    ${item ? renderSelectedInspector(item) : `
      <div class="empty-inspector"><div class="empty-inspector-art"></div><h3>เลือกองค์ประกอบสักชิ้น</h3><p>คลิกข้อความ รูปทรง หรือรูปภาพบนผืนผ้าใบ เพื่อปรับแต่งรายละเอียดตรงนี้</p></div>
    `}
    <div class="inspector-section">
      <div class="inspector-section-title">พื้นหลังผืนผ้าใบ</div>
      ${colorField("สีพื้นหลัง", "designBackground", state.background)}
    </div>
    <div class="inspector-section layer-panel">
      <div class="inspector-section-title">เลเยอร์ <span style="float:right;color:#b0b1bf;font-weight:600">${state.elements.length} ชิ้น</span></div>
      <div class="layer-list">${renderLayers()}</div>
    </div>
  `;
  hydrateIcons(inspector);
}

function renderToolbar() {
  const item = selectedItem();
  $("#undoButton").disabled = state.history.length === 0;
  $("#redoButton").disabled = state.future.length === 0;
  $("#gridButton").classList.toggle("is-active", state.showGrid);
  $("#zoomValue").textContent = `${Math.round(state.zoom * 100)}%`;
  const label = $("#selectionLabel");
  label.textContent = item ? `${elementLabel(item)} • ${Math.round(item.w)} × ${Math.round(item.h)} px` : "เลือกองค์ประกอบเพื่อเริ่มปรับแต่ง";
  label.classList.toggle("is-selected", Boolean(item));
  $("#documentTitle").value = state.title;
  $("#previewTitle").textContent = state.title;
}

function renderAll() {
  renderPanel();
  renderCanvas();
  renderInspector();
  renderToolbar();
}

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 1900);
}

function addText(variant = "body") {
  const variants = {
    heading: { name: "หัวข้อใหม่", text: "หัวข้อที่น่าจดจำ", x: 120, y: 120, w: 540, h: 110, fontSize: 56, fontWeight: 850, color: "#202038" },
    subheading: { name: "หัวข้อรองใหม่", text: "เล่าเรื่องให้ชัดขึ้น", x: 120, y: 170, w: 460, h: 70, fontSize: 32, fontWeight: 750, color: "#514d63" },
    body: { name: "เนื้อหาใหม่", text: "เขียนรายละเอียดของคุณที่นี่ แล้วทำให้ไอเดียมีพื้นที่ได้เติบโต", x: 120, y: 220, w: 430, h: 90, fontSize: 20, fontWeight: 500, color: "#777383" },
    label: { name: "ป้ายกำกับใหม่", text: "NEW / NOTE", x: 120, y: 100, w: 240, h: 35, fontSize: 14, fontWeight: 850, color: "#6d4aff" },
  };
  const item = textElement(variants[variant] || variants.body);
  mutate(() => { state.elements.push(item); state.selectedId = item.id; });
  showToast("เพิ่มข้อความแล้ว");
}

function addShape(shape = "rect") {
  const item = shapeElement({
    name: shape === "circle" ? "วงกลมใหม่" : shape === "triangle" ? "สามเหลี่ยมใหม่" : "สี่เหลี่ยมใหม่",
    shape,
    x: 180 + (state.elements.length % 3) * 35,
    y: 150 + (state.elements.length % 4) * 28,
    fill: shape === "circle" ? "#ff6d98" : shape === "triangle" ? "#ffc75f" : "#6d4aff",
    w: shape === "circle" ? 180 : 240,
    h: shape === "circle" ? 180 : 150,
    radius: shape === "circle" ? 90 : 22,
  });
  mutate(() => { state.elements.push(item); state.selectedId = item.id; });
  showToast("เพิ่มรูปทรงแล้ว");
}

function addLine() {
  const item = lineElement({ name: "เส้นใหม่", x: 130, y: 430 + (state.elements.length % 4) * 24, w: 360, h: 5 });
  mutate(() => { state.elements.push(item); state.selectedId = item.id; });
  showToast("เพิ่มเส้นแล้ว");
}

function addImageFromFile(file) {
  if (!file || !file.type.startsWith("image/")) {
    showToast("เลือกไฟล์รูปภาพเท่านั้น");
    return;
  }
  if (file.size > 10 * 1024 * 1024) {
    showToast("ไฟล์ใหญ่เกิน 10 MB");
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const image = new Image();
    image.onload = () => {
      const maxWidth = 470;
      const maxHeight = 330;
      const ratio = Math.min(maxWidth / image.naturalWidth, maxHeight / image.naturalHeight, 1);
      const item = {
        id: uid("image"),
        type: "image",
        name: file.name.replace(/\.[^.]+$/, "") || "รูปภาพใหม่",
        x: Math.round((CANVAS_WIDTH - image.naturalWidth * ratio) / 2),
        y: Math.round((CANVAS_HEIGHT - image.naturalHeight * ratio) / 2),
        w: Math.round(image.naturalWidth * ratio),
        h: Math.round(image.naturalHeight * ratio),
        rotation: 0,
        opacity: 1,
        radius: 18,
        src: reader.result,
      };
      mutate(() => { state.elements.push(item); state.selectedId = item.id; });
      showToast("เพิ่มรูปภาพแล้ว");
    };
    image.src = reader.result;
  };
  reader.readAsDataURL(file);
}

function applyTemplate(templateId) {
  const template = TEMPLATE_DEFINITIONS.find((entry) => entry.id === templateId);
  if (!template) return;
  mutate(() => {
    state.background = template.background;
    state.elements = template.create();
    state.selectedId = state.elements.find((item) => item.name === "หัวข้อหลัก" || item.name === "คำประกาศ" || item.name === "หัวข้อสินค้า" || item.name === "หัวข้อคลีน")?.id || null;
  });
  showToast(`ใช้เทมเพลต “${template.name}” แล้ว`);
}

function duplicateSelected() {
  const item = selectedItem();
  if (!item) { showToast("เลือกองค์ประกอบก่อนทำสำเนา"); return; }
  const copy = clone(item);
  copy.id = uid(item.type);
  copy.name = `${elementLabel(item)} สำเนา`;
  copy.x = Math.min(CANVAS_WIDTH - copy.w, copy.x + 24);
  copy.y = Math.min(CANVAS_HEIGHT - copy.h, copy.y + 24);
  mutate(() => { state.elements.push(copy); state.selectedId = copy.id; });
  showToast("ทำสำเนาแล้ว");
}

function deleteSelected() {
  const item = selectedItem();
  if (!item) { showToast("เลือกองค์ประกอบก่อนลบ"); return; }
  mutate(() => {
    state.elements = state.elements.filter((entry) => entry.id !== item.id);
    state.selectedId = null;
  });
  showToast("ลบองค์ประกอบแล้ว");
}

function renameSelected() {
  const item = selectedItem();
  if (!item) return;
  const next = window.prompt("ตั้งชื่อเลเยอร์", elementLabel(item));
  if (!next || !next.trim()) return;
  mutate(() => { item.name = next.trim(); });
}

function reorderSelected(direction) {
  const index = state.elements.findIndex((entry) => entry.id === state.selectedId);
  const next = index + direction;
  if (index < 0 || next < 0 || next >= state.elements.length) return;
  mutate(() => {
    [state.elements[index], state.elements[next]] = [state.elements[next], state.elements[index]];
  });
}

function updateField(field, rawValue) {
  if (field === "designBackground") {
    state.background = hexColor(rawValue, state.background);
    return;
  }
  const item = selectedItem();
  if (!item) return;
  const numericFields = ["x", "y", "w", "h", "rotation", "opacity", "radius", "fontSize"];
  let value = rawValue;
  if (numericFields.includes(field)) {
    if (rawValue === "") return;
    value = Number(rawValue);
    if (!Number.isFinite(value)) return;
  }
  if (["fontWeight"].includes(field)) value = Number(rawValue);
  if (["color", "fill"].includes(field)) value = hexColor(rawValue, item[field] || "#6d4aff");
  if (["w", "h", "fontSize", "radius"].includes(field)) value = Math.max(2, value);
  if (field === "opacity") value = Math.max(0, Math.min(1, value));
  item[field] = value;
}

function beginFieldEdit(key) {
  if (!fieldSnapshots.has(key)) fieldSnapshots.set(key, designSnapshot());
}

function finishFieldEdit(key) {
  const snapshot = fieldSnapshots.get(key);
  if (snapshot && snapshot !== designSnapshot()) recordHistory(snapshot);
  fieldSnapshots.delete(key);
}

function setZoom(value) {
  state.zoom = Math.max(0.32, Math.min(1.35, Number(value)));
  renderCanvas();
  renderToolbar();
  saveState();
}

function fitCanvas() {
  const stage = $("#canvasStage");
  if (!stage) return;
  const availableWidth = Math.max(340, stage.clientWidth - 100);
  const availableHeight = Math.max(250, stage.clientHeight - 160);
  const fit = Math.min(1, availableWidth / CANVAS_WIDTH, availableHeight / CANVAS_HEIGHT);
  setZoom(Math.max(0.32, fit));
  showToast("ปรับผืนผ้าใบให้พอดีแล้ว");
}

function buildSvg() {
  const items = state.elements.map((item) => {
    const rotation = item.rotation || 0;
    const cx = item.x + item.w / 2;
    const cy = item.y + item.h / 2;
    const transform = rotation ? ` transform="rotate(${rotation} ${cx} ${cy})"` : "";
    const opacity = item.opacity ?? 1;
    if (item.type === "text") {
      const lines = String(item.text || "").split("\n");
      const anchor = item.align === "center" ? "middle" : item.align === "right" ? "end" : "start";
      const textX = item.align === "center" ? cx : item.align === "right" ? item.x + item.w : item.x;
      const firstY = item.y + (item.fontSize || 20);
      const tspans = lines.map((line, index) => `<tspan x="${textX}" dy="${index === 0 ? 0 : (item.fontSize || 20) * (item.lineHeight || 1.1)}">${escapeXml(line)}</tspan>`).join("");
      return `<text x="${textX}" y="${firstY}" fill="${escapeXml(item.color || "#202038")}" font-family="${escapeXml(item.fontFamily || "Inter, sans-serif")}" font-size="${item.fontSize || 20}" font-weight="${item.fontWeight || 600}" text-anchor="${anchor}" opacity="${opacity}"${transform}>${tspans}</text>`;
    }
    if (item.type === "shape") {
      if (item.shape === "circle") return `<ellipse cx="${cx}" cy="${cy}" rx="${item.w / 2}" ry="${item.h / 2}" fill="${escapeXml(item.fill || "#6d4aff")}" opacity="${opacity}"${transform}/>`;
      if (item.shape === "triangle") return `<path d="M ${cx} ${item.y} L ${item.x + item.w} ${item.y + item.h} L ${item.x} ${item.y + item.h} Z" fill="${escapeXml(item.fill || "#6d4aff")}" opacity="${opacity}"${transform}/>`;
      return `<rect x="${item.x}" y="${item.y}" width="${item.w}" height="${item.h}" rx="${item.radius || 0}" fill="${escapeXml(item.fill || "#6d4aff")}" opacity="${opacity}"${transform}/>`;
    }
    if (item.type === "line") return `<rect x="${item.x}" y="${item.y}" width="${item.w}" height="${item.h}" rx="${item.h / 2}" fill="${escapeXml(item.fill || "#6d4aff")}" opacity="${opacity}"${transform}/>`;
    if (item.type === "image" && item.src) return `<image href="${escapeXml(item.src)}" x="${item.x}" y="${item.y}" width="${item.w}" height="${item.h}" preserveAspectRatio="none" opacity="${opacity}"${transform}/>`;
    return "";
  }).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${CANVAS_WIDTH}" height="${CANVAS_HEIGHT}" viewBox="0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}"><rect width="100%" height="100%" fill="${escapeXml(state.background)}"/>${items}</svg>`;
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function exportSvg() {
  downloadBlob(new Blob([buildSvg()], { type: "image/svg+xml;charset=utf-8" }), `${state.title || "cherrydesign"}.svg`);
  showToast("ดาวน์โหลด SVG แล้ว");
}

function exportPng() {
  const svg = buildSvg();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml;charset=utf-8" }));
  const image = new Image();
  image.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = CANVAS_WIDTH * 2;
    canvas.height = CANVAS_HEIGHT * 2;
    const context = canvas.getContext("2d");
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
      if (blob) downloadBlob(blob, `${state.title || "cherrydesign"}.png`);
      URL.revokeObjectURL(url);
      showToast("ดาวน์โหลด PNG แล้ว");
    }, "image/png");
  };
  image.onerror = () => { URL.revokeObjectURL(url); showToast("ส่งออก PNG ไม่สำเร็จ"); };
  image.src = url;
}

function renderPreview() {
  const preview = $("#previewCanvas");
  if (!preview) return;
  const scale = preview.clientWidth / CANVAS_WIDTH || 0.72;
  preview.style.backgroundColor = state.background;
  preview.replaceChildren(...state.elements.map((item) => createElementNode(item, false, scale)));
}

function openPreview() {
  const modal = $("#previewModal");
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  window.requestAnimationFrame(renderPreview);
}

function closePreview() {
  $("#previewModal").hidden = true;
  document.body.style.overflow = "hidden";
}

function handleCanvasPointerDown(event) {
  if (event.button !== 0) return;
  const node = event.target.closest(".canvas-element");
  if (!node) {
    state.selectedId = null;
    renderAll();
    return;
  }
  const item = state.elements.find((entry) => entry.id === node.dataset.id);
  if (!item) return;
  event.preventDefault();
  const mode = event.target.closest("[data-resize-handle]") ? "resize" : "drag";
  state.selectedId = item.id;
  renderAll();

  const startSnapshot = designSnapshot();
  const startX = event.clientX;
  const startY = event.clientY;
  const startItem = { x: item.x, y: item.y, w: item.w, h: item.h };
  let changed = false;

  const onMove = (moveEvent) => {
    const dx = (moveEvent.clientX - startX) / state.zoom;
    const dy = (moveEvent.clientY - startY) / state.zoom;
    if (mode === "drag") {
      item.x = Math.round(Math.max(0, Math.min(CANVAS_WIDTH - item.w, startItem.x + dx)));
      item.y = Math.round(Math.max(0, Math.min(CANVAS_HEIGHT - item.h, startItem.y + dy)));
    } else {
      item.w = Math.round(Math.max(24, Math.min(CANVAS_WIDTH - item.x, startItem.w + dx)));
      item.h = Math.round(Math.max(item.type === "line" ? 2 : 24, Math.min(CANVAS_HEIGHT - item.y, startItem.h + dy)));
      if (moveEvent.shiftKey && item.type !== "line") {
        const ratio = startItem.w / startItem.h;
        item.h = Math.round(Math.max(24, Math.min(CANVAS_HEIGHT - item.y, item.w / ratio)));
      }
    }
    changed = true;
    renderCanvas();
  };

  const onUp = () => {
    document.removeEventListener("pointermove", onMove);
    document.removeEventListener("pointerup", onUp);
    if (changed) recordHistory(startSnapshot);
    renderAll();
    saveState();
  };

  document.addEventListener("pointermove", onMove);
  document.addEventListener("pointerup", onUp, { once: true });
}

function handleInspectorInput(event) {
  const target = event.target;
  if (!target.dataset.field || target.dataset.value) return;
  const key = `${state.selectedId || "canvas"}:${target.dataset.field}`;
  beginFieldEdit(key);
  updateField(target.dataset.field, target.value);
  renderCanvas();
  if (target.type === "range") {
    const label = target.closest(".field")?.querySelector("[data-opacity-label]");
    if (label && target.dataset.field === "opacity") label.textContent = `${Math.round(Number(target.value) * 100)}%`;
  }
  saveState();
}

function handleInspectorChange(event) {
  const target = event.target;
  if (!target.dataset.field || target.dataset.value) return;
  const key = `${state.selectedId || "canvas"}:${target.dataset.field}`;
  finishFieldEdit(key);
  renderAll();
}

function handleInspectorClick(event) {
  const button = event.target.closest("button");
  if (!button) return;
  if (button.dataset.field && button.dataset.value) {
    const key = `${state.selectedId}:${button.dataset.field}`;
    beginFieldEdit(key);
    updateField(button.dataset.field, button.dataset.value);
    finishFieldEdit(key);
    renderAll();
    saveState();
    return;
  }
  handleAction(button.dataset.action, button.dataset);
}

function handleAction(action, data = {}) {
  switch (action) {
    case "apply-template": applyTemplate(data.template); break;
    case "new-blank": mutate(() => { state.background = "#ffffff"; state.elements = []; state.selectedId = null; }); showToast("สร้างผืนผ้าใบเปล่าแล้ว"); break;
    case "add-text": addText(data.variant); break;
    case "add-shape": addShape(data.shape); break;
    case "add-line": addLine(); break;
    case "open-upload": $("#fileInput").click(); break;
    case "replace-upload": $("#fileInput").click(); break;
    case "apply-color": {
      const item = selectedItem();
      if (item && (item.type === "shape" || item.type === "line")) mutate(() => { item.fill = data.color; });
      else mutate(() => { state.background = data.color; });
      break;
    }
    case "apply-background": mutate(() => { state.background = data.color; }); break;
    case "apply-brand-color": {
      const item = selectedItem();
      if (item && item.type === "text") mutate(() => { item.color = data.color; });
      else if (item && (item.type === "shape" || item.type === "line")) mutate(() => { item.fill = data.color; });
      else mutate(() => { state.background = data.color; });
      break;
    }
    case "apply-font": {
      const item = selectedItem();
      if (!item || item.type !== "text") { showToast("เลือกข้อความก่อนเปลี่ยนฟอนต์"); break; }
      mutate(() => { item.fontFamily = data.font; });
      break;
    }
    case "duplicate-selected": duplicateSelected(); break;
    case "delete-selected": deleteSelected(); break;
    case "rename-selected": renameSelected(); break;
    case "move-up": reorderSelected(1); break;
    case "move-down": reorderSelected(-1); break;
    default: break;
  }
}

function handleSidebarClick(event) {
  const button = event.target.closest("[data-panel]");
  if (!button) return;
  state.activePanel = button.dataset.panel;
  state.panelOpen = true;
  renderPanel();
  saveState();
}

function handleKeyboard(event) {
  const typing = ["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName);
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "z") {
    event.preventDefault();
    if (event.shiftKey) redo(); else undo();
    return;
  }
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "y") { event.preventDefault(); redo(); return; }
  if (typing) return;
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "d") { event.preventDefault(); duplicateSelected(); return; }
  if (event.key === "Delete" || event.key === "Backspace") { event.preventDefault(); deleteSelected(); return; }
  const item = selectedItem();
  if (!item) return;
  const step = event.shiftKey ? 10 : 1;
  if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
    event.preventDefault();
    const snapshot = designSnapshot();
    if (event.key === "ArrowLeft") item.x = Math.max(0, item.x - step);
    if (event.key === "ArrowRight") item.x = Math.min(CANVAS_WIDTH - item.w, item.x + step);
    if (event.key === "ArrowUp") item.y = Math.max(0, item.y - step);
    if (event.key === "ArrowDown") item.y = Math.min(CANVAS_HEIGHT - item.h, item.y + step);
    recordHistory(snapshot);
    renderAll();
    saveState();
  }
}

function init() {
  loadState();
  hydrateIcons();
  renderAll();

  $("#assetPanel").addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (button) handleAction(button.dataset.action, button.dataset);
  });
  $(".tool-sidebar").addEventListener("click", handleSidebarClick);
  $("#designCanvas").addEventListener("pointerdown", handleCanvasPointerDown);
  $("#designCanvas").addEventListener("dblclick", (event) => {
    const node = event.target.closest(".element-text");
    if (!node) return;
    const item = state.elements.find((entry) => entry.id === node.dataset.id);
    if (!item) return;
    const next = window.prompt("แก้ไขข้อความ", item.text);
    if (next === null) return;
    mutate(() => { item.text = next; });
  });
  $("#inspector").addEventListener("input", handleInspectorInput);
  $("#inspector").addEventListener("change", handleInspectorChange);
  $("#inspector").addEventListener("click", handleInspectorClick);
  $("#inspector").addEventListener("click", (event) => {
    const layer = event.target.closest("[data-layer-id]");
    if (layer) { state.selectedId = layer.dataset.layerId; renderAll(); }
  });
  $("#fileInput").addEventListener("change", (event) => {
    addImageFromFile(event.target.files?.[0]);
    event.target.value = "";
  });
  $("#assetSearch").addEventListener("input", (event) => { state.search = event.target.value; renderPanel(); });
  $("#documentTitle").addEventListener("input", (event) => { state.title = event.target.value || "Untitled design"; saveState(); });
  $("#undoButton").addEventListener("click", undo);
  $("#redoButton").addEventListener("click", redo);
  $("#gridButton").addEventListener("click", () => { state.showGrid = !state.showGrid; renderAll(); saveState(); });
  $("#zoomOutButton").addEventListener("click", () => setZoom(state.zoom - 0.08));
  $("#zoomInButton").addEventListener("click", () => setZoom(state.zoom + 0.08));
  $("#fitButton").addEventListener("click", fitCanvas);
  $("#zoomValue").addEventListener("click", fitCanvas);
  $("#duplicateFooterButton").addEventListener("click", duplicateSelected);
  $("#clearButton").addEventListener("click", () => {
    if (!state.elements.length || window.confirm("ล้างองค์ประกอบทั้งหมดจากงานนี้หรือไม่?")) {
      mutate(() => { state.elements = []; state.selectedId = null; });
      showToast("ล้างงานแล้ว");
    }
  });
  $("#helpButton").addEventListener("click", () => showToast("ลากเพื่อย้าย • จุดมุมเพื่อปรับขนาด • Ctrl/Cmd + Z เพื่อย้อนกลับ"));
  $("#closePanelButton").addEventListener("click", () => {
    state.panelOpen = false;
    $(".editor-shell").style.gridTemplateColumns = "76px minmax(560px, 1fr) 286px";
    renderPanel();
    saveState();
  });
  $("#previewButton").addEventListener("click", openPreview);
  $("#closePreviewButton").addEventListener("click", closePreview);
  $("#previewModal").addEventListener("click", (event) => { if (event.target.id === "previewModal") closePreview(); });
  $("#previewExportButton").addEventListener("click", exportPng);
  $("#exportButton").addEventListener("click", () => { $("#exportMenu").hidden = !$("#exportMenu").hidden; });
  $("#exportMenu").addEventListener("click", (event) => {
    const action = event.target.closest("[data-export]")?.dataset.export;
    if (!action) return;
    $("#exportMenu").hidden = true;
    if (action === "svg") exportSvg(); else exportPng();
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".export-wrap")) $("#exportMenu").hidden = true;
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (!$("#previewModal").hidden) closePreview();
      $("#exportMenu").hidden = true;
    }
    handleKeyboard(event);
  });
  window.addEventListener("resize", () => { if (!$("#previewModal").hidden) renderPreview(); });
}

init();
