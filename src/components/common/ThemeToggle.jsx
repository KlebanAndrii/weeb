import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-16 h-8 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors"
    >
      <div
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md transition-transform ${theme === "dark" ? "translate-x-8" : "translate-x-0"}`}
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </div>
    </button>
  );
}

export default ThemeToggle;
