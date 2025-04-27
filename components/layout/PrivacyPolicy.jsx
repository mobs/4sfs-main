import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-24">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Privacy Policy</h1>
            
            <div className="space-y-8">
                <section>
                    <p className="text-primary/80 leading-relaxed">
                        At Digital Puneet & Team, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-primary">1. Information We Collect</h2>
                    <ul className="list-disc pl-6 space-y-2 text-primary/80">
                        <li>Personal Information: Name, email, phone number, billing details.</li>
                        <li>Usage Data: IP address, browser type, and interaction with our website.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-primary">2. How We Use Your Information</h2>
                    <ul className="list-disc pl-6 space-y-2 text-primary/80">
                        <li>To provide logo design and trademark services.</li>
                        <li>To process payments and send invoices.</li>
                        <li>To improve our website and customer experience.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-primary">3. Data Protection</h2>
                    <ul className="list-disc pl-6 space-y-2 text-primary/80">
                        <li>We use secure servers and encryption to protect your data.</li>
                        <li>We do not sell or share your personal information with third parties except for legal or regulatory requirements.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-primary">4. Cookies & Tracking</h2>
                    <ul className="list-disc pl-6 space-y-2 text-primary/80">
                        <li>We use cookies to enhance user experience and analyze website traffic.</li>
                        <li>You can disable cookies through your browser settings.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-primary">5. Third-Party Links</h2>
                    <p className="text-primary/80 leading-relaxed">
                        Our website may contain links to third-party sites. We are not responsible for their privacy practices.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-primary">6. Your Rights</h2>
                    <ul className="list-disc pl-6 space-y-2 text-primary/80">
                        <li>You can request access, modification, or deletion of your personal data.</li>
                        <li>For any privacy-related concerns, contact us at <a href="mailto:puneet@taxslick.com" className="text-background hover:text-primary transition-colors duration-300"> puneet@taxslick.com </a></li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
