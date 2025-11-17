
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Header from '@/components/landing-page/header';
import Footer from '@/components/landing-page/footer';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <article className="prose prose-lg max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
                Privacy Policy (Jalani Path Ltd)
              </h1>
              <p className="text-muted-foreground mt-2">Last updated: [17/11/25]</p>
            </div>

            <p>
              This Privacy Policy explains how Jalani Path Ltd (“we”, “us”, “our”) collects, uses, and protects your personal information.
            </p>
            <p>
              We are committed to respecting your privacy and keeping your data safe.
            </p>

            <h2>1. Who We Are</h2>
            <ul>
              <li>Jalani Path Ltd</li>
              <li>Company No: 16858998</li>
              <li>Registered Office: 124 City Road, London, ECV1 2NX</li>
              <li>Data Protection Contact: admin@jalanipath.com</li>
              <li>ICO Registration No: [add once received]</li>
            </ul>

            <h2>2. What Information We Collect</h2>
            <p>We may collect:</p>
            <h3>Information you provide</h3>
            <ul>
              <li>name, email address, contact details</li>
              <li>user posts, stories, comments, or updates</li>
              <li>preferences and profile settings</li>
            </ul>
            <h3>Automatically collected</h3>
            <ul>
              <li>device information</li>
              <li>IP address</li>
              <li>analytics and usage patterns</li>
              <li>cookies or similar technologies</li>
            </ul>
            <h3>From partners</h3>
            <ul>
              <li>resource recommendations</li>
              <li>collaborative content submissions</li>
            </ul>
            <p>We do not collect special category health data unless you voluntarily include it in posts.</p>

            <h2>3. How We Use Your Information</h2>
            <p>We use your data to:</p>
            <ul>
              <li>operate and improve the platform</li>
              <li>manage user accounts</li>
              <li>personalise your experience</li>
              <li>communicate with you</li>
              <li>share community updates</li>
              <li>support moderation and safety</li>
              <li>analyse usage and performance</li>
              <li>comply with legal obligations</li>
            </ul>
            <p>We may use anonymised or aggregated data for research, insights, or reports.</p>

            <h2>4. Legal Basis for Processing</h2>
            <p>We process data under:</p>
            <ul>
              <li><strong>Consent</strong> (e.g., newsletters, optional submissions)</li>
              <li><strong>Legitimate interests</strong> (platform operation, community safety, analytics)</li>
              <li><strong>Contract</strong> (providing the service you signed up for)</li>
              <li><strong>Legal obligation</strong> (where required)</li>
            </ul>

            <h2>5. Sharing Your Information</h2>
            <p>We may share information with:</p>
            <ul>
              <li>service providers (hosting, email, analytics)</li>
              <li>moderators and trusted contractors</li>
              <li>partners you choose to interact with</li>
              <li>legal authorities if required</li>
            </ul>
            <p>We will never sell your personal information.</p>

            <h2>6. Community Content</h2>
            <ul>
              <li>Anything you post may be visible to others.</li>
              <li>You are responsible for the content you share.</li>
              <li>We may anonymise or remove content for safety, moderation, or platform quality.</li>
            </ul>

            <h2>7. Data Storage & Security</h2>
            <p>We store data securely using providers like:</p>
            <ul>
              <li>Firebase</li>
              <li>Google Cloud</li>
              <li>Email hosting platforms</li>
            </ul>
            <p>We take steps to protect your information, but no platform is 100% secure.</p>

            <h2>8. International Transfers</h2>
            <p>Some service providers store data outside the UK—only in locations with adequate protection (UK GDPR compliant).</p>

            <h2>9. How Long We Keep Your Data</h2>
            <p>We keep information for as long as needed to:</p>
            <ul>
              <li>operate your account</li>
              <li>comply with legal requirements</li>
              <li>resolve disputes</li>
              <li>support community safety</li>
            </ul>
            <p>You can request deletion at any time.</p>

            <h2>10. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>access your data</li>
              <li>correct inaccurate information</li>
              <li>delete your data</li>
              <li>object to processing</li>
              <li>withdraw consent (for consent-based uses)</li>
              <li>request export of your data</li>
            </ul>
            <p>To exercise rights, contact: charlie@jalani-path.com</p>

            <h2>11. Cookies</h2>
            <p>We use cookies for:</p>
            <ul>
              <li>analytics</li>
              <li>performance</li>
              <li>user experience</li>
            </ul>
            <p>You can disable cookies in your browser settings.</p>

            <h2>12. Updates to This Policy</h2>
            <p>We may update this Privacy Policy. Significant changes will be posted on the platform.</p>

            <h2>13. Contact</h2>
            <p>If you have questions or concerns:</p>
            <ul>
              <li>Email: admin@jalanipath.com</li>
              <li>Data Protection Contact: admin@jalanipath.com</li>
            </ul>

            <div className="text-center mt-12">
                <Button asChild>
                    <Link href="/">
                        <Home className="mr-2 h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
