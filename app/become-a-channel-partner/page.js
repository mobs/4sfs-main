import PartnerHomepage from '@/components/features/partner/PartnerHomepage'
import React from 'react'

const ChannelPartner = () => {
    const title = "Become a Channel Partner"
    const content = "Join 4SFS as a Channel Partner and grow your business with India's leading real estate investment platform."
    const ctaText = "Join Now"
    const formTitle = "Become a Channel Partner"
  return (
    <div>
        <PartnerHomepage title={title} content={content} ctaText={ctaText} formTitle={formTitle} />
    </div>
  )
}

export default ChannelPartner