import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowRight, Check, Search, Map, Rocket } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

gsap.registerPlugin(ScrollTrigger);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// ----------------------
// A. NAVBAR
// ----------------------
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center mt-6 px-4 pointer-events-none">
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
          <a href="#features" className="hover:opacity-100 transition-opacity">What we do</a>
          <a href="#philosophy" className="hover:opacity-100 transition-opacity">Our approach</a>
          <a href="#protocol" className="hover:opacity-100 transition-opacity">How it works</a>
        </div>
        <button className={cn(
          "magnetic-btn text-sm font-semibold px-5 py-2 rounded-full",
          scrolled ? "bg-accent text-white" : "bg-dark text-white"
        )}>
          <span>Free review</span>
        </button>
      </div>
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
      <div className="max-w-5xl mx-auto flex flex-col items-start space-y-4">
        <h1 className="flex flex-col text-dark">
          <span ref={text1Ref} className="text-4xl md:text-6xl font-sans font-bold tracking-tight mb-2 md:mb-3 ml-1">
            We make things better.
          </span>
          <span ref={text2Ref} className="text-[8vw] leading-[1] md:text-7xl font-serif tracking-tighter text-accent">
            with Intent.
          </span>
        </h1>
        <div ref={btnRef} className="pt-6">
          <button className="magnetic-btn bg-dark text-white px-8 py-4 rounded-full flex items-center gap-3">
            <span className="font-semibold">Get a free review</span>
            <ArrowRight size={18} />
          </button>
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
    { title: 'Daily briefings', desc: 'What you need to know, every morning.' },
    { title: 'Live reports', desc: 'Numbers that update themselves.' },
    { title: 'Task automation', desc: 'Routine jobs, handled.' }
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
        <h3 className="text-xl heading-sans mb-1 text-dark">AI tools that help you run things</h3>
        <p className="text-sm text-dark/60">Better info, faster decisions.</p>
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
        <p className="text-sm text-dark/60">Let AI handle the repetitive stuff.</p>
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
        <p className="text-sm text-dark/60">We spot the biggest time sinks first.</p>
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
        <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight mb-16 text-center max-w-2xl mx-auto">
          We find what's slowing you down. <br/>
          <span className="text-accent font-serif font-normal">Then we fix it.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ToolChecklist />
          <TelemetryTypewriter />
          <WeekHighlighter />
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
      <div className="absolute inset-0 opacity-10">
        <img src="https://images.unsplash.com/photo-1541888056260-247f9e830e23?q=80&w=2940&auto=format&fit=crop" alt="Texture" className="w-full h-full object-cover" />
      </div>
      
      <div ref={textContainerRef} className="relative z-10 max-w-4xl mx-auto flex flex-col items-start gap-12">
        <p className="phil-text text-xl md:text-2xl font-mono text-white/50 tracking-tight max-w-2xl">
          Most AI consultants try to sell you tools you don't need and projects that drag on for months.
        </p>
        <h2 className="phil-text text-4xl md:text-7xl font-sans font-bold tracking-tighter leading-tight">
          We focus on: <br />
          <span className="font-serif text-accent font-normal pr-4">real results </span>
          <span>— less busywork, <br/> more time for what matters.</span>
        </h2>
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
    { num: '01', title: 'Free review', desc: 'We look at how your business runs day to day and find where AI can save you real time and money.', icon: Search },
    { num: '02', title: 'Your plan', desc: 'We put together a clear plan for the AI tools that will actually make a difference, built around how your team works.', icon: Map },
    { num: '03', title: 'Set up and training', desc: 'We get everything running, show your team how to use it, and make sure it works without getting in the way.', icon: Rocket }
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
        <div className="flex flex-col gap-32 pb-32">
          {steps.map((step, i) => (
            <div 
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="sticky top-[15vh] w-full min-h-[60vh] bg-surface rounded-[3rem] p-10 md:p-16 border border-dark/5 shadow-xl flex flex-col justify-between overflow-hidden"
            >
              <div className="flex justify-between items-start">
                <span className="font-mono text-5xl md:text-7xl text-dark/10 font-light tracking-tighter">{step.num}</span>
                <div className="w-16 h-16 rounded-full border border-dark/10 flex items-center justify-center text-accent bg-accent/5">
                  <step.icon strokeWidth={1} />
                </div>
              </div>
              
              <div className="mt-24 md:mt-32 max-w-2xl text-dark">
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
          Ready to get <br/> <span className="font-serif text-accent font-normal">time back?</span>
        </h2>
        <p className="text-lg text-dark/60 mx-auto max-w-lg mb-10">
          Most businesses waste hours every week on work that AI could handle. We'll show you where.
        </p>
        <button className="magnetic-btn bg-dark text-white text-lg font-medium px-10 py-5 rounded-full inline-flex items-center gap-4">
          <span>Get a free review</span>
          <ArrowRight size={20} />
        </button>
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
            We work with businesses to make things better and put AI where it actually helps.
          </p>
        </div>
        
        <div className="flex gap-16 md:gap-24">
          <div className="flex flex-col gap-4 text-sm font-medium">
            <h5 className="text-white/30 font-mono tracking-widest text-xs uppercase mb-2">Explore</h5>
            <a href="#features" className="hover:text-accent transition-colors">What we do</a>
            <a href="#protocol" className="hover:text-accent transition-colors">How it works</a>
          </div>
          <div className="flex flex-col gap-4 text-sm font-medium">
            <h5 className="text-white/30 font-mono tracking-widest text-xs uppercase mb-2">Legal</h5>
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
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
// MAIN APP COMPONENT
// ----------------------
export default function App() {
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
