import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
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
  Moon
} from "lucide-react";
import logo from "../assets/logo.png";
import about from "../assets/about.jpg";
import hero from "../assets/hero.png";
import sunset from "../assets/sunset.png";
import pf1 from "../assets/pf1.png";
import pf2 from "../assets/pf2.png";
import pf3 from "../assets/pf3.png";
import pf4 from "../assets/pf4.png";
import pf5 from "../assets/pf5.png";
import pf6 from "../assets/pf6.png";
import villa from "../assets/villa.png";
import apartment from "../assets/apartments.png";
import villaApartment from "../assets/villa-apartment.jpg";



export const Route = createFileRoute("/")({ component: Index });

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

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
    
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

        {/* Logo */}
        <a href="#top" className="flex items-center gap-3">

          <img
            src={logo}
            alt="True Home Builders"
            className="h-12 w-12 rounded-full object-cover"
          />

          <span
           className={`text-lg tracking-wide ${
  scrolled ? "text-black" : "text-white"
}`}
            style={{ fontFamily: "'Antonio', sans-serif" }}
          >
            TRUE HOME <span className="text-gold">BUILDERS</span>
          </span>

        </a>

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
      className="relative h-screen min-h-[700px] overflow-hidden text-white"
    >
      {/* Background Image */}
      <img
        src={sunset}
        alt="Luxury home"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Main content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-10 lg:px-20">

          {/* Left content */}
          <div className="max-w-[650px] text-left">

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] mb-8">
              Building Foundations
              <br />
              for <span className="italic text-gold">Life</span>
            </h1>

            <p className="text-base md:text-lg text-white/85 mb-12 font-light leading-relaxed max-w-[500px]">
              Precision, integrity, and exceptional craftsmanship in every detail.
            </p>

            <a
              href="#portfolio"
              className="btn-gold-outline"
            >
              View Our Work
            </a>

          </div>

        </div>
      </div>

      {/* Scroll text */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-xs tracking-[0.3em] text-white/70 uppercase">
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
            className="w-full h-[600px] object-cover"
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

          <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">

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

   {/* OUR TEAM */}

<div className="mt-24 border-t border-border pt-14">

  <div className="text-center mb-12">
    <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">
      OUR TEAM
    </p>

    <h3 className="font-serif text-3xl md:text-4xl mb-4">
      Professionals Behind Every
      <span className="italic text-gold"> Dream Home</span>
    </h3>

    <p className="text-muted-foreground max-w-2xl mx-auto">
      A dedicated team of specialists working together to deliver
      exceptional homes with precision, creativity, and care.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

    <div className="bg-muted/20 border border-border rounded-xl p-8 text-center hover:border-gold transition-all duration-300">
      <h4 className="font-serif text-3xl mb-3">
        Villa Expert
      </h4>

      <p className="text-gold tracking-widest uppercase text-sm">
        Senior Project Planner
      </p>
    </div>

    <div className="bg-muted/20 border border-border rounded-xl p-8 text-center hover:border-gold transition-all duration-300">
      <h4 className="font-serif text-3xl mb-3">
        Design Specialist
      </h4>

      <p className="text-gold tracking-widest uppercase text-sm">
        Architectural Designer
      </p>
    </div>

    <div className="bg-muted/20 border border-border rounded-xl p-8 text-center hover:border-gold transition-all duration-300">
      <h4 className="font-serif text-3xl mb-3">
        Project Consultant
      </h4>

      <p className="text-gold tracking-widest uppercase text-sm">
        Client Relations
      </p>
    </div>

    <div className="bg-muted/20 border border-border rounded-xl p-8 text-center hover:border-gold transition-all duration-300">
      <h4 className="font-serif text-3xl mb-3">
        Construction Manager
      </h4>

      <p className="text-gold tracking-widest uppercase text-sm">
        Site Operations
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
    desc: "Combining elegance and functionality in every residential project.",
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

        <div className="grid md:grid-cols-3 gap-8">

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
    h: "row-span-2",
    alt: "Villa Project",
    name: "Sunshine ARKA",
    location: "Chakrapuri Colony"
  },

  {
    src: pf1,
    h: "",
    alt: "Apartment Project",
    name: "Dhanujaya Elite",
    location: "Bachupally"
  },

  {
    src: pf4,
    h: "",
    alt: "Residential Project",
    name: "Trident",
    location: "Ameenpur"
  },

  {
    src: pf3,
    h: "row-span-2",
    alt: "Interior Project",
    name: "Balaji Platina",
    location: "Bachupally"
  },

  {
    src: pf5,
    h: "",
    alt: "Modern Project",
    name: "Ameya Pearl",
    location: "Ameenpur"
  },

  {
    src: pf6,
    h: "",
    alt: "Premium Project",
    name: "Green Rich Country",
    location: "Kompally"
  }
];

function Portfolio() {
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

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[260px] md:auto-rows-[300px] gap-4 md:gap-6">

          {gallery.map((g, i) => (

            <div
              key={i}
              className={`gallery-item ${g.h} relative overflow-hidden group`}
            >

              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />

              {/* Hover Overlay */}

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

    const data = {
      name: form.name.value,
      email: form.email.value,
      location: form.location.value,
      phone: form.mobile.value,
      propertyType: form.property.value,
      budget: form.budget.value,
      project: form.message.value,
    };

    console.log(data);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzdjXi-npphM2Ld1XLsKKT3hFpCz7GBABABdQDl_bRg2vBAeN5H5naoi-vEYy5WqLU1Gw/exec",
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

      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 100);

    } catch (error) {
      console.error(error);
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

        <h2 className="font-serif text-5xl md:text-7xl mb-6">
          Request Submitted Successfully
        </h2>

        <p className="text-muted-foreground text-xl mb-12">
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
            placeholder="Email"
            required
          />

          <input
            name="location"
            className="form-input"
            placeholder="Location"
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
            placeholder="Budget"
            required
          />

          <textarea
            name="message"
            rows={4}
            className="form-input md:col-span-2"
            placeholder="Tell us about your project"
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
        <div className="text-sm text-white/70 space-y-3">
          <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-gold" /> 1280 Elm Avenue, Suite 400</div>
          <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-gold" /> (555) 482-1900</div>
          <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-gold" /> hello@truehomebuilders.com</div>
        </div>
        <div className="flex md:justify-end gap-5">
          <a href="#" aria-label="Instagram" className="text-white/70 hover:text-gold transition"><Instagram className="w-5 h-5" /></a>
          <a href="#" aria-label="Facebook" className="text-white/70 hover:text-gold transition"><Facebook className="w-5 h-5" /></a>
          <a href="#" aria-label="LinkedIn" className="text-white/70 hover:text-gold transition"><Linkedin className="w-5 h-5" /></a>
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
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

export default Index;