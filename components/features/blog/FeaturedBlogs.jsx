import React from 'react'
import { BLOGS } from '@/constants/blogs'
import { BsArrowRight, BsBookmark } from 'react-icons/bs'
import Heading from '@/components/ui/Heading'
import Button from '@/components/ui/Button'

const FeaturedBlogs = () => {
  const featuredBlogs = BLOGS.slice(0, 3)

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className='md:w-1/2'>
        <Heading 
          title="Featured Stories" 
          subtitle="Discover our handpicked selection of must-read articles"
          textColor="text-primary"
          center={true}
        />
        </div>
        <Button variant="ghost" className="mt-6 md:mt-0">
          View all stories
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-4 px-2">
        {featuredBlogs.map((blog, index) => (
          <div key={blog.slug} className="group cursor-pointer">
            <div className="relative h-[300px] overflow-hidden rounded-2xl mb-6">
              <img
                src={blog.featuredImage || '/placeholder-blog.jpg'}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <Button 
                variant="white" 
                className="absolute top-6 right-6 !p-2"
              >
                <BsBookmark className="text-lg" />
              </Button>
              <div className="absolute bottom-6 left-6">
                <span className="px-4 py-2 bg-white/90 rounded-full text-sm font-medium capitalize">
                  {blog.category}
                </span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-muted">
                <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                <span>{blog.readingTime} min read</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-caslon text-primary group-hover:text-secondary transition-colors">
                {blog.title}
              </h3>
              
              <p className="text-muted line-clamp-2">
                {blog.excerpt}
              </p>
              
              <div className="flex items-center gap-4 pt-4">
                <img
                  src={blog.author.profileImage || '/admin.png'}
                  alt={blog.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <span className="block text-primary font-medium">{blog.author.name}</span>
                  <span className="text-sm text-muted">Author</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedBlogs 