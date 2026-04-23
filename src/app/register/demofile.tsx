"use client";
// Note: Move metadata to your app/layout.tsx — client components can't export metadata.
// Suggested metadata: title: "TiffinZayka – Ghar Ka Khana, Delivered Fresh"

import { useState, useEffect, useRef } from "react";
import { Cormorant_Garamond, Manrope } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// ─── Types ─────────────────────────────────────────────────────────────────────
interface MenuItem {
  emoji: string; name: string; tag: string; price: string; cook: string;
  cookCity: string; rating: string; reviews: number; badge: string | null;
}
interface Cook {
  emoji: string; name: string; age: number; city: string; specialty: string;
  story: string; meals: string; rating: string; earnings: string; since: string;
}
interface FAQ { q: string; a: string }
interface CompRow { feature: string; us: boolean | string; restaurant: boolean | string | null; apps: boolean | string | null }

// ─── Data ──────────────────────────────────────────────────────────────────────
const MARQUEE = ["🍛 Dal Tadka","🫓 Tawa Roti","🥘 Rajma Chawal","🍲 Kadhi Rice","🥗 Palak Paneer","🫕 Chicken Curry","🍚 Curd Rice","🥙 Paneer Bhurji","🌶️ Aloo Sabzi","🍱 Thali Special","🫙 Achaar + More","🧅 Pyaaz Paratha"];

const STEPS = [
  { step:"01", icon:"📍", color:"#E8560C", title:"Enter Your Location", desc:"We map all verified home cooks within a 2–5 km radius. Real people, real kitchens — not ghost restaurants.", detail:"We use precise geolocation. The shorter the distance, the hotter your tiffin arrives at your door." },
  { step:"02", icon:"📋", color:"#D4A017", title:"Browse Today's Tiffin", desc:"Every morning, cooks publish exactly what they're making for their own family's lunch or dinner.", detail:"No mystery ingredients. Full transparency — allergens, spice level, cooking time, photos, and reviews." },
  { step:"03", icon:"🤝", color:"#1B7A3E", title:"Customise & Order", desc:"Request less oil, extra roti, no garlic — cooks are your neighbours, not a call centre. They listen.", detail:"Pay securely online. Chat directly with your cook in-app. Real-time prep status updates." },
  { step:"04", icon:"🛵", color:"#E8560C", title:"Delivered Warm to You", desc:"Your tiffin is packed the moment it's cooked — never hours in advance. Arrives in insulated steel containers.", detail:"Average delivery: 25–40 mins. Every order includes a freshness timestamp so you know exactly when it was made." },
];

const MENU: MenuItem[] = [
  { emoji:"🍛", name:"Dal Tadka + 4 Rotis + Salad", tag:"Veg", price:"₹80", cook:"Sunita Devi", cookCity:"Vaishali Nagar", rating:"4.9", reviews:312, badge:"Bestseller" },
  { emoji:"🥘", name:"Chicken Curry + Steamed Rice", tag:"Non-Veg", price:"₹130", cook:"Fatima Begum", cookCity:"Mansarovar", rating:"5.0", reviews:198, badge:"Top Rated" },
  { emoji:"🫕", name:"Rajma Chawal + Raita + Achaar", tag:"Veg", price:"₹90", cook:"Priya Sharma", cookCity:"Jagatpura", rating:"4.8", reviews:256, badge:null },
  { emoji:"🥗", name:"Paneer Butter Masala + 3 Rotis", tag:"Veg", price:"₹110", cook:"Kavita Ji", cookCity:"Malviya Nagar", rating:"4.9", reviews:445, badge:"Fan Favourite" },
  { emoji:"🍲", name:"Mutton Keema + Rice + Salad", tag:"Non-Veg", price:"₹150", cook:"Razia Bi", cookCity:"Sanganer", rating:"4.7", reviews:87, badge:"Special Today" },
  { emoji:"🫓", name:"Stuffed Paratha Trio + Dahi + Pickle", tag:"Veg", price:"₹70", cook:"Kamla Devi", cookCity:"Tonk Road", rating:"4.8", reviews:189, badge:null },
  { emoji:"🍚", name:"South Indian Thali – Sambar, 2 Sabzi", tag:"Veg", price:"₹100", cook:"Meenakshi S.", cookCity:"Pratap Nagar", rating:"4.9", reviews:203, badge:"New Cook" },
  { emoji:"🥙", name:"Egg Curry + Dal + 3 Rotis", tag:"Non-Veg", price:"₹100", cook:"Anita Bhatia", cookCity:"Bapu Nagar", rating:"4.6", reviews:134, badge:null },
];

const COOKS: Cook[] = [
  { emoji:"👩‍🍳", name:"Sunita Devi", age:48, city:"Vaishali Nagar, Jaipur", specialty:"Rajasthani Dal Baati, Home-style Dal Tadka, Ker Sangri", story:"I've been cooking for my family for 25 years. My husband said my dal was too good to keep at home. Now over 300 people wake up asking what I'm making today.", meals:"4,200+", rating:"4.9", earnings:"₹18,000/mo", since:"March 2023" },
  { emoji:"👩‍🍳", name:"Fatima Begum", age:52, city:"Mansarovar, Jaipur", specialty:"Chicken Curry, Mutton Biryani, Egg Dishes", story:"TiffinZayka gave me what no job ever could — financial independence and pride in my cooking. I cook the same amount I always did. Now I earn from it too.", meals:"2,800+", rating:"5.0", earnings:"₹22,000/mo", since:"June 2023" },
];

const COMP: CompRow[] = [
  { feature:"Made fresh daily", us:true, restaurant:null, apps:null },
  { feature:"Same food the cook eats", us:true, restaurant:false, apps:false },
  { feature:"Price per meal", us:"₹60–130", restaurant:"₹250–500", apps:"₹300–650" },
  { feature:"Cook is your neighbour", us:true, restaurant:false, apps:false },
  { feature:"Fully customisable", us:true, restaurant:null, apps:false },
  { feature:"Zero preservatives", us:true, restaurant:null, apps:null },
  { feature:"Supports local families", us:true, restaurant:null, apps:false },
  { feature:"Know who cooked it", us:true, restaurant:false, apps:false },
  { feature:"Direct cook chat", us:true, restaurant:false, apps:false },
];

const QUALITY = [
  { num:"01", icon:"🔍", title:"Kitchen Inspected", desc:"Every cook's kitchen is physically inspected for hygiene before they can accept orders. Inspection photos are available on request." },
  { num:"02", icon:"🪪", title:"Aadhaar Verified", desc:"All cooks are identity-verified via Aadhaar. You know exactly who is cooking your food — name, face, address." },
  { num:"03", icon:"⭐", title:"Rating Enforced", desc:"Cooks below a 4.0 star average are automatically paused and reviewed. The community sets the quality bar." },
  { num:"04", icon:"🌡️", title:"Temperature Guaranteed", desc:"Delivery partners use food-grade insulated bags. Your tiffin arrives at the right temperature or we refund it." },
  { num:"05", icon:"💬", title:"Direct Communication", desc:"Chat directly with your cook before and after every order. Ask questions, give feedback, build a real relationship." },
];

const FAQS: FAQ[] = [
  { q:"How do I know the food is safe and hygienic?", a:"Every cook passes a kitchen inspection, Aadhaar verification, and basic food hygiene training. The strongest quality signal: the cook eats the same meal. Customer ratings do the rest — cooks below 4.0 stars are suspended automatically." },
  { q:"What if I have dietary restrictions or allergies?", a:"You can add custom instructions at checkout. Cook profiles list common allergens. We strongly recommend messaging the cook directly through the app to confirm before ordering." },
  { q:"What cities does TiffinZayka serve right now?", a:"We're live in Jaipur, Pune, Delhi NCR, Bengaluru, Hyderabad, Lucknow, Indore, Bhopal, Nagpur, Surat, Vadodara, and Patna. Expanding monthly — join the waitlist if your city isn't listed." },
  { q:"How fresh is the food really? What are the timings?", a:"Cooks list by 9 AM for lunch (12–1:30 PM delivery) and 4 PM for dinner (7–8:30 PM). Orders are packed after cooking, never before. You get a 'just cooked' notification when your tiffin is being packed." },
  { q:"Can I register as a cook even if I cook for a small family?", a:"Absolutely. You only need to make 1–5 extra portions beyond your family's meal. Many cooks start with 3 orders a day and scale up. Registration is completely free, always." },
  { q:"What's the cancellation and refund policy?", a:"Cancel up to 1 hour before prep starts for a full refund within 5–7 business days. Late by 30+ minutes or unsatisfied with quality? Instant credits on your account, no questions asked." },
  { q:"How are cooks paid?", a:"Cooks keep 85% of the tiffin price. Payments are weekly via UPI or bank transfer. Consistently high-rated cooks get priority listing and monthly performance bonuses." },
  { q:"Is there a subscription / meal plan?", a:"Yes — TiffinPass gives you 20 meals/month at a flat 15% discount. Mix and match any cook, any meal type. Perfect for professionals, students, and anyone who wants ghar ka khana every day." },
];

