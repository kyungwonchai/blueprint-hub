const fs = require('fs');
const path = require('path');

const appContent = fs.readFileSync(path.join(__dirname, '../src/App.tsx'), 'utf-8');

// Replace App.tsx to introduce currentTheme state and pass to Header & root styles
let updatedApp = appContent;

// 1. Add currentTheme state
if (!updatedApp.includes('const [currentTheme, setCurrentTheme]')) {
  updatedApp = updatedApp.replace(
    "const [currentTab, setCurrentTab] = useState<MainTabMode>('catalog');",
    `const [currentTab, setCurrentTab] = useState<MainTabMode>('master');
  const [currentTheme, setCurrentTheme] = useState<string>(() => {
    return localStorage.getItem('k_blueprint_theme') || 'cyber-violet';
  });

  const handleSelectTheme = (themeId: string) => {
    setCurrentTheme(themeId);
    localStorage.setItem('k_blueprint_theme', themeId);
  };`
  );
}

// 2. Pass currentTheme to Header
updatedApp = updatedApp.replace(
  "saveStatus={saveStatus}",
  `saveStatus={saveStatus}
        currentTheme={currentTheme}
        onSelectTheme={handleSelectTheme}`
);

fs.writeFileSync(path.join(__dirname, '../src/App.tsx'), updatedApp);
console.log('✅ Updated App.tsx with Theme State Provider');
