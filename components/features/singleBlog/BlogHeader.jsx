import React from 'react'
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi'
import Image from 'next/image'

const BlogHeader = ({ blog }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-primary/10 transform -skew-x-12" />
        <div className="absolute top-0 right-0 w-1/4 h-full bg-secondary/10 transform skew-x-12" />
      </div>

      {/* Main Content Container */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-64">
        {/* Category & Meta Strip */}
        <div className="flex flex-wrap items-center gap-6 mb-8">
          <span className="bg-primary text-quaternary px-6 py-2 rounded-full text-sm font-medium capitalize transform -rotate-1 hover:rotate-0 transition-transform">
            {blog.category.replace(/-/g, ' ')}
          </span>
          <div className="h-px flex-grow bg-gradient-to-r from-primary/20 to-transparent" />
          <div className="flex items-center gap-6 text-primary/80">
            <div className="flex items-center gap-2">
              <FiUser className="w-4 h-4" />
              <span className="font-modernline">{blog.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCalendar className="w-4 h-4" />
              <span className="font-modernline">{formatDate(blog.publishedAt)}</span>
            </div>
          </div>
        </div>

        {/* Title Section */}
        <div className="relative">
          {/* Background Image */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 aspect-square rounded-full overflow-hidden border-8 border-quaternary/30">
            <Image
              src={blog.featuredImage}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-quaternary/80 to-transparent" />
          </div>

          {/* Title Content */}
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-caslon text-primary mb-8 leading-tight">
              {blog.title}
            </h1>
            <div className="flex items-center gap-4 text-secondary">
              <FiClock className="w-5 h-5" />
              <span className="text-lg font-modernline">{blog.readingTime} minute read</span>
            </div>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="absolute bottom-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>
    </div>
  )
}

export default BlogHeader 