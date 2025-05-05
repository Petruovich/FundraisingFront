import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-muted-foreground" />
            <a href="tel:+380674000880" className="text-sm hover:underline">
              +38(067)400-08-80
            </a>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <a href="mailto:support@initiatives.example" className="text-sm hover:underline">
                support@initiatives.example
              </a>
            </div>
            <p className="pl-7 text-xs text-muted-foreground">Підтримка клієнтів</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-muted-foreground" />
            <a href="tel:+380443928494" className="text-sm hover:underline">
              +38(044)392-84-94
            </a>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <a href="mailto:commercial@initiatives.example" className="text-sm hover:underline">
                commercial@initiatives.example
              </a>
            </div>
            <p className="pl-7 text-xs text-muted-foreground">Комерційні питання</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
