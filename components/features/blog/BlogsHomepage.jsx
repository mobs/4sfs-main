'use client'
import React from 'react'
import BlogHero from './BlogHero'
import FeaturedBlogs from './FeaturedBlogs'
import CategorySection from './CategorySection'
import TrendingBlogs from './TrendingBlogs'
import LatestBlogs from './LatestBlogs'

const BlogsHomepage = () => {
  return (
    <div className="min-h-screen bg-bgGray">
      <BlogHero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24 py-16 md:py-20 lg:py-24">
          <FeaturedBlogs />
          <CategorySection />
          <TrendingBlogs />
          <LatestBlogs />
        </div>
      </div>
    </div>
  )
}

export default BlogsHomepage