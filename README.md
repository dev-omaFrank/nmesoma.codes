# Developer Landing Page - Frontend Only

A modern, responsive landing page for a full-stack developer with an integrated questionnaire to filter serious prospects.

## 📁 File Structure

```
developer-landing-page-frontend/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles (colors, animations, layout)
├── js/
│   └── main.js         # All JavaScript (routing, form logic)
└── README.md           # This file
```

## 🚀 Quick Start

### Option 1: Open Directly in Browser
1. Extract the zip file
2. Double-click `index.html` to open in your default browser
3. That's it! No installation needed.

### Option 2: Use a Local Server (Recommended)
For better performance and to avoid CORS issues:

**Using Python 3:**
```bash
cd developer-landing-page-frontend
python -m http.server 8000
# Open http://localhost:8000
```

**Using Node.js (http-server):**
```bash
npm install -g http-server
cd developer-landing-page-frontend
http-server
# Open http://localhost:8080
```

**Using PHP:**
```bash
cd developer-landing-page-frontend
php -S localhost:8000
# Open http://localhost:8000
```

## 🎨 Design Features

- **Modern Aesthetic**: Dark navy background with purple-to-cyan gradients
- **Glassmorphic Cards**: Frosted glass effect with backdrop blur
- **Smooth Animations**: Fade-in and slide-in effects
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **No Dependencies**: Pure HTML, CSS, and JavaScript

## 📝 Questionnaire Flow

1. **Hero Section** - Displays your services and features
2. **Call to Action** - "Start a Project" button
3. **Question 1** - "Do you have a project in mind?"
   - If **Yes** → Ask follow-up questions
   - If **No** → Go to Thank You page
4. **Questions 2-4** (if Yes) - Project type, timeline, budget
5. **Submission** - Shows confirmation or redirects to thank you page

## 🎯 Customization Guide

### Change Hero Title and Description
Edit `index.html` or modify the `pages.home` template in `js/main.js`:
```javascript
<h1 class="hero-title">
    Your New Title Here
</h1>
```

### Change Colors
Edit `css/styles.css` in the `:root` section:
```css
:root {
    --primary: #8b5cf6;      /* Purple - change this */
    --secondary: #06b6d4;    /* Cyan - change this */
    --background: #0f172a;   /* Dark navy - change this */
    --foreground: #f0f4f8;   /* Light text - change this */
}
```

### Change Fonts
Edit `index.html` and replace the Google Fonts import:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;700&display=swap" rel="stylesheet">
```

Then update `css/styles.css`:
```css
h1, h2, h3 {
    font-family: 'YOUR_FONT', sans-serif;
}
```

### Update Questionnaire Questions
Edit the `questionnaire` page template in `js/main.js`:
```javascript
<label class="radio-option">
    <input type="radio" name="hasProject" value="yes">
    <span>Your custom question option</span>
</label>
```

### Change Social Links on Thank You Page
Edit the `thankYou` page template in `js/main.js`:
```html
<a href="https://your-github-url.com" target="_blank" class="social-link">GitHub</a>
```

### Update Feature Cards
Edit the features grid in `js/main.js`:
```javascript
<div class="glass-card feature-card">
    <div class="feature-icon">⚡</div>
    <h3>Your Feature Title</h3>
    <p>Your feature description</p>
</div>
```

## 🔧 Advanced Customization

### Add New Pages
1. Add a new entry to the `pages` object in `js/main.js`
2. Create a routing function (e.g., `function goToNewPage()`)
3. Call the function from your HTML buttons

### Modify Form Submission
Currently, form submissions show an alert. To integrate with an email service:

1. **Using Formspree** (easiest):
   - Go to [formspree.io](https://formspree.io)
   - Create a form and get your endpoint
   - Modify the form submission in `js/main.js`:
   ```javascript
   fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       body: JSON.stringify(state.responses)
   });
   ```

2. **Using your own backend**:
   - Set up an API endpoint
   - Replace the alert with a fetch request to your API

### Add Analytics
Add this to `index.html` before closing `</body>`:
```html
<script async src="https://your-analytics-url"></script>
```

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Tips

- All CSS is inline for fast loading
- JavaScript is optimized and minimal
- Images use external CDN for fast delivery
- Animations use CSS transforms for smooth 60fps

## 🐛 Troubleshooting

**Page not loading?**
- Make sure you're opening `index.html` (not a folder)
- Use a local server instead of opening directly in browser

**Styles not applying?**
- Clear your browser cache (Ctrl+Shift+Delete)
- Make sure `css/styles.css` is in the same folder

**JavaScript not working?**
- Check browser console for errors (F12)
- Make sure `js/main.js` is in the same folder

**Images not loading?**
- Check your internet connection (images are from CDN)
- Try opening in a different browser

## 📧 Email Integration Options

### Option 1: Formspree (Easiest)
- No backend needed
- Free tier available
- [formspree.io](https://formspree.io)

### Option 2: Basin
- Simple form handling
- Free tier available
- [basin.io](https://basin.io)

### Option 3: Netlify Forms
- If deploying to Netlify
- Free tier available
- [netlify.com](https://netlify.com)

### Option 4: Your Own Backend
- Full control
- Requires server setup
- Use Node.js, Python, PHP, etc.

## 🚀 Deployment Options

### Deploy to Netlify
1. Drag and drop the folder into [netlify.com](https://netlify.com)
2. Your site goes live instantly

### Deploy to Vercel
1. Connect your GitHub repository
2. Vercel auto-deploys on push

### Deploy to GitHub Pages
1. Push to GitHub
2. Enable GitHub Pages in settings
3. Your site goes live at `username.github.io/repo-name`

### Deploy to Your Own Server
1. Upload files via FTP/SFTP
2. Point your domain to the server
3. Done!

## 📄 License

This project is yours to customize and deploy. Enjoy! 🎉

## 🤝 Support

For questions or issues:
1. Check the customization guide above
2. Review the code comments in the files
3. Test in different browsers
4. Check browser console for errors (F12)

---

**Happy coding!** 🚀
