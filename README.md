# Movie & Media App (FlashCard)

A feature-rich cross-platform mobile application built with React Native and Expo, providing a dynamic movie catalog, user authentication flows, favorites management, and detailed media views.

---

## 📂 Repository Structure

```text
FlashCard/
│
├── app/
│   ├── login/
│   │   ├── Login.tsx           # User login screen component
│   │   ├── Register.tsx        # User registration screen component
│   │   └── _layout.tsx         # Authentication route layout
│   │
│   ├── movie/
│   │   ├── movieid/
│   │   │   └── [id].tsx        # Dynamic route page for individual movie details
│   │   ├── _layout.tsx         # Movie section navigation layout
│   │   ├── favorites.tsx       # User's favorite movies list view
│   │   └── index.tsx           # Main movie browsing hub
│   │
│   ├── Home.tsx                # Main home/dashboard screen
│   ├── _layout.tsx             # Root application navigation wrapper
│   └── index.tsx               # App startup route entry point
│
├── assets/
│   ├── data/
│   │   └── movies.ts           # Local mock data containing movie records and metadata
│   └── images/
│       ├── Hello.json          # Interactive Lottie onboarding animation
│       ├── Search Concept.json # Search state animation asset
│       ├── Watch a movie.json  # Hero media animation asset
│       └── movie2.webp to movie14.webp # High-resolution movie banner images
│
├── .vscode/                    # Workspace configuration and extensions
├── app.json                    # Expo configuration manifest
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript configuration settings
└── eslint.config.js            # Code style and linting configuration
```

## 🧠 Architecture & Logic Explanation
The application relies on modern React Native design patterns and file-based routing:
- File-Based Routing (Expo Router):
   - Uses the app/ directory convention where individual folder structures dictate navigation paths.
   - Special dynamic routing is implemented via bracketed files (e.g., movie/movieid/[id].tsx), allowing seamless extraction of unique media identifiers to render custom detail pages.
- State & Data Flow:
   - Local data assets (assets/data/movies.ts) act as a structured repository supplying media information across browsing indexes and detail views.
   - Modular layout groups (_layout.tsx) isolate navigation domains between authentication states (login/) and core media features (movie/).
- Rich UI & Multimedia Integration:
   - Blends native components with vector/JSON animations (Lottie format) and high-performance WebP media banners to enrich user interaction.
