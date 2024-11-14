// app/settings/page.tsx
import { User, Lock, Globe, Palette, Database, Bell, LucideIcon } from "lucide-react";

interface SettingsNavItem {
  id: string;
  label: string;
  Icon: LucideIcon;  // Capitalized to indicate it's a component
}

const settingsNavItems: SettingsNavItem[] = [
  { id: 'profile', label: 'Profile', Icon: User },
  { id: 'security', label: 'Security', Icon: Lock },
  { id: 'notifications', label: 'Notifications', Icon: Bell },
  { id: 'preferences', label: 'Preferences', Icon: Globe },
  { id: 'appearance', label: 'Appearance', Icon: Palette },
  { id: 'data', label: 'Data Management', Icon: Database },
];

export default function Settings() {
  return (
    <main className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Settings</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Settings Navigation Sidebar */}
            <div className="md:col-span-1">
              <nav className="space-y-1 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                {settingsNavItems.map(({ id, label, Icon }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors
                      hover:bg-gray-50 dark:hover:bg-gray-700
                      text-gray-900 dark:text-gray-100"
                  >
                    <Icon className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
                    {label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Settings Content */}
            <div className="md:col-span-3 space-y-6">
              {/* Profile Section */}
              <section id="profile" className="bg-white dark:bg-gray-800 shadow rounded-lg">
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Profile Settings</h2>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="h-20 w-20 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <User className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                      </div>
                      <div className="ml-6">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                          Change Photo
                        </button>
                        <button className="ml-3 px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-gray-500">
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 mt-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 
                            bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                            focus:ring-2 focus:ring-blue-500"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 
                            bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                            focus:ring-2 focus:ring-blue-500"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Bio
                        </label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 
                            bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                            focus:ring-2 focus:ring-blue-500"
                          placeholder="Tell us about yourself..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Save Button */}
              <div className="flex justify-end">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}