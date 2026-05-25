# 🦊 Mishka's Learning World

A playful, responsive learning app for young children built with **React + Vite + TypeScript**.

## ✨ Features (Phase 1)

- 🔤 **Learn Alphabet** — A to Z with emojis & fun facts (sequential flashcard)
- 🔢 **Learn Numbers** — 1 to 10
- 🔷 **Shapes & Colors** — progressive flashcards
- 📅 **Days / Months / Seasons** — progressive reveal list
- 🍎 **Fruits · 🥦 Vegetables · 🦁 Animals · 🚗 Vehicles** — random flashcards
- 🔢 **Counting Game** — count objects, press the right number
- 🎵 **Music & Rhymes** — tap to hear nursery rhymes via Web Speech
- 🎨 **Drawing Canvas** — colors, brushes, eraser, save (mouse + touch)
- ❓ **Multiple Choice Quiz** — A/B/C/D keyboard shortcuts
- 👁️ **Sight Words** — one word at a time, tap to hear
- 🌀 **Word Spinner** — word families (-at, -an, -ig, -og, -un, -op)
- ⌨️ Full keyboard navigation (Arrow keys, Enter, Escape, Space)
- 🔊 Voice/audio via Web Speech API
- 📱 Fully responsive: desktop, tablet, mobile

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
  app/             # Router + HomePage
  data/
    activities.ts  # Central activity registry
    alphabet.ts    # Alphabet data
    learningData.ts # All other data (numbers, fruits, animals, songs, etc.)
  components/
    layout/        # ActivityShell, HomeButton, NavigationControls, ActivityLoader
    home/          # Hero, CategorySection, ActivityCard
    activities/    # All activity components
  hooks/           # useKeyboardShortcuts, useSpeech, useRandomItem
  utils/           # speech.ts, random.ts
  styles/          # global.css (design tokens + animations)
```

## ➕ Adding a New Activity

**Step 1** — Add data to `src/data/learningData.ts`

**Step 2** — Add an entry to `src/data/activities.ts`:

```ts
{
  id: "learn-birds",
  title: "Learn Birds",
  category: "Learn Things Around Us",
  icon: "🐦",
  description: "Discover amazing birds!",
  route: "/activity/learn-birds",
  componentType: "flashcard-random",
  dataSource: "birds",
  navigationMode: "random",
  layout: "two-column",
  voiceEnabled: true,
}
```

**Step 3** — Add the data source to `getDataForSource()` in `RandomFlashcardActivity.tsx`.

That's it — the home page updates automatically!

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `→` or `Enter` | Next item |
| `←` | Previous item |
| `Escape` | Go home |
| `Space` | Repeat audio |
| `A/B/C/D` | Quiz answers |
| `1–9` | Counting answers |

## 🎨 Design System

- **Display font**: Fredoka One (rounded, playful)
- **Body font**: Nunito (friendly, readable)
- **Palette**: Sky blue · Coral red · Mint green · Lavender · Sun yellow
- **Style**: Rounded cards, pastel backgrounds, soft shadows
- CSS Modules throughout — zero external CSS framework dependency

## 🗺️ Roadmap

### Phase 2 (next)
- Missing Letter Game
- Odd One Out
- Matching Game
- Settings page (voice toggle, speech rate)

### Phase 3
- Progress tracking
- Favorites
- PWA / offline support
- Parent dashboard

---

Made with ❤️ for Mishka 🦊
