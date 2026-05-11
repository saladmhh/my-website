import Image from "next/image";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { CoverFlow, MediaItem } from "../components/CoverFlow";
import { Logo } from "../components/Logo";

const carouselItems: MediaItem[] = [
  { type: "instagram", shortcode: "CvpkD3bt8v8" },
  { type: "instagram", shortcode: "C1VCzThLQ_W" },
  { type: "tiktok", username: "thekittyandrea", videoId: "7309878861024562465" },
  { type: "instagram", shortcode: "Cz6auDrML30" },
  { type: "tiktok", username: "thekittyandrea", videoId: "7315823368660340001" },
  { type: "instagram", shortcode: "C22SbFIozrf" },
  { type: "tiktok", username: "thekittyandrea", videoId: "7492855681318423830" },
  { type: "instagram", shortcode: "CkBGVZ9j2hl" },
  { type: "tiktok", username: "thekittyandrea", videoId: "7263507899295501601" },
];

const brands = [
  { name: "Coca-Cola", logo: "/logos/coca-cola.svg", size: "xlarge" },
  { name: "McDonald's", logo: "/logos/mcdonalds.svg", size: "large", offset: "-translate-x-3 sm:-translate-x-6" },
  { name: "Duolingo", logo: "/logos/duolingo.svg", size: "large", offset: "-translate-x-3 sm:-translate-x-5" },
  { name: "Adobe", logo: "/logos/adobe.svg", size: "default" },
];

const proof = [
  { value: "18+", label: "års praktisk creator-erfaring" },
  { value: "12M+", label: "følgere på tværs af profiler" },
  { value: "Mia.", label: "organiske visninger" },
  { value: "2008", label: "første YouTube-kanal" },
];

