function getFieldValue(fieldSelector) {
    const el = document.querySelector(fieldSelector);
    if (!el) {
        return "";
    }

    // Input / textarea
    if (typeof el.value === "string") {
        return el.value.trim();
    }

    // contenteditable / generic element
    return (el.textContent || "").trim();
}

function updateScreen(ev) {
    if (ev && typeof ev.preventDefault === "function") {
        ev.preventDefault();
    }

    const selector = getFieldValue("#selector");
    const prop = getFieldValue("#thing-to-change");
    const val = getFieldValue("#value");
    if (!selector || !prop || !val) {
        return;
    }

    // Apply the update directly (no eval) so values like quotes/HTML don't break the JS string.
    try {
        const myElement = document.querySelector(selector);
        if (!myElement) return;
        applyUpdate(myElement, prop, val);
    } catch (ex) {
        console.error(ex);
    }

    // Render the "JS output" safely using textContent (prevents HTML injection/escaping issues).
    const jsElem = document.querySelector("#js");
    if (jsElem) {
        const wasEmpty = (jsElem.textContent || "").trim() === "";
        const prefix = wasEmpty ? "let " : "";
        const propExpr = formatPropExpression(prop);
        const executionString =
            `${prefix}myElement = document.querySelector(${jsSingleQuoteString(selector)});\n` +
            `myElement${propExpr} = ${jsSingleQuoteString(val)};\n`;
        jsElem.textContent = (jsElem.textContent || "") + executionString;

        // Element previously highlighted.
        // To highlight again, first unset `dataset.highlighted`.
        jsElem.removeAttribute("data-highlighted");
        hljs.highlightElement(jsElem);
    }
}

function jsSingleQuoteString(str) {
    // JS string literal wrapped in single quotes, escaping only what's necessary.
    // This keeps HTML attributes like class="x" readable in the rendered output.
    return "'" + String(str)
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'")
        .replace(/\r/g, "\\r")
        .replace(/\n/g, "\\n")
        .replace(/\t/g, "\\t")
        .replace(/\u2028/g, "\\u2028")
        .replace(/\u2029/g, "\\u2029") + "'";
}

function formatPropExpression(prop) {
    // Prefer dot notation for common cases; fall back to bracket notation for anything else.
    if (prop.startsWith("style.")) {
        return `.${prop}`;
    }
    if (prop.startsWith("dataset.")) {
        return `.${prop}`;
    }
    if (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(prop)) {
        return `.${prop}`;
    }
    return `[${jsSingleQuoteString(prop)}]`;
}

function applyUpdate(el, prop, val) {
    // Support "style.backgroundColor"
    if (prop.startsWith("style.")) {
        const styleProp = prop.slice("style.".length);
        el.style[styleProp] = val;
        return;
    }

    // Support "dataset.foo"
    if (prop.startsWith("dataset.")) {
        const key = prop.slice("dataset.".length);
        el.dataset[key] = val;
        return;
    }

    // Common property assignment (includes innerHTML/textContent/className/id/src/alt/etc)
    if (prop in el) {
        try {
            el[prop] = val;
            return;
        } catch {
            // fall through to attribute
        }
    }

    // Attribute fallback (handles things like "aria-label", "data-x", etc.)
    el.setAttribute(prop, val);
}

const editor = document.querySelector(".editor");
if (editor) {
    editor.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter") {
            const target = ev.target;
            // Let Enter activate hint menu items / hint button normally.
            if (target && (target.closest?.(".hint-menu") || target.closest?.(".hint-button"))) {
                return;
            }

            ev.preventDefault();
            updateScreen(ev);
        }
    });
}

const propInput = document.querySelector("#thing-to-change");
const hintBtn = document.querySelector("#prop-hint-btn");
const hintMenu = document.querySelector("#prop-hint-menu");

function closeHints() {
    if (!hintMenu || !hintBtn) return;
    hintMenu.hidden = true;
    hintBtn.setAttribute("aria-expanded", "false");
}

function openHints() {
    if (!hintMenu || !hintBtn) return;
    positionHintsMenu();
    hintMenu.hidden = false;
    hintBtn.setAttribute("aria-expanded", "true");
}

function toggleHints() {
    if (!hintMenu) return;
    if (hintMenu.hidden) {
        openHints();
    } else {
        closeHints();
    }
}

function positionHintsMenu() {
    if (!hintMenu || !propInput) return;
    const rect = propInput.getBoundingClientRect();
    hintMenu.style.position = "fixed";
    hintMenu.style.left = `${rect.left}px`;
    hintMenu.style.top = `${rect.bottom + 8}px`;
    hintMenu.style.width = `${rect.width}px`;
}

if (hintBtn) {
    hintBtn.addEventListener("click", (ev) => {
        ev.stopPropagation();
        toggleHints();
    });
}

if (hintMenu) {
    hintMenu.addEventListener("click", (ev) => {
        const btn = ev.target.closest?.("button[data-value]");
        if (!btn) return;
        if (propInput) {
            propInput.value = btn.getAttribute("data-value") || "";
            propInput.focus();
        }
        closeHints();
    });
}

// Close when clicking anywhere outside the hint UI.
// Use capture to be resilient to fixed-position menus and event bubbling quirks.
function handleOutsideHintClick(ev) {
    if (!hintMenu || hintMenu.hidden) return;
    const t = ev.target;
    // Treat anything outside the popup itself (and the Hint toggle button) as "outside".
    if (hintMenu.contains(t) || hintBtn?.contains(t)) {
        return;
    }
    closeHints();
}

// Prefer pointer events, but keep a mouse fallback for older browsers / edge cases.
document.addEventListener("pointerdown", handleOutsideHintClick, true);
document.addEventListener("mousedown", handleOutsideHintClick, true);
document.addEventListener("click", handleOutsideHintClick, true);

document.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape") {
        closeHints();
    }
});

window.addEventListener("resize", () => {
    if (hintMenu && !hintMenu.hidden) {
        positionHintsMenu();
    }
});

window.addEventListener("scroll", () => {
    if (hintMenu && !hintMenu.hidden) {
        positionHintsMenu();
    }
}, true);