const CITIES = ["Jaipur","Pune","Delhi NCR","Bengaluru","Hyderabad","Lucknow","Indore","Bhopal","Nagpur","Surat","Vadodara","Patna"];

const TESTIMONIALS = [
  { name:"Rahul Verma", city:"Jaipur", role:"Software Engineer", emoji:"👨‍💻", quote:"After 8 months in a PG eating packaged food, TiffinZayka felt like eating at home again. Sunita Ji's dal makes me emotional every time.", rating:5 },
  { name:"Anjali Mehta", city:"Pune", role:"Doctor, Sahyadri Hospital", emoji:"👩‍⚕️", quote:"As someone who studies nutrition, I was skeptical of delivery food. TiffinZayka is genuinely different — real ingredients, real cooking. I can taste the difference.", rating:5 },
  { name:"Deepak Rathore", city:"Delhi NCR", role:"MBA Student", emoji:"👨‍🎓", quote:"Ordered Rajma Chawal on a Sunday. Better than any dhaba I've visited in Delhi. The cook left a handwritten note in the box. That's never happened on Zomato.", rating:5 },
  { name:"Pooja Iyer", city:"Bengaluru", role:"UX Designer", emoji:"👩‍🎨", quote:"My cook, Meenakshi, makes the most authentic South Indian food. She remembers I prefer less tamarind. A restaurant has never done that for me.", rating:5 },
  { name:"Arjun Singh", city:"Lucknow", role:"CA, Private Firm", emoji:"👨‍💼", quote:"The economics alone make sense — ₹90 for a full fresh meal vs ₹400 on Swiggy. But the quality difference is what actually kept me coming back.", rating:5 },
  { name:"Nisha Gupta", city:"Indore", role:"Homemaker & Mother", emoji:"👩‍👧", quote:"I use TiffinZayka when I'm unwell and can't cook. I know my kids are eating real food — not reheated restaurant leftovers. That peace of mind is priceless.", rating:5 },
];

// ─── CSS Tiffin Box Component ──────────────────────────────────────────────────
function TiffinBox() {
  return (
    <div className="relative flex flex-col items-center select-none" style={{ width: 220 }}>
      {/* Steam wisps */}
      {[0, 1, 2].map((i) => (
        <div key={i} className="absolute" style={{
          top: -32, left: `${70 + i * 28}px`,
          width: 8, height: 32, borderRadius: 99,
          background: "rgba(255,255,255,0.18)",
          animation: `steam ${1.6 + i * 0.4}s ease-in-out infinite`,
          animationDelay: `${i * 0.4}s`,
        }} />
      ))}

      {/* Lid */}
      <div style={{
        width: "100%", height: 52, borderRadius: "16px 16px 0 0",
        background: "linear-gradient(180deg, #b0bec5 0%, #78909c 100%)",
        border: "2px solid rgba(255,255,255,0.15)",
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
      }}>
        {/* Latches */}
        {[-1, 1].map((side) => (
          <div key={side} style={{
            position: "absolute", top: "50%", transform: "translateY(-50%)",
            [side === -1 ? "left" : "right"]: -10,
            width: 10, height: 22, borderRadius: 4,
            background: "#546e7a",
            boxShadow: "inset 0 1px 2px rgba(255,255,255,0.2)",
          }} />
        ))}
        {/* Handle dots */}
        <div style={{ display: "flex", gap: 8 }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{
              width: 10, height: 10, borderRadius: "50%",
              background: "#37474f",
              boxShadow: "inset 0 1px 2px rgba(255,255,255,0.3), 0 1px 3px rgba(0,0,0,0.4)",
            }} />
          ))}
        </div>
      </div>

      {/* Divider line */}
      <div style={{ width: "100%", height: 3, background: "linear-gradient(90deg,#b0bec5,#78909c,#b0bec5)" }} />

      {/* Compartment 1 – Dal */}
      <div style={{
        width: "100%", height: 72,
        background: "linear-gradient(180deg, #2a1400 0%, #1a0d00 100%)",
        borderLeft: "2px solid rgba(180,160,120,0.2)",
        borderRight: "2px solid rgba(180,160,120,0.2)",
        display: "flex", alignItems: "center", padding: "0 14px", gap: 10,
      }}>
        <span style={{ fontSize: 28 }}>🍛</span>
        <div>
          <p style={{ color: "rgba(255,240,200,0.9)", fontSize: 11, fontWeight: 700, margin: 0 }}>Dal Makhani</p>
          <p style={{ color: "rgba(255,200,120,0.45)", fontSize: 9, margin: 0 }}>protein rich · slow cooked</p>
        </div>
      </div>

      {/* Divider */}
      <div style={{ width: "100%", height: 2, background: "linear-gradient(90deg, rgba(180,140,80,0.1), rgba(180,140,80,0.5), rgba(180,140,80,0.1))" }} />

      {/* Compartment 2 – Sabzi */}
      <div style={{
        width: "100%", height: 72,
        background: "linear-gradient(180deg, #1a0d00 0%, #130900 100%)",
        borderLeft: "2px solid rgba(180,160,120,0.2)",
        borderRight: "2px solid rgba(180,160,120,0.2)",
        display: "flex", alignItems: "center", padding: "0 14px", gap: 10,
      }}>
        <span style={{ fontSize: 28 }}>🥗</span>
        <div>
          <p style={{ color: "rgba(255,240,200,0.9)", fontSize: 11, fontWeight: 700, margin: 0 }}>Palak Sabzi</p>
          <p style={{ color: "rgba(255,200,120,0.45)", fontSize: 9, margin: 0 }}>fresh greens · seasonal</p>
        </div>
      </div>

      {/* Divider */}
      <div style={{ width: "100%", height: 2, background: "linear-gradient(90deg, rgba(180,140,80,0.1), rgba(180,140,80,0.5), rgba(180,140,80,0.1))" }} />

      {/* Compartment 3 – Roti */}
      <div style={{
        width: "100%", height: 72, borderRadius: "0 0 16px 16px",
        background: "linear-gradient(180deg, #130900 0%, #0a0500 100%)",
        border: "2px solid rgba(180,160,120,0.15)",
        borderTop: "none",
        display: "flex", alignItems: "center", padding: "0 14px", gap: 10,
        boxShadow: "0 12px 40px rgba(0,0,0,0.6)",
      }}>
        <span style={{ fontSize: 28 }}>🫓</span>
        <div>
          <p style={{ color: "rgba(255,240,200,0.9)", fontSize: 11, fontWeight: 700, margin: 0 }}>Tawa Roti × 4</p>
          <p style={{ color: "rgba(255,200,120,0.45)", fontSize: 9, margin: 0 }}>whole wheat · fresh pressed</p>
        </div>
      </div>

      {/* Bottom shadow */}
      <div style={{ width: "80%", height: 8, borderRadius: "50%", marginTop: 4, background: "rgba(0,0,0,0.4)", filter: "blur(8px)" }} />
    </div>
  );
}

