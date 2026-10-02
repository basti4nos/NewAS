import { ContactForm } from "@/components/contact-form"
import { PageIntro } from "@/components/page-intro"
import { SocialLinks } from "@/components/social-links"
import { pageMetadata } from "@/lib/site"

export const metadata = pageMetadata(
  "Contact",
  "Enquiries and artist submissions for ASKNIGHTS.",
  "/contact",
)

export default function ContactPage() {
  return (
    <article>
      <PageIntro eyebrow="Enquiries" title="Contact">
        <p>For enquiries and artist submissions. You can also write via the social accounts.</p>
      </PageIntro>
      <div className="mx-auto grid max-w-6xl gap-16 px-6 pb-24 md:grid-cols-2">
        <ContactForm />
        <SocialLinks className="space-y-3 md:pt-2" />
      </div>
    </article>
  )
}
