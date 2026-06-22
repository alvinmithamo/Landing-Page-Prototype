import { useState, useEffect, useRef, type SVGProps } from "react";
import brigit from "../imports/briget blue.jpg";
import nikita from "../imports/nikita kering.jpg";
import xenia from "../imports/xenia.jpg";
import njerae from "../imports/njerae.jpg";
import watendawili from "../imports/watendawili.jpg";
import kethan from "../imports/kethan.jpg";
import ochiko from "../imports/ochiko.jpg";
import iv from "../imports/iv.jpg";
import bune from "../imports/bune.jpg";
import darkfruit from "../imports/darkfruit.jpg";
import soundEdit from "../imports/sound edit.png";
import tasteEdit from "../imports/taste edit.png";
import cultureEdit from "../imports/culture edit.png";
import logo from "../imports/PnC logo 2.png";
import openBar from "../imports/open bar.jpg";
import foodMarket from "../imports/food marketr.jpg";
import lawn from "../imports/lawn.jpg";
import popUpMarket from "../imports/pop up market.jpg";
import vibe from "../imports/vibe.jpg";

function Play(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

function ChevronLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function Instagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <circle cx="12" cy="12" r="3" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

function Twitter(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1.6a9.03 9.03 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.5 0a4.5 4.5 0 0 0-4.48 5.5A12.8 12.8 0 0 1 1.64 1.15 4.48 4.48 0 0 0 3 7.68a4.44 4.44 0 0 1-2-.55v.06A4.5 4.5 0 0 0 4.48 12a4.52 4.52 0 0 1-2 .08A4.5 4.5 0 0 0 6.72 15.7a9.06 9.06 0 0 1-5.6 1.94A9.44 9.44 0 0 1 0 17.54a12.82 12.82 0 0 0 7 2.05c8.4 0 13-6.96 13-13v-.59A9.22 9.22 0 0 0 23 3z" />
    </svg>
  );
}

function Facebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H8.9v-2.89h1.54V9.41c0-1.52.9-2.36 2.28-2.36.66 0 1.35.12 1.35.12v1.49h-.76c-.75 0-.98.47-.98.95v1.14h1.67l-.27 2.89h-1.4v6.99C18.34 21.12 22 16.99 22 12z" />
    </svg>
  );
}

function Music2(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M9 18V8l10-3v10" />
      <circle cx="9" cy="18" r="3" />
      <circle cx="19" cy="15" r="3" />
    </svg>
  );
}

function UtensilsCrossed(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M7 2l7 7" />
      <path d="M17 2l-7 7" />
      <path d="M6 14l-4 4" />
      <path d="M10 18l4-4" />
      <path d="M10 14l4 4" />
    </svg>
  );
}

function Sparkles(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 3l1.09 3.26L17 7.5l-2.72 2.03L13.18 13 12 10.5 10.82 13l-1.1-3.47L6 7.5l3.91-.24L12 3z" />
      <path d="M18 17l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" />
    </svg>
  );
}

function Mail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}


// ─── Countdown ────────────────────────────────────────────────────────────────
const PRICE_INCREASE_DATE = new Date("2026-08-01T00:00:00");

function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const artists = [
  {
    name: "Nikita Kering",
    tag: "Artist",
    origin: "Kisumu, KE",
    time: "7:00 PM",
    img: nikita,
  },
  {
    name: "Bridget Blue",
    tag: "Artist",
    origin: "Mombasa, KE",
    time: "4:30 PM",
    img: brigit,
  },
  {
    name: "Xenia Manasseh",
    tag: "Artist",
    origin: "Nairobi, KE",
    time: "2:00 PM",
    img: xenia,
  },
  {
    name: "Njerae",
    tag: "Artist",
    origin: "Nairobi, KE",
    time: "1:00 PM",
    img: njerae,
  },
  {
    name: "Watendawili",
    tag: "Artist",
    origin: "Nairobi, KE",
    time: "3:15 PM",
    img: watendawili,
  },
  {
    name: "Kethan",
    tag: "Artist",
    origin: "Nairobi, KE",
    time: "2:45 PM",
    img: kethan,
  },
  {
    name: "Ochiko",
    tag: "Artist",
    origin: "Nakuru, KE",
    time: "5:00 PM",
    img: ochiko,
  },
  {
    name: "Iv",
    tag: "DJ",
    origin: "Nairobi, KE",
    time: "6:00 PM",
    img: iv,
  },
  {
    name: "Bune",
    tag: "DJ",
    origin: "Mombasa, KE",
    time: "8:00 PM",
    img: bune,
  },
  {
    name: "Darkfruit",
    tag: "DJ",
    origin: "Nairobi, KE",
    time: "9:00 PM",
    img: darkfruit,
  },
];

