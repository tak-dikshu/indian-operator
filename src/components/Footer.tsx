export function Footer() {
  return (
    <footer className="w-full border-t border-[var(--card-border)] bg-[var(--bg)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col items-center text-center">
        
        {/* Disclaimer Box */}
        <div className="border border-[var(--gold)]/30 bg-[var(--gold)]/5 rounded-lg p-6 max-w-3xl mb-12">
          <div className="flex items-center justify-center mb-3 text-[var(--gold)]">
            <span className="text-xl mr-2">⚠</span>
            <span className="font-bold tracking-wider text-sm">IMPORTANT DISCLAIMER</span>
          </div>
          <p className="text-[var(--text-mute)] text-sm leading-relaxed">
            Not SEBI Registered. All content provided across YouTube, Telegram, WhatsApp, Instagram, and this website is for educational purposes only. I am not responsible for your profit or loss. Please consult your financial advisor before trading. Trading involves significant risk of loss and is not suitable for all investors.
          </p>
        </div>

        {/* Wordmark & Copyright */}
        <div className="font-display font-bold text-2xl tracking-widest text-[var(--text)] mb-4">
          INDIAN OPERATOR
        </div>
        <p className="text-[var(--text-faint)] font-mono text-xs">
          &copy; {new Date().getFullYear()} Indian Operator. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
