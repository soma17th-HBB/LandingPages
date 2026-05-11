"use client";

import React from "react";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  ClipboardCheck,
  FileCode2,
  MessageCircleQuestion,
  Sparkles,
  Users,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfN89ngfuIjlI7350yWNcnuzw8ivikICUAkF7cC2wXtdljV0g/viewform?usp=dialog";

const features = [
  {
    icon: Brain,
    title: "AI 면접관 모드",
    subtitle: "혼자서도 실전처럼",
    description:
      "기술·인성·압박 면접관 페르소나를 선택하고, 답변 흐름에 맞춰 이어지는 꼬리 질문을 받는 1:1 면접 연습 모드입니다.",
    bullets: [
      "면접관 페르소나 선택",
      "답변 기반 꼬리 질문",
      "논리·근거 중심 피드백",
    ],
  },
  {
    icon: Users,
    title: "스터디 모드",
    subtitle: "여러 명이 함께하는 면접방",
    description:
      "Zoom처럼 여러 사용자가 한 면접방에 참여하고, AI가 질문 추천과 진행 흐름을 보조하는 다대다 면접 스터디 모드입니다.",
    bullets: ["다대다 면접 스터디", "AI 질문 추천", "참여자별 피드백 기록"],
  },
  {
    icon: FileCode2,
    title: "과제형 면접 모드",
    subtitle: "풀이 이후 시작되는 진짜 면접",
    description:
      "아키텍처 설계·서비스 개선·트러블슈팅 문제를 제한 시간 안에 풀고, 제출한 결과물을 기반으로 면접이 이어지는 실무형 모드입니다.",
    bullets: ["실무형 문제 제공", "제한 시간 풀이", "결과물 기반 압박 질문"],
  },
];

const flow = [
  "면접 모드 선택",
  "답변 또는 과제 수행",
  "AI가 맥락 분석",
  "꼬리 질문으로 검증",
  "면접 리포트 제공",
];

const painPoints = [
  "예상 질문은 외웠지만 꼬리 질문에서 자주 막히는 경우",
  "과제형 면접을 어디서 어떻게 준비해야 할지 모르는 경우",
  "면접 스터디를 해도 질문 품질과 피드백이 아쉬운 경우",
];

export default function InterviewDaumLandingPage() {
  return (
    <main className="min-h-screen bg-[#F8F7FC] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-600 text-white shadow-lg shadow-violet-200">
              <Video className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-black tracking-tight">면접다움</p>
              <p className="text-xs text-slate-500">
                AI 실전 면접 시뮬레이션 서비스
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a href="#problem" className="hover:text-violet-700">
              문제
            </a>
            <a href="#features" className="hover:text-violet-700">
              기능
            </a>
            <a href="#flow" className="hover:text-violet-700">
              흐름
            </a>
          </nav>

          <Button
            asChild
            className="rounded-2xl bg-violet-600 px-5 shadow-lg shadow-violet-200 hover:bg-violet-700"
          >
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">
              수요 조사 참여
            </a>
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-[-180px] h-[560px] w-[860px] -translate-x-1/2 rounded-full bg-violet-200/60 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-bold text-violet-700 shadow-sm">
              <Sparkles className="h-4 w-4" />
              소프트웨어 마에스트로 17기 HBB 팀
            </div>

            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              면접 준비도
              <br />
              이제{" "}
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                면접답게
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              면접다움은 단순 예상 질문을 제공하는 서비스가 아닙니다. 혼자 보는
              AI 면접, 여러 명이 함께하는 스터디 면접, 과제 풀이 이후 이어지는
              실무형 면접까지 실제 면접의 흐름을 연습할 수 있도록 돕는 AI 기반
              면접 시뮬레이션 서비스입니다.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-2xl bg-violet-600 px-7 py-6 text-base shadow-xl shadow-violet-200 hover:bg-violet-700"
              >
                <a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">
                  의견 남기기 <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-2xl border-slate-300 bg-white px-7 py-6 text-base"
              >
                <a href="#features">서비스 살펴보기</a>
              </Button>
            </div>
          </div>

          <div>
            <div className="rounded-[2rem] border border-white bg-white/80 p-3 shadow-2xl shadow-violet-100 backdrop-blur">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-5 text-white">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-violet-200">면접다움 Preview</p>
                    <h3 className="text-xl font-black">다대다 스터디 면접방</h3>
                  </div>
                  <span className="rounded-full bg-red-500/15 px-3 py-1 text-xs font-bold text-red-200">
                    MOCK
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {["지원자", "면접관 A", "면접관 B", "AI 질문 도우미"].map(
                    (name, index) => (
                      <div
                        key={name}
                        className={`relative min-h-36 rounded-3xl p-4 ${index === 3 ? "bg-gradient-to-br from-violet-500 to-fuchsia-500" : "bg-slate-800"}`}
                      >
                        <div className="mx-auto mt-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-3xl">
                          {index === 0
                            ? "🙂"
                            : index === 1
                              ? "🧑‍💼"
                              : index === 2
                                ? "👩‍💻"
                                : "✨"}
                        </div>
                        <div className="absolute bottom-3 left-3 rounded-full bg-black/35 px-3 py-1 text-xs font-semibold">
                          {name}
                        </div>
                      </div>
                    ),
                  )}
                </div>

                <div className="mt-4 rounded-3xl bg-white/8 p-4">
                  <p className="mb-2 text-sm font-bold text-violet-200">
                    AI 추천 꼬리 질문
                  </p>
                  <p className="text-sm leading-6 text-slate-100">
                    “트래픽이 10배 증가하면 현재 설계에서 가장 먼저 개선해야 할
                    지점은 어디인가요?”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="font-bold text-violet-700">Why</p>
            <h2 className="mt-2 text-4xl font-black tracking-tight">
              면접 준비는 했는데, 실전은 왜 항상 어려울까요?
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              많은 면접 준비 서비스는 질문 목록과 모범 답변을 제공합니다. 하지만
              실제 면접에서 어려운 지점은 답변 자체보다, 답변 이후 이어지는
              질문과 압박 속에서 생각을 유지하는 과정입니다.
            </p>
          </div>

          <div className="grid gap-4">
            {painPoints.map((point) => (
              <Card
                key={point}
                className="rounded-3xl border-slate-200 bg-white shadow-sm"
              >
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-lg font-bold leading-7">{point}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="font-bold text-violet-700">Core Features</p>
          <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">
            3가지 방식으로 경험하는 면접다움
          </h2>
          <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
            사용자는 상황에 따라 혼자 연습하거나, 스터디원과 함께하거나, 과제형
            면접을 준비할 수 있습니다.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="rounded-[2rem] border-slate-200 bg-white p-2 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100"
              >
                <CardContent className="p-6">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-3xl bg-violet-600 text-white shadow-lg shadow-violet-200">
                    <Icon className="h-7 w-7" />
                  </div>
                  <p className="mb-2 text-sm font-bold text-violet-700">
                    {feature.subtitle}
                  </p>
                  <h3 className="text-2xl font-black">{feature.title}</h3>
                  <p className="mt-4 min-h-28 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {feature.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                      >
                        <CheckCircle2 className="h-4 w-4 text-violet-600" />{" "}
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="flow" className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-200 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="font-bold text-violet-300">Interview Flow</p>
              <h2 className="mt-2 text-4xl font-black leading-tight">
                핵심은 질문 생성이 아니라, 면접 흐름입니다.
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                면접다움은 사용자의 답변과 과제 결과물을 기반으로 다음 질문을
                이어갑니다. 사용자는 단발성 질문이 아니라, 실제 면접처럼
                연결되는 질문의 흐름을 경험합니다.
              </p>
            </div>

            <div className="grid gap-3">
              {flow.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-3xl bg-white/8 p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-500 text-sm font-black">
                    {index + 1}
                  </div>
                  <p className="text-lg font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-7 shadow-sm">
            <MessageCircleQuestion className="h-8 w-8 text-violet-600" />
            <h3 className="mt-5 text-xl font-black">예상 질문을 넘어</h3>
            <p className="mt-3 leading-7 text-slate-600">
              답변 이후 이어지는 꼬리 질문까지 대비합니다.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white p-7 shadow-sm">
            <ClipboardCheck className="h-8 w-8 text-violet-600" />
            <h3 className="mt-5 text-xl font-black">과제형 면접까지</h3>
            <p className="mt-3 leading-7 text-slate-600">
              아키텍처 설계와 트러블슈팅 문제 기반 면접을 준비합니다.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white p-7 shadow-sm">
            <Users className="h-8 w-8 text-violet-600" />
            <h3 className="mt-5 text-xl font-black">스터디도 더 체계적으로</h3>
            <p className="mt-3 leading-7 text-slate-600">
              여러 명이 함께하는 면접 스터디에서 AI가 흐름을 보조합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <div className="rounded-[2rem] bg-gradient-to-r from-violet-600 to-fuchsia-500 p-10 text-white shadow-2xl shadow-violet-200 md:p-14">
          <p className="text-sm font-bold text-violet-100">
            Google Form 수요 조사
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
            이런 면접 연습 서비스, 사용해보고 싶으신가요?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-violet-50">
            저희는 소프트웨어 마에스트로 17기 HBB 팀으로, 실제 수요가 있는
            서비스인지 확인한 뒤 개발에 착수하려고 합니다. 면접 준비 과정에서
            불편했던 점이나 사용해보고 싶은 기능이 있다면 짧게 의견을
            남겨주세요.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 rounded-2xl bg-white px-8 py-6 text-base font-black text-violet-700 hover:bg-violet-50"
          >
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">
              의견 남기기 <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
