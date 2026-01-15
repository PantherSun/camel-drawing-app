// --- Canvas setup ---
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// --- Toolbar elements ---
const toolSelector = document.getElementById("toolSelector");
const brushSelector = document.getElementById("brushSelector");
const brushSizeSlider = document.getElementById("brushSize");
const colorPicker = document.getElementById("colorPicker");

const textControls = document.getElementById("textControls");
const fontSelector = document.getElementById("fontSelector");
const textColor = document.getElementById("textColor");
const fontSizeInput = document.getElementById("fontSize");
const boldBtn = document.getElementById("boldBtn");
const italicBtn = document.getElementById("italicBtn");
const underlineBtn = document.getElementById("underlineBtn");

// --- State variables ---
let tool = "brush";
let drawing = false;
let brushColor = "#0000ff";
let brushSize = 5;
let fontFamily = "Helvetica";
let fontSizeValue = 20;
let fontBold = false;
let fontItalic = false;
let fontUnderline = false;

// --- Show/Hide controls based on tool ---
function updateToolbar() {
  document.getElementById("brushControls").style.display =
    (tool === "brush" || tool === "eraser") ? "flex" : "none";
  textControls.style.display = (tool === "text") ? "flex" : "none";
}

// Initial toolbar update
updateToolbar();

// --- Tool selection ---
toolSelector.addEventListener("change", e => {
  tool = e.target.value;
  updateToolbar();
});

// --- Brush/Color controls ---
brushSelector.addEventListener("change", e => { brushColor = colorPicker.value; });
brushSizeSlider.addEventListener("input", e => { brushSize = e.target.value; });
colorPicker.addEventListener("input", e => { brushColor = e.target.value; });

// --- Text controls ---
fontSelector.addEventListener("change", e => fontFamily = e.target.value);
fontSizeInput.addEventListener("input", e => fontSizeValue = e.target.value);
boldBtn.addEventListener("click", () => fontBold = !fontBold);
italicBtn.addEventListener("click", () => fontItalic = !fontItalic);
underlineBtn.addEventListener("click", () => fontUnderline = !fontUnderline);

// --- Drawing logic ---
canvas.addEventListener("mousedown", e => {
  if (tool === "brush"