// ─── Announcement Bar ──────────────────────────────────────────────────────────
function AnnouncementBar() {
  return (
    <div style={{ background: "#E8560C", overflow: "hidden", height: 36, display: "flex", alignItems: "center" }}>
      <div className="flex gap-12 whitespace-nowrap" style={{ animation: "marquee 28s linear infinite" }}>
        {[...MARQUEE, ...MARQUEE].map((item, i) => (
          <span key={i} style={{ color: "white", fontSize: 13, fontWeight: 600, letterSpacing: "0.04em" }}>
            {item} <span style={{ opacity: 0.5, margin: "0 8px" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Navbar ────────────────────────────────────────────────────────────────────
function Navbar({ scrolled }: { scrolled: boolean }) {
  return (
    <nav style={{
      position: "fixed", top: 36, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(10,5,0,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(232,86,12,0.12)" : "none",
      transition: "all 0.35s ease",
      padding: "0 40px", height: 64,
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontSize: 26 }}>🍱</span>
        <span style={{
          fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22,
          color: "white", letterSpacing: "-0.02em",
        }}>
          Tiffin<span style={{ color: "#E8560C" }}>Zayka</span>
        </span>
      </div>

      {/* Nav links */}
      <ul style={{ display: "flex", gap: 36, listStyle: "none", margin: 0, padding: 0 }} className="hidden md:flex">
        {[["How It Works","#how-it-works"],["Menu","#menu"],["Our Cooks","#cooks"],["Cities","#cities"],["FAQ","#faq"]].map(([label,href]) => (
          <li key={label}>
            <a href={href} style={{ color: "rgba(229,197,140,0.75)", fontSize: 14, fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "white")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(229,197,140,0.75)")}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTAs */}
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <button style={{
          background: "transparent", border: "1px solid rgba(232,86,12,0.4)",
          color: "#E8560C", padding: "8px 20px", borderRadius: 99,
          fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
        }}
          className="hidden md:block"
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(232,86,12,0.1)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}>
          Log In
        </button>
        <button style={{
          background: "linear-gradient(135deg, #E8560C, #C94500)",
          color: "white", padding: "10px 24px", borderRadius: 99,
          fontSize: 13, fontWeight: 700, cursor: "pointer", border: "none",
          boxShadow: "0 4px 20px rgba(232,86,12,0.35)", transition: "all 0.2s",
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.04)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}>
          Order Tiffin →
        </button>
      </div>
    </nav>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      minHeight: "100vh", background: "#0A0500",
      display: "flex", flexDirection: "column",
      justifyContent: "center", overflow: "hidden",
      position: "relative", paddingTop: 100,
    }}>
      {/* Ambient glow blobs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", left: "55%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,86,12,0.14) 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div style={{ position: "absolute", top: "60%", left: "10%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,160,23,0.08) 0%, transparent 70%)", filter: "blur(60px)" }} />
      </div>

      {/* Giant decorative background word */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        fontFamily: "var(--font-display)", fontWeight: 700,
        fontSize: "clamp(120px, 22vw, 340px)",
        color: "rgba(232,86,12,0.04)", whiteSpace: "nowrap",
        userSelect: "none", pointerEvents: "none", letterSpacing: "-0.04em",
        lineHeight: 1,
      }}>
        ज़ायका
      </div>

      {/* Content grid */}
      <div style={{
        maxWidth: 1280, margin: "0 auto", width: "100%",
        padding: "60px 40px",
        display: "grid", gridTemplateColumns: "1fr auto",
        gap: 60, alignItems: "center",
      }}>
        {/* Left: Copy */}
        <div style={{ position: "relative", zIndex: 10 }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(232,86,12,0.12)", border: "1px solid rgba(232,86,12,0.3)",
            borderRadius: 99, padding: "6px 16px", marginBottom: 28,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#E8560C", display: "block", animation: "pulse 2s infinite" }} />
            <span style={{ color: "#E8560C", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Now Live in 12 Indian Cities
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "clamp(48px, 6vw, 96px)",
            color: "white", lineHeight: 1.04,
            letterSpacing: "-0.03em", margin: 0, marginBottom: 10,
          }}>
            India's First
          </h1>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "clamp(48px, 6vw, 96px)",
            color: "#E8560C", lineHeight: 1.04,
            letterSpacing: "-0.03em", margin: 0, marginBottom: 10,
            fontStyle: "italic",
          }}>
            Homemade Tiffin
          </h1>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "clamp(48px, 6vw, 96px)",
            color: "rgba(229,197,140,0.9)", lineHeight: 1.04,
            letterSpacing: "-0.03em", margin: 0, marginBottom: 32,
          }}>
            Network
          </h1>

          <p style={{
            color: "rgba(190,155,100,0.85)", fontSize: "clamp(15px, 1.4vw, 19px)",
            lineHeight: 1.65, maxWidth: 520, margin: "0 0 40px",
            fontWeight: 400,
          }}>
            Your neighbour is cooking Dal Makhani for dinner. We bring that same pot to your door.
            Real homemade food, from real families nearby — not a restaurant, not a cloud kitchen.
            <em style={{ color: "rgba(232,86,12,0.9)", fontStyle: "normal", fontWeight: 600 }}> Ghar ka khana, finally for everyone.</em>
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 52 }}>
            <button style={{
              background: "linear-gradient(135deg, #E8560C 0%, #C94500 100%)",
              color: "white", padding: "16px 36px", borderRadius: 99,
              fontSize: 16, fontWeight: 700, border: "none", cursor: "pointer",
              boxShadow: "0 8px 32px rgba(232,86,12,0.4)", display: "flex",
              alignItems: "center", gap: 8, transition: "all 0.25s",
              letterSpacing: "0.01em",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 12px 40px rgba(232,86,12,0.5)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 32px rgba(232,86,12,0.4)"; }}>
              🍱 Order Today's Tiffin
            </button>
            <button style={{
              background: "transparent", border: "1.5px solid rgba(229,197,140,0.3)",
              color: "rgba(229,197,140,0.85)", padding: "16px 36px", borderRadius: 99,
              fontSize: 16, fontWeight: 600, cursor: "pointer", display: "flex",
              alignItems: "center", gap: 8, transition: "all 0.25s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(232,86,12,0.6)"; (e.currentTarget as HTMLButtonElement).style.color = "#E8560C"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(229,197,140,0.3)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(229,197,140,0.85)"; }}>
              🍳 Become a Cook
            </button>
          </div>

          {/* Mini stats */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px 40px" }}>
            {[["2,000+","Happy Customers"],["450+","Verified Cooks"],["₹80","Avg. Tiffin Price"],["4.9★","Platform Rating"]].map(([val,lbl]) => (
              <div key={lbl}>
                <p style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 700, color: "white", lineHeight: 1 }}>{val}</p>
                <p style={{ margin: "3px 0 0", fontSize: 12, color: "rgba(190,155,100,0.6)", fontWeight: 500 }}>{lbl}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Tiffin illustration + floating emojis */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }} className="hidden lg:flex">
          {/* Orbital ring */}
          <div style={{
            position: "absolute", width: 380, height: 380, borderRadius: "50%",
            border: "1px dashed rgba(232,86,12,0.15)",
          }} />
          <div style={{
            position: "absolute", width: 300, height: 300, borderRadius: "50%",
            border: "1px dashed rgba(232,86,12,0.08)",
          }} />

          {/* Floating food emojis */}
          {[
            { emoji: "🍛", angle: 30,  r: 190, size: 36, delay: 0 },
            { emoji: "🥗", angle: 120, r: 180, size: 30, delay: 0.5 },
            { emoji: "🫓", angle: 200, r: 190, size: 34, delay: 1 },
            { emoji: "🥘", angle: 290, r: 185, size: 32, delay: 0.7 },
            { emoji: "🌶️", angle: 160, r: 165, size: 26, delay: 1.4 },
            { emoji: "🧅", angle: 70,  r: 170, size: 24, delay: 0.3 },
          ].map(({ emoji, angle, r, size, delay }) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <div key={angle} style={{
                position: "absolute",
                left: `calc(50% + ${Math.cos(rad) * r}px - ${size / 2}px)`,
                top: `calc(50% + ${Math.sin(rad) * r}px - ${size / 2}px)`,
                fontSize: size,
                animation: `float 4s ease-in-out infinite`,
                animationDelay: `${delay}s`,
              }}>
                {emoji}
              </div>
            );
          })}

          {/* Glow behind tiffin */}
          <div style={{
            position: "absolute", width: 200, height: 200, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(232,86,12,0.2) 0%, transparent 70%)",
            filter: "blur(30px)",
          }} />

          <TiffinBox />
        </div>
      </div>

      {/* Bottom scroll hint */}
      <div style={{
        position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
      }}>
        <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, rgba(232,86,12,0.6), transparent)", animation: "pulse 2s infinite" }} />
        <span style={{ color: "rgba(190,155,100,0.4)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase" }}>scroll</span>
      </div>
    </section>
  );
}

// ─── Media Bar ─────────────────────────────────────────────────────────────────
function MediaBar() {
  const items = ["🗞 The Hindu","📺 NDTV Food","📱 YourStory","🎙 Shark Tank India","📰 Inc42","🎬 Food Insider","📡 Aaj Tak","🏆 StartupIndia"];
  return (
    <div style={{ background: "#0D0600", borderTop: "1px solid rgba(232,86,12,0.08)", borderBottom: "1px solid rgba(232,86,12,0.08)", padding: "16px 0", overflow: "hidden" }}>
      <p style={{ textAlign: "center", fontSize: 11, color: "rgba(190,155,100,0.35)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>As Featured In</p>
      <div style={{ display: "flex", gap: 60, animation: "marquee 22s linear infinite", whiteSpace: "nowrap" }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} style={{ color: "rgba(229,197,140,0.35)", fontSize: 13, fontWeight: 600 }}>{item}</span>
        ))}
      </div>
    </div>
  );
}

// ─── How It Works ──────────────────────────────────────────────────────────────
function HowItWorks() {
  return (
    <section id="how-it-works" style={{ background: "#0A0500", padding: "120px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <span style={{ color: "#E8560C", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>Simple Process</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(36px, 4.5vw, 64px)", color: "white", margin: "12px 0 16px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            From Their Kitchen<br />
            <span style={{ color: "#E8560C", fontStyle: "italic" }}>To Your Door</span>
          </h2>
          <p style={{ color: "rgba(190,155,100,0.65)", fontSize: 16, maxWidth: 480, margin: "0 auto" }}>Four simple steps that connect real home cooking with people who deserve it.</p>
        </div>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {STEPS.map((s, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: i % 2 === 0 ? "1fr 80px 1fr" : "1fr 80px 1fr",
              alignItems: "center", marginBottom: i < STEPS.length - 1 ? 0 : 0,
            }}>
              {/* Left content or spacer */}
              {i % 2 === 0 ? (
                <div style={{
                  background: "linear-gradient(135deg, rgba(232,86,12,0.06) 0%, rgba(232,86,12,0.02) 100%)",
                  border: "1px solid rgba(232,86,12,0.1)", borderRadius: 24,
                  padding: "40px 48px", margin: "12px 0",
                  transition: "all 0.3s",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                    <div style={{
                      width: 52, height: 52, borderRadius: "50%",
                      background: `${s.color}18`, border: `1.5px solid ${s.color}40`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 22,
                    }}>{s.icon}</div>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 700, color: "rgba(232,86,12,0.08)", lineHeight: 1 }}>{s.step}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 600, color: "white", margin: "0 0 12px", letterSpacing: "-0.01em" }}>{s.title}</h3>
                  <p style={{ color: "rgba(229,197,140,0.75)", fontSize: 15, lineHeight: 1.7, margin: "0 0 12px" }}>{s.desc}</p>
                  <p style={{ color: "rgba(190,155,100,0.45)", fontSize: 13, lineHeight: 1.65, margin: 0, fontStyle: "italic" }}>{s.detail}</p>
                </div>
              ) : (
                <div style={{ height: 80 }} />
              )}

              {/* Center line */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: 2, flex: 1, background: i === 0 ? "transparent" : "linear-gradient(to bottom, rgba(232,86,12,0.2), rgba(232,86,12,0.06))" }} />
                <div style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: "#0A0500", border: `2px solid ${s.color}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16, flexShrink: 0, boxShadow: `0 0 24px ${s.color}30`,
                }}>{s.icon}</div>
                <div style={{ width: 2, flex: 1, background: i === STEPS.length - 1 ? "transparent" : "linear-gradient(to bottom, rgba(232,86,12,0.06), rgba(232,86,12,0.2))" }} />
              </div>

              {/* Right content or spacer */}
              {i % 2 === 1 ? (
                <div style={{
                  background: "linear-gradient(135deg, rgba(232,86,12,0.06) 0%, rgba(212,160,23,0.04) 100%)",
                  border: "1px solid rgba(212,160,23,0.12)", borderRadius: 24,
                  padding: "40px 48px", margin: "12px 0",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                    <div style={{
                      width: 52, height: 52, borderRadius: "50%",
                      background: `${s.color}18`, border: `1.5px solid ${s.color}40`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 22,
                    }}>{s.icon}</div>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 700, color: "rgba(212,160,23,0.08)", lineHeight: 1 }}>{s.step}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 600, color: "white", margin: "0 0 12px", letterSpacing: "-0.01em" }}>{s.title}</h3>
                  <p style={{ color: "rgba(229,197,140,0.75)", fontSize: 15, lineHeight: 1.7, margin: "0 0 12px" }}>{s.desc}</p>
                  <p style={{ color: "rgba(190,155,100,0.45)", fontSize: 13, lineHeight: 1.65, margin: 0, fontStyle: "italic" }}>{s.detail}</p>
                </div>
              ) : (
                <div style={{ height: 80 }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats ─────────────────────────────────────────────────────────────────────
function Stats() {
  return (
    <section style={{ background: "#E8560C", padding: "100px 40px", position: "relative", overflow: "hidden" }}>
      {/* Texture lines */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 80px)", backgroundSize: "80px 100%" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.55)", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 60 }}>By The Numbers</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 2 }}>
          {[
            { val: "2,000+", lbl: "Happy Customers", sub: "and counting every day" },
            { val: "450+", lbl: "Verified Home Cooks", sub: "across 12 Indian cities" },
            { val: "₹80", lbl: "Average Tiffin Price", sub: "affordable, always" },
            { val: "4.9 ★", lbl: "Platform Rating", sub: "from verified purchases" },
          ].map(({ val, lbl, sub }) => (
            <div key={lbl} style={{ textAlign: "center", padding: "20px 10px" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(44px, 5vw, 72px)", fontWeight: 700, color: "white", margin: 0, lineHeight: 1, letterSpacing: "-0.03em" }}>{val}</p>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, fontWeight: 700, margin: "10px 0 4px" }}>{lbl}</p>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, margin: 0 }}>{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Comparison ────────────────────────────────────────────────────────────────
function Comparison() {
  const renderCell = (val: boolean | string | null, highlight = false) => {
    if (val === true) return <span style={{ color: highlight ? "#E8560C" : "#1B7A3E", fontSize: 20 }}>✓</span>;
    if (val === false) return <span style={{ color: "rgba(255,90,90,0.6)", fontSize: 16 }}>✕</span>;
    if (val === null) return <span style={{ color: "rgba(190,155,100,0.4)", fontSize: 13 }}>~</span>;
    return <span style={{ color: highlight ? "white" : "rgba(190,155,100,0.7)", fontSize: 13, fontWeight: highlight ? 700 : 500 }}>{val}</span>;
  };

  return (
    <section style={{ background: "#0D0600", padding: "120px 40px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span style={{ color: "#E8560C", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>Comparison</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(32px, 4vw, 56px)", color: "white", margin: "12px 0 16px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Why TiffinZayka<br /><span style={{ color: "#E8560C", fontStyle: "italic" }}>Wins Every Time</span>
          </h2>
        </div>

        {/* Table */}
        <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid rgba(232,86,12,0.15)" }}>
          {/* Header */}
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", background: "rgba(10,5,0,0.9)" }}>
            <div style={{ padding: "18px 24px" }} />
            {[
              { label: "🍱 TiffinZayka", highlight: true },
              { label: "🍽 Restaurants", highlight: false },
              { label: "📱 Food Apps", highlight: false },
            ].map(({ label, highlight }) => (
              <div key={label} style={{
                padding: "18px 16px", textAlign: "center",
                background: highlight ? "rgba(232,86,12,0.15)" : "transparent",
                borderTop: highlight ? "2px solid #E8560C" : "2px solid transparent",
              }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: highlight ? "white" : "rgba(190,155,100,0.55)" }}>{label}</span>
              </div>
            ))}
          </div>

          {/* Rows */}
          {COMP.map((row, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr",
              background: i % 2 === 0 ? "rgba(10,5,0,0.6)" : "rgba(15,8,0,0.4)",
              borderBottom: i < COMP.length - 1 ? "1px solid rgba(255,255,255,0.03)" : "none",
            }}>
              <div style={{ padding: "16px 24px", color: "rgba(229,197,140,0.7)", fontSize: 14, fontWeight: 500 }}>{row.feature}</div>
              {[
                { val: row.us, highlight: true },
                { val: row.restaurant, highlight: false },
                { val: row.apps, highlight: false },
              ].map(({ val, highlight }, j) => (
                <div key={j} style={{
                  padding: "16px 16px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center",
                  background: highlight ? "rgba(232,86,12,0.06)" : "transparent",
                }}>
                  {renderCell(val, highlight)}
                </div>
              ))}
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: 20, color: "rgba(190,155,100,0.3)", fontSize: 12 }}>~ = depends on the specific restaurant or app. ✕ = generally not available.</p>
      </div>
    </section>
  );
}

// ─── Cook Spotlight ─────────────────────────────────────────────────────────────
function CookSpotlight() {
  const [active, setActive] = useState(0);
  const cook = COOKS[active];

  return (
    <section id="cooks" style={{ background: "#F5EDD8", padding: "120px 40px", position: "relative", overflow: "hidden" }}>
      {/* Subtle grain overlay */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")", backgroundSize: "200px 200px", opacity: 0.6, pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <span style={{ color: "#E8560C", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>Cook Spotlight</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(32px, 4vw, 56px)", color: "#1A0A00", margin: "12px 0 0", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Meet the <span style={{ color: "#E8560C", fontStyle: "italic" }}>Hands</span> Behind<br />Every Tiffin
          </h2>
        </div>

        {/* Tab switcher */}
        <div style={{ display: "flex", gap: 12, marginBottom: 48 }}>
          {COOKS.map((c, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              padding: "10px 20px", borderRadius: 99, border: "1.5px solid",
              borderColor: active === i ? "#E8560C" : "rgba(30,15,0,0.2)",
              background: active === i ? "#E8560C" : "transparent",
              color: active === i ? "white" : "rgba(30,15,0,0.55)",
              fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
            }}>
              {c.emoji} {c.name}
            </button>
          ))}
        </div>

        {/* Magazine layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
          {/* Left: Quote + Story */}
          <div>
            <div style={{
              borderLeft: "4px solid #E8560C", paddingLeft: 28, marginBottom: 36,
            }}>
              <p style={{
                fontFamily: "var(--font-display)", fontSize: "clamp(22px, 2.5vw, 36px)",
                fontWeight: 500, color: "#1A0A00", lineHeight: 1.45, fontStyle: "italic",
                margin: 0,
              }}>
                "{cook.story}"
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
              <div style={{
                width: 60, height: 60, borderRadius: "50%",
                background: "linear-gradient(135deg, #E8560C, #C94500)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 28,
              }}>{cook.emoji}</div>
              <div>
                <p style={{ margin: 0, fontWeight: 700, color: "#1A0A00", fontSize: 17 }}>{cook.name}</p>
                <p style={{ margin: "2px 0 0", color: "rgba(30,15,0,0.5)", fontSize: 13 }}>Age {cook.age} · {cook.city}</p>
              </div>
            </div>

            <div style={{ background: "rgba(232,86,12,0.06)", border: "1px solid rgba(232,86,12,0.15)", borderRadius: 16, padding: "20px 24px", marginBottom: 24 }}>
              <p style={{ margin: 0, color: "rgba(30,15,0,0.55)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700, marginBottom: 6 }}>Speciality</p>
              <p style={{ margin: 0, color: "#1A0A00", fontSize: 14, fontWeight: 600 }}>{cook.specialty}</p>
            </div>

            <p style={{ color: "rgba(30,15,0,0.45)", fontSize: 13, fontStyle: "italic" }}>On TiffinZayka since {cook.since}</p>
          </div>

          {/* Right: Stats grid */}
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
              {[
                { lbl: "Total Meals Served", val: cook.meals, icon: "🍱" },
                { lbl: "Customer Rating", val: cook.rating + " ★", icon: "⭐" },
                { lbl: "Monthly Earnings", val: cook.earnings, icon: "💰" },
                { lbl: "Member Since", val: cook.since, icon: "🗓️" },
              ].map(({ lbl, val, icon }) => (
                <div key={lbl} style={{
                  background: "white", border: "1px solid rgba(232,86,12,0.1)",
                  borderRadius: 16, padding: "20px 20px",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
                }}>
                  <p style={{ margin: "0 0 8px", fontSize: 22 }}>{icon}</p>
                  <p style={{ margin: "0 0 4px", fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 700, color: "#1A0A00", letterSpacing: "-0.02em" }}>{val}</p>
                  <p style={{ margin: 0, color: "rgba(30,15,0,0.45)", fontSize: 12, fontWeight: 500 }}>{lbl}</p>
                </div>
              ))}
            </div>

            <button style={{
              width: "100%", background: "linear-gradient(135deg, #E8560C, #C94500)",
              color: "white", border: "none", padding: "16px", borderRadius: 14,
              fontSize: 15, fontWeight: 700, cursor: "pointer",
              boxShadow: "0 6px 24px rgba(232,86,12,0.3)", transition: "all 0.2s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}>
              Order from {cook.name.split(" ")[0]} →
            </button>

            <div style={{ marginTop: 24, padding: "18px", background: "rgba(27,122,62,0.08)", border: "1px solid rgba(27,122,62,0.2)", borderRadius: 12 }}>
              <p style={{ margin: 0, color: "#1B5E35", fontSize: 13, fontWeight: 600 }}>🌱 By ordering, you directly support {cook.name.split(" ")[0]}'s family income. 85% of your payment goes to her.</p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 60, textAlign: "center" }}>
          <a href="#" style={{ color: "#E8560C", fontSize: 15, fontWeight: 700, textDecoration: "none", borderBottom: "1.5px solid rgba(232,86,12,0.3)", paddingBottom: 3 }}>
            Meet all 450+ cooks on TiffinZayka →
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Menu ──────────────────────────────────────────────────────────────────────
function TodaysMenu() {
  const [filter, setFilter] = useState<"All" | "Veg" | "Non-Veg">("All");
  const filtered = filter === "All" ? MENU : MENU.filter(m => m.tag === filter);

  return (
    <section id="menu" style={{ background: "#0A0500", padding: "120px 40px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 48 }}>
          <div>
            <span style={{ color: "#E8560C", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>Live Menu</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(32px, 4vw, 56px)", color: "white", margin: "12px 0 0", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              Today's Fresh<br /><span style={{ color: "#E8560C", fontStyle: "italic" }}>Homemade Tiffins</span>
            </h2>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {(["All", "Veg", "Non-Veg"] as const).map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{
                padding: "9px 20px", borderRadius: 99, border: "1.5px solid",
                borderColor: filter === f ? "#E8560C" : "rgba(229,197,140,0.2)",
                background: filter === f ? "#E8560C" : "transparent",
                color: filter === f ? "white" : "rgba(229,197,140,0.55)",
                fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
              }}>{f}</button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {filtered.map((item, i) => (
            <div key={i} style={{
              background: "linear-gradient(160deg, #1a0c00, #120800)",
              border: "1px solid rgba(229,197,140,0.07)",
              borderRadius: 20, overflow: "hidden",
              transition: "all 0.3s", cursor: "pointer",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(232,86,12,0.3)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(229,197,140,0.07)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}>
              {/* Visual area */}
              <div style={{
                height: 140, background: "linear-gradient(135deg, #2a1400, #1a0d00)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 64, position: "relative",
              }}>
                {item.emoji}
                {/* Badge */}
                {item.badge && (
                  <div style={{
                    position: "absolute", top: 12, right: 12,
                    background: "#E8560C", color: "white",
                    fontSize: 10, fontWeight: 700, padding: "4px 10px", borderRadius: 99,
                    letterSpacing: "0.05em",
                  }}>{item.badge}</div>
                )}
                {/* Veg/Non-veg dot */}
                <div style={{
                  position: "absolute", top: 12, left: 12,
                  background: "rgba(10,5,0,0.8)", borderRadius: 6, padding: "4px 8px",
                  display: "flex", alignItems: "center", gap: 4,
                }}>
                  <span style={{ display: "block", width: 7, height: 7, borderRadius: "50%", background: item.tag === "Veg" ? "#1B7A3E" : "#cc2200", border: "1.5px solid", borderColor: item.tag === "Veg" ? "#1B7A3E" : "#cc2200" }} />
                  <span style={{ color: "rgba(229,197,140,0.7)", fontSize: 10, fontWeight: 600 }}>{item.tag}</span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "18px 20px 20px" }}>
                <h3 style={{ color: "rgba(229,197,140,0.95)", fontSize: 14, fontWeight: 700, margin: "0 0 8px", lineHeight: 1.4 }}>{item.name}</h3>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
                  <span style={{ fontSize: 13 }}>👩‍🍳</span>
                  <span style={{ color: "rgba(190,155,100,0.55)", fontSize: 12 }}>{item.cook} · {item.cookCity}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <p style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700, color: "white", letterSpacing: "-0.02em", lineHeight: 1 }}>{item.price}</p>
                    <p style={{ margin: "2px 0 0", color: "rgba(190,155,100,0.4)", fontSize: 11 }}>⭐ {item.rating} · {item.reviews} reviews</p>
                  </div>
                  <button style={{
                    background: "linear-gradient(135deg, #E8560C, #C94500)",
                    color: "white", border: "none", padding: "10px 20px",
                    borderRadius: 99, fontSize: 13, fontWeight: 700, cursor: "pointer",
                    boxShadow: "0 4px 16px rgba(232,86,12,0.3)", transition: "all 0.2s",
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.05)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}>
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <button style={{
            background: "transparent", border: "1.5px solid rgba(232,86,12,0.35)",
            color: "#E8560C", padding: "14px 36px", borderRadius: 99,
            fontSize: 14, fontWeight: 700, cursor: "pointer", transition: "all 0.2s",
          }}>
            View Full Menu for Your Location →
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Quality Promise ───────────────────────────────────────────────────────────
function QualityPromise() {
  return (
    <section style={{ background: "#0D0600", padding: "120px 40px", borderTop: "1px solid rgba(232,86,12,0.06)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
          {/* Left */}
          <div style={{ position: "sticky", top: 120 }}>
            <span style={{ color: "#E8560C", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>Our Promise</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(32px, 3.5vw, 52px)", color: "white", margin: "12px 0 20px", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              Quality You Can<br /><span style={{ color: "#E8560C", fontStyle: "italic" }}>Taste & Trust</span>
            </h2>
            <p style={{ color: "rgba(190,155,100,0.6)", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
              We've built every safeguard so you never have to wonder if the food is safe, fresh, or worth it. Here's exactly what we promise.
            </p>
            <div style={{ marginTop: 32, padding: "20px 24px", background: "rgba(232,86,12,0.08)", border: "1px solid rgba(232,86,12,0.15)", borderRadius: 14 }}>
              <p style={{ margin: "0 0 6px", color: "#E8560C", fontSize: 13, fontWeight: 700 }}>🛡️ Our Guarantee</p>
              <p style={{ margin: 0, color: "rgba(229,197,140,0.7)", fontSize: 13, lineHeight: 1.65 }}>
                If you're ever unsatisfied with a meal — temperature, taste, or portion — we issue an instant full credit. No forms, no waiting.
              </p>
            </div>
          </div>

          {/* Right: promise list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {QUALITY.map((q, i) => (
              <div key={i} style={{
                display: "flex", gap: 28, padding: "32px 0",
                borderBottom: i < QUALITY.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                transition: "all 0.2s",
              }}>
                <div>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 48, fontWeight: 700, color: "rgba(232,86,12,0.12)", lineHeight: 1, display: "block", minWidth: 56 }}>{q.num}</span>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                    <span style={{ fontSize: 24 }}>{q.icon}</span>
                    <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, color: "white", letterSpacing: "-0.01em" }}>{q.title}</h3>
                  </div>
                  <p style={{ margin: 0, color: "rgba(190,155,100,0.65)", fontSize: 14, lineHeight: 1.7 }}>{q.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── City Coverage ─────────────────────────────────────────────────────────────
function CityCoverage() {
  return (
    <section id="cities" style={{ background: "#0A0500", padding: "100px 40px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
        <span style={{ color: "#E8560C", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>Coverage</span>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 48px)", color: "white", margin: "12px 0 16px", letterSpacing: "-0.02em" }}>
          Available Across <span style={{ color: "#E8560C" }}>12 Cities</span> & Growing
        </h2>
        <p style={{ color: "rgba(190,155,100,0.55)", fontSize: 15, marginBottom: 52, maxWidth: 460, margin: "0 auto 52px" }}>We're expanding every month. If you don't see your city below, join the waitlist and we'll notify you first.</p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 40 }}>
          {CITIES.map((city, i) => (
            <div key={i} style={{
              background: "rgba(232,86,12,0.08)", border: "1px solid rgba(232,86,12,0.2)",
              borderRadius: 99, padding: "10px 22px",
              color: "rgba(229,197,140,0.8)", fontSize: 14, fontWeight: 600,
              display: "flex", alignItems: "center", gap: 7,
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#E8560C", display: "block" }} />
              {city}
            </div>
          ))}
          <div style={{
            background: "rgba(255,255,255,0.04)", border: "1px dashed rgba(229,197,140,0.15)",
            borderRadius: 99, padding: "10px 22px",
            color: "rgba(190,155,100,0.35)", fontSize: 14, fontWeight: 600,
            display: "flex", alignItems: "center", gap: 7,
          }}>
            + Your City Next?
          </div>
        </div>

        <button style={{
          background: "transparent", border: "1.5px solid rgba(229,197,140,0.2)",
          color: "rgba(229,197,140,0.65)", padding: "12px 28px", borderRadius: 99,
          fontSize: 13, fontWeight: 600, cursor: "pointer",
        }}>
          Join the Waitlist for Your City →
        </button>
      </div>
    </section>
  );
}

// ─── Testimonials ──────────────────────────────────────────────────────────────
function Testimonials() {
  return (
    <section style={{ background: "#F5EDD8", padding: "120px 40px", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ color: "#E8560C", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>What People Say</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(32px, 4vw, 56px)", color: "#1A0A00", margin: "12px 0 0", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Real Customers,<br /><span style={{ color: "#E8560C", fontStyle: "italic" }}>Real Stories</span>
          </h2>
        </div>

        {/* Featured large testimonial */}
        <div style={{
          background: "white", borderRadius: 28, padding: "48px 56px",
          boxShadow: "0 8px 60px rgba(30,15,0,0.08)", marginBottom: 24,
          border: "1px solid rgba(232,86,12,0.08)",
        }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center" }}>
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px, 2.5vw, 36px)", fontWeight: 500, color: "#1A0A00", lineHeight: 1.5, margin: "0 0 28px", fontStyle: "italic" }}>
                "{TESTIMONIALS[0].quote}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: "linear-gradient(135deg, #E8560C, #C94500)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{TESTIMONIALS[0].emoji}</div>
                <div>
                  <p style={{ margin: 0, fontWeight: 700, color: "#1A0A00", fontSize: 16 }}>{TESTIMONIALS[0].name}</p>
                  <p style={{ margin: "2px 0 0", color: "rgba(30,15,0,0.45)", fontSize: 13 }}>{TESTIMONIALS[0].role} · {TESTIMONIALS[0].city}</p>
                </div>
                <div style={{ marginLeft: 20, color: "#E8560C", fontSize: 20 }}>{"★".repeat(TESTIMONIALS[0].rating)}</div>
              </div>
            </div>
            <div style={{ textAlign: "center" }} className="hidden md:block">
              <p style={{ fontFamily: "var(--font-display)", fontSize: 180, color: "rgba(232,86,12,0.06)", lineHeight: 0.8, margin: 0 }}>"</p>
            </div>
          </div>
        </div>

        {/* Grid of smaller testimonials */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {TESTIMONIALS.slice(1).map((t, i) => (
            <div key={i} style={{
              background: "white", borderRadius: 20, padding: "28px 28px",
              boxShadow: "0 2px 24px rgba(30,15,0,0.04)",
              border: "1px solid rgba(232,86,12,0.06)",
            }}>
              <div style={{ color: "#E8560C", fontSize: 18, marginBottom: 12 }}>{"★".repeat(t.rating)}</div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 400, color: "#1A0A00", lineHeight: 1.6, fontStyle: "italic", margin: "0 0 20px" }}>
                "{t.quote}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(135deg, rgba(232,86,12,0.15), rgba(201,69,0,0.1))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{t.emoji}</div>
                <div>
                  <p style={{ margin: 0, fontWeight: 700, color: "#1A0A00", fontSize: 13 }}>{t.name}</p>
                  <p style={{ margin: 0, color: "rgba(30,15,0,0.4)", fontSize: 11 }}>{t.role} · {t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── App Section ───────────────────────────────────────────────────────────────
function AppSection() {
  return (
    <section style={{ background: "#0D0600", padding: "120px 40px", borderTop: "1px solid rgba(232,86,12,0.06)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        {/* Left: CSS Phone mockup */}
        <div style={{ display: "flex", justifyContent: "center" }} className="hidden md:flex">
          <div style={{ position: "relative" }}>
            {/* Glow */}
            <div style={{ position: "absolute", inset: -40, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,86,12,0.15) 0%, transparent 70%)", filter: "blur(30px)" }} />
            {/* Phone */}
            <div style={{
              width: 260, height: 520, borderRadius: 40, background: "linear-gradient(180deg, #1a0d00, #0a0500)",
              border: "2px solid rgba(229,197,140,0.12)", position: "relative", overflow: "hidden",
              boxShadow: "0 32px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}>
              {/* Status bar */}
              <div style={{ height: 40, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
                <span style={{ color: "rgba(229,197,140,0.5)", fontSize: 11 }}>9:41</span>
                <div style={{ width: 32, height: 8, background: "rgba(229,197,140,0.2)", borderRadius: 99 }} />
                <span style={{ color: "rgba(229,197,140,0.5)", fontSize: 10 }}>●●●</span>
              </div>
              {/* Notch */}
              <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 80, height: 24, background: "#0a0500", borderRadius: "0 0 16px 16px" }} />

              {/* App UI */}
              <div style={{ padding: "8px 16px" }}>
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <div>
                    <p style={{ margin: 0, color: "rgba(190,155,100,0.5)", fontSize: 10 }}>Good afternoon!</p>
                    <p style={{ margin: 0, color: "white", fontSize: 14, fontWeight: 700 }}>What's for lunch? 🍱</p>
                  </div>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(232,86,12,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🍴</div>
                </div>

                {/* Search bar */}
                <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: "8px 12px", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ color: "rgba(190,155,100,0.3)", fontSize: 12 }}>🔍</span>
                  <span style={{ color: "rgba(190,155,100,0.3)", fontSize: 11 }}>Search cooks or dishes...</span>
                </div>

                {/* Mini cards */}
                {[{ e: "🍛", n: "Dal Tadka", p: "₹80", r: "4.9", c: "Sunita Ji" }, { e: "🥘", n: "Rajma Rice", p: "₹90", r: "4.8", c: "Priya S." }].map((card, ci) => (
                  <div key={ci} style={{
                    background: ci === 0 ? "rgba(232,86,12,0.12)" : "rgba(255,255,255,0.04)",
                    border: `1px solid ${ci === 0 ? "rgba(232,86,12,0.25)" : "rgba(255,255,255,0.06)"}`,
                    borderRadius: 12, padding: "12px", marginBottom: 10,
                    display: "flex", alignItems: "center", gap: 10,
                  }}>
                    <span style={{ fontSize: 28 }}>{card.e}</span>
                    <div style={{ flex: 1 }}>
                      <p style={{ margin: 0, color: "white", fontSize: 12, fontWeight: 600 }}>{card.n}</p>
                      <p style={{ margin: "2px 0 0", color: "rgba(190,155,100,0.5)", fontSize: 10 }}>by {card.c} · ⭐ {card.r}</p>
                    </div>
                    <span style={{ color: "#E8560C", fontWeight: 700, fontSize: 14 }}>{card.p}</span>
                  </div>
                ))}

                {/* Order button */}
                <div style={{ background: "linear-gradient(135deg, #E8560C, #C94500)", borderRadius: 10, padding: "12px", textAlign: "center", marginTop: 8 }}>
                  <span style={{ color: "white", fontSize: 12, fontWeight: 700 }}>Order Now — Arrives in 30 min</span>
                </div>
              </div>

              {/* Bottom nav */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "rgba(10,5,0,0.95)", borderTop: "1px solid rgba(255,255,255,0.04)",
                padding: "12px 24px",
                display: "flex", justifyContent: "space-between",
              }}>
                {["🏠", "🔍", "📋", "👤"].map((icon, ii) => (
                  <div key={ii} style={{ textAlign: "center" }}>
                    <span style={{ fontSize: 18, opacity: ii === 0 ? 1 : 0.35 }}>{icon}</span>
                    {ii === 0 && <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#E8560C", margin: "2px auto 0" }} />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Copy */}
        <div>
          <span style={{ color: "#E8560C", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>Mobile App</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(32px, 4vw, 52px)", color: "white", margin: "12px 0 16px", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
            Order Ghar Ka Khana<br /><span style={{ color: "#E8560C", fontStyle: "italic" }}>In Three Taps</span>
          </h2>
          <p style={{ color: "rgba(190,155,100,0.65)", fontSize: 15, lineHeight: 1.75, marginBottom: 36 }}>
            The TiffinZayka app shows you live tiffins being cooked near you right now. Real-time cook availability, freshness timer, one-tap reorder of your favourites, and direct chat with your cook.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
            {["Live cook availability — see who's cooking right now","Freshness timer on every tiffin","One-tap reorder your favourite meals","Direct in-app chat with your cook","Track your delivery in real time"].map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(232,86,12,0.15)", border: "1.5px solid rgba(232,86,12,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#E8560C", fontSize: 10 }}>✓</span>
                </div>
                <span style={{ color: "rgba(229,197,140,0.75)", fontSize: 14 }}>{f}</span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {[["📱 App Store", "iPhone & iPad"], ["▶️ Play Store", "Android"]].map(([label, sub]) => (
              <button key={label} style={{
                background: "rgba(255,255,255,0.05)", border: "1.5px solid rgba(229,197,140,0.15)",
                borderRadius: 14, padding: "14px 24px", cursor: "pointer",
                textAlign: "left", transition: "all 0.2s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(232,86,12,0.4)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(229,197,140,0.15)"; }}>
                <p style={{ margin: 0, color: "white", fontSize: 14, fontWeight: 700 }}>{label}</p>
                <p style={{ margin: "2px 0 0", color: "rgba(190,155,100,0.45)", fontSize: 11 }}>{sub}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Become a Cook ─────────────────────────────────────────────────────────────
function BecomeACook() {
  return (
    <section style={{ background: "#E8560C", padding: "120px 40px", position: "relative", overflow: "hidden" }}>
      {/* Pattern */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,0,0,0.1) 0%, transparent 50%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 50px)", backgroundSize: "50px 50px", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 10 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          {/* Left */}
          <div>
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>For Home Cooks</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(36px, 4.5vw, 68px)", color: "white", margin: "12px 0 20px", letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              Cook Once.<br />
              <span style={{ fontStyle: "italic", opacity: 0.85 }}>Earn Twice.</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 16, lineHeight: 1.75, marginBottom: 40 }}>
              You already cook for your family every day. With TiffinZayka, make 3–8 extra portions and earn real income from something you already love doing. No investment. No extra equipment. Just your kitchen and your passion.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 40 }}>
              {["No joining fee, ever", "Flexible timings — you decide", "You control the menu", "Weekly UPI payouts", "Kitchen inspection support", "Dedicated cook support team"].map((b) => (
                <span key={b} style={{
                  background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)",
                  borderRadius: 99, padding: "8px 16px",
                  color: "white", fontSize: 12, fontWeight: 600,
                }}>✓ {b}</span>
              ))}
            </div>

            <button style={{
              background: "white", color: "#E8560C", border: "none",
              padding: "18px 40px", borderRadius: 99, fontSize: 16, fontWeight: 800,
              cursor: "pointer", boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              transition: "all 0.25s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px) scale(1.02)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0) scale(1)"; }}>
              🍳 Register as a Cook — Free
            </button>
            <p style={{ marginTop: 14, color: "rgba(255,255,255,0.5)", fontSize: 12 }}>Joined by 450+ home cooks. Takes 5 minutes to sign up.</p>
          </div>

          {/* Right: Earnings calculator style */}
          <div style={{ background: "rgba(0,0,0,0.2)", borderRadius: 24, padding: "40px 36px", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.15)" }}>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 24px" }}>Estimated Monthly Earnings</p>

            {[
              { orders: "3 orders/day", perDay: "₹216–₹331", perMonth: "₹6,500–₹10,000", level: "Starting Out" },
              { orders: "6 orders/day", perDay: "₹432–₹663", perMonth: "₹13,000–₹20,000", level: "Part-Time Cook" },
              { orders: "10 orders/day", perDay: "₹720–₹1,105", perMonth: "₹21,600–₹33,000", level: "Full-Time Cook" },
            ].map((tier, i) => (
              <div key={i} style={{
                background: i === 1 ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.06)",
                border: `1px solid ${i === 1 ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.1)"}`,
                borderRadius: 14, padding: "18px 20px", marginBottom: 12,
                position: "relative",
              }}>
                {i === 1 && (
                  <div style={{ position: "absolute", top: -10, right: 16, background: "white", color: "#E8560C", fontSize: 10, fontWeight: 800, padding: "3px 10px", borderRadius: 99, letterSpacing: "0.05em" }}>POPULAR</div>
                )}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <p style={{ margin: 0, color: "white", fontSize: 14, fontWeight: 700 }}>{tier.orders}</p>
                    <p style={{ margin: "2px 0 0", color: "rgba(255,255,255,0.5)", fontSize: 11 }}>{tier.level}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ margin: 0, color: "white", fontSize: 18, fontWeight: 800, fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>{tier.perMonth}</p>
                    <p style={{ margin: "2px 0 0", color: "rgba(255,255,255,0.5)", fontSize: 11 }}>/ month</p>
                  </div>
                </div>
              </div>
            ))}

            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, textAlign: "center", margin: "16px 0 0" }}>Based on avg. tiffin price ₹80–₹130 · You keep 85% of earnings</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ───────────────────────────────────────────────────────────────────────
function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ background: "#0A0500", padding: "120px 40px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ color: "#E8560C", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>FAQ</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(32px, 4vw, 52px)", color: "white", margin: "12px 0 16px", letterSpacing: "-0.02em" }}>
            Questions You'll<br /><span style={{ color: "#E8560C", fontStyle: "italic" }}>Definitely Have</span>
          </h2>
          <p style={{ color: "rgba(190,155,100,0.55)", fontSize: 15, maxWidth: 440, margin: "0 auto" }}>Everything you want to know before your first tiffin order. Honest answers, no fluff.</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {FAQS.map((faq, i) => (
            <div key={i} style={{
              background: open === i ? "rgba(232,86,12,0.07)" : "rgba(255,255,255,0.02)",
              border: `1px solid ${open === i ? "rgba(232,86,12,0.25)" : "rgba(255,255,255,0.05)"}`,
              borderRadius: 14, overflow: "hidden", transition: "all 0.3s",
            }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "22px 28px", background: "transparent", border: "none",
                cursor: "pointer", textAlign: "left",
              }}>
                <span style={{ color: "rgba(229,197,140,0.9)", fontSize: 15, fontWeight: 600, lineHeight: 1.4, flex: 1, paddingRight: 20 }}>{faq.q}</span>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%",
                  background: open === i ? "#E8560C" : "rgba(255,255,255,0.06)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, transition: "all 0.3s",
                  transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                }}>
                  <span style={{ color: "white", fontSize: 18, lineHeight: 1, marginTop: -1 }}>+</span>
                </div>
              </button>

              <div style={{
                maxHeight: open === i ? 300 : 0,
                overflow: "hidden",
                transition: "max-height 0.35s ease",
              }}>
                <p style={{ margin: 0, padding: "0 28px 24px", color: "rgba(190,155,100,0.7)", fontSize: 14, lineHeight: 1.8 }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 52 }}>
          <p style={{ color: "rgba(190,155,100,0.4)", fontSize: 14, marginBottom: 16 }}>Still have questions?</p>
          <button style={{
            background: "transparent", border: "1.5px solid rgba(232,86,12,0.35)",
            color: "#E8560C", padding: "12px 28px", borderRadius: 99,
            fontSize: 14, fontWeight: 600, cursor: "pointer",
          }}>
            Chat With Us →
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Newsletter ─────────────────────────────────────────────────────────────────
function Newsletter() {
  return (
    <section style={{ background: "#0D0600", padding: "80px 40px", borderTop: "1px solid rgba(232,86,12,0.06)" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3vw, 40px)", color: "white", margin: "0 0 12px", letterSpacing: "-0.02em", fontWeight: 700 }}>
          Get <span style={{ color: "#E8560C" }}>Daily Tiffin</span> Updates
        </h3>
        <p style={{ color: "rgba(190,155,100,0.55)", fontSize: 14, marginBottom: 28 }}>Know what's cooking in your area every morning. No spam — just food.</p>
        <div style={{ display: "flex", gap: 10, maxWidth: 440, margin: "0 auto" }}>
          <input
            type="email"
            placeholder="your@email.com"
            style={{
              flex: 1, background: "rgba(255,255,255,0.05)", border: "1.5px solid rgba(229,197,140,0.15)",
              borderRadius: 99, padding: "14px 20px", color: "white", fontSize: 14,
              outline: "none",
            }}
          />
          <button style={{
            background: "linear-gradient(135deg, #E8560C, #C94500)",
            color: "white", border: "none", padding: "14px 24px",
            borderRadius: 99, fontSize: 14, fontWeight: 700, cursor: "pointer",
            whiteSpace: "nowrap", boxShadow: "0 4px 20px rgba(232,86,12,0.3)",
          }}>
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: "#060300", borderTop: "1px solid rgba(232,86,12,0.08)", padding: "72px 40px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span style={{ fontSize: 28 }}>🍱</span>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, color: "white", letterSpacing: "-0.02em" }}>
                Tiffin<span style={{ color: "#E8560C" }}>Zayka</span>
              </span>
            </div>
            <p style={{ color: "rgba(190,155,100,0.5)", fontSize: 14, lineHeight: 1.75, maxWidth: 280, margin: "0 0 24px" }}>
              Bringing the warmth of homemade food to your doorstep. Real meals, real families, real India.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {["𝕏 Twitter", "📸 Instagram", "💼 LinkedIn", "▶️ YouTube"].map((s) => (
                <a key={s} href="#" style={{
                  color: "rgba(190,155,100,0.35)", fontSize: 11, fontWeight: 600,
                  border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8,
                  padding: "6px 10px", textDecoration: "none", transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#E8560C"; e.currentTarget.style.borderColor = "rgba(232,86,12,0.3)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "rgba(190,155,100,0.35)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; }}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 style={{ color: "rgba(229,197,140,0.4)", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", margin: "0 0 18px" }}>Platform</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
              {["How It Works", "Browse Today's Menu", "TiffinPass Subscription", "Refer a Friend", "Gift a Tiffin"].map((l) => (
                <li key={l}><a href="#" style={{ color: "rgba(190,155,100,0.55)", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "rgba(229,197,140,0.9)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "rgba(190,155,100,0.55)"; }}>{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Cooks */}
          <div>
            <h4 style={{ color: "rgba(229,197,140,0.4)", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", margin: "0 0 18px" }}>For Cooks</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
              {["Register as a Cook", "Cook Dashboard", "Earnings Calculator", "Cook Success Stories", "Cook Support"].map((l) => (
                <li key={l}><a href="#" style={{ color: "rgba(190,155,100,0.55)", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "rgba(229,197,140,0.9)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "rgba(190,155,100,0.55)"; }}>{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: "rgba(229,197,140,0.4)", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", margin: "0 0 18px" }}>Company</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
              {["About TiffinZayka", "Press & Media", "Careers — We're Hiring", "Privacy Policy", "Terms of Use", "Contact Us"].map((l) => (
                <li key={l}><a href="#" style={{ color: "rgba(190,155,100,0.55)", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "rgba(229,197,140,0.9)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "rgba(190,155,100,0.55)"; }}>{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cities strip */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)", padding: "20px 0", marginBottom: 32 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
            {CITIES.map((c, i) => (
              <a key={i} href="#" style={{ color: "rgba(190,155,100,0.3)", fontSize: 12, textDecoration: "none" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#E8560C"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "rgba(190,155,100,0.3)"; }}>
                Tiffin Delivery in {c}{i < CITIES.length - 1 ? " ·" : ""}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <p style={{ color: "rgba(190,155,100,0.25)", fontSize: 12, margin: 0 }}>© 2025 TiffinZayka Technologies Pvt. Ltd. · All rights reserved.</p>
          <p style={{ color: "rgba(190,155,100,0.25)", fontSize: 12, margin: 0 }}>Made with ❤️ and 🌶️ in India</p>
          <p style={{ color: "rgba(190,155,100,0.25)", fontSize: 12, margin: 0 }}>FSSAI License: 10025041000123</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page Root ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`${cormorant.variable} ${manrope.variable}`} style={{ fontFamily: "var(--font-body)", overflowX: "hidden" }}>
      {/* Global keyframes */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes steam {
          0%   { opacity: 0;   transform: translateY(0px)  scaleX(1);   }
          40%  { opacity: 0.6; transform: translateY(-18px) scaleX(1.4); }
          100% { opacity: 0;   transform: translateY(-36px) scaleX(0.7); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px)   rotate(0deg);  }
          50%       { transform: translateY(-18px) rotate(6deg);  }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1;   transform: scale(1);    }
          50%       { opacity: 0.5; transform: scale(0.85); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::selection { background: rgba(232,86,12,0.3); color: white; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0A0500; }
        ::-webkit-scrollbar-thumb { background: rgba(232,86,12,0.4); border-radius: 99px; }
        input::placeholder { color: rgba(190,155,100,0.3); }
      `}</style>

      <AnnouncementBar />
      <Navbar scrolled={scrolled} />
      <Hero />
      <MediaBar />
      <HowItWorks />
      <Stats />
      <Comparison />
      <CookSpotlight />
      <TodaysMenu />
      <QualityPromise />
      <CityCoverage />
      <Testimonials />
      <AppSection />
      <BecomeACook />
      <FAQSection />
      <Newsletter />
      <Footer />
    </div>
  );
}