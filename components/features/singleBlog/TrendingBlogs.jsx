import React from 'react'
import { BLOGS } from '@/constants/blogs'
import { FiTrendingUp, FiArrowUpRight } from 'react-icons/fi'

const TrendingBlogs = () => {
  // For now, just take the first 3 blogs as trending
  // In a real app, this would be based on view count or other metrics
  const trendingBlogs = BLOGS.slice(0, 3)

  return (
    <div className="bg-white rounded-[2rem] p-8 shadow-[0_4px_80px_-20px_rgba(9,56,25,0.1)] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-quaternary/30 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="flex items-center gap-3 mb-8 relative">
        <FiTrendingUp className="w-6 h-6 text-secondary" />
        <h3 className="font-caslon text-2xl text-primary">Trending Now</h3>
        <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-secondary/30 to-transparent" />
      </div>

      <div className="space-y-6">
        {trendingBlogs.map((blog, index) => (
          <div 
            key={index} 
            className="group cursor-pointer relative flex items-start gap-6 p-4 rounded-xl hover:bg-quaternary/10 transition-colors duration-300"
          >
            {/* Number */}
            <div className="relative">
              <span className="text-4xl font-caslon text-primary/10 group-hover:text-primary/20 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="absolute -right-1 -top-1 w-4 h-4 rounded-full bg-secondary/20 group-hover:scale-150 transition-transform duration-300" />
            </div>

            {/* Content */}
            <div className="space-y-2 flex-1">
              <span className="inline-block font-modernline text-sm text-secondary">
                {blog.category.replace(/-/g, ' ')}
              </span>
              <h4 className="font-caslon text-lg text-primary group-hover:text-primary/80 transition-colors pr-6">
                {blog.title}
              </h4>
            </div>

            {/* Arrow Icon */}
            <FiArrowUpRight className="w-5 h-5 text-primary/40 group-hover:text-secondary transform -translate-y-1 group-hover:scale-110 transition-all" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrendingBlogs 