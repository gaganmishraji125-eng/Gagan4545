import React from 'react';

export default function AIAffiliateSystem() {
  const products = [
    {
      title: 'Gaming Headset',
      price: '₹1,999',
      image:
        'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1200&auto=format&fit=crop',
      link: 'https://www.amazon.in/dp/B0CZ3M5TXS?tag=rudrakchstore-21'
    },
    {
      title: 'RGB Mechanical Keyboard',
      price: '₹3,499',
      image:
        'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1200&auto=format&fit=crop',
      link: 'https://amzn.to/your-affiliate-link'
    },
    {
      title: 'Wireless Gaming Mouse',
      price: '₹1,299',
      image:
        'https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1200&auto=format&fit=crop',
      link: 'https://amzn.to/your-affiliate-link'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black opacity-80" />

      <header className="relative z-10 px-6 py-6 border-b border-zinc-800 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight">
              ShopAI
            </h1>
            <p className="text-zinc-400 mt-1 text-sm md:text-base">
              AI Auto Affiliate Marketing System
            </p>
          </div>

          <button className="bg-white text-black px-5 py-2 rounded-2xl font-bold hover:scale-105 transition">
            Live Earnings
          </button>
        </div>
      </header>

      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-zinc-300">
                AI Auto Marketing Running
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-none tracking-tight">
              Earn
              <span className="block text-zinc-500">Commission</span>
              <span className="block">Automatically</span>
            </h2>

            <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-xl">
              AI automatically finds trending products, creates marketing
              content, and sends users to your affiliate links.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-white text-black px-7 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition">
                Start AI System
              </button>

              <button className="border border-zinc-700 px-7 py-4 rounded-2xl font-bold text-lg hover:bg-zinc-900 transition">
                View Dashboard
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-zinc-950 border border-zinc-800 rounded-[2rem] p-6 shadow-2xl shadow-zinc-900">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">AI Analytics</h3>
                <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                  LIVE
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-900 rounded-3xl p-5 border border-zinc-800">
                  <p className="text-zinc-400 text-sm">Total Clicks</p>
                  <h4 className="text-3xl font-black mt-2">24.8K</h4>
                </div>

                <div className="bg-zinc-900 rounded-3xl p-5 border border-zinc-800">
                  <p className="text-zinc-400 text-sm">Orders</p>
                  <h4 className="text-3xl font-black mt-2">1,248</h4>
                </div>

                <div className="bg-zinc-900 rounded-3xl p-5 border border-zinc-800">
                  <p className="text-zinc-400 text-sm">Commission</p>
                  <h4 className="text-3xl font-black mt-2">₹58K</h4>
                </div>

                <div className="bg-zinc-900 rounded-3xl p-5 border border-zinc-800">
                  <p className="text-zinc-400 text-sm">AI Posts</p>
                  <h4 className="text-3xl font-black mt-2">322</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h3 className="text-4xl font-black">Trending Products</h3>
            <p className="text-zinc-500 mt-2">
              Auto-selected by AI for maximum conversions
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-2xl text-sm text-zinc-300">
            Auto Updated Every Hour
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-zinc-950 border border-zinc-800 rounded-[2rem] overflow-hidden hover:scale-[1.02] transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold">{product.title}</h4>
                  <span className="text-green-400 font-bold">
                    {product.price}
                  </span>
                </div>

                <p className="text-zinc-400 leading-relaxed mb-6">
                  AI selected this product because it is currently trending and
                  converting well.
                </p>

                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-white text-black py-4 rounded-2xl font-black hover:scale-105 transition"
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 rounded-[3rem] p-10 md:p-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-5xl font-black leading-tight">
                Fully Automated
                <span className="block text-zinc-500">AI Workflow</span>
              </h3>

              <p className="text-zinc-400 text-lg mt-6 leading-relaxed">
                The system automatically fetches products, generates marketing
                captions, updates the website, and pushes promotions to your
                social channels.
              </p>
            </div>

            <div className="space-y-5">
              {[
                'Auto Product Fetching',
                'AI Marketing Captions',
                'Telegram Auto Posting',
                'Affiliate Link Injection',
                'Commission Tracking',
                'Dark Premium Dashboard'
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-black/50 border border-zinc-800 rounded-2xl p-5"
                >
                  <div className="w-4 h-4 rounded-full bg-green-500" />
                  <p className="text-lg font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-zinc-800 px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-2xl font-black">ShopAI</h4>
            <p className="text-zinc-500 mt-1">
              AI Powered Affiliate Automation Platform
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-zinc-900 border border-zinc-800 px-5 py-3 rounded-2xl hover:bg-zinc-800 transition">
              Telegram Bot
            </button>

            <button className="bg-zinc-900 border border-zinc-800 px-5 py-3 rounded-2xl hover:bg-zinc-800 transition">
              AI Dashboard
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}