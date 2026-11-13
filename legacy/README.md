# Legacy Archives & Historical Reference

This directory contains archived assets, theme configurations, navigation data, and legacy content from prior iterations of the Natural Selection web presence (2003–2024).

> [!NOTE]
> None of the files in this directory are loaded or executed by the active Next.js application in `naturalselection-site/`. They are preserved solely for historical continuity, content migration verification, and archival reference.

---

## Directory Contents

### 1. `wordpress/wp_global_styles/`
Contains exported WordPress Full Site Editing (FSE) global style theme presets (2022–2024). These record the legacy typography, color palette tokens, and block layout definitions used during the WordPress era.

### 2. `wordpress/wp_navigation/`
Contains WordPress exported block navigation configurations from 2024. These define the historical menu taxonomy and external links previously active on `naturalselectionmusic.com` and `naturalselectiondeejaying.com`.

### 3. `wordpress/wp_content/`
Contains the archived date-nested WordPress content structure (`content/pages/2015/...`, `2016/...`, `2019/...`, `2020/...`, `2023/...`).
All active markdown pages and blog posts have been migrated to clean paths under:
- `naturalselection-site/content/pages/`
- `naturalselection-site/content/blog/`
- `naturalselection-site/public/images/`

---

## Historical Timeline

1. **October 2003**: Initial static HTML site launched for Natural Selection music label.
2. **2015–2024**: WordPress CMS powering `naturalselectionmusic.com` and `naturalselectiondeejaying.com`.
3. **2024**: Hugo static site migration baseline (`static_site`).
4. **2025–Present**: Modern Next.js 16 (App Router), React 19, and Tailwind CSS v4 unified web platform.
