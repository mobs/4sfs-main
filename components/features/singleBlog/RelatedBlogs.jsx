import React from 'react'
import { BLOGS } from '@/constants/blogs'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'

const RelatedBlogs = ({ currentBlog }) => {
  // Get blogs from the same category, excluding current blog
//   const relatedBlogs = BLOGS.filter(blog => 
//     blog.category === currentBlog.category && blog.slug !== currentBlog.slug
//   ).slice(0, 2)

  const relatedBlogs = BLOGS.slice(1,3)

  return (
    <div className="bg-white rounded-[2rem] p-8 shadow-[0_4px_80px_-20px_rgba(9,56,25,0.1)] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
      
      <h3 className="font-caslon text-2xl text-primary mb-8 relative">
        Related Articles
        <div className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary rounded-full" />
      </h3>
      
      <div className="space-y-8">
        {relatedBlogs.map((blog, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative">
              {/* Image Container */}
              <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={blog.featuredImage}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <span className="inline-block font-modernline text-secondary">
                  {blog.category.replace(/-/g, ' ')}
                </span>
                <h4 className="font-caslon text-xl text-primary group-hover:text-secondary transition-colors duration-300">
                  {blog.title}
                </h4>
                <div className="flex items-center gap-2 text-primary/60 group-hover:text-secondary transition-colors duration-300">
                  <span className="text-sm">Read Article</span>
                  <FiArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedBlogs 