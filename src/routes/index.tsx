import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import "@fontsource/antonio";
import {
  Home,
  Hammer,
  Compass,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Sun,
  Moon,
  Menu,
  X
} from "lucide-react";


import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import logo from "../assets/logo.png";
import about from "../assets/about.jpg";
import sunset from "../assets/sunset.png";
import mobileHero from "../assets/mobile-hero.png";
import pf1 from "../assets/pf1.png";
import pf2 from "../assets/pf2.png";
import pf3 from "../assets/pf3.png";
import pf4 from "../assets/pf4.png";
import pf5 from "../assets/pf5.png";
import pf6 from "../assets/pf6.png";
import pf1mobile from "../assets/pf1-mobile.png";
import pf2mobile from "../assets/pf2-mobile.png";
import pf3mobile from "../assets/pf3-mobile.png";
import pf4mobile from "../assets/pf4-mobile.png";
import pf5mobile from "../assets/pf5-mobile.png";
import pf6mobile from "../assets/pf6-mobile.png";
import villa from "../assets/villa.png";
import apartment from "../assets/apartments.png";
import villaApartment from "../assets/villa-apartment.png";



export const Route = createFileRoute("/")({ component: Index });

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Expertise", href: "#expertise" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);

    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    return () => window.removeEventListener("scroll", onScroll);

  }, [darkMode]);

  return (
    <header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    scrolled
      ? "bg-white shadow-sm py-3"
      : "bg-transparent py-5"
  }`}
>
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">

        {/* Logo */}
        <a href="#top" className="flex items-center gap-3">

          <img
            src={logo}
            alt="True Home Builders"
            className="h-12 w-12 rounded-full object-cover"
          />

          <span
className={`text-sm sm:text-base md:text-lg tracking-wide ${
  scrolled ? "text-black" : "text-white"
}`}
            style={{ fontFamily: "'Antonio', sans-serif" }}
          >
            TRUE HOME <span className="text-gold">BUILDERS</span>
          </span>

        </a>

        {/* Mobile Menu Button */}
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className={`md:hidden ${
    scrolled ? "text-black" : "text-white"
  }`}
>
  {menuOpen ? <X size={28} /> : <Menu size={28} />}
</button>

        {/* Navbar */}
        <nav className="hidden md:flex items-center gap-10">

          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
             className={`nav-link ${
  scrolled ? "text-black" : "text-white"
}`}
            >
              {l.label}
            </a>
          ))}

        </nav>


{menuOpen && (
  <div
    className={`absolute top-full left-0 w-full md:hidden shadow-lg transition-colors duration-300 ${
      darkMode ? "bg-[#111111]" : "bg-white"
    }`}
  >
    <div className="flex flex-col p-6 gap-6">

      {navLinks.map((l) => (
        <a
          key={l.href}
          href={l.href}
          onClick={() => setMenuOpen(false)}
          className={`uppercase tracking-widest text-sm transition-colors ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          {l.label}
        </a>
      ))}

      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`flex items-center gap-2 transition-colors ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        {darkMode ? (
          <>
            <Sun size={18} />
            Light Mode
          </>
        ) : (
          <>
            <Moon size={18} />
            Dark Mode
          </>
        )}
      </button>

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="btn-gold-outline text-center"
      >
        Get a Quote
      </a>

    </div>
  </div>
)}


        {/* Right buttons */}
        <div className="hidden md:flex items-center gap-4">

         <button
  onClick={() => setDarkMode(!darkMode)}
  className="
    p-2
    rounded-full
    border
    border-gold
    text-gold
    transition-all
    duration-300
    hover:bg-gold
    hover:border-gold
    group
    cursor-pointer
  "
>
  {darkMode ? (
    <Sun className="w-5 h-5 transition-colors duration-300 group-hover:text-white" />
  ) : (
    <Moon className="w-5 h-5 transition-colors duration-300 group-hover:text-white" />
  )}
</button>

          <a
            href="#contact"
            className="btn-gold-outline"
            style={{ padding: "0.6rem 1.4rem" }}
          >
            Get a Quote
          </a>

        </div>

      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen md:min-h-screen overflow-hidden text-white"
    >
      {/* Desktop Hero */}
      <img
        src={sunset}
        alt="True Home Builders luxury project"
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
      />

      {/* Mobile Hero */}
      <img
        src={mobileHero}
        alt="True Home Builders mobile hero"
        className="block md:hidden absolute inset-0 w-full h-full object-cover"
      />

      

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-20">

          <div className="max-w-[650px] mt-20 md:mt-0">

            <h1
              className="
                font-serif
                text-[2.8rem]
                sm:text-5xl
                md:text-7xl
                lg:text-8xl
                leading-[1.05]
                mb-5
              "
            >
              Building Foundations
              <br />
              for <span className="italic text-gold">Life</span>
            </h1>

            <p
              className="
                text-base
                sm:text-base
                md:text-lg
                text-white/90
                font-light
                leading-relaxed
                mb-8
                max-w-[320px]
                sm:max-w-[500px]
              "
            >
              Precision, integrity, and exceptional craftsmanship
              in every detail.
            </p>

            <a
              href="#portfolio"
              className="btn-gold-outline inline-flex"
            >
              View Our Work
            </a>

          </div>

        </div>
      </div>

   {/* Scroll Text */}
<div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 text-xs tracking-[0.3em] text-white/70 uppercase">
  Scroll
</div>
    </section>
  );
}
function About() {
  return (
    <section id="about" className="py-28 md:py-40 bg-background">

      {/* Existing About Section */}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

        <div className="relative">
          <img
            src={about}
            alt="Our team"
            width={1200}
            height={1400}
            loading="lazy"
            className="w-full h-[350px] md:h-[600px] object-cover"
          />
          <div className="absolute -bottom-6 -right-6 hidden md:block w-32 h-32 border border-gold" />
        </div>

        <div>

          <p className="text-gold tracking-[0.3em] text-xs uppercase mb-6">
            Who We Are
          </p>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Crafting True
            <br />
            <span className="italic">Value</span>
          </h2>

          <span className="gold-divider mb-8" />

          <p className="text-muted-foreground text-base leading-relaxed mb-6">
            At True Home Builders, we believe a home is more than walls and windows — it is the
            stage for a lifetime. For over two decades we have built with one principle at our
            core: transparency in every conversation, integrity in every joint.
          </p>

          <p className="text-muted-foreground text-base leading-relaxed mb-10">
            On-time delivery, uncompromising materials, and a relentless eye for detail —
            that is the "True" in our name, and the standard we hold ourselves to with every project.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-border pt-8">

            <div>
              <div className="font-serif text-4xl text-gold">
                25+
              </div>

              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                Years
              </div>
            </div>
            <div>
              <div className="font-serif text-4xl text-gold">180</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">Homes Built</div>
            </div>

            <div>
              <div className="font-serif text-4xl text-gold">
                100%
              </div>

              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                On Time
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

function Team() {

  return (

    <section id="team" className="py-24 md:py-32 bg-muted/30">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">



        <div className="text-center mb-12 md:mb-16">

          <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">

            OUR TEAM

          </p>



          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl mb-6">

            Professionals Behind Every

            <span className="italic text-gold"> Dream Home</span>

          </h2>



          <span className="gold-divider mb-8" />



          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">

            Meet our dedicated team of specialists for expert guidance

            on building your dream home or choosing the perfect plot.

          </p>

        </div>


{/* MOBILE TEAM */}
<div className="grid grid-cols-2 gap-3 md:hidden">

  <div className="bg-background border border-border rounded-lg px-2 py-3 min-h-[95px] flex flex-col justify-center text-center">

  <h3 className="font-serif text-[24px] leading-tight mb-3">
  K Siva Nagaraju
</h3>

<p className="text-gold text-[20px] leading-4 opacity-70">
  Managing Director & Builder
</p>

</div>

  <div className="bg-background border border-border rounded-lg px-2 py-3 min-h-[95px] flex flex-col justify-center text-center">
    <h3 className="font-serif text-[24px] leading-tight mb-2">
      O Prasad
    </h3>

   <p className="text-gold text-[20px] leading-4 opacity-70">
  Managing Director & Builder
</p>
  </div>

 <div className="bg-background border border-border rounded-lg px-2 py-3 min-h-[95px] flex flex-col justify-center text-center">
<h3 className="font-serif text-[24px] leading-tight mb-2">
      G Hari Teja
    </h3>

   <p className="text-gold text-[20px] leading-4 opacity-70">
  Managing Director & Builder
</p>
  </div>

<div className="bg-background border border-border rounded-lg px-2 py-3 min-h-[95px] flex flex-col justify-center text-center">
   <h3 className="font-serif text-[24px] leading-tight mb-2">
      S Dinesh
    </h3>

   <p className="text-gold text-[20px] leading-4 opacity-70">
  Managing Director & Builder
</p>
  </div>

</div>


{/* DESKTOP TEAM */}
<div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">

  <div className="bg-background border border-border rounded-lg p-8 min-h-[220px] flex flex-col justify-center text-center hover:border-gold transition-all duration-300">
    <h3 className="font-serif text-2xl mb-3">
      K Siva Nagaraju
    </h3>

    <p className="text-gold uppercase tracking-[0.15em] text-sm leading-relaxed">
      Managing Director & Builder
    </p>
  </div>

  <div className="bg-background border border-border rounded-lg p-8 min-h-[220px] flex flex-col justify-center text-center hover:border-gold transition-all duration-300">
    <h3 className="font-serif text-2xl mb-3">
      O Prasad
    </h3>

    <p className="text-gold uppercase tracking-[0.15em] text-sm leading-relaxed">
      Managing Director & Builder
    </p>
  </div>

  <div className="bg-background border border-border rounded-lg p-8 min-h-[220px] flex flex-col justify-center text-center hover:border-gold transition-all duration-300">
    <h3 className="font-serif text-2xl mb-3">
      G Hari Teja
    </h3>

    <p className="text-gold uppercase tracking-[0.15em] text-sm leading-relaxed">
      Managing Director & Builder
    </p>
  </div>

  <div className="bg-background border border-border rounded-lg p-8 min-h-[220px] flex flex-col justify-center text-center hover:border-gold transition-all duration-300">
    <h3 className="font-serif text-2xl mb-3">
      S Dinesh
    </h3>

    <p className="text-gold uppercase tracking-[0.15em] text-sm leading-relaxed">
      Managing Director & Builder
    </p>
  </div>

</div>

      </div>

    </section>

  );

}

const services = [
  {
    title: "Villas",
    image: villa,
    desc: "Luxury villas designed with premium comfort and modern architecture.",
  },
  {
    title: "Apartments",
    image: apartment,
    desc: "Contemporary apartment spaces crafted for stylish and comfortable living.",
  },
  {
    title: "Open Plots",
    image: villaApartment,
    desc: "Premium open plots in promising locations for smart investments and future living.",
  },
];

function Services() {
  return (
    <section id="expertise" className="py-28 md:py-40 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-20">
          <p className="text-gold tracking-[0.3em] text-xs uppercase mb-6">
            What We Do
          </p>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Our <span className="italic">Expertise</span>
          </h2>

          <span className="gold-divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {services.map((s) => (
            <div
              key={s.title}
              className="service-card text-center overflow-hidden"
            >

              <img
                src={s.image}
                alt={s.title}
                className="w-full h-[220px] object-cover mb-8"
              />

              <h3 className="font-serif text-2xl mb-4">
                {s.title}
              </h3>

              <span
                className="gold-divider mb-6"
                style={{ width: 32 }}
              />

              <p className="text-muted-foreground leading-relaxed text-sm">
                {s.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

const gallery = [
  {
    src: pf2,
    mobile: pf2mobile,
    h: "row-span-2",
    alt: "Villa Project",
    name: "Sri Sadhguru Nest",
    location: "Ameenpur"
  },

  {
    src: pf1,
    mobile: pf1mobile,
    h: "",
    alt: "Apartment Project",
    name: "Dhanujaya Elite",
    location: "Bachupally"
  },

  {
    src: pf4,
    mobile: pf6mobile,
    h: "",
    alt: "Residential Project",
    name: "Trident",
    location: "Ameenpur"
  },

  {
    src: pf3,
    mobile: pf3mobile,
    h: "row-span-2",
    alt: "Interior Project",
    name: "Balaji Platina",
    location: "Bachupally"
  },

  {
    src: pf5,
    mobile: pf5mobile,
    h: "",
    alt: "Modern Project",
    name: "Ameya Pearl",
    location: "Ameenpur"
  },

  {
    src: pf6,
    mobile: pf4mobile,
    h: "",
    alt: "Premium Project",
    name: "Green Rich Country",
    location: "Kompally"
  }
];

function Portfolio() {
 const swiperRef = useRef<any>(null);

 

  return (
    <section id="portfolio" className="py-28 md:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-20">
          <p className="text-gold tracking-[0.3em] text-xs uppercase mb-6">
            Our Work
          </p>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Selected <span className="italic">Portfolio</span>
          </h2>

          <span className="gold-divider" />
        </div>

 <div className="relative md:hidden">

  <Swiper
    effect={"coverflow"}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={1.3}
    loop={true}
    onSwiper={(swiper) => (swiperRef.current = swiper)}
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 2,
      scale: 0.85,
      slideShadows: false,
    }}
    modules={[EffectCoverflow]}
  >
    {gallery.map((g, i) => (
      <SwiperSlide key={i}>
        <div className="relative overflow-hidden">

          <img
            src={g.mobile}
            alt={g.alt}
            className="w-full h-[450px] object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute bottom-6 left-0 right-0 text-center">
            <h3 className="font-serif text-white text-2xl">
              {g.name}
            </h3>

            <p className="text-white/80 text-sm">
              📍 {g.location}
            </p>
          </div>

        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Left Arrow */}
  {/* Left Arrow */}
<button
  onClick={() => swiperRef.current?.slidePrev()}
  className="
    absolute
    left-1
    top-1/2
    -translate-y-1/2
    z-20
    w-7
    h-7
    bg-black/50
    text-white
    text-sm
    flex
    items-center
    justify-center
  "
>
  ❮
</button>

{/* Right Arrow */}
<button
  onClick={() => swiperRef.current?.slideNext()}
  className="
    absolute
    right-1
    top-1/2
    -translate-y-1/2
    z-20
    w-7
    h-7
    bg-black/50
    text-white
    text-sm
    flex
    items-center
    justify-center
  "
>
  ❯
</button>
</div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-3 auto-rows-[300px] gap-6">
          {gallery.map((g, i) => (
           <div
  key={i}
  className={`gallery-item ${g.h} relative overflow-hidden group`}
>
              <img
  src={g.src}
  alt={g.alt}
  className="absolute inset-0 w-full h-full object-cover"
/>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <h3 className="font-serif text-white text-2xl mb-2">
                  {g.name}
                </h3>

                <p className="text-white/80 text-sm">
                  📍 {g.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const backToHome = () => {
    setSubmitted(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const viewPortfolio = () => {
    setSubmitted(false);

    setTimeout(() => {
      window.location.hash = "#portfolio";
    }, 100);
  };
const handleSubmit = async (e: any) => {
  e.preventDefault();

  const form = e.target;

  try {
    const formData = new FormData();

    const data = {
  name: form.name.value,
  email: form.email.value,
  preferredLocation: form.location.value,
  mobileNumber: form.mobile.value,
  propertyType: form.property.value,
  budgetRange: form.budget.value,
  propertyRequirement: form.message.value,
};

await fetch(
  "https://script.google.com/macros/s/AKfycby2rZngDQUTbtz67gSd9Bbl4MAZf9la-BwMJ3L9yysfLFXbp8hRP6AmPJUnXoW1ntXrKQ/exec",
  {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }
);

    form.reset();
    setSubmitted(true);
  } catch (error) {
    console.error("Submission Error:", error);
    alert("Failed to submit form");
  }
};


  if (submitted) {
    return (
      <div
        className="
          fixed
          inset-0
          z-[9999]
          bg-background
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-6
        "
      >
        <div className="text-gold text-8xl mb-6">
          ✓
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl mb-6">
          Request Submitted Successfully
        </h2>

        <p className="text-muted-foreground text-base md:text-xl mb-12">
          Thank you for choosing True Home Builders.
          <br />
          Our team will contact you shortly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={viewPortfolio}
            className="btn-gold-outline"
          >
            VIEW PORTFOLIO
          </button>

          <button
            onClick={backToHome}
            className="btn-gold-outline"
          >
            BACK TO HOME
          </button>
        </div>
      </div>
    );
  }
  return (
    <section
      id="contact"
      className="py-28 md:py-40 bg-muted/40"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <p className="text-gold tracking-[0.3em] text-xs uppercase mb-6">
          Get In Touch
        </p>

        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
          Ready to Build Your <span className="italic">Vision?</span>
        </h2>

        <span className="gold-divider mb-8" />

        <p className="text-muted-foreground mb-14 text-lg">
          Let's start a conversation.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-x-10 gap-y-2 text-left"
        >
          <input
            name="name"
            className="form-input"
            placeholder="Name"
            required
          />

          <input
            name="email"
            type="email"
            className="form-input"
            placeholder="Email Address"
            required
          />

          <input
            name="location"
            className="form-input"
            placeholder="Preferred Location"
            required
          />

          <input
            name="mobile"
            className="form-input"
            placeholder="Mobile Number"
            required
          />

          <input
            name="property"
            className="form-input md:col-span-2"
            placeholder="Property Type (Villa / Apartment)"
            required
          />

          <input
            name="budget"
            className="form-input md:col-span-2"
            placeholder="Budget Range"
            required
          />

          <textarea
            name="message"
            rows={4}
            className="form-input md:col-span-2"
            placeholder="What Type of Property Are You Looking For?"
          />

          <div className="md:col-span-2 text-center pt-10">
            <button
              type="submit"
              className="btn-gold-solid"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-10 items-start">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="True Home Builders" className="h-10 w-10 rounded-full" />
           <span 
  className="text-base tracking-wide"
  style={{ fontFamily: "'Antonio', sans-serif" }}
>
 <span
  className="text-lg font-antonio tracking-wide"
>
  TRUE HOME <span className="text-gold">BUILDERS</span>
</span>
</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">Precision, integrity, and exceptional craftsmanship since 2001.</p>
        </div>
       <div className="text-sm text-white/70 space-y-3 break-words">
          <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-gold" /> H No: 5-100293/G1, Shanthi Sree Nagar, Hyderabad, Telangana 502033</div>
          <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-gold" /> (+91) 88868 69900</div>
          <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-gold" /> truehomebuilders18@gmail.com</div>
        </div>
        <div className="flex md:justify-end gap-5">
          <a href="https://www.instagram.com/truehome_builders?igsh=cHY3bG16YmEzbTRi" aria-label="Instagram" className="text-white/70 hover:text-gold transition"><Instagram className="w-5 h-5" /></a>
          
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-white/10 text-xs text-white/40 flex flex-col md:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} True Home Builders. All rights reserved.</span>
        <span>Built with care.</span>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
     <Helmet>
  <title>
    True Home Builders | Villas, Apartments & Open Plots in Hyderabad
  </title>

  <meta
    name="description"
    content="True Home Builders offers premium villas, apartments, and open plots in Hyderabad with quality construction, trusted service, and exceptional craftsmanship."
  />

  <meta
    name="keywords"
    content="True Home Builders, Hyderabad builders, villas, apartments, open plots, construction company Hyderabad"
  />

  <meta property="og:title" content="True Home Builders" />

  <meta
    property="og:description"
    content="Premium villas, apartments, and open plots in Hyderabad."
  />

  <meta
    property="og:image"
    content="https://truehomebuilders.in/logo.png"
  />

  <meta
    property="og:url"
    content="https://truehomebuilders.in"
  />

  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

  <link
    rel="canonical"
    href="https://truehomebuilders.in"
  />

  <link
    rel="icon"
    type="image/png"
    href="/favicon.png"
  />

  <script type="application/ld+json">
    {`
    {
      "@context":"https://schema.org",
  "@type":"LocalBusiness",
  "name":"True Home Builders",
  "url":"https://truehomebuilders.in",
  "image":"https://truehomebuilders.in/logo.png",
  "logo":"https://truehomebuilders.in/logo.png",
  "telephone":"+91 8886869900",
  "address":{
    "@type":"PostalAddress",
    "streetAddress":"Shanthi Sree Nagar",
    "addressLocality":"Hyderabad",
    "addressRegion":"Telangana",
    "postalCode":"502033",
    "addressCountry":"IN"
      }
    }
    `}
  </script>
</Helmet>
      <Header />
<Hero />
<About />
<Team />
<Services />
<Portfolio />
<Contact />
<Footer />
    </main>
  );
}

export default Index;