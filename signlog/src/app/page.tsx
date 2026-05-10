"use client";

import React, { type ReactElement } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  Clock,
  FileText,
  Hand,
  LineChart,
  ShieldCheck,
  Sparkles,
  Users,
  Video,
} from "lucide-react";

type ReportCardProps = {
  icon: ReactElement<{ className?: string }>;
  title: string;
  value: string;
  desc: string;
};

const features = [
  {
    icon: <Video className="h-5 w-5" />,
    title: "수화 회의 자동 기록",
    desc: "카메라와 웨어러블 장갑 데이터를 함께 활용해 회의 흐름을 기록합니다.",
  },
  {
    icon: <Brain className="h-5 w-5" />,
    title: "멀티모달 의도 분석",
    desc: "손동작, 반복, 속도, 표정 신호를 기반으로 강조·동의·질문 패턴을 추출합니다.",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "요약과 액션 아이템",
    desc: "회의 내용을 요약하고 담당자, 결정사항, 후속 작업을 자동 정리합니다.",
  },
  {
    icon: <LineChart className="h-5 w-5" />,
    title: "회의 분석 리포트",
    desc: "참여도, 발언 흐름, 의사결정 단계, 반복 이슈를 시각화합니다.",
  },
];

const metrics = [
  { label: "기록 시간 절감", value: "72%" },
  { label: "회의 재확인 감소", value: "48%" },
  { label: "액션아이템 추출", value: "91%" },
];

const useCases = [
  "공공기관 수어 회의 및 민원 상담",
  "장애인 고용 기업의 협업 회의",
  "특수교육·복지기관의 회의 기록",
  "ESG/디지털 포용 프로젝트 PoC",
];