const outfits = [
  {
    img: openBar,
    tag: "Sip",
    label: "Premium Bar Service",
    sub: "Open-air bar stations serving expertly-crafted alcoholic and non-alcoholic drinks. Choose from our curated mocktails, premium wines, well-crafted gins,whiskey or vodka as well as refreshing tropical beverages, fresh juices, and flavored waters.",
  },
  {
    img: foodMarket,
    tag: "Taste",
    label: "Vendor Food Market",
    sub: "Nairobi's finest food vendors bring live grill stations with premium marinated meats, artisanal sliders, fresh tropical fruit platters, Kenyan street-food fusions, wood-fired pizzas, and curated vegetarian delights.",
  },
  {
    img: lawn,
    tag: "Relax",
    label: "Lawn Lounges",
    sub: "Beautifully arranged garden seating across the lawns—comfortable cushioned daybeds, bohemian low-slung lounges, and shaded cabanas perfectly positioned for unobstructed stage views and laid-back socializing.",
  },
  {
    img: popUpMarket,
    tag: "Shop",
    label: "Local Creatives Market",
    sub: "Support independent Kenyan designers and makers. Browse curated pop-up booths featuring emerging fashion labels, sustainable thrift collections, handmade jewelry, artisan crafts, and contemporary art from local tastemakers.",
  },
  {
    img: vibe,
    tag: "Connect",
    label: "Community Vibe",
    sub: "Meet kindred spirits in a welcoming, fashion-forward crowd. Share the energy at communal lawn spaces, discover new friends through curated activities, and create memories with people who celebrate the same aesthetic and passion.",
  },
];

const igPhotos = [
  "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&h=500&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1619229666372-3c26c399a4cb?w=500&h=500&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1779406970902-e9abe95260a8?w=500&h=500&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=500&h=500&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1563841930606-67e2bce48b78?w=500&h=500&fit=crop&auto=format",
  // "https://images.unsplash.com/photo-1779406979057-d37c54a42ff6?w=500&h=500&fit=crop&auto=format",
  // "https://images.unsplash.com/photo-1606518559059-5fecead22c43?w=500&h=500&fit=crop&auto=format",
  // "https://images.unsplash.com/photo-1657400603587-2e820ed15dcc?w=500&h=500&fit=crop&auto=format",
];

