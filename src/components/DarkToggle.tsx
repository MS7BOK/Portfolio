import { useEffect, useState } from "react";

const DarkToggle = () => {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const toggle = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={toggle}
      className="text-sm px-4 py-2 bg-gray-200 dark:bg-gray-800 dark:text-white rounded-full transition"
    >
      {isDark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
};

export default DarkToggle;
