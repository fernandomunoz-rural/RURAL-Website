"use client";

import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import {
  Briefcase,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  FileUp,
  GraduationCap,
  Link2,
  MapPin,
  Loader2,
  Mail,
  ShieldAlert,
  Send,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";

type FormStatus = "idle" | "submitting" | "success" | "error";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export default function CareersApplicationForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");

  const statusClassName = useMemo(() => {
    if (status === "success") return "text-emerald-300";
    if (status === "error") return "text-red-300";
    return "text-zinc-400";
  }, [status]);

  function onFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setFileName(file?.name || "");
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const resume = data.get("resume");

    if (!(resume instanceof File) || resume.size === 0) {
      setStatus("error");
      setMessage("Please upload your resume.");
      return;
    }

    if (resume.size > MAX_FILE_SIZE) {
      setStatus("error");
      setMessage("Resume must be 5MB or smaller.");
      return;
    }

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        body: data,
      });

      const body = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(body.message || "Unable to submit application.");
      }

      form.reset();
      setFileName("");
      setStatus("success");
      setMessage("Application sent. Our team will review and reply soon.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  const inputClassName =
    "h-12 w-full rounded-xl border border-zinc-700/80 bg-zinc-900/90 pl-11 pr-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-purple-400/70 focus:ring-2 focus:ring-purple-400/30";
  const hasResume = fileName.length > 0;

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-6 rounded-3xl border border-zinc-700/80 bg-gradient-to-b from-zinc-900/95 to-zinc-950 p-5 shadow-[0_24px_70px_-38px_rgba(147,51,234,0.75)] md:p-7"
      encType="multipart/form-data"
    >
      <div className="border-b border-zinc-800/90 pb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-200/90">
          Candidate Details
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <label className="space-y-2.5">
            <span className="text-sm font-medium text-zinc-200">Full Name</span>
            <div className="relative">
              <UserRound className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
              <input
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Avery Johnson"
                className={inputClassName}
              />
            </div>
          </label>

          <label className="space-y-2.5">
            <span className="text-sm font-medium text-zinc-200">Email</span>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@domain.com"
                className={inputClassName}
              />
            </div>
          </label>
        </div>
      </div>

      <div className="border-b border-zinc-800/90 pb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-200/90">
          Role Fit
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <label className="space-y-2.5">
            <span className="text-sm font-medium text-zinc-200">Position Interest</span>
            <div className="relative">
              <BriefcaseBusiness className="pointer-events-none absolute left-3 top-1/2 z-10 size-4 -translate-y-1/2 text-zinc-500" />
              <select
                name="position"
                required
                defaultValue=""
                className={`${inputClassName} appearance-none`}
              >
                <option value="" disabled>
                  Select position
                </option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Frontend Engineer">Frontend Engineer</option>
                <option value="Backend Engineer">Backend Engineer</option>
                <option value="Product Designer">Product Designer</option>
                <option value="Product Manager">Product Manager</option>
                <option value="Operations Coordinator">Operations Coordinator</option>
                <option value="Marketing and Growth">Marketing and Growth</option>
                <option value="Sales Representative">Sales Representative</option>
                <option value="Business Development Associate">Business Development Associate</option>
                <option value="Customer Success Specialist">Customer Success Specialist</option>
                <option value="Open Application">Open Application</option>
              </select>
            </div>
          </label>

          <label className="space-y-2.5">
            <span className="text-sm font-medium text-zinc-200">Area Of Interest</span>
            <div className="relative">
              <Briefcase className="pointer-events-none absolute left-3 top-1/2 z-10 size-4 -translate-y-1/2 text-zinc-500" />
              <select
                name="area"
                required
                defaultValue=""
                className={`${inputClassName} appearance-none`}
              >
                <option value="" disabled>
                  Select area
                </option>
                <option value="Engineering">Engineering</option>
                <option value="Design">Design</option>
                <option value="Product">Product</option>
                <option value="Operations">Operations</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="Customer Success">Customer Success</option>
                <option value="Partnerships">Partnerships</option>
                <option value="Community Programs">Community Programs</option>
                <option value="Business Development">Business Development</option>
              </select>
            </div>
          </label>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <label className="space-y-2.5">
            <span className="text-sm font-medium text-zinc-200">Experience Level</span>
            <div className="relative">
              <GraduationCap className="pointer-events-none absolute left-3 top-1/2 z-10 size-4 -translate-y-1/2 text-zinc-500" />
              <select
                name="experience"
                required
                defaultValue=""
                className={`${inputClassName} appearance-none`}
              >
                <option value="" disabled>
                  Select level
                </option>
                <option value="Entry">Entry</option>
                <option value="Mid">Mid</option>
                <option value="Senior">Senior</option>
                <option value="Lead">Lead</option>
              </select>
            </div>
          </label>

          <label className="space-y-2.5">
            <span className="text-sm font-medium text-zinc-200">Location and Time Zone</span>
            <div className="relative">
              <MapPin className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
              <input
                name="location"
                type="text"
                required
                placeholder="Austin, TX (CST)"
                className={inputClassName}
              />
            </div>
          </label>
        </div>
      </div>

      <div className="border-b border-zinc-800/90 pb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-200/90">
          Quick Questions
        </p>
        <div className="mt-4 space-y-4">
          <label className="space-y-2.5">
            <span className="text-sm font-medium text-zinc-200">Why do you want to join RURAL?</span>
            <textarea
              name="motivation"
              required
              rows={4}
              maxLength={1200}
              placeholder="Share what motivates you to build with our team."
              className="w-full rounded-xl border border-zinc-700/80 bg-zinc-900/90 px-3 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-purple-400/70 focus:ring-2 focus:ring-purple-400/30"
            />
          </label>

          <label className="space-y-2.5">
            <span className="text-sm font-medium text-zinc-200">What impact can you make in your first 90 days?</span>
            <textarea
              name="impact"
              required
              rows={4}
              maxLength={1200}
              placeholder="Give a practical example of how you would contribute."
              className="w-full rounded-xl border border-zinc-700/80 bg-zinc-900/90 px-3 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-purple-400/70 focus:ring-2 focus:ring-purple-400/30"
            />
          </label>
        </div>
      </div>

      <div className="border-b border-zinc-800/90 pb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-200/90">
          Extras
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <label className="space-y-2.5">
            <span className="text-sm font-medium text-zinc-200">Portfolio or LinkedIn (Optional)</span>
            <div className="relative">
              <Link2 className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
              <input
                name="profile"
                type="url"
                placeholder="https://linkedin.com/in/yourname"
                className={inputClassName}
              />
            </div>
          </label>

          <label className="space-y-2.5">
            <span className="text-sm font-medium text-zinc-200">Available Start Timeline</span>
            <div className="relative">
              <Clock3 className="pointer-events-none absolute left-3 top-1/2 z-10 size-4 -translate-y-1/2 text-zinc-500" />
              <select
                name="timeline"
                required
                defaultValue=""
                className={`${inputClassName} appearance-none`}
              >
                <option value="" disabled>
                  Select timeline
                </option>
                <option value="Immediately">Immediately</option>
                <option value="Within 2 weeks">Within 2 weeks</option>
                <option value="Within 1 month">Within 1 month</option>
                <option value="More than 1 month">More than 1 month</option>
              </select>
            </div>
          </label>
        </div>
      </div>

      <label className="space-y-2.5">
        <span className="text-sm font-medium text-zinc-200">Resume Upload (PDF, DOC, DOCX)</span>
        <div
          className={`rounded-xl border p-4 transition ${
            hasResume
              ? "border-emerald-400/50 bg-emerald-500/10"
              : "border-dashed border-zinc-600 bg-zinc-900/60"
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className={`flex items-center gap-3 ${hasResume ? "text-emerald-200" : "text-zinc-300"}`}>
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full ${
                  hasResume
                    ? "border border-emerald-400/40 bg-emerald-500/20 text-emerald-200"
                    : "border border-purple-300/40 bg-purple-500/10 text-purple-200"
                }`}
              >
                {hasResume ? <CheckCircle2 className="size-4" /> : <FileUp className="size-4" />}
              </span>
              <div>
                <p className="text-sm font-medium">{hasResume ? "Resume uploaded" : "Upload resume file"}</p>
                <p className={`text-xs ${hasResume ? "text-emerald-300/80" : "text-zinc-500"}`}>Maximum size: 5MB</p>
              </div>
            </div>
            <input
              name="resume"
              type="file"
              required
              accept=".pdf,.doc,.docx"
              onChange={onFileChange}
              className="block w-full max-w-[260px] cursor-pointer text-xs text-zinc-300 file:mr-3 file:rounded-lg file:border-0 file:bg-purple-500 file:px-3 file:py-2 file:text-xs file:font-medium file:text-white hover:file:bg-purple-400"
            />
          </div>
          <p className={`mt-2 text-xs ${hasResume ? "text-emerald-300" : "text-zinc-500"}`}>
            {fileName ? `Selected: ${fileName}` : "No file selected yet."}
          </p>
        </div>
      </label>

      <label className="mt-3 flex items-start gap-3 rounded-xl border border-amber-400/30 bg-amber-500/10 p-3 text-sm text-amber-100">
        <input
          type="checkbox"
          name="compensationAck"
          value="yes"
          required
          className="mt-1 h-4 w-4 rounded border-zinc-600 bg-zinc-900 text-purple-500 focus:ring-purple-400/40"
        />
        <span>
          <span className="flex items-center gap-2 font-medium text-amber-200">
            <ShieldAlert className="size-4" />
            Early-stage compensation notice
          </span>
          RURAL is an early-stage company. Salary is not guaranteed for every role, and compensation can vary from person to person based on role scope, stage, and contribution.
        </span>
      </label>

      <input
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-3 border-t border-zinc-800/90 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-zinc-400">
          Applications are sent directly to our hiring inbox for review.
        </p>
        <Button
          type="submit"
          disabled={status === "submitting"}
          className="h-11 rounded-xl bg-purple-500 px-5 text-white hover:bg-purple-400 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Submit Application
              <Send className="size-4" />
            </>
          )}
        </Button>
      </div>

      {status !== "idle" && <p className={`text-sm ${statusClassName}`}>{message}</p>}
    </form>
  );
}

