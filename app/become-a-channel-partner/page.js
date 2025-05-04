import PartnerHomepage from '@/components/features/partner/PartnerHomepage'
import React from 'react'

const ChannelPartner = () => {
    const title = "Become a Channel Partner"
    const content = "Join 4SFS as a Channel Partner and grow your business with India's leading real estate investment platform."
    const ctaText = "Join Now"
  return (
    <div>
        <PartnerHomepage title={title} content={content} ctaText={ctaText} />
    </div>
  )
}

export default ChannelPartner