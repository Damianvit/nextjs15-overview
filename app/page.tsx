import Image from "next/image";

export default function Home() {
    return (
        <div className="space-y-16">
            {/* About Section */}
            <section id="about" className="space-y-4">
                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        About Me
                    </h2>
                    <Image
                        src="/damian.jpg"
                        alt="Photo of Damian"
                        width={100}
                        height={100}
                        className="rounded-full object-cover"
                    />
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Hi! I&apos;m Damian Vit, a full stack developer passionate
                    about building beautiful, accessible web experiences with
                    modern technologies like React, Next.js,Prisma ORM and
                    Tailwind CSS.
                </p>
            </section>

            {/* Projects Section */}
            <section id="projects" className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Projects
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Portfolio Website
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                            A personal portfolio site to showcase my work, built
                            with Next.js, Tailwind CSS, and deployed on Vercel.
                        </p>
                        <a
                            href="#"
                            className="inline-block mt-3 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                        >
                            View Project →
                        </a>
                    </div>

                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Todo App
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                            A simple, full-stack task manager using Next.js 14
                            App Router, MongoDB, Prisma, and Auth.js.
                        </p>
                        <a
                            href="#"
                            className="inline-block mt-3 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                        >
                            View Project →
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
