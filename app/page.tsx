import Image from "next/image";
import Script from "next/script";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { CoverFlow, MediaItem } from "../components/CoverFlow";

const carouselItems: MediaItem[] = [
  { type: "instagram", shortcode: "C1VCzThLQ_W" },
  { type: "tiktok", username: "thekittyandrea", videoId: "7309878861024562465" },
  { type: "instagram", shortcode: "Cz6auDrML30" },
  { type: "tiktok", username: "thekittyandrea", videoId: "7315823368660340001" },
  { type: "instagram", shortcode: "C22SbFIozrf" },
  { type: "tiktok", username: "thekittyandrea", videoId: "7492855681318423830" },
  { type: "instagram", shortcode: "CkBGVZ9j2hl" },
];

const proof = [
  { value: "18+", label: "års praktisk creator-erfaring" },
  { value: "12M+", label: "følgere på tværs af profiler" },
  { value: "Mia.", label: "organiske visninger" },
  { value: "2008", label: "første YouTube-kanal" },
];

const services = [
  {
    kicker: "01",
    title: "Content-strategi",
    copy: "En klar kreativ retning for short-form, bygget på målgruppe, platform og brandets naturlige stemme.",
  },
  {
    kicker: "02",
    title: "Produktion",
    copy: "Ideer, optagelse, rytme og redigering, så videoerne føles skabt til feedet fra første frame.",
  },
  {
    kicker: "03",
    title: "Creator-sparring",
    copy: "Et erfarent blik på hooks, format, timing og payoffs for teams, der vil løfte deres interne output.",
  },
];

const process = [
  "Skab et unikt format på egne præmisser",
  "Fang seeren effektivt fra første sekund",
  "Rediger for fastholdelse og watch-time",
  "Maksimér interaktion og delinger",
];

const brands = [
  { name: "Coca-Cola", logo: "/logos/coca-cola.svg", size: "xlarge" },
  { name: "McDonald's", logo: "/logos/mcdonalds.svg", size: "large", offset: "-translate-x-3 sm:-translate-x-6" },
  { name: "Duolingo", logo: "/logos/duolingo.svg", size: "large", offset: "-translate-x-3 sm:-translate-x-5" },
  { name: "Adobe", logo: "/logos/adobe.svg", size: "default" },
];

const channels = [
  {
    title: "TikTok",
    url: "https://www.tiktok.com/@smokingalex",
    type: "Personlig profil",
  },
  {
    title: "YouTube",
    url: "https://www.youtube.com/user/AlexHoltti",
    type: "Personlig profil",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/alexholtti/",
    type: "Personlig profil",
  },
  {
    title: "TikTok",
    url: "https://www.tiktok.com/@thekittyandrea",
    type: "Karakterdrevet profil",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/andreavonspeed/",
    type: "Karakterdrevet profil",
  },
];

const personalChannels = channels.filter(
  (channel) => channel.type === "Personlig profil",
);

const characterChannels = channels.filter(
  (channel) => channel.type === "Karakterdrevet profil",
);

