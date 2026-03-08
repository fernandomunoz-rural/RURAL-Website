import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  Building2,
  Building,
  Clock3,
  Compass,
  CircleDollarSign,
  Gem,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Hospital,
  Layers3,
  Leaf,
  Landmark,
  Link2,
  MapPinned,
  Network,
  Quote,
  ShieldCheck,
  ShoppingBag,
  Store,
  Truck,
  UtilityPole,
  Mail,
  MessageSquare,
  HandCoins,
  Factory,
  Hotel,
  Radio,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import GlobalGlobe from "@/components/GlobalGlobe";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-[-220px] h-[420px] w-[420px] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-[-180px] right-[-120px] h-[360px] w-[360px] rounded-full bg-purple-600/15 blur-3xl" />
      </div>

      <Navbar />

      <section className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:pt-24">
        <Reveal>
          <Badge className="border-purple-400/40 bg-purple-500/10 text-purple-200 hover:bg-purple-500/10">
            Rural-first technology
          </Badge>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-zinc-50 md:text-6xl [font-family:var(--font-display)]">
            Building digital infrastructure for rural and underserved communities.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-zinc-400 md:text-lg">
            RURAL is a start-up focusing on creating affordable technologies for
            rural and small communities that lack access to modern digital tools.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="outline" className="bg-purple-500 text-white hover:bg-purple-400">
              <Link href="#contact" className="inline-flex items-center gap-2">
                Contact us
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button variant="outline" className="border-zinc-700 bg-zinc-900 text-zinc-100 hover:bg-zinc-800">
              <Link href="#products" className="inline-flex items-center gap-2">
                Explore products
                <Layers3 className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <Reveal className="flex items-center" delay={0.12}>
          <Image
            src="/rural-complete-logo.png"
            alt="RURAL Technologies complete logo"
            width={1400}
            height={900}
            priority
            className="h-auto w-full object-contain drop-shadow-[0_28px_60px_rgba(147,51,234,0.25)]"
          />
        </Reveal>
      </section>

      <section id="about" className="border-t border-zinc-200 bg-gradient-to-b from-white via-zinc-50 to-purple-100/40">
        <Reveal className="mx-auto max-w-7xl px-6 py-16 md:py-18">
          <div className="grid gap-6 lg:grid-cols-[1fr_380px] lg:items-end">
            <div className="max-w-4xl space-y-4">
              <Badge className="border-purple-300/70 bg-purple-100 text-purple-700 hover:bg-purple-100">
                Why
              </Badge>
              <h2 className="text-3xl font-semibold tracking-tight text-purple-700 md:text-5xl [font-family:var(--font-display)]">
                Why RURAL Exists
              </h2>
              <p className="max-w-3xl text-zinc-700 md:text-lg">
                Rural communities are consistently underserved by modern technology.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-200 bg-white/80 p-5 shadow-[0_16px_48px_-36px_rgba(147,51,234,0.55)] backdrop-blur">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-purple-200 bg-purple-100 text-purple-700">
                <Link2 className="size-4" />
              </div>
              <p className="text-sm uppercase tracking-[0.16em] text-purple-500">Mission Focus</p>
              <p className="mt-2 text-base leading-relaxed text-zinc-700">
                Join us in building practical technology for rural and underserved communities.
              </p>
              <div className="mt-4">
                <Button variant="outline" className="w-full bg-purple-600 text-white hover:bg-purple-500">
                  <Link href="/careers">JOIN OUR TEAM</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
            <Card className="border-zinc-200 bg-white shadow-[0_14px_40px_-30px_rgba(24,24,27,0.35)]">
              <CardContent className="space-y-6 px-6 py-6 md:px-8 md:py-8">
                <p className="text-base leading-relaxed text-zinc-700 md:text-lg">
                  Most digital platforms are built for dense urban markets. Rural businesses, colleges,
                  farmers, and organizations are often left with expensive or fragmented tools that
                  do not match the way their communities operate.
                </p>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    ["High costs", CircleDollarSign],
                    ["Disconnected systems", Network],
                    ["Low local fit", MapPinned],
                  ].map(([label, Icon]) => (
                    <div key={label as string} className="rounded-xl border border-zinc-200 bg-zinc-50 p-3">
                      <div className="flex items-center gap-2 text-zinc-800">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-purple-200 bg-purple-100 text-purple-700">
                          <Icon className="size-4" />
                        </span>
                        <span className="text-sm font-medium">{label as string}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="bg-zinc-200" />

                <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                  {[
                    { src: "/student.png", alt: "Student" },
                    { src: "/farmer.png", alt: "Farmer" },
                    { src: "/child.png", alt: "Child" },
                    { src: "/ruralworker.png", alt: "Rural worker" },
                    { src: "/businessowner.png", alt: "Business owner" },
                    { src: "/oldlady.png", alt: "Older woman in a rural community" },
                  ].map((item) => (
                    <div key={item.src} className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={600}
                        height={600}
                        className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-gradient-to-b from-white to-purple-50/50 shadow-[0_16px_46px_-28px_rgba(147,51,234,0.55)]">
              <CardContent className="flex h-full flex-col px-6 py-6 md:px-8 md:py-8">
                <div className="overflow-hidden rounded-xl border border-purple-200 bg-purple-50">
                  <Image
                    src="/connection.png"
                    alt="Community connection"
                    width={1200}
                    height={700}
                    className="h-56 w-full object-cover md:h-72"
                  />
                </div>
                <div className="mt-6 flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-300/50 bg-purple-100 text-purple-700">
                    <Quote className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-purple-500">
                      Core Principle
                    </p>
                    <p className="mt-2 text-3xl font-semibold leading-tight text-zinc-900 md:text-4xl">
                      Relationships matter more than revenue.
                    </p>
                  </div>
                </div>
                <div className="mt-6 grid gap-3">
                  <div className="flex items-center gap-3 text-purple-700">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-purple-300/50 bg-purple-100">
                      <Link2 className="size-4" />
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                      Community Connection
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-purple-700">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-purple-300/50 bg-purple-100">
                      <CircleDollarSign className="size-4" />
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                      Affordable Solutions
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-purple-700">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-purple-300/50 bg-purple-100">
                      <MapPinned className="size-4" />
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                      No Matter Where You Are
                    </span>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-purple-200/70 bg-white/80 p-4">
                  <p className="text-sm font-medium text-zinc-800">
                    We design for real-world constraints first, then scale globally.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </Reveal>
      </section>

      <section id="values" className="border-t border-zinc-800/80">
        <Reveal className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-8">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-purple-200/80">Values</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl">How We Build</h3>
          </div>

          <Separator className="mb-8 bg-zinc-800" />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Access", "Technology should be practical and reachable for every community.", Compass],
              ["Passion", "We build with love and intention.", HandHeart],
              ["Excellence", "We hold a high standard for useful, reliable, and thoughtful products.", Gem],
              ["Trust", "We build trust through consistent, reliable work with clients and businesses.", HeartHandshake],
              ["Connection", "We value relationships with the people and communities we serve.", Link2],
            ].map(([title, desc, Icon]) => (
              <Card key={title as string} className="border-zinc-800 bg-zinc-900/70 py-4">
                <CardHeader className="px-4">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-purple-400/30 bg-purple-500/10 text-purple-200">
                    <Icon className="size-4" />
                  </div>
                  <CardTitle className="text-base text-zinc-100">{title as string}</CardTitle>
                  <CardDescription className="text-zinc-400">{desc as string}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="platform" className="border-t border-zinc-200 bg-gradient-to-b from-zinc-50 to-purple-50/50">
        <Reveal className="mx-auto max-w-7xl px-6 py-20">
          <div className="overflow-hidden rounded-3xl border border-purple-100/90 bg-white/85 p-6 shadow-[0_24px_70px_-48px_rgba(147,51,234,0.45)] backdrop-blur md:p-10">
            <div className="max-w-4xl">
              <Badge className="border-purple-300/60 bg-purple-100 text-purple-700 hover:bg-purple-100">
                Vision
              </Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 md:text-5xl [font-family:var(--font-display)]">
                Vision and <span className="text-purple-700">Platform</span>
              </h2>
              <p className="mt-4 text-zinc-600 md:text-lg">
                We are building the foundational layer for rural coordination across
                local commerce, institutions, and community operations.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                [
                  "01",
                  "Small Business Operating Systems",
                  "Tools that help local businesses run daily operations with less friction and better visibility.",
                  Store,
                ],
                [
                  "02",
                  "Community Commerce Infrastructure",
                  "Digital rails for trusted transactions and shared coordination across communities.",
                  Building2,
                ],
                [
                  "03",
                  "Access-First Technology",
                  "Products designed for constrained environments, low barriers, and long-term reliability.",
                  Network,
                ],
              ].map(([step, title, desc, Icon]) => (
                <Card key={title as string} className="group border-purple-100 bg-white/95 py-4 transition-all hover:-translate-y-1 hover:shadow-[0_18px_42px_-30px_rgba(147,51,234,0.55)]">
                  <CardContent className="px-5">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-xs font-semibold tracking-[0.2em] text-zinc-400">
                        {step as string}
                      </span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-purple-300/40 bg-purple-100/80 text-purple-700">
                        <Icon className="size-4" />
                      </div>
                    </div>
                    <p className="text-base font-semibold text-zinc-900">{title as string}</p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">{desc as string}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="mt-8 max-w-5xl text-2xl font-semibold leading-tight text-purple-700 md:text-4xl [font-family:var(--font-display)]">
              RURAL is a remote, international company designing technology for the rest of the world,
              not just the most developed parts of it.
            </p>
          </div>
        </Reveal>
      </section>

      <section id="services" className="border-t border-zinc-800/80 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-18 md:py-22">
          <div className="overflow-hidden rounded-3xl border border-zinc-700/70 bg-gradient-to-br from-zinc-900/95 via-zinc-900 to-purple-950/30 shadow-[0_30px_100px_-50px_rgba(147,51,234,0.55)]">
            <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[1fr_1fr] lg:items-center">
              <Reveal className="max-w-2xl">
                <Badge className="border-purple-400/40 bg-purple-500/10 text-purple-200 hover:bg-purple-500/10">
                  Services
                </Badge>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 md:text-5xl [font-family:var(--font-display)]">
                  Modern software delivery for global industries
                </h2>
                <p className="mt-4 text-zinc-300 md:text-lg">
                  We design, build, and ship practical digital systems across continents with local context
                  and global scalability from day one.
                </p>

                <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {[
                    ["Remote-first teams", Globe2],
                    ["Secure implementation", ShieldCheck],
                    ["Cross-timezone delivery", Clock3],
                    ["Scalable architecture", Layers3],
                  ].map(([label, Icon]) => (
                    <div key={label as string} className="rounded-xl border border-zinc-700 bg-zinc-900/70 p-3">
                      <div className="flex items-center gap-2 text-zinc-100">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-purple-300/40 bg-purple-500/10 text-purple-200">
                          <Icon className="size-4" />
                        </span>
                        <span className="text-sm font-medium">{label as string}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal className="mx-auto w-full max-w-[560px] space-y-3" delay={0.1}>
                <GlobalGlobe />
                <div className="grid grid-cols-3 gap-3">
                  {[
                    ["24+", "Regions"],
                    ["12", "Industries"],
                    ["Remote", "Delivery Model"],
                  ].map(([value, label]) => (
                    <Card key={label} className="border-zinc-700 bg-zinc-900/70 py-2.5">
                      <CardContent className="px-2 text-center">
                        <p className="text-lg font-semibold text-zinc-100 md:text-xl">{value}</p>
                        <p className="text-[10px] uppercase tracking-[0.12em] text-zinc-400">{label}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal className="border-t border-zinc-700/80 p-6 md:p-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">Industries We Serve</p>
              <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Healthcare software", Hospital],
                ["Finance and fintech", Landmark],
                ["Education technology", GraduationCap],
                ["Agriculture and food systems", Leaf],
                ["Retail and e-commerce", ShoppingBag],
                ["Logistics and transportation", Truck],
                ["Public sector and civic services", Building],
                ["Nonprofit organizations", HandCoins],
                ["Manufacturing and operations", Factory],
                ["Energy and infrastructure", UtilityPole],
                ["Hospitality and tourism", Hotel],
                ["Telecom and connectivity", Radio],
              ].map(([industry, Icon]) => (
                <div
                  key={industry as string}
                  className="group rounded-xl border border-zinc-700 bg-zinc-900/70 p-3 transition-all hover:-translate-y-0.5 hover:border-purple-400/60 hover:shadow-[0_12px_36px_-24px_rgba(147,51,234,0.6)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-purple-300/40 bg-purple-500/10 text-purple-200 transition-colors group-hover:bg-purple-500/20">
                      <Icon className="size-4" />
                    </span>
                    <p className="text-sm font-medium text-zinc-100">{industry as string}</p>
                  </div>
                </div>
              ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="products" className="border-t border-zinc-800 bg-black">
        <Reveal className="mx-auto max-w-7xl px-6 py-20">
          <Badge className="border-zinc-700 bg-zinc-900 text-zinc-300 hover:bg-zinc-900">
            Products
          </Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 md:text-5xl [font-family:var(--font-display)]">
            What We&apos;re Building
          </h2>
          <p className="mt-4 max-w-3xl text-zinc-400">
            Active products built for real-world community use. Designed to be practical, trusted, and scalable.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <Card className="border-orange-500/30 bg-gradient-to-b from-zinc-950 to-zinc-900/80 transition-transform duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-zinc-100">ZWAP</CardTitle>
                    <CardDescription className="mt-2 text-zinc-400">
                      Student marketplace app for campus buying, selling, and discovery.
                    </CardDescription>
                  </div>
                  <Badge className="border-orange-400/40 bg-orange-500/10 text-orange-300 hover:bg-orange-500/10">
                    Active
                  </Badge>
                </div>
                <div className="overflow-hidden rounded-xl border border-orange-500/30 bg-zinc-950">
                  <Image
                    src="/zwap.png"
                    alt="ZWAP logo"
                    width={1200}
                    height={600}
                    className="h-40 w-full object-contain p-4 md:h-48"
                  />
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge className="border-orange-400/30 bg-orange-500/10 text-orange-200 hover:bg-orange-500/10">
                    Available on App Store
                  </Badge>
                  <Badge className="border-orange-400/30 bg-orange-500/10 text-orange-200 hover:bg-orange-500/10">
                    Available on Play Store
                  </Badge>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    ["Safe", ShieldCheck],
                    ["Free", CircleDollarSign],
                    ["Unique Features", Layers3],
                  ].map(([label, Icon]) => (
                    <div key={label as string} className="rounded-lg border border-orange-500/30 bg-orange-500/5 p-3 text-sm text-orange-200">
                      <div className="flex items-center gap-2">
                        <Icon className="size-4" />
                        <span className="font-medium">{label as string}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-950/70 p-3 text-sm text-zinc-300">
                  Built for students to discover, exchange, and connect in one organized marketplace experience.
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-500/30 bg-gradient-to-b from-zinc-950 to-zinc-900/80 transition-transform duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-zinc-100">SCORE</CardTitle>
                    <CardDescription className="mt-2 text-zinc-400">
                      Small-business software platform in active development.
                    </CardDescription>
                  </div>
                  <Badge className="border-red-400/40 bg-red-500/10 text-red-300 hover:bg-red-500/10">
                    In Progress
                  </Badge>
                </div>
                <div className="overflow-hidden rounded-xl border border-red-500/30 bg-zinc-950">
                  <Image
                    src="/score1.png"
                    alt="SCORE logo"
                    width={1200}
                    height={600}
                    className="h-40 w-full object-contain p-4 md:h-48"
                  />
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-3 text-sm text-red-200">
                  SCORE = Small-Business Coordination, Operations, Resource Engine.
                </div>
                {[
                  "Software for small businesses to manage coordination, operations, and shared resources in one place.",
                  "Designed for scalable deployment and long-term operational impact.",
                ].map((item) => (
                  <div key={item} className="rounded-lg border border-zinc-800 bg-zinc-950/70 p-3 text-sm text-zinc-300">
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="border-t border-zinc-800/80 bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
        <Reveal className="mx-auto max-w-7xl px-6 py-20">
          <Card className="overflow-hidden border-zinc-700/80 bg-zinc-900/80 shadow-[0_24px_80px_-36px_rgba(147,51,234,0.7)]">
            <CardContent className="p-0">
              <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="border-b border-zinc-800 bg-zinc-950/90 p-6 md:p-8 lg:border-b-0 lg:border-r lg:border-zinc-800">
                  <Badge className="border-purple-400/40 bg-purple-500/10 text-purple-200 hover:bg-purple-500/10">
                    Contact
                  </Badge>
                  <h3 className="mt-4 text-2xl font-semibold text-zinc-100 md:text-3xl [font-family:var(--font-display)]">
                    Let&apos;s Build Something Useful
                  </h3>
                  <p className="mt-3 text-zinc-400">
                    Tell us what your organization needs. We design practical software for rural and underserved communities.
                  </p>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 p-3">
                      <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-purple-300/40 bg-purple-500/10 text-purple-200">
                        <Mail className="size-4" />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-zinc-100">Direct Inbox</p>
                        <p className="text-sm text-zinc-400">contact@ruraltechnologies.co</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 p-3">
                      <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-purple-300/40 bg-purple-500/10 text-purple-200">
                        <Clock3 className="size-4" />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-zinc-100">Fast Response</p>
                        <p className="text-sm text-zinc-400">Most messages are answered within 1-2 business days.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 p-3">
                      <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-purple-300/40 bg-purple-500/10 text-purple-200">
                        <MessageSquare className="size-4" />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-zinc-100">Organized Intake</p>
                        <p className="text-sm text-zinc-400">Partnership, product, support, and general inquiry routing.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-300">
                    <ShieldCheck className="size-4" />
                    Privacy-first contact workflow
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="mb-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-200/90">
                      Inline Contact Form
                    </p>
                    <p className="mt-2 text-sm text-zinc-400">
                      Clear, structured, and designed for quick communication.
                    </p>
                  </div>

                  <ContactForm />
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </section>

      <footer className="border-t border-zinc-800/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>RURAL Technologies</p>
          <p>(c) {new Date().getFullYear()} RURAL Technologies</p>
          <div className="flex gap-4">
            <Link href="#" className="transition-colors hover:text-zinc-200">Privacy</Link>
            <Link href="#" className="transition-colors hover:text-zinc-200">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
