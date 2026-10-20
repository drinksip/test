# Spec-Checked — GCSE study site scaffold

A working scaffold for a GCSE revision site built on the opposite premise to the
incumbents: **depth over breadth, one subject done properly rather than twenty
done shallowly.**

The reference implementation covers **AQA GCSE Biology 8461, Unit 4.1 Cell
Biology** — three subtopics, fully written, with key terms and mark-scheme-anchored
exam questions. The remaining seven units are listed but not yet published, so the
completeness gap is visible rather than hidden.

---

## Why it's built this way

Research into the existing market (see `docs/DECISIONS.md`) found:

- BBC Bitesize is free forever, covers *every* subject and board, and is used by
  ~47% of UK schoolchildren. Its weakness is **depth**, not coverage.
- A funded competitor publishes **410 topics across 54 courses** (~7.6 per course).
  A real GCSE science specification is far deeper than that.
- Every competitor cites **board + tier** matching as the #1 student selection
  criterion, but most treat it as a filter rather than a structural decision.

So the architecture makes three commitments:

1. **Board and tier are structural**, encoded in the URL, not a toggle.
2. **Content is a shared topic node with per-board overlays** — "Osmosis" is
   written once and linked from AQA 8461, Edexcel 1BI0 and OCR J247.
3. **Every page states which specification version it was checked against and when.**

---

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Build a static export:

```
npm run build
```

---

## URL taxonomy

```
/                                          landing page
/accessibility                             accessibility statement
/aqa/biology/8461                          course overview + topic tree
/aqa/biology/8461/higher/cell-structure    a single topic page
```

The pattern is `/{board}/{subject}/{specCode}/{tier}/{topicSlug}`. Every segment
is a real, stable identifier — `8461` is the AQA specification code, `higher` is
the tier, `cell-structure` is the topic slug. Human-readable, SEO-friendly, and
it forces board + tier to be decided before any content is shown.

---

## Adding content

Content lives in `content/<board>/<subject>/<specCode>.ts` as a typed object.
No CMS, no MDX build step — a plain TypeScript module that the type system checks
against `lib/types.ts`.

```
// content/aqa/biology/8461.ts
export const course: Course = {
  board: 'aqa',
  boardName: 'AQA',
  subject: 'biology',
  subjectName: 'Biology',
  specCode: '8461',
  specVersion: '1.2',
  checkedDate: '2026-10-20',
  units: [...],
  topics: [
    {
      id: 'aqa-8461-4-1-1',
      slug: 'cell-structure',
      unit: '4.1',
      title: 'Cell structure',
      specRef: '4.1.1',
      tiers: ['foundation', 'higher'],
      summary: '...',
      sections: [{ heading: '...', body: ['...'] }],
      keyTerms: [{ term: '...', definition: '...' }],
      examQuestions: [{ question: '...', marks: 4, markScheme: ['...'] }],
    },
  ],
};
```

Register a new course by adding it to the array in `lib/content.ts`. Routes are
generated automatically via `generateStaticParams` — no routing code to write.

### Adding a new board for an existing subject

Do **not** duplicate the content. Extract the shared topic into
`content/shared/biology/` and reference it from each board's course object with a
board-specific overlay for anything that differs (required practicals, command-word
expectations, tier boundaries). The scaffold does not yet implement the overlay
layer — that is the next architectural step and the point at which a second board
should be added, not before.

---

## Accessibility (WCAG 2.2 AA)

Built in from the start, not retrofitted. The scaffold targets all 55 Level A and
AA success criteria, and specifically handles the six that are new in WCAG 2.2:

| Criterion ↕▾ | How it's handled here ↕▾ |
|---|---|
| −2.4.11 Focus Not Obscured | No sticky headers; focus rings never clipped |
| 2.5.7 Dragging Movements | **No drag interactions anywhere.** Flashcards use buttons |
| 2.5.8 Target Size (Minimum) | All interactive elements ≥ 24×24 CSS px (most are 44px) |
| 3.2.6 Consistent Help | Accessibility link in the same place on every page |
| 3.3.7 Redundant Entry | Progress is remembered; no re-entry of board/tier |
| 3.3.8 Accessible Authentication | No account required at all in this scaffold |
⚙

Also implemented: skip link, semantic landmarks, single `h1` per page, visible
focus indicators, `prefers-reduced-motion` support, `aria-live` announcements for
flashcard and quiz state changes, 4.5:1 minimum text contrast, reflow at 320px.

Run `npm run lint` — an axe-based check is wired in via `eslint-plugin-jsx-a11y`.

---

## Privacy

No accounts, no analytics, no third-party scripts. Progress is stored in
`localStorage` under a single key (`spec-checked:progress:v1`) and can be exported
or deleted from any topic page.

This matters because the audience is 14–16. The UK age of digital consent is 13,
so the core audience can consent for themselves, but the **Children's Code**
applies to all under-18s: high-privacy defaults, no nudge techniques, data
minimisation, retention limits. The scaffold sidesteps most of this by having no
server-side user data at all.

**If you add accounts or analytics, read `docs/DECISIONS.md` first.**

---

## Legal

⚠️ **Unresolved.** The Open Government Licence position on GCSE subject content
could not be confirmed during research. Every competitor surveyed deep-links to
official specification PDFs rather than reproducing them, and every one disclaims
affiliation with the awarding bodies. Treat this as a strong signal that
specification text must be **independently rewritten**, not copied.

The content in this scaffold is original prose summarising publicly documented
specification requirements. Do not paste specification PDFs into `content/`.

Get a solicitor's opinion before publishing commercially.

---

## Project layout

```
app/
  layout.tsx                          root layout, skip link, landmarks
  page.tsx                            landing page
  accessibility/page.tsx              accessibility statement
  [board]/[subject]/[specCode]/
    page.tsx                          course overview + topic tree
    [tier]/[topicSlug]/page.tsx       topic page
components/
  Flashcards.tsx                      accessible card deck
  Quiz.tsx                            exam questions + self-marking
  ProgressControls.tsx                confidence + export/delete
  TopicNav.tsx                        prev/next
lib/
  types.ts                            content model
  content.ts                          course registry + path helpers
  progress.ts                         localStorage progress (client)
content/
  aqa/biology/8461.ts                 the reference course
docs/
  DECISIONS.md                        research findings and why each call was made
```

---

## What this scaffold deliberately does *not* do

- It does not cover more than one subject. That is the point.
- It does not have an AI tutor. Adding one before the content is trustworthy
would undermine the only differentiator.
- It does not have spaced repetition yet. The data model in `lib/progress.ts` is
shaped to support it (per-topic confidence + last-reviewed timestamp), but the
scheduler is not implemented.

</BDS:create_file>

<BDS:create_file fileName="package.json">

```json
{
  "name": "spec-checked",
  "version": "0.1.0",
  "private": true,
  "description": "Depth-first GCSE revision site scaffold. AQA GCSE Biology 8461 reference implementation.",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "next": "15.1.0",
    "react": "19.0.0",
    "react-dom": "19.0.0"
  },
  "devDependencies": {
    "@types/node": "^22.10.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "eslint": "^9.17.0",
    "eslint-config-next": "15.1.0",
    "eslint-plugin-jsx-a11y": "^6.10.2",
    "typescript": "^5.7.2"
  }
}