const pillars = [
  {
    Icon: Music2,
    num: "01",
    title: "The Sound",
    accent: "#FFB796",
    body: "Acoustic daytime sets melt into the golden hour. As the Ngong Hills blush with dusk, the energy rises — layered Afro House builds the night into something unforgettable.",
    backgroundImage: soundEdit,
  },
  {
    Icon: UtensilsCrossed,
    num: "02",
    title: "The Taste",
    accent: "#C4935A",
    body: "Handcrafted peach bellinis, hibiscus spritzes, and premium local mixology from Nairobi's most celebrated bartenders. Every sip carries the flavour of East African terroir.",
    backgroundImage: tasteEdit,
  },
  {
    Icon: Sparkles,
    num: "03",
    title: "The Culture",
    accent: "#A87E52",
    body: "A fashion-forward crowd draped in earth tones and pastels. Immersive art installations by emerging Kenyan creatives weave through every corner of the open-air venue.",
    backgroundImage: cultureEdit,
  },
];

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FFFDF9]/96 backdrop-blur-xl shadow-sm border-b border-[#1A1A1A]/6"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <img src={logo} alt="Peaches & Cream" className="h-10 sm:h-16 w-auto" />
          {/* <span
            className={`font-display text-sm font-bold tracking-[0.22em] transition-colors ${
              scrolled ? "text-[#1A1A1A]" : "text-white"
            }`}
          >
            PEACHES &amp; CREAM
          </span> */}
        </a>

        {/* Center nav - hidden on mobile */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-9">
          {["Lineup", "The Experience", "Tickets", "FAQs"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className={`font-body text-xs lg:text-sm font-medium tracking-wide transition-colors ${
                scrolled
                  ? "text-[#1A1A1A]/60 hover:text-[#1A1A1A]"
                  : "text-white/75 hover:text-white"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA - responsive sizing */}
        <a
          href="https://mookh.com/event/peaches-and-cream/" target="_blank" rel="noopener noreferrer"
          className="bg-[#FFB796] text-[#1A1A1A] font-body font-semibold text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-[#FF9E76] transition-all hover:shadow-md hover:shadow-[#FFB796]/30 active:scale-95 whitespace-nowrap"
        >
          Tickets
        </a>
      </div>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
const carouselImages = [soundEdit, tasteEdit, cultureEdit];

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#1A1A1A] pt-20">
      {/* Carousel background */}
      <div className="absolute inset-0 w-full h-full top-20 sm:top-0">
        {carouselImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt="Festival atmosphere"
              className="w-full h-full object-cover"
              style={{ opacity: 0.6 }}
            />
          </div>
        ))}
      </div>
      {/* Deep gradient scrim */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/75" />

      {/* Centered glass card */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="bg-black/25 backdrop-blur-[3px] border border-white/10 rounded-2xl sm:rounded-3xl px-6 sm:px-10 lg:px-14 py-8 sm:py-12 lg:py-14 max-w-3xl w-full text-center shadow-2xl mt-4">
          {/* Eyebrow */}
          <p className="font-body text-[9px] sm:text-[11px] font-semibold tracking-[0.35em] sm:tracking-[0.4em] uppercase text-[#FFB796] mb-4 sm:mb-6">
            Curated by Crispy Life Events
          </p>

          {/* Main headline */}
          <h1 className="font-groovy text-white leading-[1.03] mb-4 sm:mb-6">
            <span className="block text-3xl sm:text-4xl lg:text-[5.5rem] drop-shadow-md">Peaches</span>
            <span className="block text-3xl sm:text-4xl lg:text-[5.5rem] drop-shadow-md">&amp; Cream</span>
          </h1>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-white/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#FFB796]" />
            <div className="h-px w-12 bg-white/20" />
          </div>

          {/* Subheadline */}
          <p className="font-tribal text-white/80 text-sm sm:text-base lg:text-xl leading-relaxed max-w-md mx-auto mb-6 sm:mb-10 tracking-wide">
            A beautiful daytime escape into soulful African sound
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#tickets"
              className="w-full sm:w-auto bg-[#FFB796] text-[#1A1A1A] font-body font-semibold text-sm px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#FF9E76] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#FFB796]/30 active:scale-95"
            >
              Get Tickets
            </a>
            <a
              href="#the-experience"
              className="w-full sm:w-auto border border-white/40 text-white font-body font-medium text-sm px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white/10 hover:border-white/60 transition-all"
            >
              Explore the Vibe
            </a>
          </div>
        </div>
      </div>

      {/* Festival date strip */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 backdrop-blur-sm bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 sm:py-0 sm:h-12 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-center">
          <p className="font-handdrawn text-xs sm:text-lg text-white/90 tracking-wider">
            26th Sept | From 2PM
          </p>
          <p className="hidden sm:block font-handdrawn text-lg text-[#FFB796] tracking-wider">
            Ngong Race Course and Golf Park
          </p>
          <p className="font-handdrawn text-xs sm:text-lg text-white/90 tracking-wider">
            Nairobi, Kenya
          </p>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/30" />
        <span className="font-body text-[10px] tracking-[0.25em] uppercase">Scroll</span>
      </div>
    </section>
  );
}

// ─── Lineup ───────────────────────────────────────────────────────────────────
function ArtistCard({ artist }: { artist: (typeof artists)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-2xl overflow-hidden cursor-pointer"
      style={{ aspectRatio: "3/4" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        src={artist.img}
        alt={artist.name}
        className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? "scale-105" : "scale-100"}`}
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/95 via-[#1A1A1A]/30 to-transparent" />

      {/* Top row */}
      <div className="absolute top-0 left-0 right-0 p-5 flex items-start justify-between">
        <span className="bg-[#FFB796] text-[#1A1A1A] font-body font-semibold text-[11px] tracking-wide px-3 py-1 rounded-full">
          {artist.tag}
        </span>
        {/* <span className="font-body text-[11px] text-white/60 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
          {artist.time}
        </span> */}
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="bg-[#FFFDF9] rounded-xl p-4 flex flex-col items-start shadow-lg">
          {/* <p className="font-body text-[10px] text-[#1A1A1A]/50 tracking-[0.15em] uppercase mb-1">
            {artist.origin}
          </p> */}
          <h3 className="font-block text-xl tracking-wide text-[#1A1A1A] leading-tight mb-3">
            {artist.name}
          </h3>
          {/* Play snippet row */}
          {/* <div
            className="flex items-center justify-between w-full"
          >
            <span className="font-body text-[11px] font-medium text-[#1A1A1A]/40">Play snippet</span>
            <button className="w-8 h-8 bg-[#FFB796] rounded-full flex items-center justify-center hover:bg-[#FF9E76] transition-colors">
              <Play className="w-3 h-3 text-[#1A1A1A] fill-[#1A1A1A] ml-0.5" />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

function Lineup() {
  return (
    <section id="lineup" className="py-12 sm:py-20 lg:py-[100px] px-4 sm:px-8 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="font-body text-[9px] sm:text-[11px] font-semibold tracking-[0.3em] sm:tracking-[0.35em] uppercase text-[#FFB796] mb-3 sm:mb-4">
            The Lineup
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[3.2rem] font-bold text-[#1A1A1A] mb-3 sm:mb-4 leading-tight">
            The Sound Architecture
          </h2>
          <p className="font-body text-[#1A1A1A]/50 text-sm sm:text-base lg:text-lg max-w-md mx-auto leading-relaxed">
            Curated live performances from Kenya's finest soulful voices.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
          {artists.map((a) => (
            <ArtistCard key={a.name} artist={a} />
          ))}
        </div>

        {/* CTA row */}
        {/* <div className="mt-10 flex items-center justify-center">
          <a
            href="#tickets"
            className="font-body text-sm font-medium text-[#1A1A1A]/50 hover:text-[#FFB796] transition-colors flex items-center gap-2"
          >
            Full lineup reveal coming soon
            <span className="w-4 h-px bg-current inline-block" />
          </a>
        </div> */}
      </div>
    </section>
  );
}

// ─── Experience ───────────────────────────────────────────────────────────────
function Experience() {
  return (
    <section id="the-experience" className="py-12 sm:py-20 lg:py-[100px] px-4 sm:px-8 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto">
        {/* Header — left-aligned */}
        <div className="mb-8 sm:mb-12 lg:mb-14">
          <p className="font-body text-[9px] sm:text-[11px] font-semibold tracking-[0.3em] sm:tracking-[0.35em] uppercase text-[#FFB796] mb-3 sm:mb-4">
            What Awaits You
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[3.2rem] font-bold text-[#1A1A1A] leading-tight">
            The Experience
          </h2>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group bg-[#F8F4EF] rounded-2xl p-8 flex flex-col gap-0 hover:shadow-xl hover:shadow-[#1A1A1A]/5 transition-all duration-300 cursor-default border border-[#1A1A1A]/5 bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${p.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Background overlay for readability */}
              <div className="absolute inset-0 rounded-2xl bg-[#000000]/25 " />
              {/* Content wrapper with relative positioning */}
              <div className="relative z-10 flex flex-col gap-0 h-full">
              {/* Number + Icon row */}
              <div className="flex items-center justify-between mb-8">
                <span
                  className="font-display text-[3rem] font-bold leading-none"
                  style={{ color: `${p.accent}30` }}
                >
                  {p.num}
                </span>
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${p.accent}18` }}
                >
                  <p.Icon className="w-5 h-5" style={{ color: p.accent }} />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-bold text-[#F8F4EF] mb-3">
                {p.title}
              </h3>
              <p className="font-body text-[#F8F4EF]/55 text-sm leading-[1.75]">
                {p.body}
              </p>

              {/* Bottom rule */}
              <div className="mt-8 pt-6 border-t border-[#1A1A1A]/7 flex items-center justify-between">
                <span
                  className="font-body text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors"
                  style={{ color: p.accent }}
                >
                  Discover more
                </span>
                <ChevronRight
                  className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                  style={{ color: p.accent }}
                />
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Fit Check ────────────────────────────────────────────────────────────────
function FitCheck() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 330 : -330, behavior: "smooth" });
  };

  return (
    <section className="py-12 sm:py-20 lg:py-[100px] bg-[#FFFDF9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-0">
        <div className="flex-1">
          <p className="font-body text-[9px] sm:text-[11px] font-semibold tracking-[0.3em] sm:tracking-[0.35em] uppercase text-[#FFB796] mb-3 sm:mb-4">
            Immersive Experiences
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[3.2rem] font-bold text-[#1A1A1A] leading-tight mb-3">
            Beyond The Music
          </h2>
          <p className="font-body text-[#1A1A1A]/60 text-sm sm:text-base max-w-2xl leading-relaxed">
            Peaches &amp; Cream is more than a festival—it is an immersive daytime escape. Explore the curated culinary, mixology, and lifestyle spaces crafted to elevate your afternoon on the lawns.
          </p>
        </div>

        {/* Nav buttons */}
        <div className="flex items-center gap-3 mb-1 flex-shrink-0">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#1A1A1A]/15 flex items-center justify-center hover:bg-[#1A1A1A] hover:border-[#1A1A1A] hover:text-white transition-all duration-200"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#1A1A1A]/15 flex items-center justify-center hover:bg-[#1A1A1A] hover:border-[#1A1A1A] hover:text-white transition-all duration-200"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-3 sm:gap-4 overflow-x-auto pl-4 sm:pl-8 pb-3"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {outfits.map((o) => (
          <div
            key={o.label}
            className="relative flex-none rounded-2xl overflow-hidden group cursor-pointer bg-[#F5EEE6]"
            style={{ width: 290, aspectRatio: "4/5" }}
          >
            <img
              src={o.img}
              alt={o.label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/40 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-body text-[12px] font-semibold tracking-[0.15em] uppercase text-[#FFB796] mb-2">
                {o.tag}
              </p>
              <p className="font-display text-lg font-bold text-white leading-snug mb-1">
                {o.label}
              </p>
              <p className="font-body text-xs text-white/70 leading-[1.4]">{o.sub}</p>
            </div>
          </div>
        ))}
        {/* Trailing spacer */}
        <div className="flex-none w-8" />
      </div>
    </section>
  );
}

// ─── Tickets ──────────────────────────────────────────────────────────────────
function TicketUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-display text-[1.75rem] font-bold text-[#1A1A1A] tabular-nums leading-none">
        {String(value).padStart(2, "0")}
      </span>
      <span className="font-body text-[9px] tracking-[0.18em] uppercase text-[#1A1A1A]/40 mt-1">
        {label}
      </span>
    </div>
  );
}

function PriceCountdown() {
  const { days, hours, minutes, seconds } = useCountdown(PRICE_INCREASE_DATE);
  return (
    <div className="bg-[#FFF3ED] rounded-xl px-4 py-3 mb-6">
      <p className="font-body text-[11px] font-semibold text-[#FFB796] mb-2">
        ⏱ Price increases soon
      </p>
      <div className="flex items-center gap-3">
        <TicketUnit value={days} label="Days" />
        <span className="font-display text-xl text-[#1A1A1A]/25 mb-3">:</span>
        <TicketUnit value={hours} label="Hrs" />
        <span className="font-display text-xl text-[#1A1A1A]/25 mb-3">:</span>
        <TicketUnit value={minutes} label="Min" />
        <span className="font-display text-xl text-[#1A1A1A]/25 mb-3">:</span>
        <TicketUnit value={seconds} label="Sec" />
      </div>
    </div>
  );
}

function Tickets() {
  return (
    <section id="tickets" className="py-12 sm:py-20 lg:py-[100px] px-4 sm:px-8 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="font-body text-[9px] sm:text-[11px] font-semibold tracking-[0.3em] sm:tracking-[0.35em] uppercase text-[#FFB796] mb-3 sm:mb-4">
            Secure Your Spot
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[3.2rem] font-bold text-[#1A1A1A] leading-tight">
            Choose Your Pass
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-start">
          {/* ── General ── */}
          <div className="relative bg-[#FFFDF9] rounded-2xl p-8 border-2 border-[#FFB796] shadow-xl shadow-[#FFB796]/15">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              {/* No badge for General */}
            </div>
            <div className="mt-5">
              <p className="font-body text-[10px] uppercase tracking-[0.22em] text-[#FFB796] mb-2">
                General
              </p>
              <h3 className="font-display text-[1.4rem] font-bold text-[#1A1A1A] mb-1">
                Early Bird Ticket - General Admission
              </h3>
              <p className="font-body text-sm text-[#1A1A1A]/45 mb-5">
                Sat, Sep 26, 2026 - Sun, Sep 27, 2026 / Starts at 02:00 PM
              </p>
              <div className="mb-4">
                <span className="font-display text-4xl font-bold text-[#1A1A1A]">
                  KES 2,000
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Access to the General festival area with coverage",
                  "Access to all food and beverage areas, bars and markets",
                  "Limited seating — picnic chairs and shades are welcome",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 font-body text-sm text-[#1A1A1A]/65"
                  >
                    <span className="w-4 h-4 rounded-full bg-[#FFB796]/25 flex items-center justify-center text-[9px] text-[#FFB796]">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://mookh.com/event/peaches-and-cream/" target="_blank" rel="noopener noreferrer"
               >
              <button className="w-full py-3.5 rounded-full bg-[#FFB796] text-[#1A1A1A] font-body font-semibold text-sm hover:bg-[#FF9E76] transition-all active:scale-95">
                Get Tickets at mookh.com
              </button>
              </a>
            </div>
          </div>

          {/* ── VIP ── */}
          <div
            className="relative bg-[#FFFDF9] rounded-2xl p-8"
            style={{
              border: "1.5px solid rgba(196,147,90,0.45)",
              boxShadow:
                "0 0 0 0.5px rgba(196,147,90,0.15), 0 8px 32px rgba(196,147,90,0.1)",
            }}
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span
                className="font-body font-bold text-[10px] px-4 py-1.5 rounded-full tracking-[0.18em] uppercase text-white"
                style={{
                  background: "linear-gradient(135deg, #C4935A, #D4A574)",
                }}
              >
                VIP Experience
              </span>
            </div>
            <div className="mt-5">
              <p
                className="font-body text-[10px] uppercase tracking-[0.22em] mb-2"
                style={{ color: "#C4935A" }}
              >
                VIP
              </p>
              <h3 className="font-display text-[1.4rem] font-bold text-[#1A1A1A] mb-1">
                Early Bird Ticket - VIP Experience
              </h3>
              <p className="font-body text-sm text-[#1A1A1A]/45 mb-6">
                Sat, Sep 26, 2026 - Sun, Sep 27, 2026 / Starts at 02:00 PM
              </p>
              <div className="mb-7">
                <span className="font-display text-4xl font-bold text-[#1A1A1A]">
                  KES 4,000
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Access to VIP suite area with coverage",
                  "Premium positioning close to the main stage for an immersive viewing experience",
                  "Dedicated private bar service",
                  "Access to all event experiences and markets",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 font-body text-sm text-[#1A1A1A]/65"
                  >
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center text-[9px]"
                      style={{
                        backgroundColor: "rgba(196,147,90,0.15)",
                        color: "#C4935A",
                      }}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-3.5 rounded-full bg-[#FFB796] text-[#1A1A1A] font-body font-semibold text-sm hover:bg-[#FF9E76] transition-all active:scale-95"
              >
                Get Tickets at mookh.com
              </button>
            </div>
          </div>
        </div>

        {/* Fine print */}
        <p className="text-center font-body text-[10px] sm:text-xs text-[#1A1A1A]/35 mt-6 sm:mt-8 px-4">
          All ticket sales are final. No refunds. Tickets are non-transferable. Ages 18+.
        </p>
      </div>
    </section>
  );
}

// ─── FAQs ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "When and where is Peaches & Cream?",
    a: "Saturday, 26 September 2026 — 2:00 PM onwards. Venue is Ngong Race Course and Golf Park. Exact address and directions will be shared with ticket holders closer to the date.",
  },
  {
    q: "Is there an age limit?",
    a: "Yes — Peaches & Cream is strictly 18+. A valid national ID or passport is required at the gate.",
  },
  {
    q: "What should I wear?",
    a: "There's no strict dress code, but we love to see festival fashion. Think earth tones, pastels, linen sets, and bold accessories.",
  },
  {
    q: "Can I bring my own food and drinks?",
    a: "No outside food or beverages are permitted. We have a curated artisan food market and premium bar experience on-site.",
  },
];

function FAQs() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-12 sm:py-20 lg:py-[100px] px-4 sm:px-8 bg-[#FFFDF9]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-14">
          <p className="font-body text-[9px] sm:text-[11px] font-semibold tracking-[0.3em] sm:tracking-[0.35em] uppercase text-[#FFB796] mb-3 sm:mb-4">
            Got Questions?
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[3.2rem] font-bold text-[#1A1A1A] leading-tight">
            FAQs
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                open === i
                  ? "border-[#FFB796]/50 bg-[#FFF8F2]"
                  : "border-[#1A1A1A]/8 bg-[#FFFDF9] hover:border-[#1A1A1A]/15"
              }`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-center justify-between px-4 sm:px-7 py-4 sm:py-5 gap-3">
                <h4 className="font-display text-sm sm:text-base font-bold text-[#1A1A1A] text-left">
                  {faq.q}
                </h4>
                <div
                  className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border flex items-center justify-center flex-none transition-all ${
                    open === i
                      ? "bg-[#FFB796] border-[#FFB796] text-[#1A1A1A]"
                      : "border-[#1A1A1A]/15 text-[#1A1A1A]/40"
                  }`}
                >
                  <span className="text-xs leading-none">{open === i ? "−" : "+"}</span>
                </div>
              </div>
              {open === i && (
                <div className="px-4 sm:px-7 pb-4 sm:pb-6">
                  <p className="font-body text-xs sm:text-sm text-[#1A1A1A]/55 leading-[1.6] sm:leading-[1.8]">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Social & Footer ──────────────────────────────────────────────────────────
function SocialAndFooter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <>
      {/* Instagram Feed */}
      <section className="py-12 sm:py-20 lg:py-[100px] px-4 sm:px-8 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-0 mb-6 sm:mb-10">
            <div>
              <p className="font-body text-[9px] sm:text-[11px] font-semibold tracking-[0.3em] sm:tracking-[0.35em] uppercase text-[#FFB796] mb-2 sm:mb-3">
                Follow Along
              </p>
              <h2 className="font-display text-lg sm:text-2xl lg:text-[2.2rem] font-bold text-[#1A1A1A] leading-tight">
                @peachandcreamafrica
              </h2>
            </div>
            <a
              href="#"
              className="flex items-center gap-2 font-body text-xs sm:text-sm font-medium text-[#1A1A1A]/50 hover:text-[#FFB796] transition-colors whitespace-nowrap"
            >
              <Instagram className="w-4 h-4" />
              <span className="hidden sm:inline">Follow us on Instagram</span>
              <span className="sm:hidden">Follow</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
            {igPhotos.map((src, i) => (
              i === 0 ? (
                <div
                  key={i}
                  className="relative rounded-2xl overflow-hidden bg-[#EDE6DB] col-span-1"
                  style={{ aspectRatio: "1" }}
                >
                  <iframe
                    src="https://www.instagram.com/p/DZxNTYaDC9K/embed/"
                    className="w-full h-full rounded-2xl"
                    style={{ border: "none", overflow: "hidden", borderRadius: "16px" }}
                  />
                </div>
              ) : i === 1 ? (
                <div
                  key={i}
                  className="relative rounded-2xl overflow-hidden bg-[#EDE6DB] col-span-1"
                  style={{ aspectRatio: "1" }}
                >
                  <iframe
                    src="https://www.instagram.com/p/DZzhzsAjGvy/embed/"
                    className="w-full h-full rounded-2xl"
                    style={{ border: "none", overflow: "hidden", borderRadius: "16px" }}
                  />
                </div>
              ) : i === 2 ? (
                <div
                  key={i}
                  className="relative rounded-2xl overflow-hidden bg-[#EDE6DB] col-span-1"
                  style={{ aspectRatio: "1" }}
                >
                  <iframe
                    src="https://www.instagram.com/p/DZxNTYaDC9K/embed/"
                    className="w-full h-full rounded-2xl"
                    style={{ border: "none", overflow: "hidden", borderRadius: "16px" }}
                  />
                </div>
              ) : i === 3 ? (
                <div
                  key={i}
                  className="relative rounded-2xl overflow-hidden bg-[#EDE6DB] col-span-1"
                  style={{ aspectRatio: "1" }}
                >
                  <iframe
                    src="https://www.instagram.com/p/DZwwW2JDM8O/embed/"
                    className="w-full h-full rounded-2xl"
                    style={{ border: "none", overflow: "hidden", borderRadius: "16px" }}
                  />
                </div>
              ) : i === 4 ? (
                <div
                  key={i}
                  className="relative rounded-2xl overflow-hidden bg-[#EDE6DB] col-span-1"
                  style={{ aspectRatio: "1" }}
                >
                  <iframe
                    src="https://www.instagram.com/p/DZvCo3zjDCm/embed/"
                    className="w-full h-full rounded-2xl"
                    style={{ border: "none", overflow: "hidden", borderRadius: "16px" }}
                  />
                </div>
              ) : (
                <div
                  key={i}
                  className="relative rounded-2xl overflow-hidden group cursor-pointer bg-[#EDE6DB]"
                  style={{ aspectRatio: "1" }}
                >
                  <img
                    src={src}
                    alt={`Festival moment ${i + 1}`}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#FFB796]/10">
                    <Instagram className="w-5 h-5 text-white drop-shadow-lg" />
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-[#FFFDF9] pt-8 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-14">
            {/* Brand col */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-4">
              <div className="flex items-center gap-2.5 mb-4">
                {/* <div className="w-6 h-6 rounded-full bg-[#FFB796] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#1A1A1A]" /> */}
                </div>
                 <a href="/" className="flex items-center gap-2.5 group">
                    <img src={logo} alt="Peaches & Cream" className="h-16 w-auto" />
                    {/* <span
                      className={`font-display text-sm font-bold tracking-[0.22em] transition-colors ${
                        scrolled ? "text-[#1A1A1A]" : "text-white"
                      }`}
                    >
                      PEACHES &amp; CREAM
                    </span> */}
                  </a>
                {/* <span className="font-display text-sm font-bold tracking-[0.22em]">
                  PEACHES &amp; CREAM
                </span> */}
              {/* </div> */}
              <p className="font-body text-sm text-[#FFFDF9]/35 leading-relaxed mb-6 max-w-xs">
                Nairobi's most anticipated daytime music and lifestyle festival.
                Curated by Crispy Life Events.
              </p>
              <p className="font-body text-xs text-[#FFFDF9]/25 mb-5 tracking-[0.1em]">
                Saturday, 26 September 2026 · Ngong Race Course and Golf Park
              </p>
              <div className="flex items-center gap-3">
                {[Instagram, Twitter, Facebook].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full border border-[#FFFDF9]/12 flex items-center justify-center text-[#FFFDF9]/45 hover:border-[#FFB796] hover:text-[#FFB796] transition-all duration-200"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="col-span-2 col-start-6">
              <p className="font-body text-[10px] uppercase tracking-[0.22em] text-[#FFFDF9]/25 mb-5">
                Navigate
              </p>
              <ul className="space-y-3">
                {["Lineup", "The Experience", "Tickets", "FAQs", "Press Kit"].map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="font-body text-sm text-[#FFFDF9]/50 hover:text-[#FFB796] transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-span-4 col-start-9">
              <p className="font-body text-[10px] uppercase tracking-[0.22em] text-[#FFFDF9]/25 mb-5">
                Stay in the loop
              </p>
              <h4 className="font-display text-xl font-bold mb-2">
                Join the Cream List
              </h4>
              <p className="font-body text-sm text-[#FFFDF9]/35 leading-relaxed mb-5">
                Secret lineups, pre-sale access, and curated festival content —
                straight to your inbox.
              </p>

              {submitted ? (
                <div className="bg-[#FFFDF9]/6 border border-[#FFB796]/30 rounded-xl px-5 py-4 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#FFB796]/20 flex items-center justify-center">
                    <span className="text-[#FFB796] text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-body text-sm font-semibold text-[#FFFDF9]">
                      You're on the list.
                    </p>
                    <p className="font-body text-xs text-[#FFFDF9]/40">
                      Watch your inbox for secret drops.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FFFDF9]/25" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full bg-[#FFFDF9]/6 border border-[#FFFDF9]/10 rounded-full pl-10 pr-4 py-3 font-body text-sm text-[#FFFDF9] placeholder-[#FFFDF9]/25 outline-none focus:border-[#FFB796]/40 transition-colors"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#FFB796] text-[#1A1A1A] font-body font-semibold text-sm px-5 py-3 rounded-full hover:bg-[#FF9E76] transition-colors whitespace-nowrap active:scale-95"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#FFFDF9]/7 pt-7 flex items-center justify-between">
            <p className="font-body text-xs text-[#FFFDF9]/25">
              © 2026 Peaches &amp; Cream Africa. All rights reserved. Curated
              by Crispy Life Events.
            </p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms & Conditions", "Cookie Policy"].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="font-body text-xs text-[#FFFDF9]/25 hover:text-[#FFFDF9]/55 transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div
      className="min-h-screen bg-[#FFFDF9]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <Nav />
      <Hero />
      <Lineup />
      <Experience />
      <FitCheck />
      <Tickets />
      <FAQs />
      <SocialAndFooter />
    </div>
  );
}
