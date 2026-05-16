# Agent Instructions

## Current workspace state
- This repository currently contains only workspace settings in `.vscode/settings.json`.
- There are no detected source files, build configs, or project documentation present yet.

## Guidance for AI agents
- Do not assume a specific framework, language, or build system.
- Before making code changes, locate actual project files in the repository root or subdirectories.
- If the user adds source code later, inspect for standard entry points such as `package.json`, `composer.json`, `index.html`, `README.md`, or framework-specific files.
- Avoid modifying `.vscode/settings.json` unless the user explicitly requests workspace setting changes.
- The preferred stack is Next.js + Tailwind CSS.
- Use JavaScript only when it is truly necessary for logic or interaction.
- Use GSAP only for complex animations where CSS transitions/animations are insufficient.
- The agent must warn the user whenever JavaScript or GSAP is required for quality or simplification, instead of applying them by default.
- For frontend animation/layout work, refer to `PERFORMANCE_RULES_SKILL.md` for performance rules and best practices.
- Treat the rules in `PERFORMANCE_RULES_SKILL.md` as mandatory guidance for any UI animation, parallax, hover, scroll effects, hero section, or cinematic layout work.
- For SEO and semantic page architecture, refer to `SEO_SEMANTIC_ARCHITECTURE_RULES.md` and follow it for markup, metadata, structured data, accessibility, and Next.js SEO conventions.

## When to update this file
- Add an overview of the repository architecture once source files are available.
- Document build/test commands and conventions when a real project structure exists.
- Keep this file minimal and aligned with the repository contents.
