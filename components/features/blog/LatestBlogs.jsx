import React from 'react'
import { BLOGS } from '@/constants/blogs'
import { BsArrowRight, BsBookmark } from 'react-icons/bs'
import Heading from '@/components/ui/Heading'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'

const LatestBlogs = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className='md:w-1/2'>
        <Heading 
          title="Latest Articles" 
          subtitle="Explore our most recent publications and stay informed"
          textColor="text-primary"
          center
        />
        </div>
        <Button variant="ghost" className="mt-6 md:mt-0">
          View all articles
        </Button>
      </div>

      <div className="space-y-12 md:px-4 px-2">
        {BLOGS.map((blog, index) => (
          <motion.div 
            key={blog.slug} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col md:flex-row gap-8 group"
          >
            <div className="relative md:w-1/3 h-[300px] md:h-[280px] overflow-hidden rounded-2xl">
              <img
                src={blog.featuredImage || '/placeholder-blog.jpg'}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/90 rounded-full text-sm font-medium capitalize">
                  {blog.category}
                </span>
                {blog.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="px-4 py-2 bg-quaternary/90 rounded-full text-sm font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="md:w-2/3 flex flex-col justify-between">
            <div className='space-y-3'>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted">
                  <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                  <span>{blog.readingTime} min read</span>
                </div>
                <Button variant="ghost" className="!p-2">
                  <BsBookmark className="text-lg" />
                </Button>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-caslon text-primary group-hover:text-secondary transition-colors">
                {blog.title}
              </h3>
              
              <p className="text-muted text-base md:text-lg">
                {blog.excerpt}
              </p>
              </div>
              
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-4">
                  <img
                    src={blog.author.profileImage || '/placeholder-author.jpg'}
                    alt={blog.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-primary font-medium">{blog.author.name}</p>
                    <p className="text-sm text-muted">Author</p>
                  </div>
                </div>
                <Button variant="ghost" className="flex items-center gap-2">
                  Read more
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <Button variant="secondary" className="px-8">
          Load more articles
        </Button>
      </div>
    </section>
  )
}

export default LatestBlogs 