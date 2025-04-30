export default function ContactPage() {
    return (
        <section className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Contact Me
            </h2>

            <p className="text-gray-700 dark:text-gray-300">
                I'm always open to new opportunities, collaborations, or just a
                friendly chat. Feel free to reach out using the form below or
                connect with me on social media.
            </p>

            <form className="space-y-6">
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-900 dark:text-gray-200"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your Name"
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-900 dark:text-gray-200"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="you@example.com"
                    />
                </div>

                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-900 dark:text-gray-200"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows={5}
                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Write your message here..."
                    />
                </div>

                <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
}
