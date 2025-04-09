import { createContext, useContext, useEffect, useState } from "react";

const initialState = {
    theme: "system",
    setTheme: () => null,
}

const ThemeProviderContext = createContext(initialState);

export function useTheme() {
    const context = useContext(ThemeProviderContext);
    if (context === undefined) {
        throw new Error("useTheme must be used in within a ThemeProvider");
    }
    return context;
}

export default function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "vite-ui-theme",
    ...props
}) {
    const [theme, setTheme] = useState(
        () => localStorage.getItem(storageKey) || defaultTheme
    )

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            root.classList.add(systemTheme);
        } else {
            root.classList.add(theme);
        }

    }, [theme])

    const value = {
        theme,
        setTheme: (theme) => {
            localStorage.setItem(storageKey, theme);
            setTheme(theme);
        }
    }

    return (
        <ThemeProviderContext.Provider value={value} {...props}>
            {children}
        </ThemeProviderContext.Provider>
    )
} 