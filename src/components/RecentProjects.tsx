import { projects } from "@/assets/data/projects";
import Link from "next/link";
import { CalendarDays } from "lucide-react";

export default function RecentProjects() {
  // Get the 5 most recent projects based on completionDate
  const recentProjects = [...projects]
    .sort((a, b) => new Date(b.completionDate).getTime() - new Date(a.completionDate).getTime())
    .slice(0, 5);

  return (
    <div className="mt-8">
      <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Recent Projects</h2>
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {recentProjects.map((project) => (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <li className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {project.title}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                      <CalendarDays className="h-4 w-4 mr-1" />
                      {new Date(project.completionDate).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service) => (
                        <span 
                          key={service}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
