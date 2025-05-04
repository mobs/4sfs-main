import React from 'react'
import PartnerHomepage from '@/components/features/partner/PartnerHomepage'

const Seller = () => {
  const title = "Become a Seller"
  const content = "Join 4SFS as a Seller and grow your business with India's leading real estate investment platform."
  const ctaText = "Join Now"
  const formTitle = "Become a Seller"
  return (
    <div>
      <PartnerHomepage title={title} content={content} ctaText={ctaText} formTitle={formTitle} />
    </div>
  )
}

export default Seller