export default function SignLogLandingPage() {
  return (
    <main className="min-h-screen bg-[#080612] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-600/30 blur-3xl" />
        <div className="absolute right-0 top-40 h-[420px] w-[420px] rounded-full bg-fuchsia-500/20 blur-3xl" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-500 shadow-lg shadow-violet-500/30">
              <Hand className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">SignLog</span>
          </div>
          <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#problem" className="hover:text-white">
              문제
            </a>
            <a href="#features" className="hover:text-white">
              기능
            </a>
            <a href="#demo" className="hover:text-white">
              데모
            </a>
            <a href="#pricing" className="hover:text-white">
              도입 문의
            </a>
          </div>
          <button className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#080612] transition hover:bg-violet-100">
            데모 신청
          </button>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-24 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-violet-100 backdrop-blur">
              <Sparkles className="h-4 w-4 text-violet-300" />
              수화 회의를 의사결정 데이터로 전환하는 AI 협업 SaaS
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              수화 회의를
              <br />
              기록하고 분석하여
              <br />
              <span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                실행 가능한 회의
              </span>
              로.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
              SignLog는 수어 회의의 영상·표정·장갑 센서 데이터를 기반으로
              회의록, 요약, 액션 아이템, 참여도와 의사결정 흐름을 자동
              분석합니다.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-violet-500 px-7 py-4 font-semibold shadow-xl shadow-violet-500/30 transition hover:bg-violet-400">
                무료 데모 시작하기
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
              <button className="rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
                서비스 소개서 보기
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/8 p-4 shadow-2xl shadow-violet-950/50 backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-[#11101c] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/45">Live Meeting</p>
                    <h3 className="font-bold">UX 개선 회의</h3>
                  </div>
                  <span className="rounded-full bg-red-500/15 px-3 py-1 text-xs font-semibold text-red-200">
                    ● 녹화 중
                  </span>
                </div>
                <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                  <div className="aspect-video rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 p-5">
                    <div className="flex h-full items-center justify-center rounded-xl border border-white/10 bg-black/20">
                      <div className="text-center">
                        <Hand className="mx-auto mb-4 h-16 w-16 text-violet-300" />
                        <p className="text-sm text-white/55">
                          Camera + Smart Glove Input
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <h4 className="mb-3 text-sm font-bold">AI 실시간 요약</h4>
                    <ul className="space-y-3 text-sm text-white/70">
                      <li>• 디자인 시안 검토 후 3주 연장 필요</li>
                      <li>• 접근성 테스트 일정 재조정</li>
                      <li>• 다음 회의: 5월 20일 오전 10시</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {metrics.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <p className="text-2xl font-black text-violet-200">
                        {item.value}
                      </p>
                      <p className="mt-1 text-xs text-white/50">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="problem"
        className="border-y border-white/10 bg-white/[0.03] py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-sm font-bold text-violet-300">Problem</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              음성 변환만으로는 회의가 자산이 되지 않습니다.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3 lg:col-span-2">
            {["기록·검색 불가", "책임 소재 불명확", "비수지 신호 손실"].map(
              (title, idx) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white/10 bg-[#100d1d] p-6"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-200">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/58">
                    회의 이후 다시 확인하고 실행하기 위한 데이터가 남지 않아
                    반복 회의와 커뮤니케이션 비용이 발생합니다.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold text-violet-300">Solution</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            회의록을 넘어, 상호작용을 분석합니다.
          </h2>
          <p className="mt-5 text-white/60">
            도메인 특화 수어 사전과 Human-in-the-loop 피드백 구조로 사용할수록
            정확해지는 분석 환경을 만듭니다.
          </p>
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

      <section id="demo" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/15 to-white/[0.04] p-8">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500 text-white">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-black">
              기업과 공공기관을 위한 접근성 협업 인프라
            </h2>
            <p className="mt-4 leading-7 text-white/62">
              사용자에게는 더 나은 회의 경험을, 구매자에게는 ESG·디지털
              포용·회의 생산성 개선 근거를 제공합니다.
            </p>
            <div className="mt-8 space-y-3">
              {useCases.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/75"
                >
                  <CheckCircle2 className="h-5 w-5 text-violet-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-white/45">Analysis Report</p>
                <h3 className="text-2xl font-black">회의 분석 리포트</h3>
              </div>
              <button className="rounded-full bg-violet-500 px-4 py-2 text-sm font-semibold">
                다운로드
              </button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <ReportCard
                icon={<Users />}
                title="참여도"
                value="85%"
                desc="전체 참석자의 균형 있는 참여"
              />
              <ReportCard
                icon={<Clock />}
                title="Time-to-Value"
                value="-72%"
                desc="수동 기록 대비 시간 절감"
              />
              <ReportCard
                icon={<BarChart3 />}
                title="의도 분석"
                value="동의 45%"
                desc="강조·질문·우려 패턴 분류"
              />
              <ReportCard
                icon={<FileText />}
                title="액션 아이템"
                value="3건"
                desc="담당자와 후속 일정 추출"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white text-[#080612]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm font-bold text-violet-600">Early Access</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              첫 PoC 파트너를 찾고 있습니다.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
              복지기관, 공공기관, 장애인 고용 기업, ESG/CSR 부서와 함께 실제
              회의 데이터를 기반으로 서비스를 검증합니다.
            </p>
          </div>
          <div className="rounded-[2rem] bg-[#080612] p-8 text-white">
            <h3 className="text-2xl font-black">도입 문의</h3>
            <p className="mt-3 text-sm leading-6 text-white/60">
              기관명과 회의 환경을 남겨주시면 PoC 가능 범위를 안내해드립니다.
            </p>
            <div className="mt-6 space-y-3">
              <input
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-white/35"
                placeholder="이메일"
              />
              <input
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-white/35"
                placeholder="기관명"
              />
              <button className="w-full rounded-2xl bg-violet-500 px-5 py-3 font-bold hover:bg-violet-400">
                데모 신청하기
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ReportCard({ icon, title, value, desc }: ReportCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#100d1d] p-5">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-200">
        {React.cloneElement(icon, { className: "h-5 w-5" })}
      </div>
      <p className="text-sm text-white/45">{title}</p>
      <p className="mt-1 text-3xl font-black">{value}</p>
      <p className="mt-2 text-sm leading-6 text-white/55">{desc}</p>
    </div>
  );
}
