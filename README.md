# 🎓 LMS SaaS Platform with AI Agents

A modern Learning Management System (**LMS**) built as a **SaaS** platform, enhanced with AI-powered **Companions**. Users can create personalized AI agents, interact via text or voice, and manage learning experiences dynamically. The platform features secure authentication, subscription-based access, and modern dev practices.

---

## 🗂 Table of Contents

1. [Overview](#-overview)
2. [Features](#-features)
3. [Tech Stack](#-tech-stack)
4. [Getting Started](#-getting-started)
5. [Environment Variables](#-environment-variables)
6. [Key Modules](#-key-modules)
7. [Project Structure](#-project-structure)
8. [Contributing](#-contributing)
9. [License](#-license)

---

## 📖 Overview

This LMS platform empowers users to:

* Create and manage AI-powered learning companions
* Interact with companions via chat or voice
* Track their session history
* Bookmark favorite agents
* Enjoy a clean and responsive UI
* Access features based on subscription level

It’s built using a cutting-edge tech stack to ensure scalability, maintainability, and performance.

---

## 🚀 Features

### 🤖 AI Companion Builder

Create personalized AI agents tailored to specific learning subjects, voice styles, and interaction preferences.

### 🔐 Secure Authentication

Handles user sign-up, login, and access management with strong session security.

### 💳 Subscription & Permissions

Different user tiers unlock different capabilities (like number of companions or session length). Upgrade prompts are shown when limits are reached.

### 🔎 Companion Discovery

Users can browse, search, and filter through available AI companions, including their own and others (if public).

### 🕘 Session History

Users can view and revisit past interactions with companions, helping them track their learning journey.

### 📌 Bookmarks

Save and quickly access frequently used or favorite companions.

### 🎤 Voice Interaction (Vapi Integration)

Talk directly with companions using real-time voice interaction powered by **Vapi**. Microphone input and AI responses make the learning experience immersive.

### 🛡️ Error Monitoring (Sentry Integration)

**Sentry** monitors performance and automatically reports frontend and backend errors to keep the platform stable and secure.

### 💻 Modern UI

Built with a responsive, fast, and accessible interface using **Tailwind CSS** and a clean component library.

---

## 🧰 Tech Stack

| Area                | Tech Used              | 🔍 Purpose                                                         |
| ------------------- | ---------------------- | ------------------------------------------------------------------ |
| 🧱 Framework        | **Next.js** ⚛️         | Full-stack React framework with App Router, SSR, and API routes    |
| 🧑‍💻 Language      | **TypeScript** 🟦      | Type-safe development for better reliability and maintainability   |
| 🎨 Styling          | **Tailwind CSS** 🌬    | Utility-first CSS framework for clean and fast UI development      |
| 🧩 UI Components    | **Shadcn/ui** 🧩       | Pre-styled, accessible components built with Tailwind and Radix UI |
| 🔐 Authentication   | **Clerk** 🔑           | Handles user auth, sessions, and user management                   |
| 🧬 Backend/Database | **Supabase** 🐘        | PostgreSQL-based backend with auth, storage, and APIs              |
| 🧠 AI Voice API     | **Vapi** 🎙            | Enables real-time voice interactions with AI companions            |
| 🛠 Monitoring       | **Sentry** 🛡          | Error tracking and performance monitoring                          |
| 📝 Form Handling    | **React Hook Form** 🧾 | Efficient form state and validation                                |
| ✅ Validation        | **Zod** ✔️             | Schema-based input validation                                      |

---

## ⚙️ Getting Started

### 📦 Prerequisites

* Node.js `v18.x` or `v20.x`
* `npm`, `yarn`, or `pnpm`

### 🛠 Installation

```bash
git clone https://github.com/your-username/lms_saas_platform_with_ai_agents.git
cd lms_saas_platform_with_ai_agents
pnpm install
```

### 🧪 Start Development Server

```bash
pnpm dev
```

---

## 🔐 Environment Variables

Create a `.env.local` file with the following:

```env
# Clerk (Authentication)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_secret

# Supabase (Database)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# Vapi (Voice Interaction)
NEXT_PUBLIC_VAPI_KEY=your_vapi_key

# Sentry (Error Monitoring)
SENTRY_DSN=your_backend_dsn
NEXT_PUBLIC_SENTRY_DSN=your_frontend_dsn

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 🧱 Key Modules

| Module/File                        | Description                                           |
| ---------------------------------- | ----------------------------------------------------- |
| `app/companions/new/page.tsx`      | Companion creation page, checks auth and permissions. |
| `components/CompanionForm.tsx`     | Form UI for creating/editing companions.              |
| `lib/actions/companion.actions.ts` | Handles all database and server-side logic.           |
| Authentication Routes              | Managed through Clerk.                                |
| Subscription System                | Limits and upgrades based on user plans.              |

---

## 📁 Project Structure

```
lms_saas_platform_with_ai_agents/
├── app/                    # App routes and pages
│   ├── (auth)/             # Auth routes (sign-in, sign-up)
│   ├── companions/         # Companion-related routes
│   │   └── new/
│   ├── subscription/       # Subscription management
├── components/             # Reusable React components
├── lib/                    # Actions, utils, API handlers
│   └── actions/
├── public/                 # Static assets
├── prisma/                 # DB schema (if using Prisma)
├── .env.local              # Environment variables
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies & scripts
```

---

## 🤝 Contributing

Pull requests are welcome! If you have ideas to improve the platform or spot bugs, feel free to fork and contribute.

---

## 📄 License

📜 *Specify your license here — e.g., MIT, Apache 2.0, or "All Rights Reserved" if private.*

---

> 🧠 *This README was crafted to reflect the current structure and direction of the LMS SaaS Platform. Keep it up-to-date as the project evolves!*

---
