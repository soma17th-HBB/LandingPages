"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Clock,
  FileCode2,
  MessageSquareQuote,
  MonitorUp,
  Play,
  Sparkles,
  Users,
  Video,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const serviceNames = [
  { name: "면접다움", meaning: "면접이 켜지는 순간, 실전이 시작된다는 의미" },
  { name: "꼬리면접", meaning: "꼬리 질문 대응을 직관적으로 보여주는 이름" },
  { name: "면접다움", meaning: "진짜 면접다운 흐름을 연습한다는 의미" },
  { name: "면접로그", meaning: "연습 기록과 성장 리포트를 강조하는 이름" },
  { name: "실전면접실", meaning: "혼자/스터디/과제형 면접방을 모두 담는 이름" },
];

const modes = [
  {
    icon: Brain,
    title: "AI 면접관 모드",
    tag: "1:1 실전 연습",
    description:
      "혼자서도 면접관과 대화하듯 답변하고, 답변 흐름에 맞춰 꼬리 질문을 받습니다.",
    points: [
      "기술·인성·압박 면접관 선택",
      "답변 기반 실시간 꼬리 질문",
      "논리·근거·구조 중심 피드백",
    ],
  },
  {
    icon: Users,
    title: "스터디 모드",
    tag: "다대다 면접 스터디",
    description:
      "Zoom처럼 여러 명이 들어와 면접 스터디를 진행하고, AI가 질문 흐름을 보조합니다.",
    points: [
      "참가자별 역할 설정",
      "AI 추천 질문 제공",
      "스터디 후 개인별 리포트",
    ],
  },
  {
    icon: FileCode2,
    title: "과제형 면접 모드",
    tag: "문제 풀이 후 면접",
    description:
      "아키텍처·설계·트러블슈팅 문제를 풀고, 제출 결과물을 기반으로 면접이 이어집니다.",
    points: [
      "시간 제한 과제 수행",
      "결과물 기반 꼬리 질문",
      "트레이드오프 검증",
    ],
  },
];

const steps = [
  "문제 선택",
  "제한 시간 안에 풀이 작성",
  "AI가 결과물 분석",
  "제출물 기반 면접 진행",
  "피드백 리포트 확인",
];

const sampleQuestions = [
  "왜 Redis를 선택했나요? RDBMS만으로는 부족했나요?",
  "이 구조에서 장애가 발생하면 어떤 부분이 가장 먼저 병목이 될까요?",
  "트래픽이 10배 증가하면 어떤 컴포넌트부터 개선하시겠어요?",
  "Kafka 대신 WebSocket/Redis 기반 구조를 선택한 이유는 무엇인가요?",
];