const channels = [
  { title: "TikTok", url: "https://www.tiktok.com/@smokingalex", type: "Personlig profil" },
  { title: "YouTube", url: "https://www.youtube.com/user/AlexHoltti", type: "Personlig profil" },
  { title: "Instagram", url: "https://www.instagram.com/alexholtti/", type: "Personlig profil" },
  { title: "TikTok", url: "https://www.tiktok.com/@thekittyandrea", type: "Karakterdrevet profil" },
  { title: "Instagram", url: "https://www.instagram.com/andreavonspeed/", type: "Karakterdrevet profil" },
];
const personalChannels = channels.filter(c => c.type === "Personlig profil");
const characterChannels = channels.filter(c => c.type === "Karakterdrevet profil");

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FDFCF8] text-[#111] font-sans selection:bg-[#FF3366] selection:text-white overflow-hidden">
      
      {/* Background Doodles (Subtle & Clean) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* HERO */}
        <svg className="absolute top-[5%] right-[10%] w-64 h-64 text-[#FF3366]/10 animate-[spin_60s_linear_infinite]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M44.7,-76.4C58.3,-69.2,70.5,-57.8,79.5,-44.2C88.5,-30.5,94.3,-15.3,92.5,-0.9C90.8,13.5,81.4,26.9,71.5,38.8C61.7,50.7,51.4,61.1,39.2,69.5C27,78,13.5,84.4,0,84.3C-13.4,84.3,-26.9,77.8,-39.1,69.2C-51.3,60.6,-62.3,50,-71.5,37.8C-80.7,25.6,-88.2,11.8,-88.4,-2.1C-88.6,-16,-81.6,-29.9,-72.1,-41.4C-62.5,-52.8,-50.5,-61.7,-37.6,-69.2C-24.8,-76.6,-12.4,-82.6,1.4,-84.4C15.2,-86.3,30.3,-84.1,44.7,-76.4Z" transform="translate(100 100)" fill="currentColor"/>
        </svg>
        <svg className="absolute top-[12%] left-[-5%] w-96 h-96 text-[#185dff]/5 animate-[spin_90s_linear_infinite_reverse]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36.1,-63.9C45.8,-53.4,51.8,-39.8,59.3,-25.7C66.8,-11.7,75.8,2.7,74.5,16.5C73.3,30.3,61.8,43.6,48.9,53.4C36,63.1,21.7,69.4,6.4,70.9C-8.8,72.4,-25,69.1,-40.1,60.8C-55.2,52.5,-69.2,39.2,-74.6,23.3C-79.9,7.4,-76.6,-11.1,-68,-26.3C-59.5,-41.6,-45.6,-53.5,-31.6,-61.6C-17.6,-69.6,-3.4,-73.8,9.7,-70.7C22.8,-67.7,35.5,-57.4,36.1,-63.9Z" transform="translate(100 100)" fill="currentColor"/>
        </svg>

        {/* SERVICES SECTION */}
        <svg className="absolute top-[30%] right-[-10%] w-[30rem] h-[30rem] text-[#FF3366]/5 animate-[spin_120s_linear_infinite]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.7,-43.3C37.8,-33.4,52.4,-29.7,62.3,-19.9C72.2,-10.1,77.5,5.8,72.4,18.7C67.3,31.6,51.8,41.5,37.6,48.9C23.4,56.3,10.6,61.2,-3.3,66C-17.2,70.8,-32.1,75.5,-43.4,69.7C-54.7,63.9,-62.3,47.6,-68.8,32.3C-75.3,17,-80.7,2.8,-76.3,-8.6C-71.9,-20,-57.7,-28.6,-45.1,-37.2C-32.5,-45.8,-21.5,-54.4,-10.2,-57.1C1.1,-59.8,15.6,-53.2,26.7,-43.3Z" transform="translate(100 100)" fill="currentColor"/>
        </svg>
        <svg className="absolute top-[35%] left-[5%] w-32 h-32 text-[#185dff]/15" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10,90 Q30,10 50,50 T90,10" className="animate-[dash_3s_ease-in-out_infinite_alternate]"/>
        </svg>

        {/* WORK/COVERFLOW SECTION */}
        <svg className="absolute top-[55%] left-[-15%] w-[40rem] h-[40rem] text-[#c8ff3d]/10 animate-[spin_80s_linear_infinite]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M51.8,-66.4C63.5,-54.1,66.8,-34.5,69,-15.9C71.2,2.7,72.3,20.3,64.4,34.5C56.5,48.7,39.6,59.5,21.8,65.7C4,71.9,-14.7,73.5,-30.9,67.6C-47.1,61.7,-60.8,48.3,-68.8,32.3C-76.8,16.3,-79.1,-2.3,-73.4,-18.2C-67.7,-34.1,-54.1,-47.3,-39.6,-58.3C-25.1,-69.3,-9.7,-78.1,5.2,-84.2C20.1,-90.3,35.1,-93.7,51.8,-66.4Z" transform="translate(100 100)" fill="currentColor"/>
        </svg>
        <svg className="absolute top-[65%] right-[10%] w-24 h-24 text-[#FF3366]/20 animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="2" x2="12" y2="22"></line>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
          <line x1="4.93" y1="19.07" x2="19.07" y2="4.93"></line>
        </svg>

        {/* CONTACT SECTION */}
        <svg className="absolute top-[85%] right-[-5%] w-[35rem] h-[35rem] text-[#185dff]/5 animate-[spin_100s_linear_infinite_reverse]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M43.9,-70.6C56.2,-61.8,65.1,-48.2,72,-33.6C78.9,-19,83.8,-3.4,80.1,10.6C76.4,24.6,64.1,37,51.6,47.1C39.1,57.2,26.4,65,11.8,69.5C-2.8,74,-19.3,75.2,-33.1,69.6C-46.9,64,-58,51.6,-66.7,37.6C-75.4,23.6,-81.7,8,-80,-7.1C-78.3,-22.2,-68.6,-36.8,-56.3,-47.5C-44,-58.2,-29.1,-65,-14.2,-68.7C0.7,-72.4,15.6,-73,31.6,-79.4C43.9,-70.6,43.9,-70.6,43.9,-70.6Z" transform="translate(100 100)" fill="currentColor"/>
        </svg>
        <svg className="absolute top-[90%] left-[8%] w-40 h-40 text-[#FF3366]/10" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20,80 C20,20 80,80 80,20" className="animate-[dash_4s_ease-in-out_infinite_alternate]"/>
          <circle cx="20" cy="80" r="2" fill="currentColor"/>
          <circle cx="80" cy="20" r="2" fill="currentColor"/>
        </svg>
      </div>

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-40 bg-[#FDFCF8]/90 px-4 backdrop-blur-xl sm:px-8 border-b border-[#111]/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between py-5">
          <a href="#" className="flex flex-col items-start group">
            <div className="w-[120px] text-[#111] transition-transform group-hover:scale-105 -ml-1.5 sm:-ml-2">
              <Logo className="text-[1.35rem]" scaleX={1.5} letterSpacing="-0.04em" />
            </div>
            <span className="mt-1 block text-[9px] font-bold tracking-[0.2em] uppercase text-[#111]/40">
              Creative Video Production
            </span>
          </a>

          <nav className="flex items-center gap-4 md:gap-8 text-sm font-semibold text-[#111]/60">
            <a className="hidden md:block transition-colors hover:text-[#111]" href="#services">Service</a>
            <a className="hidden md:block transition-colors hover:text-[#111]" href="#work">Videoer</a>
            <a
              className="rounded-full bg-[#111] px-5 py-2.5 sm:px-6 text-xs sm:text-sm font-bold text-white transition-all hover:scale-105 hover:bg-[#FF3366] hover:shadow-[0_0_20px_rgba(255,51,102,0.4)]"
              href="#contact"
            >
              Kontakt os
            </a>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative px-4 pb-20 pt-40 sm:px-8 sm:pb-32 sm:pt-48">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-[#111]/10 bg-white px-4 py-1.5 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#FF3366] mr-2 animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest text-[#111]/60 uppercase">
                End-to-End Video Produktion
              </span>
            </div>
            
            <h1 className="text-4xl font-black tracking-tight text-[#111] xs:text-5xl sm:text-7xl lg:text-[6rem] lg:leading-[0.95]">
              Korte videoer.
              <br />
              <span className="relative inline-block text-[#6B9BD2]">
                Massiv effekt.
              </span>
            </h1>
            
            <p className="mx-auto mt-8 max-w-2xl text-lg font-medium leading-relaxed text-[#111]/60 sm:text-xl">
              Vi skaber organisk short-form video for brands. Fra det første idékast til færdig redigering. Én samlet løsning, der fanger opmærksomheden i feedet.
            </p>
            
            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#services"
                className="inline-flex h-14 items-center justify-center rounded-full bg-[#111] px-8 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-[#FF3366]"
              >
                Pakkeløsning
              </a>
              <a
                href="#work"
                className="inline-flex h-14 items-center justify-center rounded-full border border-[#111]/10 bg-white px-8 text-sm font-bold text-[#111] transition-all hover:bg-[#f4f4f4]"
              >
                Videoer
              </a>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="border-y border-[#111]/5 bg-white px-4 py-14 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-center text-[10px] font-bold uppercase tracking-widest text-[#111]/40 mb-8">
              BRANDS VI HAR ARBEJDET MED
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-24">
              {brands.map((brand) => (
                <div key={brand.name} className="flex justify-center transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={180}
                    height={60}
                    className={`object-contain ${brand.size === "xlarge" ? "h-[50px]" : brand.size === "large" ? "h-9" : "h-7"}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services - Focus on the pipeline/package */}
        <section id="services" className="relative px-4 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 md:text-center max-w-3xl md:mx-auto">
              <h2 className="text-4xl font-black tracking-tight text-[#111] sm:text-5xl">
                Alt samlet ét sted.
              </h2>
              <p className="mt-4 text-lg text-[#111]/60 font-medium">
                Vi tilbyder fuldskala produktion. I behøver ikke finde konsulenter, filmhold og klippere forskellige steder. Vi tager jeres brand fra blankt papir til færdige videoer klar til upload.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Step 1 */}
              <div className="group relative overflow-hidden rounded-3xl bg-white p-10 shadow-sm border border-[#111]/5 transition-all hover:shadow-xl hover:border-[#FF3366]/20">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF3366]/10 text-xl font-black text-[#FF3366] group-hover:scale-110 transition-transform">
                  01
                </div>
                <h3 className="mb-4 text-2xl font-black text-[#111]">Koncept & Idé</h3>
                <p className="text-[#111]/60 leading-relaxed font-medium">
                  Vi finder den kreative vinkel. Hvad er jeres unikke stemme på TikTok eller Reels? Vi udvikler skarpe koncepter, hooks og manuskripter, der passer perfekt til jeres brand.
                </p>
              </div>

              {/* Step 2 */}
              <div className="group relative overflow-hidden rounded-3xl bg-white p-10 shadow-sm border border-[#111]/5 transition-all hover:shadow-xl hover:border-[#185dff]/20">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#185dff]/10 text-xl font-black text-[#185dff] group-hover:scale-110 transition-transform">
                  02
                </div>
                <h3 className="mb-4 text-2xl font-black text-[#111]">Skydning</h3>
                <p className="text-[#111]/60 leading-relaxed font-medium">
                  Vi står for alt det praktiske på set. Vi skyder videoerne med det rette udstyr, lyssætning og instruktion, så we sikrer høj kvalitet og autenticitet.
                </p>
              </div>

              {/* Step 3 */}
              <div className="group relative overflow-hidden rounded-3xl bg-[#111] p-10 shadow-md transition-all hover:-translate-y-2 hover:shadow-2xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-xl font-black text-white group-hover:bg-[#c8ff3d] group-hover:text-[#111] transition-colors">
                  03
                </div>
                <h3 className="mb-4 text-2xl font-black text-white">Klip & Levering</h3>
                <p className="text-white/70 leading-relaxed font-medium">
                  Rytme er alt i short-form. Vi klipper, colorgrader, lægger undertekster og lydeffekter på, så videoerne er maksimeret til at fastholde seerens opmærksomhed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Work / Coverflow */}
        <section id="work" className="relative px-4 py-24 sm:px-8 bg-[#f4f3f0]">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-4xl font-black tracking-tight text-[#111] sm:text-5xl">
                  Digital footprint
                </h2>
                <p className="mt-4 text-[#111]/60 font-medium max-w-md">
                  Cases der demonstrerer vores evne til at fange og fastholde opmærksomheden gennem visuel historiefortælling.
                </p>
              </div>
            </div>
            
            <div className="rounded-3xl bg-white p-4 sm:p-8 shadow-sm border border-[#111]/5">
              <CoverFlow items={carouselItems} />
            </div>

            {/* Stats */}
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 border-y border-[#111]/5 py-12">
              {proof.map((item) => (
                <div key={item.label} className="stat-card p-6 text-center transition-transform hover:scale-105 cursor-default">
                  <div className="text-4xl sm:text-5xl font-black tracking-tight text-[#111]">
                    <AnimatedCounter value={item.value} />
                  </div>
                  <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#111]/40">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Channels Links */}
            <div className="mt-20 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#111] mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#FF3366]"></span>
                  Personlige profiler
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {personalChannels.map(link => (
                    <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between bg-white p-5 rounded-2xl border border-[#111]/5 shadow-sm hover:border-[#FF3366]/30 hover:shadow-md transition-all">
                      <span className="font-bold text-[#111]">{link.title}</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#111]/40 group-hover:text-[#FF3366] transition-colors"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#111] mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#185dff]"></span>
                  Karakterdrevne profiler
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {characterChannels.map(link => (
                    <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between bg-white p-5 rounded-2xl border border-[#111]/5 shadow-sm hover:border-[#185dff]/30 hover:shadow-md transition-all">
                      <span className="font-bold text-[#111]">{link.title}</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#111]/40 group-hover:text-[#185dff] transition-colors"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mini About Section & Contact */}
        <section className="px-4 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_2fr] items-center rounded-3xl bg-white p-8 sm:p-12 shadow-sm border border-[#111]/5">
              
              {/* Alexander Mini Bio */}
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left border-b lg:border-b-0 lg:border-r border-[#111]/10 pb-8 lg:pb-0 lg:pr-8">
                <div className="relative w-32 h-32 overflow-hidden rounded-full border-4 border-white shadow-lg mb-6">
                  <Image
                    src="/profile.jpg"
                    alt="Alexander Holtti"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-black text-[#111]">Alexander Holtti</h3>
                <p className="text-sm font-bold tracking-widest text-[#FF3366] uppercase mt-1">Creative Lead</p>
                <p className="mt-4 text-sm text-[#111]/60 font-medium leading-relaxed">
                  Med 18+ års praktisk creator-erfaring og over 12 mio. følgere, kender vi præcis den opskrift der får indhold til at performe.
                </p>
              </div>

              {/* Contact CTA */}
              <div className="lg:pl-8">
                <h2 className="text-3xl font-black tracking-tight text-[#111] sm:text-5xl">
                  Klar til et samarbejde?
                </h2>
                <p className="mt-4 text-lg text-[#111]/60 font-medium mb-8">
                  Skriv til os med jeres ambitioner, så sammensætter vi en skræddersyet videopakke til jeres brand.
                </p>
                
                <a
                  href="mailto:alexholttibiz@gmail.com?subject=Videoproduktion"
                  className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-full bg-[#111] px-10 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-[#FF3366] hover:shadow-[0_0_20px_rgba(255,51,102,0.4)]"
                >
                  Send en mail
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
