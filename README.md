# Digital Agency

A multi-page website template for a creative/digital agency. Built with vanilla HTML, CSS (SCSS), and JavaScript — no frameworks or dependencies required.

## Pages

- **Home** (`index.html`) — hero slider, agency history, "why choose us" section, filterable portfolio grid
- **Services** (`services.html`) — services overview
- **Contact** (`contact.html`) — contact form

## Features

- Responsive layout with a custom grid system (mobile / tablet / desktop breakpoints)
- Sticky header with dropdown navigation
- Hamburger menu for mobile
- Auto-advancing hero slider with dot navigation
- Tabbed portfolio gallery with category filtering
- Newsletter subscription form in the footer

## Tech Stack

| Layer | Tool |
|-------|------|
| Markup | HTML5 |
| Styles | SCSS → compiled CSS |
| Scripts | Vanilla JavaScript (ES6) |
| Fonts | Google Fonts — Montserrat, Open Sans |
| Icons | Font Awesome 4 |

## Project Structure

```
Digital-Agency-master/
├── index.html          # Home page
├── services.html       # Services page
├── contact.html        # Contact page
└── src/
    ├── _grid.scss          # Custom grid system
    ├── _variables.scss     # SCSS variables (colors, fonts, breakpoints)
    ├── style.scss          # Global styles
    ├── home.scss           # Home page styles
    ├── services.scss       # Services page styles
    ├── contact.scss        # Contact page styles
    ├── app.js              # Shared JS (mobile menu, dropdown nav)
    ├── home.js             # Home page JS (slider, portfolio tabs)
    ├── services.js         # Services page JS
    └── contact.js          # Contact page JS
```

## Getting Started

No build step needed to run the site — just open any `.html` file in a browser.

```bash
# Clone the repo
git clone https://github.com/your-username/Digital-Agency.git

# Open in browser
open index.html
```

If you want to edit styles, compile SCSS to CSS after changes:

```bash
# Install Sass if needed
npm install -g sass

# Watch for changes
sass --watch src/style.scss:src/style.css
```

## Breakpoints

| Name | Width |
|------|-------|
| Mobile | < 768px |
| Tablet | 768px – 1023px |
| Desktop | 1024px – 1199px |
| Wide | ≥ 1200px |
