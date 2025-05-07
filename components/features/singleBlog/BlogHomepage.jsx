'use client'
import React from 'react'
import BlogHeader from './BlogHeader'
import BlogContent from './BlogContent'
import RelatedBlogs from './RelatedBlogs'
import TrendingBlogs from './TrendingBlogs'
import { BLOGS } from '@/constants/blogs'

const BlogHomepage = () => {
  const blog = BLOGS[0] // Using the first blog for now

  return (
    <div className="min-h-screen bg-quaternary/30">
      <BlogHeader blog={blog} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            <BlogContent blog={blog} />
          </div>
          
          {/* Sidebar - Floating */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-8">
            <RelatedBlogs currentBlog={blog} />
            <TrendingBlogs />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogHomepage