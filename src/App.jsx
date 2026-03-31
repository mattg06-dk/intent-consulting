import { useEffect, useRef, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowRight, Check, MessageCircle, Map, Wrench, Handshake } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// ----------------------
// A. NAVBAR
// ----------------------
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#features', label: 'What we do' },
    { href: '#philosophy', label: 'Our approach' },
    { href: '#protocol', label: 'How it works' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex flex-col items-center mt-6 px-4 pointer-events-none">
      <div
        className={cn(
          "pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-700 w-full max-w-4xl",
          scrolled
            ? "bg-surface/80 backdrop-blur-xl border border-dark/10 shadow-sm text-dark"
            : "bg-transparent text-dark border border-transparent"
        )}
      >
        <span className="font-sans font-bold text-lg tracking-tighter">Intent.</span>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium opacity-80">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="hover:text-accent transition-colors">{label}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(o => !o)}
          >
            <span className={cn("block h-0.5 w-5 bg-current transition-all duration-300 origin-center", menuOpen && "rotate-45 translate-y-2")} />
            <span className={cn("block h-0.5 w-5 bg-current transition-all duration-300", menuOpen && "opacity-0")} />
            <span className={cn("block h-0.5 w-5 bg-current transition-all duration-300 origin-center", menuOpen && "-rotate-45 -translate-y-2")} />
          </button>
          <a href="https://calendly.com/intentconsulting/30min" target="_blank" rel="noopener noreferrer" aria-label="Book a free call" className={cn(
            "magnetic-btn text-sm font-semibold px-5 py-2 rounded-full",
            scrolled ? "bg-accent text-white" : "bg-dark text-white"
          )}>
            <span>Book a free call</span>
          </a>
        </div>
      </div>
      {menuOpen && (
        <div className="pointer-events-auto mt-2 w-full max-w-4xl bg-surface/80 backdrop-blur-xl rounded-2xl border border-dark/10 shadow-sm text-dark">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center px-6 text-sm font-medium opacity-80 hover:text-accent hover:opacity-100 transition-colors min-h-[44px]"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// ----------------------
// B. HERO SECTION
// ----------------------
function Hero() {
  const heroRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const btnRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([text1Ref.current, text2Ref.current, btnRef.current], {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative w-full pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-16 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col items-start space-y-6">
        <h1 ref={text1Ref} className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-dark max-w-3xl">
          You didn't start a business to spend your days on admin.
        </h1>
        <p ref={text2Ref} className="text-lg md:text-xl font-sans text-dark/60 max-w-2xl leading-relaxed">
          We look at how you actually work, find the things that are eating your time, and set up AI that handles them for you.
        </p>
        <div ref={btnRef} className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a href="https://calendly.com/intentconsulting/30min" target="_blank" rel="noopener noreferrer" aria-label="Book a free call" className="magnetic-btn bg-accent text-white px-8 py-4 rounded-full flex items-center gap-3">
            <span className="font-semibold">Book a free call</span>
            <ArrowRight size={18} />
          </a>
          <a href="#features" className="text-sm font-medium text-dark/50 hover:text-dark transition-colors">
            See what we actually do ↓
          </a>
        </div>
      </div>
    </section>
  );
}

// ----------------------
// C. FEATURES SECTION
// ----------------------
function ToolChecklist() {
  const items = [
    { title: 'Reporting dashboard', desc: 'Your numbers pulled together in one place, updated automatically.' },
    { title: 'Live data from your tools', desc: 'Connected to your CRM, accounting software, booking system.' },
    { title: 'Automated follow-ups', desc: 'Reminders, check-ins, and chase-ups that run on their own.' }
  ];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % items.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="feature-card p-8 h-[380px] flex flex-col">
      <div>
        <h3 className="text-xl heading-sans mb-1 text-dark">Know how your business is doing</h3>
        <p className="text-sm text-dark/60">Without pulling it all together yourself every month.</p>
      </div>
      <div className="mt-auto flex flex-col gap-3">
        {items.map((item, i) => (
          <div
            key={i}
            className={cn(
              "flex items-start gap-3 p-3 rounded-2xl border transition-all duration-500",
              i === active
                ? "border-accent/30 bg-accent/5"
                : "border-dark/5 bg-transparent"
            )}
          >
            <div className={cn(
              "mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-500",
              i === active ? "bg-accent text-white" : "bg-dark/10 text-transparent"
            )}>
              <Check size={12} />
            </div>
            <div>
              <span className="font-medium text-sm text-dark">{item.title}</span>
              <p className="text-xs text-dark/50 mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TelemetryTypewriter() {
  const messages = [
    "Replacing manual data entry...",
    "Automating client follow-ups...",
    "Generating weekly reports...",
    "Freeing 15 hours per week..."
  ];
  const [text, setText] = useState("");
  const [msgIdx, setMsgIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = messages[msgIdx];
    let timeout;
    
    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(current.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setMsgIdx((prev) => (prev + 1) % messages.length);
        }
      }, 30);
    } else {
      timeout = setTimeout(() => {
        setText(current.substring(0, text.length + 1));
        if (text.length === current.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }, 60);
    }
    
    return () => clearTimeout(timeout);
  }, [text, isDeleting, msgIdx, messages]);

  return (
    <div className="feature-card p-8 h-[380px] flex flex-col">
      <div>
        <h3 className="text-xl heading-sans mb-1 text-dark">Stop doing the same thing twice</h3>
        <p className="text-sm text-dark/60">Invoice reminders, lead follow-ups, data entry, appointment scheduling. If your team does it the same way every time, we automate it.</p>
      </div>
      <div className="mt-auto bg-primary/30 p-5 rounded-3xl h-36 border border-dark/5 flex flex-col justify-between">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-[11px] text-dark/40 font-medium">Working on it right now</span>
        </div>
        <p className="text-base font-medium text-dark leading-relaxed">
          {text}<span className="animate-pulse text-accent ml-0.5">|</span>
        </p>
      </div>
    </div>
  );
}

function WeekHighlighter() {
  const days = ['S','M','T','W','T','F','S'];
  const hours = [2, 4, 1, 5, 3, 1, 0];
  const [active, setActive] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => {
        const candidates = hours.map((h, i) => ({ h, i })).filter(d => d.h > 0);
        const next = candidates[(candidates.findIndex(c => c.i === prev) + 1) % candidates.length];
        return next.i;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="feature-card p-8 h-[380px] flex flex-col">
      <div>
        <h3 className="text-xl heading-sans mb-1 text-dark">Find where you're losing time</h3>
        <p className="text-sm text-dark/60">We map where your time actually goes and find the changes with the biggest payoff.</p>
      </div>
      <div className="mt-auto w-full border border-dark/5 rounded-3xl p-5 bg-primary/20">
        <div className="flex items-end justify-between gap-2 h-24 mb-3">
          {hours.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
              <div
                className={cn(
                  "w-full rounded-lg transition-all duration-500",
                  i === active ? "bg-accent" : "bg-dark/10"
                )}
                style={{ height: `${(h / 5) * 100}%` }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between gap-2">
          {days.map((day, i) => (
            <span
              key={i}
              className={cn(
                "flex-1 text-center text-xs font-medium transition-colors duration-500",
                i === active ? "text-accent" : "text-dark/30"
              )}
            >
              {day}
            </span>
          ))}
        </div>
        {hours[active] > 0 && (
          <p className="text-xs text-accent font-medium mt-3 text-center transition-all duration-500">
            {hours[active]}h wasted on {days[active] === 'W' ? 'Wednesday' : days[active] === 'M' ? 'Monday' : days[active] === 'T' && active === 2 ? 'Tuesday' : days[active] === 'T' ? 'Thursday' : days[active] === 'F' ? 'Friday' : days[active] === 'S' && active === 0 ? 'Sunday' : 'Saturday'}
          </p>
        )}
      </div>
    </div>
  );
}

function Features() {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-24 px-6 md:px-16 bg-background text-dark">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight mb-6">
            What we actually do
          </h2>
          <p className="text-lg text-dark/60 leading-relaxed">
            Automating a mess just gives you a faster mess. We start by understanding how your business actually works, where your time goes, and what's getting in the way. Then we figure out what to fix, what to automate, and what to leave alone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ToolChecklist />
          <TelemetryTypewriter />
          <WeekHighlighter />
        </div>

        <div className="feat-card mt-24 mb-12 max-w-3xl mx-auto text-center">
          <p className="text-base md:text-lg font-mono text-dark/40 mb-4 tracking-tight">And once the basics are running?</p>
          <p className="text-3xl md:text-5xl font-sans font-bold tracking-tight leading-tight">
            That's the foundation. After that, we build the things that actually <span className="bg-accent text-white px-3 py-0.5 rounded-lg whitespace-nowrap">grow your business.</span>
          </p>
          <p className="text-lg md:text-xl text-dark/60 leading-relaxed mt-6">
            Prospect research. Market intelligence. The kind of work you'd love to do but never get round to.
          </p>
        </div>
      </div>
    </section>
  );
}

// ----------------------
// D. PHILOSOPHY
// ----------------------
function Philosophy() {
  const philRef = useRef(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".phil-text", {
        scrollTrigger: {
          trigger: textContainerRef.current,
          start: "top 70%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });
    }, philRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophy" ref={philRef} className="relative py-32 px-6 overflow-hidden bg-dark text-white">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />
      
      <div ref={textContainerRef} className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-12">
        <p className="phil-text text-xl md:text-2xl font-mono text-white/50 tracking-tight max-w-2xl">
          Most AI consultants sell you tools you don't need and projects that drag on for months.
        </p>
        <h2 className="phil-text text-4xl md:text-7xl font-sans font-bold tracking-tighter leading-tight">
          You work with <span className="bg-accent text-white px-3 py-0.5 rounded-lg whitespace-nowrap">the person who builds it.</span>
        </h2>
        <div className="phil-text flex flex-col gap-8 max-w-2xl text-left">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">We speak human.</h3>
            <p className="text-white/50">No jargon, no buzzwords. We tell you what we'll do, in plain English, and then we do it.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-1">We do the work.</h3>
            <p className="text-white/50">This isn't advice you have to implement yourself. We build it, set it up, and make sure it works.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-1">We're honest about what AI can't do.</h3>
            <p className="text-white/50">If something doesn't need AI, we'll tell you. If a simpler solution exists, we'll suggest that instead.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ----------------------
// E. PROTOCOL - Sticky Archive
// ----------------------
function Protocol() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const steps = [
    { num: '01', title: 'Chat', desc: 'You tell us what\'s taking up your time, what\'s frustrating you, and what you wish just worked better. No questionnaires, no pre-work — just a straight talk about your business.', icon: MessageCircle },
    { num: '02', title: 'Diagnosis', desc: 'We look at how your business actually runs — the tools you use, the tasks you repeat, the stuff that falls through the cracks. Then we tell you, honestly, what\'s worth fixing and what isn\'t.', icon: Map },
    { num: '03', title: 'Build', desc: 'We set up the automations and AI tools that make the biggest difference — working systems, not strategy documents. Typically within two to five weeks.', icon: Wrench },
    { num: '04', title: 'Handover', desc: 'We show you how everything works, make sure you\'re comfortable, and hand it over. If something breaks later, we\'re a call away. But the goal is to give you something that runs without us.', icon: Handshake }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (index === cardsRef.current.length - 1) return;
        
        gsap.to(card, {
          scrollTrigger: {
            trigger: cardsRef.current[index + 1],
            start: "top center",
            end: "top top",
            scrub: true,
          },
          scale: 0.9,
          opacity: 0.5,
          filter: "blur(10px)",
        });
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" ref={containerRef} className="bg-primary/30 relative">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-sm font-mono tracking-widest uppercase mb-12 text-center text-dark/60">How it works</h2>
        <div className="flex flex-col gap-20 pb-20">
          {steps.map((step, i) => (
            <div 
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="sticky top-[15vh] w-full min-h-[35vh] bg-surface rounded-[3rem] p-10 md:p-16 border border-dark/5 shadow-xl flex flex-col justify-between overflow-hidden"
            >
              <div className="flex justify-between items-start">
                <span className="font-mono text-5xl md:text-7xl text-dark/10 font-light tracking-tighter">{step.num}</span>
                <div className="w-16 h-16 rounded-full border border-dark/10 flex items-center justify-center text-accent bg-accent/5">
                  <step.icon strokeWidth={1} />
                </div>
              </div>
              
              <div className="mt-10 md:mt-14 max-w-2xl text-dark">
                <h3 className="text-3xl md:text-5xl font-sans font-bold tracking-tight mb-6">{step.title}</h3>
                <p className="text-lg md:text-xl font-sans opacity-70 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------
// F. GET STARTED (Membership alternative)
// ----------------------
function GetStarted() {
  return (
    <section className="py-32 px-6 bg-surface">
      <div className="max-w-4xl mx-auto container-border rounded-[3rem] bg-background p-12 md:p-24 text-center overflow-hidden relative shadow-sm">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter text-dark mb-6">
          Fancy getting some of <br/> <span className="font-serif text-accent font-normal">your time back?</span>
        </h2>
        <p className="text-lg text-dark/60 mx-auto max-w-lg mb-10">
          No pitch deck, no pressure. Just a straight conversation about your business and whether we can help. If we can't, we'll tell you.
        </p>
        <div className="flex flex-col items-center gap-4">
          <a href="https://calendly.com/intentconsulting/30min" target="_blank" rel="noopener noreferrer" aria-label="Book a free call" className="magnetic-btn bg-dark text-white text-lg font-medium px-10 py-5 rounded-full inline-flex items-center gap-4">
            <span>Book a free call</span>
            <ArrowRight size={20} />
          </a>
          <a href="mailto:matt@intentconsulting.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-dark/40 hover:text-dark/60 transition-colors underline underline-offset-4">
            or just drop us a message
          </a>
        </div>
      </div>
    </section>
  );
}

// ----------------------
// G. FOOTER
// ----------------------
function Footer() {
  return (
    <footer className="bg-dark text-white rounded-t-[4rem] px-8 pt-20 pb-10 mt-[-2rem] relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="max-w-xs">
          <h4 className="text-2xl font-bold font-sans tracking-tight mb-4">Intent<span className="text-accent text-3xl">.</span></h4>
          <p className="text-white/50 text-sm font-sans">
            AI consulting for small businesses. Based in the UK.
          </p>
        </div>
        
        <div className="flex gap-16 md:gap-24">
          <div className="flex flex-col gap-4 text-sm font-medium">
            <h5 className="text-white/30 font-mono tracking-widest text-xs uppercase mb-2">Explore</h5>
            <a href="#features" className="hover:text-accent transition-colors">What we do</a>
            <a href="#philosophy" className="hover:text-accent transition-colors">Our approach</a>
            <a href="#protocol" className="hover:text-accent transition-colors">How it works</a>
          </div>
          <div className="flex flex-col gap-4 text-sm font-medium">
            <h5 className="text-white/30 font-mono tracking-widest text-xs uppercase mb-2">Legal</h5>
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-accent transition-colors">Terms</Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="font-mono text-xs text-white/50 uppercase tracking-widest">All systems running</span>
        </div>
        <span className="font-mono text-xs text-white/30">© {new Date().getFullYear()} Intent Consulting.</span>
      </div>
    </footer>
  );
}

// ----------------------
// H. TESTIMONIALS
// ----------------------
function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-16 bg-background">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-mono tracking-widest uppercase text-dark/40 text-center mb-12">What clients say</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface rounded-[2rem] p-8 md:p-10 border border-dark/5 shadow-sm flex flex-col gap-6">
            <p className="text-dark/80 text-lg leading-relaxed">
              "Matt helped us cut three hours of admin work every week. It's not something we'd have set up ourselves, but it just runs now."
            </p>
            <div>
              <p className="text-sm font-semibold text-dark">Business owner</p>
              <p className="text-sm text-dark/40">Independent estate agency</p>
            </div>
          </div>
          <div className="bg-surface rounded-[2rem] p-8 md:p-10 border border-dark/5 shadow-sm flex flex-col gap-6">
            <p className="text-dark/80 text-lg leading-relaxed">
              "We were sceptical about AI at first. But the approach was practical, not salesy. We got one thing that works rather than ten things to manage."
            </p>
            <div>
              <p className="text-sm font-semibold text-dark">Director</p>
              <p className="text-sm text-dark/40">Small professional services firm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ----------------------
// MAIN APP COMPONENT
// ----------------------
function HomePage() {
  return (
    <main className="font-sans antialiased text-dark bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <GetStarted />
      <Footer />
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
}
