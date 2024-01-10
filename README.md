# LMS SaaS Platform with AI Agents

A modern Learning Management System (LMS) built as a SaaS platform, supercharged by AI-powered learning companions. Users can interact via voice or text, track progress, and personalize their experience through secure and scalable features.

---
## 📖 screenshots
<div align="center">
<img src="/screenshots/converso (1).png" alt="Screen 1" width="100%"/>
<div>
<div align="center">

<table>
  <tr>
    <td><img src="/screenshots/converso (2).png" alt="Screen 1" width="100%"/></td>
    <td><img src="/screenshots/converso (3).png" alt="Screen 1" width="100%"/></td>
    <td><img src="/screenshots/converso (4).png" alt="Screen 1" width="100%"/></td>
    <td><img src="/screenshots/converso (5).png" alt="Screen 1" width="100%"/></td>
  </tr>
  <tr>
    <td><img src="/screenshots/converso (6).png" alt="Screen 1" width="100%"/></td>
    <td><img src="/screenshots/converso (7).png" alt="Screen 1" width="100%"/></td>
    <<td><img src="/screenshots/converso (8).png" alt="Screen 1" width="100%"/></td>
    <td><img src="/screenshots/converso (9).png" alt="Screen 1" width="100%"/></td>
    <td><img src="/screenshots/converso (10).png" alt="Screen 1" width="100%"/></td>
  </tr>
</table>

</div>
## 🗂 Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
5. [Environment Variables](#environment-variables)
6. [Project Structure](#project-structure)
7. [Contributing](#contributing)
8. [License](#license)

---

## 📖 Overview

Imaginfy LMS empowers users to:

- Create and manage AI companions
- Interact through real-time voice or text
- Track learning history and bookmark favorites
- Access features based on subscription levels

---

## 🚀 Features

- **AI Companion Builder** – Customize learning agents by subject, voice style, and purpose
- **Authentication** – Secured via Clerk for managing user sessions
- **Subscription & Access Control** – Plans define companion count and feature limits
- **Companion Discovery** – Browse, search, and filter existing companions
- **Session History** – Track and revisit learning interactions
- **Bookmarks** – Pin your favorite learning companions
- **Voice Interaction** – Real-time chat with companions via [Vapi](https://vapi.ai)
- **Error Monitoring** – Powered by [Sentry](https://sentry.io) for frontend/backend stability
- **Modern UI** – Tailwind CSS and Shadcn UI for sleek, accessible design

---

## 🧰 Tech Stack

| Area               | Tech Used                                                                 |
|--------------------|--------------------------------------------------------------------------|
| 🧱 Framework        | ![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js)        |
| 🧑‍💻 Language       | ![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white) |
| 🎨 Styling          | ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwind-css&logoColor=white) |
| 🔐 Authentication   | ![Clerk](https://img.shields.io/badge/Clerk-ffffff?logo=clerk&logoColor=black) |
| 🐘 Backend (DB)     | ![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=white) |
| 🎙 Voice API        | ![Vapi](https://img.shields.io/badge/Vapi-000000?logo=voicemod&logoColor=white) |
| 🛡 Monitoring        | ![Sentry](https://img.shields.io/badge/Sentry-362D59?logo=sentry&logoColor=white) |
| 🧾 Form Handling     | React Hook Form + Zod                                                    |

---

## ⚙️ Getting Started

```bash
# Clone the repo
https://github.com/your-username/lms_saas_platform_with_ai_agents.git

# Navigate into the project
cd lms_saas_platform_with_ai_agents

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Then visit: [http://localhost:3000](http://localhost:3000)

---

## 🔐 Environment Variables

Create a `.env.local` file in the root and include:

```env
# Clerk (Authentication)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_secret

# Supabase (Database)
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key

# Vapi (Voice AI)
NEXT_PUBLIC_VAPI_KEY=your_key

# Sentry (Monitoring)
SENTRY_DSN=your_server_dsn
NEXT_PUBLIC_SENTRY_DSN=your_client_dsn

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 📁 Project Structure

```bash
lms_saas_platform_with_ai_agents/
├── app/                    # Application routes
│   ├── (auth)/             # Auth pages (login, signup)
│   ├── companions/         # Create, list, interact with AI companions
│   ├── subscription/       # Manage user subscriptions
├── components/             # Shared React components
├── lib/                    # Actions, database logic, utilities
├── public/                 # Static assets
├── .env.local              # Local environment variables
├── tailwind.config.ts      # Tailwind config
├── tsconfig.json           # TypeScript config
├── next.config.js          # Next.js config
└── package.json            # Project metadata and scripts
```

---

## 🤝 Contributing

Contributions are welcome! Fork the repo, submit PRs, or open issues. Your input improves the platform.

---

## 📄 License

📜 MIT, Apache 2.0, or add your custom license here.

---

> Built with ❤️ to modernize education with AI-driven interactivity. Keep evolving it! 🚀
