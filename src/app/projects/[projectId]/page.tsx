import { projects } from "@/assets/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CalendarDays, User } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{
    projectId: string;
  }>;
  searchParams?: Promise<any>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  // Await the params
  const { projectId } = await params;
  
  const project = projects.find((p) => p.id === projectId);
  
  if (!project) {
    notFound();
  }

  return (
    <main className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
          {/* Project Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
          </div>

          {/* Project Details */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Project Details
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <User className="h-5 w-5 mr-2" />
                    Client: {project.clientName}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <CalendarDays className="h-5 w-5 mr-2" />
                    Completion Date: {new Date(project.completionDate).toLocaleDateString()}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Services Provided
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column - Images */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Project Images
                </h2>
                <div className="grid gap-4">
                  {project.images.map((image, index) => (
                    <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/baystoneicon.ico"
                        alt={`${project.title} image ${index + 1}`}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Add generateStaticParams to pre-render all project pages
export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.id,
  }));
}