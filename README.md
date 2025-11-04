# Professional Portfolio Site

A modern, fast, and SEO-friendly portfolio website built with Eleventy and deployed on GitHub Pages.

## 🚀 Features

- **Static Site Generation**: Lightning-fast performance with Eleventy
- **Nunjucks Templating**: Powerful and flexible templating engine
- **Blog System**: Full-featured blog with tags and RSS feed
- **Projects Showcase**: Dedicated section for highlighting your work
- **Responsive Design**: Mobile-first approach that works on all devices
- **SEO Optimized**: Meta tags, semantic HTML, and sitemap
- **GitHub Pages Ready**: Automated deployment with GitHub Actions
- **Professional Styling**: Clean, modern CSS with CSS variables

## 📋 Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher
- Git

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/218hosting.git
cd 218hosting
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will be available at `http://localhost:8080`

## 📝 Available Scripts

- `npm start` - Start development server with live reload
- `npm run build` - Build the site for production
- `npm run clean` - Clean the output directory
- `npm run debug` - Run Eleventy with debug output

## 📁 Project Structure

```
218hosting/
├── src/
│   ├── _data/           # Global data files
│   │   ├── site.json    # Site metadata
│   │   └── navigation.json
│   ├── _includes/       # Templates and partials
│   │   ├── layouts/     # Page layouts
│   │   │   ├── base.njk
│   │   │   ├── page.njk
│   │   │   ├── post.njk
│   │   │   └── project.njk
│   │   └── partials/    # Reusable components
│   │       ├── header.njk
│   │       └── footer.njk
│   ├── assets/          # Static assets
│   │   ├── css/
│   │   ├── js/
│   │   └── images/
│   ├── blog/            # Blog posts (Markdown)
│   ├── projects/        # Project pages (Markdown)
│   ├── index.njk        # Homepage
│   ├── about.md         # About page
│   ├── blog.njk         # Blog index
│   └── projects.njk     # Projects index
├── .eleventy.js         # Eleventy configuration
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions deployment
├── .vscode/             # VS Code settings
└── package.json
```

## ✏️ Content Management

### Adding Blog Posts

Create a new Markdown file in `src/blog/`:

```markdown
---
layout: post
title: Your Post Title
description: A brief description
date: 2024-01-15
tags:
  - tag1
  - tag2
---

Your content here...
```

### Adding Projects

Create a new Markdown file in `src/projects/`:

```markdown
---
layout: project
title: Project Name
description: Project description
tech:
  - Technology 1
  - Technology 2
github: https://github.com/username/repo
demo: https://demo-url.com
order: 1
---

Project details...
```

## 🎨 Customization

### Site Information

Edit `src/_data/site.json`:
- Update your name, description, and URLs
- Add your social media links
- Configure author information

### Navigation

Edit `src/_data/navigation.json` to modify the main navigation menu.

### Styling

Modify `src/assets/css/style.css`:
- CSS variables at the top for easy theming
- Responsive breakpoints
- Component-specific styles

### GitHub Pages Deployment

1. Update the `pathPrefix` in `.eleventy.js` if deploying to a project page:
```javascript
pathPrefix: "/your-repo-name/"
```

2. Enable GitHub Pages in repository settings:
   - Go to Settings > Pages
   - Select "GitHub Actions" as the source

3. Push to the `main` branch to trigger deployment

### Custom Domain

To use a custom domain:
1. Rename `src/CNAME.example` to `src/CNAME`
2. Add your domain to the file
3. Configure DNS settings with your domain provider
4. Update `.eleventy.js` pathPrefix to "/"

## 🔧 VS Code Setup

This project includes VS Code configuration:

### Recommended Extensions
- Nunjucks Template Formatter
- Prettier
- Markdown Linting
- Code Spell Checker
- Auto Rename/Close Tag

### Tasks
Use `Ctrl+Shift+B` (or `Cmd+Shift+B` on Mac) to run build tasks:
- Eleventy: Serve (default)
- Eleventy: Build
- Eleventy: Clean
- Eleventy: Debug

## 📦 Deployment

### GitHub Pages (Automatic)

The site automatically deploys when you push to the `main` branch using GitHub Actions.

### Manual Deployment

```bash
npm run build
# Upload the _site directory to your hosting provider
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

MIT License - feel free to use this for your own portfolio.

## 🙏 Acknowledgments

- Built with [Eleventy](https://www.11ty.dev/)
- Templating with [Nunjucks](https://mozilla.github.io/nunjucks/)
- Deployed on [GitHub Pages](https://pages.github.com/)

## 📧 Contact

For questions or suggestions, reach out via the contact information on the site.

---

**Happy coding! 🚀**
