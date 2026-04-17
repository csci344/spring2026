---
title: "Disabling AI Features in VS Code"
group: "System Configuration"
group_order: 0
order: 0
quicklink: 0
---

In this course, we aim to build **foundational programming skills**, particularly in functional and event-driven programming. To ensure you are developing these skills yourself, you are **strictly required to disable all AI-powered code completion and generation features** within your code editor while working on assignments. 

## 1. Prohibited Tools
Per course policy, you must ensure the following (and similar) tools are deactivated:
*   **GitHub Copilot** and **Copilot Chat**
*   **Cursor**
*   **Tabnine**
*   **Codeium**

## 2. Technical Steps for Visual Studio Code

> **Note:** These technical steps may vary, as VS Code AI features are rapidly evolving.

### Step 1: Disable AI Extensions
1.  Open the **Extensions view** in VS Code (`Ctrl+Shift+X` or `Cmd+Shift+X`).
2.  Search for any of the prohibited tools listed above.
3.  Click the gear icon next to the extension and select **Disable (Global)** or **Uninstall**.

### Step 2: Turn Off Predictive "Ghost Text" (Inline Suggestions)
If you still see "GenAI" style autocompletes after disabling extensions, you must turn off the built-in inline suggestion feature:
1.  Open **Settings** (`Ctrl+,` or `Cmd+,`).
2.  Search for `editor.inlineSuggest.enabled`.
3.  **Uncheck** the box to set it to **false**. This will stop the editor from automatically suggesting blocks of code.

### Step 3: Disable IntelliCode
1.  In **Settings**, search for **"IntelliCode"**.
2.  If you have the Microsoft IntelliCode extension, ensure **Completions** are set to **none** or the extension is disabled entirely.

> **IntelliCode versus IntelliSense**: IntelliCode is a GenAI feature that needs to be disabled because it can generate entire blocks of code. That said, regular syntax completion (Intellisense) is fine to use.

## 3. Policy Reminders
1.   **Student Responsibility:** It is your responsibility to ensure these features are turned off before you begin working. 
1.   **Accidental Use:** Even accidental use (such as accepting a few suggestions) is considered a violation.
1.   **Writing Your Own Code:** You may use AI as a **reference** for syntax or concepts, but **you must write all submitted code yourself**. 

## 4. Disclosure and Help
If you believe you have violated this policy **unintentionally**, or if you are having technical trouble disabling these features, you must contact the professor **before**. Early disclosure allows for a learning-focused resolution rather than formal penalties. 

If you are unsure how to disable these tools, please **ask for help**.