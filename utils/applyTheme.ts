export default function applyTheme(theme: string) {
  const html = document.documentElement;
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  html.classList.toggle("dark", isDark);
}