export default function InterviewLandingPage() {
  const [selectedMode, setSelectedMode] = useState(2);
  const activeMode = useMemo(() => modes[selectedMode], [selectedMode]);
  const ActiveIcon = activeMode.icon;

  return (
    <div className="min-h-screen bg-[#F7F6FB] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-600 text-white shadow-lg shadow-violet-200">
              <Video className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-black tracking-tight">면접다움</p>
              <p className="text-xs text-slate-500">AI 실전 면접 시뮬레이터</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#modes" className="hover:text-violet-700">
              모드
            </a>
            <a href="#task" className="hover:text-violet-700">
              과제형 면접
            </a>
            <a href="#report" className="hover:text-violet-700">
              리포트
            </a>
          </nav>
          <Button className="rounded-2xl bg-violet-600 px-5 shadow-lg shadow-violet-200 hover:bg-violet-700">
            PoC 체험하기
          </Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-violet-200/50 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-semibold text-violet-700 shadow-sm">
                <Sparkles className="h-4 w-4" />
                문제 풀이가 끝나면, 진짜 면접이 시작됩니다
              </div>
              <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
                면접 준비,
                <br />
                이제{" "}
                <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                  실전처럼
                </span>
                <br />
                켜보세요.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                면접다움은 혼자 보는 AI 면접, 여러 명이 들어오는 스터디 면접,
                그리고 과제 제출 후 꼬리 질문까지 이어지는 과제형 면접을 하나로
                연결한 AI 면접 연습 서비스입니다.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="rounded-2xl bg-violet-600 px-7 py-6 text-base shadow-xl shadow-violet-200 hover:bg-violet-700"
                >
                  무료 데모 시작하기 <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-2xl border-slate-300 bg-white px-7 py-6 text-base"
                >
                  <Play className="mr-2 h-5 w-5" /> 화면 미리보기
                </Button>
              </div>
              <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-2xl font-black text-violet-700">3</p>
                  <p className="text-xs text-slate-500">면접 모드</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-2xl font-black text-violet-700">10+</p>
                  <p className="text-xs text-slate-500">꼬리 질문</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-2xl font-black text-violet-700">25분</p>
                  <p className="text-xs text-slate-500">평균 세션</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="rounded-[2rem] border border-white bg-white/80 p-3 shadow-2xl shadow-violet-100 backdrop-blur">
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-5 text-white">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-violet-200">
                        스터디 면접 진행 중
                      </p>
                      <h3 className="text-xl font-bold">
                        카카오 채팅 서비스 아키텍처 설계
                      </h3>
                    </div>
                    <div className="rounded-full bg-red-500/15 px-3 py-1 text-xs font-semibold text-red-200">
                      LIVE 28:34
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-[1fr_0.8fr]">
                    <div className="grid grid-cols-2 gap-3">
                      {["지원자 A", "면접관 B", "면접관 C", "지원자 D"].map(
                        (name, index) => (
                          <div
                            key={name}
                            className={`relative min-h-36 rounded-3xl bg-gradient-to-br ${index === 1 ? "from-violet-500 to-fuchsia-500" : "from-slate-800 to-slate-700"} p-4`}
                          >
                            <div className="absolute bottom-3 left-3 rounded-full bg-black/40 px-3 py-1 text-xs">
                              {name}
                            </div>
                            <div className="mx-auto mt-7 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-2xl">
                              {index === 0
                                ? "🙂"
                                : index === 1
                                  ? "🧑‍💼"
                                  : index === 2
                                    ? "👩‍💻"
                                    : "👨‍💻"}
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                    <div className="rounded-3xl bg-white/8 p-4">
                      <div className="mb-3 flex items-center gap-2 text-violet-200">
                        <Zap className="h-4 w-4" /> AI 도우미
                      </div>
                      <p className="rounded-2xl bg-violet-500/15 p-4 text-sm leading-6 text-violet-50">
                        제출한 설계에서 메시지 저장소 선택 근거가 약합니다. 다음
                        질문으로 깊이를 확인해보세요.
                      </p>
                      <button className="mt-4 w-full rounded-2xl bg-violet-500 py-3 text-sm font-bold">
                        질문 사용하기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="modes" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-bold text-violet-700">Interview Modes</p>
              <h2 className="mt-2 text-4xl font-black tracking-tight">
                사용 상황에 맞게 고르는 3가지 면접방
              </h2>
            </div>
            <p className="max-w-2xl text-slate-600">
              혼자 연습할 때, 스터디원과 함께할 때, 과제형 면접을 준비할 때 모두
              같은 흐름 안에서 연습할 수 있습니다.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {modes.map((mode, index) => {
              const Icon = mode.icon;
              return (
                <Card
                  key={mode.title}
                  onClick={() => setSelectedMode(index)}
                  className={`cursor-pointer rounded-[2rem] border p-2 transition ${selectedMode === index ? "border-violet-400 bg-violet-50 shadow-xl shadow-violet-100" : "border-slate-200 bg-white hover:border-violet-200"}`}
                >
                  <CardContent className="p-6">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-violet-600 text-white">
                      <Icon className="h-7 w-7" />
                    </div>
                    <p className="mb-2 text-sm font-bold text-violet-700">
                      {mode.tag}
                    </p>
                    <h3 className="text-2xl font-black">{mode.title}</h3>
                    <p className="mt-3 min-h-20 text-sm leading-6 text-slate-600">
                      {mode.description}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {mode.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2 text-sm text-slate-700"
                        >
                          <CheckCircle2 className="h-4 w-4 text-violet-600" />{" "}
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="task" className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-200">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-violet-500">
                <ActiveIcon className="h-8 w-8" />
              </div>
              <p className="mt-8 text-sm font-bold text-violet-200">
                핵심 차별화
              </p>
              <h2 className="mt-2 text-4xl font-black leading-tight">
                문제를 풀고 끝나는 서비스가 아닙니다.
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                면접다움은 과제 결과물을 분석하고, 그 선택의 이유와
                트레이드오프를 끝까지 물어봅니다. 사용자는 정답 암기가 아니라
                실제 면접에서 버티는 힘을 기릅니다.
              </p>
              <div className="mt-8 space-y-3">
                {steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-3 rounded-2xl bg-white/8 p-4"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500 text-sm font-black">
                      {index + 1}
                    </span>
                    <span className="font-semibold">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-100">
              <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-3xl bg-violet-50 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-black">과제 수행 중</h3>
                    <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-bold text-violet-700">
                      <Clock className="h-4 w-4" /> 42:17
                    </div>
                  </div>
                  <p className="font-bold">카카오 채팅 서비스 아키텍처 설계</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    대규모 사용자 채팅 서비스를 설계하고, 저장소·메시지 큐·장애
                    대응 전략을 설명하세요.
                  </p>
                  <div className="mt-5 rounded-2xl bg-white p-4 text-sm leading-7 text-slate-700">
                    <p className="font-bold">요구사항</p>
                    <ul className="mt-2 list-disc pl-5">
                      <li>1:1 채팅, 그룹 채팅 지원</li>
                      <li>실시간 메시지 전송</li>
                      <li>읽음 처리 및 알림</li>
                      <li>장애 상황 대응</li>
                    </ul>
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-200 p-5">
                  <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
                    <p className="font-black">내 답변</p>
                    <span className="text-xs text-slate-500">자동 저장됨</span>
                  </div>
                  <div className="space-y-4 text-sm leading-7 text-slate-700">
                    <p>
                      <b>1. 주요 구성 요소</b>
                    </p>
                    <p>
                      Client, API Server, Message Server, Redis, DB, Push
                      Server로 구성합니다. 실시간 연결은 WebSocket을 사용하고
                      메시지 상태는 Redis와 DB를 함께 활용합니다.
                    </p>
                    <p>
                      <b>2. 저장 전략</b>
                    </p>
                    <p>
                      최근 메시지는 Redis에 캐싱하고, 영구 보관은 RDBMS에
                      저장합니다. 장애 복구를 위해 메시지 이벤트 로그를 별도로
                      관리합니다.
                    </p>
                  </div>
                  <Button className="mt-6 w-full rounded-2xl bg-violet-600 py-6 hover:bg-violet-700">
                    제출하고 면접 시작하기
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-100">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
              <div className="rounded-3xl bg-[#111827] p-6 text-white">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-violet-200">
                      과제 제출 후 AI 면접 진행
                    </p>
                    <h2 className="text-2xl font-black">면접 질문 2 / 8</h2>
                  </div>
                  <Button variant="destructive" className="rounded-2xl">
                    면접 종료
                  </Button>
                </div>
                <div className="space-y-4">
                  <div className="rounded-3xl bg-violet-500/15 p-5">
                    <p className="text-sm font-bold text-violet-200">
                      AI 면접관
                    </p>
                    <p className="mt-2 leading-7">
                      Q2. 채팅 메시지는 어떻게 저장되나요? 대용량 데이터가 쌓일
                      때 성능을 어떻게 유지할 수 있나요?
                    </p>
                  </div>
                  <div className="rounded-3xl bg-white/8 p-5">
                    <p className="text-sm font-bold text-slate-300">
                      나의 답변
                    </p>
                    <p className="mt-2 leading-7 text-slate-200">
                      최근 메시지는 Redis에 저장하고, 영구 데이터는 RDBMS에
                      저장합니다. 오래된 데이터는 파티셔닝을 통해 분리하고...
                    </p>
                  </div>
                  <div className="rounded-3xl bg-violet-500/15 p-5">
                    <p className="text-sm font-bold text-violet-200">
                      꼬리 질문
                    </p>
                    <p className="mt-2 leading-7">
                      그럼 파티셔닝 기준은 어떻게 나누셨나요? 파티션이 많아졌을
                      때 생기는 문제는 어떻게 해결하시겠어요?
                    </p>
                  </div>
                </div>
              </div>
              <div id="report" className="rounded-3xl bg-violet-50 p-6">
                <p className="font-bold text-violet-700">Feedback Report</p>
                <h2 className="mt-2 text-3xl font-black">
                  면접이 끝나면, 막힌 지점이 보입니다.
                </h2>
                <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm">
                  <div className="flex items-end gap-2">
                    <span className="text-6xl font-black">86</span>
                    <span className="mb-2 text-slate-500">/100</span>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">
                    전반적으로 구조화된 답변이 좋지만, 장애 대응과 비용 효율성
                    설명이 더 필요합니다.
                  </p>
                </div>
                <div className="mt-5 space-y-3">
                  {[
                    "논리성 90",
                    "확장성 85",
                    "기술 선택 근거 80",
                    "장애 대응 75",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-white p-4 text-sm font-semibold text-slate-700 shadow-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="font-bold text-violet-700">Sample Questions</p>
              <h2 className="mt-2 text-4xl font-black tracking-tight">
                이런 질문까지 이어집니다
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                단순한 예상 질문이 아니라, 사용자의 답변과 과제 결과물에서 약한
                부분을 찾아 이어 묻습니다.
              </p>
            </div>
            <div className="grid gap-3">
              {sampleQuestions.map((question) => (
                <div
                  key={question}
                  className="flex items-start gap-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <MessageSquareQuote className="mt-1 h-5 w-5 shrink-0 text-violet-600" />
                  <p className="font-semibold leading-7">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-[2rem] bg-gradient-to-r from-violet-600 to-fuchsia-500 p-10 text-white shadow-2xl shadow-violet-200 md:p-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <h2 className="text-4xl font-black leading-tight md:text-5xl">
                  면접 준비 서비스 이름 후보
                </h2>
                <p className="mt-4 text-violet-50">
                  PoC에서는 ‘면접다움’을 메인 서비스명으로 사용합니다. 단순 질문
                  연습이 아니라, 진짜 면접다운 흐름과 압박감을 경험하게 한다는
                  의미가 명확합니다.
                </p>
              </div>
              <div className="grid gap-3">
                {serviceNames.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-3xl bg-white/15 p-4 backdrop-blur"
                  >
                    <p className="text-xl font-black">{item.name}</p>
                    <p className="mt-1 text-sm text-violet-50">
                      {item.meaning}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-violet-600 text-white shadow-xl shadow-violet-200">
            <MonitorUp className="h-8 w-8" />
          </div>
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            문제를 푸는 서비스가 아니라, 면접을 경험하는 서비스.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            면접다움 PoC에서 과제 풀이부터 AI 꼬리 질문, 피드백 리포트까지 한
            번에 경험해보세요.
          </p>
          <Button
            size="lg"
            className="mt-8 rounded-2xl bg-violet-600 px-8 py-6 text-base shadow-xl shadow-violet-200 hover:bg-violet-700"
          >
            지금 PoC 체험하기 <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </section>
      </main>
    </div>
  );
}
