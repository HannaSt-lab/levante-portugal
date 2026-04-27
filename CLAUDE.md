# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project
LEVANTE — *Off-Script Portugal.* Premium custom tour operator, Lisbon-based, run by Hanna. Pages: `index.html` (home), `tours.html` (tour index), individual tour pages (`/tours/*.html`), `blog.html`, `about.html`, `contact.html`.

## Tech Stack
| Layer | Tool |
|---|---|
| Website | HTML/CSS/JS · Vercel |
| CRM | GoHighLevel (pipeline, email/SMS sequences, internal calendar) |
| Booking | Calendly (client-facing consultation) + Stripe (deposit + payment) |
| Automation | n8n (connects everything) |
| Notifications | Gmail (customer emails) + Slack (ops alerts) + WhatsApp/Twilio (confirmations) |
| Social | Instagram · Facebook · Pinterest · YouTube Shorts · TikTok |
| Content machine | Kie.ai video → n8n → YouTube + Reels + Pinterest (weekly) |
| SEO | Schema.org TourOperator · Google Business Profile · AI blog pipeline |
| Payments | Stripe (deposit flow) |

## Skills — Invoke Before Acting
| Task | Skill |
|---|---|
| Any frontend code | `frontend-design` — mandatory, every session |
| Image generation | `nano-banana-images` |
| Kie.ai video/image | `kie-ai-integration` |
| Diagrams | `excalidraw-diagram` or `excalidraw-visuals` |
| Visualizations | `visualizations` |
| HubSpot work | `hubspot` |

## Dev Commands
```bash
node serve.mjs                                             # localhost:3000
node screenshot.mjs http://localhost:3000                  # screenshot
node screenshot.mjs http://localhost:3000/tours.html label # with label
```
- Never screenshot `file:///` — always localhost
- Screenshots → `./temporary screenshots/screenshot-N.png`
- Read PNG with Read tool after shooting. Do at least 2 compare rounds.
- Chrome: `C:/Program Files/Google/Chrome/Application/chrome.exe`

## Image Processing
```js
// sharp: never read+write same file — use tmp then rename
await sharp(input).extract({...}).toFile(input + '.tmp.png');
fs.renameSync(input + '.tmp.png', input);
```

## Brand — LEVANTE
| | Value |
|---|---|
| Deep black | `#0D0D0D` |
| Warm cream | `#F5EFE0` |
| Gold | `#C9A96E` |
| Terracotta | `#C47A5A` |
| Atlantic blue | `#2C4A6E` |

Fonts: **Cormorant Garamond** italic (display headings) · **Playfair Display** (sub-headings) · **Inter Light** (body) · **Cormorant Garamond** small caps (labels)

Tone: Assured, insider, sensory. No exclamation marks. No "hidden gems" or "breathtaking views." Use specific nouns. Short + short + longer sentence rhythm.

Assets in `brand_assets/` — use real assets, never placeholders where files exist.

## n8n Workflows (7 total)
| # | Name | Trigger |
|---|---|---|
| 1 | Lead capture | Website contact form → GHL + Gmail + Slack |
| 2 | Facebook Lead Ad | FB trigger → GHL → day 0/3/7 sequence |
| 3 | Instagram DM | DM trigger → auto-reply + booking link |
| 4 | Calendly booking | Calendly webhook → GHL + Gmail + Slack + WhatsApp |
| 5 | Weekly content | Schedule Mon 9am → blog + Kie.ai video → YouTube + Reels + Pinterest |
| 6 | Post-tour review | 2 days after tour → Gmail review request |
| 7 | GHL follow-up | Day 3 no response → SMS + email |

## Deploy
```bash
git add <files> && git commit -m "msg" && git push
```
Live on Vercel — disable Deployment Protection or site is login-gated.

## Design Rules
- Never default Tailwind palette, `transition-all`, or flat `shadow-md`
- Only animate `transform` and `opacity`
- Pair Cormorant Garamond italic (display) with Inter Light (body) — never same font for both
- Layer radial gradients + SVG grain for depth
- Every clickable element: hover + focus-visible + active states
- Don't add features beyond what's requested
