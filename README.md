# Ganesan Sankaran - Professional Resume Website

A modern, professional resume website built with Jekyll and custom CSS, showcasing 13+ years of experience in .NET development, Azure cloud solutions, and DevOps.

## Features

- **Modern Design**: Custom professional blue color scheme with clean, minimalist aesthetics
- **Responsive Layout**: Fully responsive design that works beautifully on all devices
- **Visual Timeline**: Experience displayed as an interactive timeline with technology badges
- **Skills Dashboard**: Visual representation of technical skills organized by category
- **Projects Portfolio**: Dedicated section highlighting key achievements and projects
- **Hero Section**: Engaging homepage with professional photo and key statistics
- **SEO Optimized**: Meta tags, structured data, and optimized for search engines
- **Performance**: Lightweight custom CSS, smooth animations, and fast load times
- **Professional Icons**: Font Awesome and DevIcons integration
- **Print-Friendly**: Optimized styles for PDF export

## Technology Stack

- **Jekyll 4.3+**: Static site generator
- **Custom CSS**: No heavy frameworks, pure CSS with CSS variables
- **Font Awesome 6.4**: Professional icons
- **GitHub Pages**: Free hosting and deployment

## Quick Start

### Prerequisites

- Ruby 2.7+ and Bundler installed
- Git

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/ganesanksr88/ganesanksr88.github.io.git
   cd ganesanksr88.github.io
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Add your professional photo as `myprofile.png` in the root directory

4. Run the local development server:
   ```bash
   bundle exec jekyll serve
   ```

5. Visit http://localhost:4000 to preview the site

## Deployment to GitHub Pages

1. **Repository Setup**:
   - Repository name must be `yourusername.github.io`
   - Ensure you're pushing to the `main` branch

2. **Configure Site**:
   - Update `_config.yml` with your information:
     ```yaml
     title: "Your Name - Your Title"
     url: "https://yourusername.github.io"
     github_username: yourusername
     linkedin_username: your-linkedin-username
     email: your.email@example.com
     ```

3. **Add Your Photo**:
   - Place your professional photo as `myprofile.png` in the root directory
   - Recommended size: 300x300px or larger (will be displayed as 150x150px circular)

4. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Update resume website"
   git push origin main
   ```

5. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Source: Deploy from a branch
   - Branch: `main` / `(root)`
   - Save

6. Your site will be live at `https://yourusername.github.io` within a few minutes

## Customization Guide

### Content Updates

All content is in Markdown files in the root directory:

- `index.md` - Homepage with hero section
- `about.md` - About page with personal information
- `experience.md` - Professional experience timeline
- `skills.md` - Skills and technologies dashboard
- `projects.md` - Projects portfolio
- `education.md` - Education background
- `certifications.md` - Professional certifications

### Design Customization

**Colors** (in `assets/css/main.css`):
```css
:root {
  --primary-blue: #2c3e50;     /* Main dark blue */
  --accent-blue: #3498db;      /* Accent blue */
  --light-blue: #5dade2;       /* Light blue */
  --lighter-blue: #ebf5fb;     /* Very light blue */
}
```

**Typography**:
- Modify font families in `:root` CSS variables
- Uncomment Google Fonts link in `_layouts/default.html` for custom fonts

**Spacing & Layout**:
- Adjust spacing variables in CSS `:root`
- Modify container max-width for different layouts

### Adding New Sections

1. Create a new Markdown file (e.g., `blog.md`)
2. Add front matter:
   ```yaml
   ---
   layout: page
   title: "Blog"
   description: "My thoughts and articles"
   permalink: /blog/
   ---
   ```
3. Add link to navigation in `_layouts/default.html`

## File Structure

```
├── _layouts/
│   ├── default.html       # Main layout with header/footer
│   └── page.html          # Content page layout
├── assets/
│   ├── css/
│   │   └── main.css       # Custom styles
│   └── images/            # Image assets
├── about.md
├── certifications.md
├── education.md
├── experience.md
├── index.md               # Homepage
├── projects.md
├── skills.md
├── myprofile.png          # Professional photo
├── _config.yml            # Jekyll configuration
├── Gemfile                # Ruby dependencies
└── README.md              # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- No heavy JavaScript frameworks
- Optimized CSS with minimal overhead
- Fast initial page load

## License

This is a personal resume website. Feel free to use the template for your own resume, but please update all personal information.

## Credits

- Built by Ganesan Sankaran
- Icons: [Font Awesome](https://fontawesome.com/)
- Hosting: [GitHub Pages](https://pages.github.com/)

## Support

For issues or questions about the template, please open an issue on GitHub.

---

**Live Site**: https://ganesanksr88.github.io
