import React from 'react'

const Container = ({ data, title="Overview", className="" }) => {
  return (
    <div className={`mb-8 ${className} cursor-pointer`}>
        <h2 className="text-xl font-semibold mb-4 text-primary">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap4 bg-white shadow-sm rounded-3xl border border-tertiary/20 transition-all duration-300 hover:shadow-md">
          {data.map((item, index) => (
            <div 
              key={index} 
              className={`flex items-center gap-4 p-4 group transition-all duration-300 hover:bg-quaternary/5
                ${index >= 3 ? 'border-t border-tertiary/20' : ''}
                ${index % 3 !== 0 ? 'border-l border-tertiary/20' : ''}
              `}
            >
              {item.icon && (
                <div className={`bg-primary rounded-xl p-2 text-2xl transition-transform duration-300 group-hover:scale-110`}>
                  <item.icon className="text-secondary" />
                </div>
              )}
              <div className="flex flex-col">
                {item.type && (
                  <span className="text-sm text-tertiary font-medium">{item.type}</span>
                )}
                <span className="text-primary font-medium">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Container