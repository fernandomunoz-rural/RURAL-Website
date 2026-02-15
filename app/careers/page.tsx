import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  FileText,
  ShieldAlert,
  SendHorizonal,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import CareersApplicationForm from "@/components/CareersApplicationForm";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function CareersPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-140px] top-[-240px] h-[420px] w-[420px] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute right-[-140px] top-[20%] h-[360px] w-[360px] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-[-180px] left-[20%] h-[320px] w-[320px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <Navbar />

      <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-14 md:pt-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/80 px-3 py-2 text-sm text-zinc-200 transition hover:bg-zinc-800"
        >
          <ArrowLeft className="size-4" />
          Back to home
        </Link>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="border-zinc-700/80 bg-zinc-900/70">
            <CardContent className="space-y-6 p-6 md:p-8">
              <div>
                <Badge className="border-purple-400/40 bg-purple-500/10 text-purple-200 hover:bg-purple-500/10">
                  Join Our Team
                </Badge>
                <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 md:text-5xl">
                  RURAL Technologies Application
                </h1>
                <p className="mt-3 text-zinc-400">
                  We are hiring mission-driven builders who care about practical
                  software for rural and underserved communities.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  ["1-2 minute form", Clock3],
                  ["Upload your resume", FileText],
                  ["Direct review by our team", BriefcaseBusiness],
                  ["Fast response process", SendHorizonal],
                ].map(([label, Icon]) => (
                  <div
                    key={label as string}
                    className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/70 p-3"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-purple-300/40 bg-purple-500/10 text-purple-200">
                      <Icon className="size-4" />
                    </span>
                    <p className="text-sm text-zinc-200">{label as string}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-amber-400/30 bg-amber-500/10 p-3 text-sm text-amber-100">
                <div className="flex items-start gap-2">
                  <ShieldAlert className="mt-0.5 size-4 text-amber-200" />
                  <p>
                    RURAL is an early-stage company. Salary is not guaranteed for every role, and
                    compensation may vary by position, scope, and contribution.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-3 text-sm text-emerald-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4" />
                  Applications are sent directly to our hiring inbox
                </div>
              </div>

              <div className="space-y-3 border-t border-zinc-800/90 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-200/90">
                  Meet Our Founders
                </p>

                <div className="grid gap-5 sm:grid-cols-2">
                  {[
                    {
                      image: "/CEO4.png",
                      name: "Fernando Muñoz",
                      title: "Chief Executive Officer",
                    },
                    {
                      image: "/COO.png",
                      name: "Melany Lopez",
                      title: "Chief Operating Officer",
                    },
                    {
                      image: "/CFO.png",
                      name: "Miguel Macas",
                      title: "Chief Financial Officer",
                    },
                    {
                      image: "/CTO3.png",
                      name: "Alex Ramirez",
                      title: "Chief Technology Officer",
                    },
                  ].map((founder) => (
                    <div key={founder.name} className="flex flex-col items-center text-center">
                      <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-purple-300/30 bg-zinc-900 ring-4 ring-zinc-900">
                        <Image
                          src={founder.image}
                          alt={founder.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="mt-3 text-sm font-semibold text-zinc-100">{founder.name}</p>
                      <p className="mt-1 max-w-[180px] text-xs text-zinc-400">{founder.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <CareersApplicationForm />
        </div>
      </section>
    </main>
  );
}
