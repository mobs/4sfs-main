import React from 'react'
import { FiHeart, FiShare2, FiBookmark } from 'react-icons/fi'
import Button from '@/components/ui/Button'

const BlogContent = ({ blog }) => {
  return (
    <article className="relative">
      {/* Floating Action Bar */}
      <div className="hidden lg:flex absolute -left-4 top-0 flex-col items-center gap-4 p-4 bg-white rounded-full shadow-lg">
        <Button variant="ghost" className="!p-2 hover:text-secondary transition-colors">
          <FiHeart className="w-5 h-5" />
        </Button>
        <span className="text-xs font-medium text-primary rotate-90">{blog.likes} likes</span>
        <div className="h-px w-6 bg-primary/10" />
        <Button variant="ghost" className="!p-2 hover:text-secondary transition-colors">
          <FiShare2 className="w-5 h-5" />
        </Button>
        <div className="h-px w-6 bg-primary/10" />
        <Button variant="ghost" className="!p-2 hover:text-secondary transition-colors">
          <FiBookmark className="w-5 h-5" />
        </Button>
      </div>

      {/* Mobile Action Bar */}
      <div className="lg:hidden flex items-center justify-between mb-6 px-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="!p-2 hover:text-secondary transition-colors">
            <FiHeart className="w-5 h-5" />
          </Button>
          <span className="text-sm font-medium text-primary">{blog.likes} likes</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="!p-2 hover:text-secondary transition-colors">
            <FiShare2 className="w-5 h-5" />
          </Button>
          <Button variant="ghost" className="!p-2 hover:text-secondary transition-colors">
            <FiBookmark className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-[0_4px_80px_-20px_rgba(9,56,25,0.1)] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-quaternary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

        {/* Content */}
        <div className="relative">
          {/* First Letter Design */}
          <div className="float-left mr-6 mb-3 relative">
            <span className="text-9xl font-caslon text-primary leading-none relative z-10">
              {blog.content.replace(/<[^>]*>/g, '').charAt(0)}
            </span>
            <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-secondary/20 rounded-full blur-xl" />
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none">
            {/* Introduction Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-caslon text-primary mb-6 relative inline-block">
                Introduction
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-secondary/30 rounded-full" />
              </h2>
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                A logo is more than just an image—it's the face of your brand. A strong logo creates brand recognition, builds trust, and communicates your company's values in a single glance.
              </p>
            </div>

            {/* Main Sections */}
            <div className="space-y-12">
              {/* Why Section */}
              <div className="relative">
                <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-primary/5 via-primary/20 to-primary/5 rounded-full" />
                <div className="pl-8">
                  <h2 className="text-2xl font-caslon text-primary mb-6">Why Your Business Needs a Strong Logo</h2>
                  <ul className="space-y-4 list-none pl-0">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-secondary" />
                      <div>
                        <strong className="text-primary block mb-1">First Impressions Matter</strong>
                        <span className="text-gray-700">Your logo is the first thing customers notice.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-secondary" />
                      <div>
                        <strong className="text-primary block mb-1">Brand Recognition</strong>
                        <span className="text-gray-700">A unique logo sets you apart from competitors.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-secondary" />
                      <div>
                        <strong className="text-primary block mb-1">Trust & Credibility</strong>
                        <span className="text-gray-700">Professional design creates a lasting impression.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Elements Section */}
              <div className="bg-quaternary/10 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
                <h2 className="text-2xl font-caslon text-primary mb-6">Elements of an Effective Logo</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { title: 'Simplicity', desc: 'Clean and easy to recognize' },
                    { title: 'Memorability', desc: 'Sticks in the minds of consumers' },
                    { title: 'Versatility', desc: 'Looks great on all platforms and materials' },
                    { title: 'Timelessness', desc: 'Avoids short-lived trends' }
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-caslon text-primary mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conclusion */}
              <div className="border-l-4 border-secondary pl-6 py-2">
                <h2 className="text-2xl font-caslon text-primary mb-4">Conclusion</h2>
                <p className="text-gray-700 italic">
                  Investing in a well-designed logo is a smart business decision. It helps establish your brand identity and makes a lasting impact on your audience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tags Section */}
        <div className="mt-16 pt-8 border-t border-primary/10">
          <h4 className="font-modernline text-lg text-primary mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-secondary"></span>
            Tagged in
          </h4>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-quaternary/30 text-primary rounded-full text-sm capitalize hover:bg-quaternary/50 transition-colors cursor-pointer flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-secondary rounded-full"></span>
                {tag.replace(/-/g, ' ')}
              </span>
            ))}
          </div>
        </div>

        {/* Author Section */}
        <div className="mt-16 pt-8 border-t border-primary/10">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-quaternary relative z-10">
                <img
                  src={blog.author.profileImage}
                  alt={blog.author.name}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-secondary/20 rounded-full blur-xl" />
            </div>
            <div>
              <h4 className="font-modernline text-lg text-secondary mb-1">Written by</h4>
              <p className="text-2xl font-caslon text-primary">{blog.author.name}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default BlogContent 