"use client"

import { FormEvent, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useAnalytics } from "@/components/analytics"

const fieldClass =
  "rounded-none border-border bg-transparent text-foreground placeholder:text-muted-foreground"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "unsent">("idle")
  const { track } = useAnalytics()

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // TODO: connect a form handler. Keep any secrets on the server.
    // This client component must not embed API keys or webhook URLs.
    track("contact_submit_attempt")
    setStatus("unsent")
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" autoComplete="name" required className={fieldClass} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={fieldClass}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="topic">Topic</Label>
        <select
          id="topic"
          name="topic"
          required
          defaultValue="enquiry"
          className="flex h-10 w-full border border-border bg-transparent px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="enquiry">Enquiry</option>
          <option value="artist-submission">Artist submission</option>
        </select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="link">Link to work (optional)</Label>
        <Input
          id="link"
          name="link"
          type="url"
          inputMode="url"
          placeholder="https://"
          className={fieldClass}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" required rows={6} className={fieldClass} />
      </div>
      <Button type="submit" className="rounded-none px-8">
        Send
      </Button>
      <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
        {status === "unsent"
          ? "This form is not connected yet. Nothing has been sent."
          : "The form is a placeholder. Submitting it does not send a message."}
      </p>
    </form>
  )
}
