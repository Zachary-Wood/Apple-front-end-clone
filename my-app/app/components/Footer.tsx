import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-neutral-100 text-neutral-600 text-xs leading-relaxed mt-20 w-full">
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-6">

        {/* Legal Text */}
        <div className="space-y-4">
          <p>
            1. Hearing Aid and Hearing Test: The Hearing Aid feature has received FDA authorization. The Hearing Test and Hearing Aid features are supported on AirPods Pro 2 with the latest firmware paired with a compatible iPhone or iPad with iOS 18 or iPadOS 18 and later and are intended for people 18 years old or older. The Hearing Aid feature is also supported on a compatible Mac with macOS Sequoia and later. It is intended for people with perceived mild to moderate hearing loss.
          </p>
          <p>
            Hearing Protection: The Hearing Protection feature works with AirPods Pro 2 with the latest firmware when paired with a compatible iPhone, iPad, or Mac with iOS 18, iPadOS 18, or macOS Sequoia and later. Feature is only available in the U.S. and Canada. See support.apple.com/120850 for total attenuation and more information. The Hearing Protection feature is not suitable for protection against extremely loud impulse sounds, such as gunfire, fireworks, or jackhammers, or against sustained sounds louder than 110 dBA.
          </p>
          <p>
            2. Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device. Not all devices are eligible for credit. [...] Restrictions and limitations may apply.
          </p>
          <p>
            To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. [...]
          </p>
          <p>
            Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set to Chinese (Simplified), English (Australia, Canada, India, Ireland, New Zealand, Singapore, South Africa, UK, or U.S.), French, German, Italian, Japanese, Korean, Portuguese (Brazil), or Spanish, as part of an iOS 18, iPadOS 18, and macOS Sequoia software update, with more languages coming over the course of the year, including Vietnamese. Some features may not be available in all regions or languages.
          </p>
          <p>
            A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV+.
            Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.
          </p>
        </div>

       
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-neutral-700">
          {[
            { title: "Shop and Learn", items: ["Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"] },
            { title: "Apple Wallet", items: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"] },
            { title: "Account", items: ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"] },
            { title: "Entertainment", items: ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Fitness+", "Apple News+", "Apple Podcasts", "Apple Books", "App Store"] },
            { title: "Apple Store", items: ["Find a Store", "Genius Bar", "Today at Apple", "Group Reservations", "Apple Camp", "Apple Store App", "Certified Refurbished", "Apple Trade In", "Financing", "Carrier Deals at Apple", "Order Status", "Shopping Help"] },
            { title: "For Business", items: ["Apple and Business", "Shop for Business"] },
          ].map((section, idx) => (
            <div key={idx}>
              <h4 className="font-semibold text-neutral-800 mb-2">{section.title}</h4>
              <ul className="space-y-1">
                {section.items.map((item, index) => (
                  <li key={index} className="hover:underline cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-neutral-500 border-t border-neutral-300 pt-4 flex flex-col sm:flex-row justify-between items-center text-[11px]">
          <p>More ways to shop: <span className="underline cursor-pointer">Find an Apple Store</span> or other retailer near you. Or call 1‑800‑MY‑APPLE.</p>
          <p>United States</p>
        </div>

        <div className="text-neutral-400 text-[11px] flex flex-col sm:flex-row justify-between items-center border-t border-neutral-300 pt-4">
          <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
          <div className="flex space-x-4">
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">Terms of Use</span>
            <span className="hover:underline cursor-pointer">Sales and Refunds</span>
            <span className="hover:underline cursor-pointer">Legal</span>
            <span className="hover:underline cursor-pointer">Site Map</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
