import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { 
  MdOutlineMedicalServices, 
  MdFitnessCenter, 
  MdFastfood,
  MdLocalHospital,
  MdSick
} from 'react-icons/md'
import { SiStylelint } from "react-icons/si"
import Heading from '@/components/ui/Heading'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'

const categories = [
  {
    name: 'Medical Knowledge',
    icon: MdOutlineMedicalServices,
    count: 42,
    color: 'bg-quaternary/30',
    gradient: 'from-quaternary/20 to-quaternary/40'
  },
  {
    name: 'Bodybuilding',
    icon: MdFitnessCenter,
    count: 28,
    color: 'bg-secondary/20',
    gradient: 'from-secondary/10 to-secondary/30'
  },
  {
    name: 'Life Style',
    icon: SiStylelint,
    count: 35,
    color: 'bg-accent/20',
    gradient: 'from-accent/10 to-accent/30'
  },
  {
    name: 'Diet',
    icon: MdFastfood,
    count: 24,
    color: 'bg-primary/10',
    gradient: 'from-primary/5 to-primary/20'
  },
  {
    name: 'Health Food',
    icon: MdLocalHospital,
    count: 31,
    color: 'bg-success/20',
    gradient: 'from-success/10 to-success/30'
  },
  {
    name: 'Diseases',
    icon: MdSick,
    count: 19,
    color: 'bg-error/20',
    gradient: 'from-error/10 to-error/30'
  }
]

const CategorySection = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className='md:w-1/2'>
        <Heading 
          title="Popular Categories" 
          subtitle="Explore our diverse range of health and wellness topics"
          textColor="text-primary"
          center
        />
        </div>
        <Button variant="ghost" className="mt-6 md:mt-0">
          View all categories
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:px-4 px-2">
        {categories.map((category, index) => {
          const Icon = category.icon
          return (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`rounded-2xl p-6 bg-gradient-to-br ${category.gradient} backdrop-blur-sm cursor-pointer`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`w-16 h-16 ${category.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="text-2xl text-primary" />
                </div>
                <h3 className="font-caslon text-lg text-primary">
                  {category.name}
                </h3>
                <span className="text-sm font-medium text-primary/60">
                  {category.count} articles
                </span>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default CategorySection 