import { Activity, Folder, Users, Calendar, Bell, Search } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Image
                src="/compass-icon.svg"
                alt="Compass Logo"
                width={32}
                height={32}
                priority
              />
              <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">
                Compass
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                <Bell className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview Section */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white dark:bg-gray-800 overflow-hidden rounded-lg shadow">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Activity className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Projects</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900 dark:text-white">12</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 overflow-hidden rounded-lg shadow">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Calendar className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Upcoming Deadlines</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900 dark:text-white">5</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 overflow-hidden rounded-lg shadow">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Users className="h-6 w-6 text-purple-500" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Clients</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900 dark:text-white">24</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 overflow-hidden rounded-lg shadow">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Folder className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Open Tasks</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900 dark:text-white">38</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Projects Section */}
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Recent Projects</h2>
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {[1, 2, 3].map((project) => (
                  <li key={project} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          Landscape Design Project {project}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Updated 2 hours ago
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          In Progress
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}