export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Freelancer Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Detect Client Red Flags{" "}
          <span className="text-[#58a6ff]">Before You Start</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Instantly analyze potential clients by checking email domain reputation,
          LinkedIn profiles, and payment blacklist databases — so you never chase
          an invoice again.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No contracts.</p>

        {/* Risk score preview */}
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left max-w-lg mx-auto">
          <p className="text-xs text-[#6e7681] uppercase tracking-widest mb-3">Sample Risk Report</p>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-[#c9d1d9]">acme-startup.io</span>
            <span className="bg-red-900 text-red-300 text-xs font-bold px-2 py-0.5 rounded">HIGH RISK</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-[#8b949e]">Domain age</span>
              <span className="text-red-400">14 days — suspicious</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-[#8b949e]">Payment blacklist</span>
              <span className="text-red-400">2 reports found</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-[#8b949e]">LinkedIn match</span>
              <span className="text-yellow-400">Profile mismatch</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-[#8b949e]">Overall score</span>
              <span className="text-red-400 font-bold">23 / 100</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center">
          <p className="text-xs text-[#58a6ff] uppercase tracking-widest font-semibold mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$12</p>
          <p className="text-sm text-[#6e7681] mb-6">per month</p>
          <ul className="text-sm text-[#8b949e] space-y-2 mb-8 text-left">
            <li className="flex gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited client lookups</li>
            <li className="flex gap-2"><span className="text-[#58a6ff]">✓</span> Email domain reputation check</li>
            <li className="flex gap-2"><span className="text-[#58a6ff]">✓</span> Payment blacklist database</li>
            <li className="flex gap-2"><span className="text-[#58a6ff]">✓</span> LinkedIn profile analysis</li>
            <li className="flex gap-2"><span className="text-[#58a6ff]">✓</span> Risk score history & export</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg text-sm transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="text-base font-semibold text-[#c9d1d9] mb-2">What data sources do you check?</h3>
            <p className="text-sm text-[#8b949e]">We cross-reference email domain registration age and reputation, publicly available LinkedIn profile data, and aggregated freelancer payment dispute databases to build a comprehensive risk score.</p>
          </div>
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="text-base font-semibold text-[#c9d1d9] mb-2">How accurate is the risk score?</h3>
            <p className="text-sm text-[#8b949e]">Our scoring model combines multiple signals to reduce false positives. A high-risk score doesn't guarantee non-payment, but it gives you the data to ask the right questions and protect yourself with contracts and deposits.</p>
          </div>
          <div className="pb-6">
            <h3 className="text-base font-semibold text-[#c9d1d9] mb-2">Can I cancel my subscription?</h3>
            <p className="text-sm text-[#8b949e]">Yes — cancel anytime from your billing portal with one click. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
