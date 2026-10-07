/* GENERATED FROM tokens.json -- DO NOT EDIT. Run scripts/build-tokens.mjs. */
// Portable design tokens (colors as hex). Web consumes the theme via
// src/index.css; mobile (Expo) and any other platform import this object so the
// whole product shares one source of truth.
export const tokens = {
  "color": {
    "light": {
      "background": "#faf8f5",
      "foreground": "#192420",
      "border": "#d4ded9",
      "card": "#faf8f5",
      "cardForeground": "#192420",
      "popover": "#faf8f5",
      "popoverForeground": "#192420",
      "primary": "#236b48",
      "primaryForeground": "#f7f7ef",
      "secondary": "#e4ece7",
      "secondaryForeground": "#192420",
      "muted": "#e7eeea",
      "mutedForeground": "#63746d",
      "accent": "#182823",
      "accentForeground": "#eff3e9",
      "destructive": "#c52626",
      "destructiveForeground": "#faf8f5",
      "input": "#cbd7d1",
      "ring": "#236b48",
      "chart1": "#43815a",
      "chart2": "#d18b4b",
      "chart3": "#85789b",
      "chart4": "#7696a0",
      "chart5": "#ce6555",
      "sidebar": "#f8f8f3",
      "sidebarForeground": "#526359",
      "sidebarBorder": "#d4ded9",
      "sidebarPrimary": "#236b48",
      "sidebarPrimaryForeground": "#f7f7ef",
      "sidebarAccent": "#e4ece7",
      "sidebarAccentForeground": "#192420",
      "sidebarRing": "#236b48"
    },
    "dark": {
      "background": "#151e1b",
      "foreground": "#eff3e9",
      "border": "#384741",
      "card": "#1c2623",
      "cardForeground": "#eff3e9",
      "popover": "#1c2623",
      "popoverForeground": "#eff3e9",
      "primary": "#83b18f",
      "primaryForeground": "#151e1b",
      "secondary": "#313f39",
      "secondaryForeground": "#eff3e9",
      "muted": "#313f39",
      "mutedForeground": "#aebdb1",
      "accent": "#24372d",
      "accentForeground": "#eff3e9",
      "destructive": "#d33131",
      "destructiveForeground": "#151e1b",
      "input": "#384741",
      "ring": "#83b18f",
      "chart1": "#9ac5a3",
      "chart2": "#d7b37e",
      "chart3": "#b4a7c8",
      "chart4": "#9db8c0",
      "chart5": "#e18b78",
      "sidebar": "#182823",
      "sidebarForeground": "#d5e0d6",
      "sidebarBorder": "#384741",
      "sidebarPrimary": "#83b18f",
      "sidebarPrimaryForeground": "#151e1b",
      "sidebarAccent": "#24372d",
      "sidebarAccentForeground": "#eff3e9",
      "sidebarRing": "#83b18f"
    }
  },
  "fontFamily": {
    "sans": [
      "Manrope",
      "sans-serif"
    ],
    "serif": [
      "Georgia",
      "serif"
    ],
    "mono": [
      "DM Mono",
      "monospace"
    ]
  },
  "radius": "0.25rem",
  "spacing": "0.25rem"
} as const;

export type Tokens = typeof tokens;
export default tokens;
