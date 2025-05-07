import React from "react";
import { BLOGS } from "@/constants/blogs";
import { BsArrowRight, BsBookmark, BsHeart } from "react-icons/bs";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

const TrendingBlogs = () => {
  // Get last 4 blogs for trending section
  const trendingBlogs = BLOGS.slice(-4);

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2">
          <Heading
            title="Trending This Week"
            subtitle="Stay updated with our most popular articles of the week"
            textColor="text-primary"
            center
          />
        </div>
        <Button variant="ghost" className="mt-6 md:mt-0">
          View all trending
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:px-4 px-2">
        {/* Featured Trending Blog */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative group h-full overflow-hidden rounded-2xl"
        >
          <img
            src={trendingBlogs[0].featuredImage || "/placeholder-blog.jpg"}
            alt={trendingBlogs[0].title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
            <div className="absolute top-6 right-6 flex gap-3">
              <Button variant="white" className="!p-2">
                <BsHeart className="text-lg" />
              </Button>
              <Button variant="white" className="!p-2">
                <BsBookmark className="text-lg" />
              </Button>
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-4 text-white/80 text-sm mb-4">
                <span>
                  {new Date(trendingBlogs[0].publishedAt).toLocaleDateString()}
                </span>
                <span>{trendingBlogs[0].readingTime} min read</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-caslon text-white mb-6">
                {trendingBlogs[0].title}
              </h3>
              <div className="flex items-center gap-4">
                <img
                  src={
                    trendingBlogs[0].author.profileImage ||
                    "/placeholder-author.jpg"
                  }
                  alt={trendingBlogs[0].author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-medium">
                    {trendingBlogs[0].author.name}
                  </p>
                  <p className="text-white/80 text-sm">
                    {trendingBlogs[0].category}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trending List */}
        <div className="space-y-8">
          {trendingBlogs.slice(1).map((blog, index) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 group"
            >
              <div className="relative w-44 h-44 flex-shrink-0 overflow-hidden rounded-2xl">
                <img
                  src={blog.featuredImage || "/placeholder-blog.jpg"}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="px-4 py-2 bg-white/90 rounded-full text-sm font-medium capitalize">
                    {blog.category}
                  </span>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted">
                  <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                  <span>{blog.readingTime} min read</span>
                </div>

                <h3 className="text-xl md:text-2xl font-caslon text-primary group-hover:text-secondary transition-colors">
                  {blog.title}
                </h3>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={
                        blog.author.profileImage || "/placeholder-author.jpg"
                      }
                      alt={blog.author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <span className="block text-primary font-medium">
                        {blog.author.name}
                      </span>
                      <span className="text-sm text-muted">Author</span>
                    </div>
                  </div>
                  <Button variant="ghost" className="!p-2">
                    <BsBookmark className="text-lg" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingBlogs;
