# Kareem Parker Masonry (Hamilton, ON) – website

## Quick start (no tools needed)
The `website/` folder is the complete site, with every file at the top level and no sub-folders:
index.html, about.html, services.html, gallery.html, contact.html, 404.html,
styles.css, main.js, chatbot.js, site-config.js, the images, site.webmanifest, robots.txt and sitemap.xml.

- **Open locally:** double-click `index.html`.
- **GitHub + Vercel:** upload ALL files from `website/` (or the WEBSITE zip) to the TOP of the repository, not inside a folder. In Vercel choose Framework Preset "Other", with no build command and no output directory.
- **Netlify:** drag the `website` folder onto app.netlify.com/drop.
- **cPanel:** upload all files into `public_html`.

## Quote form
No email address was supplied, so the form opens WhatsApp to (289) 816-1525 with the request filled in, with a
"send as a text" option. The site also has "Text a photo" buttons. To receive requests by email instead, set `email` in
`src/site.config.js`, rebuild, and click the one-time activation email from FormSubmit.

## Please confirm with the client
- **Business name:** none was given, so the site uses "Kareem Parker Masonry". Change `name` in `src/site.config.js` if he trades under another name.
- **Home address:** 232 Tragina Ave S is shown on the Contact page, in the chatbot and in search-engine data. If it's his home and he'd rather not publish it, remove it and show "Hamilton, ON" only.
- **Services:** the ad says "any and all brick damage, concrete cracks and anything masonry". The six service areas are typical masonry repair work. Check them with Kareem.
- **Hours, email, reviews, insurance/WSIB:** not supplied and not claimed. Add them if available.
- **Domain:** www.kareemparkermasonry.ca is a placeholder. Update `url` in `src/site.config.js`.
- **Photos** are royalty-free Unsplash stock images, labelled on the Gallery page as illustrative. Real before/after photos of Kareem's work would make the biggest difference.

## Editing (optional, needs Node.js)
Sources are in `src/` and `public/assets/`. Run `npm run build` and then `node flatten.js` to regenerate `website/`.
The `server.js` file adds an optional live AI chat (needs ANTHROPIC_API_KEY).