export default function Home() {
  return (
    <div className="sketch-site min-h-screen text-[#080808]">
      <header className="fixed inset-x-0 top-0 z-40 border-b-2 border-[#080808]/15 bg-[#f8f7f2]/82 px-4 backdrop-blur-xl sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 py-4">
          <a
            href="#"
            aria-label="Alexander Holtti forsiden"
            className="group leading-none"
          >
            <span className="block text-base font-black">
              Alexander Holtti
            </span>
            <span className="mt-1 block text-xs font-black uppercase text-black/58">
              Social-first video
            </span>
          </a>

          <nav className="ml-auto hidden items-center gap-5 text-sm font-black text-black/70 md:flex">
            <a className="transition hover:text-black" href="#approach">
              Tilgang
            </a>
            <a className="transition hover:text-black" href="#services">
              Services
            </a>
            <a className="transition hover:text-black" href="#work">
              Personlige kanaler
            </a>
            <a
              className="sketch-button min-h-11 bg-[#080808] px-5 text-white"
              href="#contact"
            >
              Book intro
            </a>
          </nav>

          <a
            href="#contact"
            className="sketch-button bg-[#080808] px-4 py-3 text-sm font-black text-white md:hidden"
          >
            Kontakt
          </a>
        </div>
      </header>

      <main>
        <section className="hero-marker relative overflow-hidden px-4 pb-12 pt-28 sm:px-8 sm:pb-14 sm:pt-32">
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:min-h-[74svh] lg:grid-cols-[0.98fr_0.72fr] lg:gap-14">
            <div className="order-2 max-w-4xl lg:order-1">
              <p className="sketch-label mb-6 inline-flex rotate-0 skew-x-0 bg-[#c8ff3d]">
                Organisk short-form for brands, der vil blive valgt i feedet
              </p>
              <h1 className="isolate max-w-4xl text-6xl font-black leading-[0.84] sm:text-7xl lg:text-9xl">
                Social video, der bliver{" "}
                <span className="relative inline-block">
                  set.
                  <span className="absolute inset-x-0 bottom-2 -z-10 h-5 rotate-[-1deg] bg-[#c8ff3d] sm:bottom-3 sm:h-6" />
                </span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-black/68 sm:text-xl sm:leading-9">
                Jeg hjælper brands med social video, fra idé og optagelse til
                redigering af content, der føles naturligt nok til at blive delt.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:alexholttibiz@gmail.com?subject=Intro%20om%20video%20content"
                  className="sketch-button bg-[#080808] text-white"
                >
                  Start et samarbejde
                </a>
                <a href="#approach" className="sketch-button bg-[#f8f7f2]">
                  Se metoden
                </a>
              </div>
            </div>

            <div className="relative order-1 mx-auto w-full max-w-[320px] sm:max-w-[400px] lg:order-2 lg:ml-auto lg:max-w-[430px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-white shadow-[8px_8px_0_#080808]">
                <Image
                  src="/profile.jpg"
                  alt="Alexander Holtti"
                  fill
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 400px, 430px"
                  className="object-cover object-[55%_28%]"
                />
              </div>
              <div className="absolute -bottom-5 left-3 right-6 rotate-[-2deg] rounded-lg border-2 border-[#080808] bg-white p-4 text-[#080808] shadow-[5px_5px_0_#080808] sm:left-6">
                <p className="text-sm font-black text-[#ff3b2f]">
                  Creator siden 2008
                </p>
                <p className="mt-2 text-sm font-bold leading-6 text-black/70">
                  Erfaring fra YouTube, Vine, TikTok, Instagram og karakterdrevet
                  content med organisk rækkevidde.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="brand-feature relative z-10 -mt-2 px-4 pb-12 pt-0 sm:-mt-6 sm:px-8 sm:pb-16 sm:pt-0 lg:-mt-8">
          <div className="mx-auto max-w-7xl">
            <p className="mb-0 text-center text-xs font-black uppercase tracking-widest text-black/54 sm:mb-1 sm:text-sm">
              Udvalgte samarbejder
            </p>
            <div
              className="mt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-14 md:gap-20"
              aria-label="Udvalgte brandlogos"
            >
              {brands.map((brand) => (
                <div
                  className={`group flex cursor-pointer justify-center transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:drop-shadow-md ${brand.size === "xlarge" ? "w-[150px] sm:w-[200px] md:w-[240px]" :
                      brand.size === "large" ? "w-[110px] sm:w-[145px] md:w-[165px]" :
                        "w-[90px] sm:w-[125px]"
                    } ${(brand as any).offset || ""}`}
                  key={brand.name}
                >
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={220}
                    height={80}
                    className={`w-full object-contain ${brand.size === "xlarge" ? "h-[74px] sm:h-[98px]" :
                        brand.size === "large" ? "h-10 sm:h-14" :
                          "h-7 sm:h-[35px]"
                      }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-label="Resultater"
          className="stats-section relative px-4 pb-12 sm:-mt-2 sm:pb-16 sm:px-8"
        >
          <div className="stats-stage mx-auto max-w-7xl bg-[#080808] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {proof.map((item) => (
                <div
                  key={item.label}
                  className="metric-card bg-white px-6 py-6 sm:px-7"
                >
                  <div className="text-5xl font-black leading-none tracking-[-0.04em] text-[#080808] sm:text-6xl xl:text-7xl">
                    <AnimatedCounter value={item.value} />
                  </div>
                  <div className="mt-5 max-w-52 text-base font-black leading-6 text-black/62 sm:text-lg">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="work"
          className="relative mx-auto max-w-7xl overflow-hidden px-4 pb-20 pt-4 sm:px-8 sm:pb-24 sm:pt-6"
        >
            <div className="mb-10 w-full overflow-hidden">
              <h3 className="mb-4 text-center text-[15px] font-black uppercase tracking-widest text-[#080808] sm:text-lg">
                Content Showcase
              </h3>
              <CoverFlow items={carouselItems} />
            </div>

          <div className="mt-20 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#185dff]">
                Personlige kanaler
              </p>
              <h2 className="mt-4 text-4xl font-black leading-[0.94] sm:text-6xl">
                Se bredden i universet.
              </h2>
            </div>
            <p className="max-w-md font-semibold leading-7 text-black/62">
              Fra personlig creator-historik til karakterdrevet content og
              social-first formater med tydelig underholdningsværdi.
            </p>
          </div>

            <div className="relative mt-20 grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
              <div>
                <div className="sketch-category text-[#ff3b2f]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 520 62"
                  className="h-14 w-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M7 30 C83 17 135 39 207 27 C281 14 343 43 416 29 C459 21 491 23 513 27"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="3.5"
                  />
                  <path
                    d="M8 35 C88 24 142 43 211 32 C281 20 342 47 417 35 C461 28 490 29 512 33"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.6"
                    opacity="0.45"
                  />
                </svg>
                <p>Personlige profiler</p>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {personalChannels.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sketch-card group flex min-h-32 flex-col justify-between bg-white p-5 transition hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0_#080808] sm:p-6"
                  >
                    <span className="block text-2xl font-black">
                      {link.title}
                    </span>
                    <span className="mt-6 block text-sm font-black uppercase text-black/48 group-hover:text-[#ff3b2f]">
                      Åbn profil
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="sketch-category text-[#185dff]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 420 62"
                  className="h-14 w-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M6 31 C52 22 92 35 140 29 C196 22 238 17 286 31 C333 45 372 35 414 27"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="3.5"
                  />
                  <path
                    d="M7 37 C55 29 95 41 143 35 C198 29 239 24 287 37 C332 49 374 41 413 33"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.6"
                    opacity="0.45"
                  />
                </svg>
                <p>Karakterdrevne profiler</p>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {characterChannels.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sketch-card group flex min-h-32 flex-col justify-between bg-white p-5 transition hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0_#080808] sm:p-6"
                  >
                    <span className="block text-2xl font-black">
                      {link.title}
                    </span>
                    <span className="mt-6 block text-sm font-black uppercase text-black/48 group-hover:text-[#185dff]">
                      Åbn profil
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="approach"
          className="bg-[#efe8dd] px-4 pb-24 pt-16 sm:px-8 sm:pb-32 sm:pt-20"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <p className="text-sm font-black uppercase text-[#ff3b2f]">
                  Strategisk retning
                </p>
                <h2 className="mt-4 max-w-2xl text-4xl font-black leading-[0.94] sm:text-6xl">
                  Byg content universer. Ikke bare kampagner.
                </h2>
              </div>
              <div className="flex max-w-2xl items-end pt-8 text-lg font-semibold leading-8 text-black/66 lg:min-h-52 lg:pt-0">
                <p className="text-center lg:text-left">
                  Den stærkeste short-form kommunikation føles ikke som en annonce,
                  der maser sig ind i feedet. Den opfører sig som content, men
                  arbejder stadig for et klart brandmål.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {process.map((item, index) => (
                <div
                  key={item}
                  className={`sketch-card flex min-h-40 flex-col bg-white p-5 sm:min-h-44 xl:min-h-40 ${index === 1 ? "rotate-[1deg] bg-[#f4f4ee]" : ""
                    } ${index === 2 ? "rotate-[-1deg] bg-[#fdfef8]" : ""}`}
                >
                  <div className="text-sm font-black text-[#185dff]">
                    0{index + 1}
                  </div>
                  <p className="m-auto max-w-64 text-center text-lg font-black leading-6 xl:text-xl">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="services"
          className="sketch-dark relative overflow-hidden bg-[#080808] px-4 py-20 text-white sm:px-8 sm:py-28"
        >
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-[1fr_0.52fr] md:items-end">
              <div>
                <p className="text-sm font-black uppercase text-[#c8ff3d]">
                  Services
                </p>
                <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[0.94] sm:text-6xl">
                  Et samarbejde kan være skarpt, enkelt og hurtigt at aktivere.
                </h2>
              </div>
              <p className="max-w-md text-base font-semibold leading-7 text-white/68">
                Brug Alexander som kreativ partner, producer eller ekstern
                specialist for dit marketingteam.
              </p>
            </div>

            <div className="mt-12 divide-y divide-white/22 border-y border-white/22">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="grid gap-4 py-8 md:grid-cols-[90px_0.85fr_1fr] md:items-center md:gap-8"
                >
                  <div className="text-sm font-black text-[#c8ff3d]">
                    {service.kicker}
                  </div>
                  <h3 className="text-3xl font-black leading-none md:text-4xl">
                    {service.title}
                  </h3>
                  <p className="leading-7 text-white/68">{service.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 py-20 sm:px-8 sm:py-24">
          <div className="sketch-cta relative mx-auto grid max-w-5xl gap-8 overflow-hidden rounded-lg border-2 border-[#080808] bg-[#c8ff3d] p-6 shadow-[7px_7px_0_#080808] sm:p-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase">Næste skridt</p>
              <h2 className="mt-4 text-4xl font-black leading-[0.94] sm:text-6xl">
                Lad os finde den videoidé, dit brand kan eje.
              </h2>
            </div>
            <div>
              <p className="text-lg font-semibold leading-8 text-black/70">
                Send brand, målgruppe og ambition. Så vender jeg tilbage med
                et konkret forslag til retning, format og første sprint.
              </p>
              <a
                href="mailto:alexholttibiz@gmail.com?subject=Intro%20om%20video%20content"
                className="sketch-button mt-8 w-full bg-[#080808] text-white sm:w-auto"
              >
                Send en intro-mail
              </a>
              <p className="mt-4 break-all text-sm font-bold text-black/64">
                alexholttibiz@gmail.com
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
