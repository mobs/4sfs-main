import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { BLOGS } from '@/constants/blogs'
import Heading from '@/components/ui/Heading'
import Button from '@/components/ui/Button'

const BlogHero = () => {
  return (
    <div className="w-full bg-bgGray mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {/* <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-modernline text-primary">
              Best blog of the week
            </h2>
            <p className="text-muted">
              Discover our most engaging and informative articles
            </p>
          </div>
          <Button variant="ghost" className="mt-6 md:mt-0">
            See all posts
          </Button>
        </div> */}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Featured Blog */}
          <div className="lg:col-span-7 relative group h-[400px] md:h-[calc(100vh-100px)] overflow-hidden rounded-2xl">
            <img 
              src="/images/properties/luxury-house.webp" 
              alt="Travel"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-6 left-6 flex gap-3">
              <span className="px-4 py-2 bg-white/90 rounded-full text-sm font-medium">Jan 06, 2024</span>
              <span className="px-4 py-2 bg-quaternary/90 rounded-full text-sm font-medium">Travel</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
              <div className="flex items-end justify-between gap-6">
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-caslon text-white mb-4">
                    Get to your dream destinations with TravelPro
                  </h2>
                  <p className="text-white/80 mb-4 line-clamp-2">
                    Discover the most amazing places around the world with our expert travel guides and tips.
                  </p>
                </div>
                <Button variant="white" className="flex-shrink-0">
                  <BsArrowRight className="text-xl" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="lg:col-span-5 space-y-8 md:h-[calc(100vh-100px)] ">
            {/* NCS Section */}
            <div className="bg-quaternary/40 p-8 rounded-2xl h-[calc(50%-32px)]">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium">NCS</span>
                <span className="px-4 py-2 bg-secondary/20 rounded-full text-sm font-medium">Featured</span>
              </div>
              <h3 className="text-xl font-caslon text-primary mb-3">
                Become A Broadcast Member
              </h3>
              <h2 className="text-2xl md:text-3xl font-modernline text-primary mb-6">
                Real talk in a corporate world
              </h2>
              <div className="space-y-4">
                <Button variant="dark" className="w-full justify-between">
                  <span>How to work out in a limited space</span>
                </Button>
                <Button variant="dark" className="w-full justify-between">
                  <span>How to read golf green gran like a pro</span>
                </Button>
              </div>
            </div>

            {/* Gym Section */}
            <div className="relative group h-1/2 overflow-hidden rounded-2xl">
              <img 
                src="/images/properties/brick-building.webp" 
                alt="Gym"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-white/90 rounded-full text-sm font-medium">Gym</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <div className="flex items-end justify-between gap-4">
                  <h3 className="text-xl md:text-2xl text-white font-caslon">
                    Athletic Training | soft and hard styles of training
                  </h3>
                  <Button variant="white" className="flex-shrink-0">
                    <BsArrowRight />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogHero