import { ModeToggle } from "@/components/ModeToggle";

function Settings() {
  return (
    <div className="container mx-auto flex gap-4 px-12 py-8">
      <h1 className="mb-4 text-3xl font-bold text-gray-800 dark:text-white">
        Settings
      </h1>
      <div className="flex flex-col items-start gap-4">
        <ModeToggle />
      </div>
    </div>
  );
}

export default Settings;
