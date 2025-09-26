# Thomas Tepi – Personal Portfolio Website

![Portfolio Screenshot](https://ik.imagekit.io/thormars/portfolio/portfolio.png)

Welcome to my **personal portfolio website**, designed to showcase:
- My **professional background** and résumé
- A selection of **projects** I’ve built and contributed to
- Links to my **GitHub, LinkedIn**, and other platforms
- A **contact form** to easily get in touch

---

## Live Demo

🔗 [Visit My Portfolio](https://www.thomastepi.com)

---

## About This Repo

**This repository contains only the frontend code** (Next.js + React).  
The backend for this portfolio and all my projects (including the **contact form email handler**) is located here:  
[express-portfolio-api](https://github.com/thomastepi/express-portfolio-api)

---

## Tech Stack

- **Framework:** React.js, Next.js (App Router)
- **Styling/UI:** Chakra UI, Framer Motion
- **Forms & Validation:** Formik + Yup
- **State Management:** Context API
- **Internationalization:** i18next (English & French)
- **Security:** Google reCAPTCHA v2 Invisible (Contact Form)
- **Analytics:** Google Analytics + Cookie Consent Banner
- **Hosting:** Vercel (Frontend) + Heroku (Backend)
- **Domain:** Custom domain via GoDaddy

---

## Features

- **Modern & Responsive Design** (mobile-first, desktop-ready)
- **Dark Mode / Light Mode Toggle**
- **Language Switcher (EN / FR)**
- **Projects Showcase** with GitHub & live demo links
- **Google Analytics Integration**
- **Contact Form** with email notifications
- **Résumé Download** in PDF format
- **Privacy Policy Page**
- **SEO Optimized** with dynamic meta tags and multilingual support

---

## Folder Structure Overview

This project uses the **Next.js App Router** (no `pages/` directory):
```
public/
│
├── robots.txt
└── sitemap.xml
src/
│
├── app/ # Next.js App Router directory
│ ├── [lng]/ # Language segment (e.g., /en, /fr)
│ │ ├── page.js # Homepage per locale
│ │ ├── layout.js # Root layout per locale
│ │ └── privacy-policy/
│ │ ├── page.js # Locale-based Privacy Policy page
│ │ └── layout.js
│ ├── i18n/ # i18next settings and translations
│ ├── globals.css # Global styles
│ └── not-found.js # Custom 404 page
│
├── assets/ # Static assets (images, icons, etc.)
├── components/ # Reusable UI components
├── config/ # App-level configuration (e.g., analytics)
├── context/ # React Context providers
├── data/ # Static JSON/JS data (projects, etc.)
├── hooks/ # Custom React hooks
├── scenes/ # Page-level UI sections
├── utils/ # Utility/helper functions
├── middleware.js # Next.js middleware (i18n routing, redirects, etc.)
└── theme.js # Chakra UI theme configuration
```

---

## Roadmap

- [ ] Enhance accessibility
- [ ] Improve SEO Lighthouse score
- [ ] Integrate newsletter form (Mailchimp)

---

## Contact

Have feedback?

📧 [Message Me](https://thomastepi.com/#contactme-section)  
💼 [LinkedIn](https://www.linkedin.com/in/thomastepi)
