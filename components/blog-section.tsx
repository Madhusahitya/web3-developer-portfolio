"use client";

import Image from "next/image";

export default function BlogSection() {
  const blogs = [
    {
      title: "Building MetaCard YieldFlow: My Full-Stack Blockchain Journey",
      description:
        "A deep dive into the architecture, challenges, and solutions behind MetaCard YieldFlow, from smart contracts to dApp UX. Learn how I built a full-stack DeFi protocol and what I discovered along the way.",
      image: "/metayieldx.png",
      link: "https://metacardyieldflow.hashnode.dev/building-metacardyieldflow-my-full-stack-blockchain-journey",
    },
    // Add more blog posts here as needed
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fffbe5]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-poppins mb-4 text-text-dark">Blog</h2>
          <p className="text-xl text-text-gray max-w-2xl mx-auto">
            Explore my journey and insights in Web3, DeFi, and blockchain development. I share hands-on experiences, technical deep-dives, and lessons learned from building real-world projects.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {blogs.map((blog, idx) => (
            <div
              key={blog.title}
              className="bg-white rounded-2xl shadow-lg border border-primary-yellow/30 max-w-md w-full overflow-hidden flex flex-col"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={224}
                className="w-full h-56 object-cover object-top"
              />
              <div className="p-6 flex flex-col items-center flex-1">
                <h3 className="text-2xl font-semibold text-primary-yellow mb-2 text-center">
                  {blog.title}
                </h3>
                <p className="text-text-gray text-center mb-4 flex-1">
                  {blog.description}
                </p>
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full bg-primary-yellow text-white font-semibold shadow hover:bg-primary-orange transition-colors"
                >
                  Read Blog
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 