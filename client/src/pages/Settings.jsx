import ThemeSelector from "../components/ThemeSelector";

function Settings() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="mb-12 text-3xl font-bold text-gray-800 dark:text-white">
        Settings
      </h1>
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          Theme:
        </h2>
        <ThemeSelector />
      </div>
    </div>
  );
}

export default Settings;
