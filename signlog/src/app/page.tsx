"use client";

import React from "react";
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  FileText,
  Hand,
  Sparkles,
  Users,
  Video,
} from "lucide-react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfBF3kCl1eGEyeAcr9aptBxYJL8zKRrRoo3iE2BhF5lPe2MWw/viewform?usp=dialog";

const features = [
  {
    icon: <Video className="h-5 w-5" />,
    title: "수화 회의 기록",
    desc: "수어로 진행되는 회의를 영상 기반으로 기록하고, 회의 이후 다시 확인할 수 있는 데이터로 남깁니다.",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "AI 회의록·요약",
    desc: "회의 내용을 핵심 주제, 결정사항, 논의 흐름 중심으로 정리하는 기능을 구상하고 있습니다.",
  },
  {
    icon: <CheckCircle2 className="h-5 w-5" />,
    title: "액션 아이템 정리",
    desc: "누가 무엇을 하기로 했는지, 회의 이후 실행해야 할 내용을 정리하는 방향을 검토 중입니다.",
  },
  {
    icon: <Brain className="h-5 w-5" />,
    title: "회의 흐름 분석",
    desc: "손동작, 표정, 강조 표현 등 수어의 비언어적 신호를 활용한 회의 분석 가능성을 확인하고 있습니다.",
  },
];

const targets = [
  "수어 기반 회의를 진행하는 단체",
  "청각장애인 구성원이 있는 팀 또는 기업",
  "복지기관·공공기관·교육기관",
  "수어 통역 또는 회의 기록이 필요한 조직",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#080612] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-600/30 blur-3xl" />
        <div className="absolute right-0 top-40 h-[420px] w-[420px] rounded-full bg-fuchsia-500/20 blur-3xl" />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-14 px-6 pb-20 pt-16">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-500 shadow-lg shadow-violet-500/30">
              <Hand className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">SignLog</span>
          </div>

          <div className="flex flex-col gap-12">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-violet-100 backdrop-blur">
                <Sparkles className="h-4 w-4 text-violet-300" />
                소프트웨어 마에스트로 17기 HBB 팀 수요 조사
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
                수화 회의를
                <br />
                기록하고 요약해
                <br />
                <span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                  다시 활용 가능한 회의
                </span>
                로.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
                SignLog는 수어로 진행되는 회의를 회의록, 요약본, 결정사항, 액션
                아이템으로 정리하는 AI 기반 회의 보조 서비스를 구상하고
                있습니다. 현재는 개발 착수 전, 실제 수요가 있는지 확인하는
                단계입니다.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-violet-500 px-7 py-4 font-semibold shadow-xl shadow-violet-500/30 transition hover:bg-violet-400"
                >
                  짧게 의견 남기기
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/8 p-4 shadow-2xl shadow-violet-950/50 backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-[#11101c] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/45">Concept Preview</p>
                    <h3 className="font-bold">수화 회의 분석 화면</h3>
                  </div>
                  <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-semibold text-violet-200">
                    수요 조사 중
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                  <div className="aspect-video rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 p-5">
                    <div className="flex h-full items-center justify-center rounded-xl border border-white/10 bg-black/20">
                      <div className="text-center">
                        <Hand className="mx-auto mb-4 h-16 w-16 text-violet-300" />
                        <p className="text-sm text-white/55">
                          수어 회의 영상 입력
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <h4 className="mb-3 text-sm font-bold">AI 요약 예시</h4>
                    <ul className="space-y-3 text-sm text-white/70">
                      <li>• 회의 목적과 논의 주제 자동 정리</li>
                      <li>• 결정사항과 후속 작업 분리</li>
                      <li>• 다시 확인할 수 있는 회의 기록 제공</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <MetricCard value="회의록" label="회의 내용 기록" />
                  <MetricCard value="요약" label="핵심 내용 정리" />
                  <MetricCard value="분석" label="회의 흐름 파악" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-3">
          <div>
            <p className="text-sm font-bold text-violet-300">Why</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              수화 회의는 끝난 뒤 다시 활용하기 어렵습니다.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:col-span-2">
            {[
              [
                "기록 부족",
                "영상으로만 남으면 검색하거나 요약하기 어렵습니다.",
              ],
              [
                "회의 후 정리 부담",
                "수기로 회의록을 작성하면 누락과 왜곡이 생길 수 있습니다.",
              ],
              [
                "실행 연결 어려움",
                "결정사항과 해야 할 일을 회의 이후 추적하기 어렵습니다.",
              ],
            ].map(([title, desc], idx) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-[#100d1d] p-6"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-200">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/58">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold text-violet-300">
            What we are testing
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            이런 기능에 수요가 있는지 확인하고 있습니다.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-200">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/58">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/15 to-white/[0.04] p-8">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500 text-white">
              <Users className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-black">
              이런 분들의 의견이 필요합니다.
            </h2>
            <div className="mt-8 space-y-3">
              {targets.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm text-white/75"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-sm font-bold text-violet-300">Feedback</p>
            <h2 className="mt-3 text-3xl font-black">
              개발 전, 실제 수요를 확인하고 싶습니다.
            </h2>
            <p className="mt-5 leading-7 text-white/65">
              저희 HBB 팀은 이 서비스가 실제로 필요한 문제인지 먼저 확인한 뒤
              개발에 착수하고자 합니다. 사용해보고 싶은 상황, 필요하다고 느끼는
              기능, 회사나 단체 차원의 관심 여부를 짧게 남겨주세요.
            </p>

            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-violet-500 px-6 py-4 text-center font-bold text-white transition hover:bg-violet-400 md:w-auto"
            >
              Google Form으로 의견 남기기
              <ArrowRight className="h-4 w-4" />
            </a>

            <p className="mt-5 text-sm text-white/40">
              단체 연락처를 남겨주시면, 추후 서비스 방향 검증을 위해 연락드릴 수
              있습니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <p className="text-xl font-black text-violet-200">{value}</p>
      <p className="mt-1 text-xs text-white/50">{label}</p>
    </div>
  );
}
