import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand & Description */}
        <div>
          <Link href="/" className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">SnapCollab</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Built for creators. Collaborate in real-time, present beautifully,
            and never miss a moment.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col space-y-2">
          <span className="text-sm font-medium text-muted-foreground uppercase">
            Pages
          </span>
          <Link
            href="/features"
            className="text-sm hover:text-foreground transition"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="text-sm hover:text-foreground transition"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-sm hover:text-foreground transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm hover:text-foreground transition"
          >
            Contact
          </Link>
        </div>

        {/* Legal & Social */}
        <div className="flex flex-col space-y-2">
          <span className="text-sm font-medium text-muted-foreground uppercase">
            Legal
          </span>
          <Link
            href="/terms"
            className="text-sm hover:text-foreground transition"
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy"
            className="text-sm hover:text-foreground transition"
          >
            Privacy Policy
          </Link>
          <div className="pt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} SnapCollab. Built by Nadir Hussain.
          </div>
        </div>
      </div>
    </footer>
  );
}
