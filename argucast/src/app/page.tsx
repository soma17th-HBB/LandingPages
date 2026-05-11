"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Radio,
  Mic2,
  MessageSquareText,
  GitBranch,
  BarChart3,
  Trophy,
  Megaphone,
  ClipboardList,
  Timer,
  Users,
  Flag,
  ChevronRight,
  CircleDot,
  MessageCircleQuestion,
} from "lucide-react";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeXeWkCb1GW5TXf-n-zQWnFOrQaBWEZUk8By7-TPFfDStCXkw/viewform?usp=dialog";

const scoreboard = [
  { inning: "1", red: 2, blue: 1 },
  { inning: "2", red: 1, blue: 2 },
  { inning: "3", red: 3, blue: 1 },
  { inning: "4", red: 0, blue: 2 },
  { inning: "LIVE", red: 7, blue: 6, active: true },
];

const liveEvents = [
  {
    label: "선제 주장",
    text: "A측, 비용 절감 논점으로 먼저 출루합니다.",
    badge: "1루 진출",
  },
  {
    label: "정면 반박",
    text: "B측, 데이터 편향 리스크를 던지며 병살 코스를 만듭니다.",
    badge: "카운터",
  },
  {
    label: "근거 보강",
    text: "A측, 실제 사례 2개를 붙이며 득점권까지 이동합니다.",
    badge: "찬스",
  },
  {
    label: "질문 회피",
    text: "B측 답변이 질문 범위를 살짝 벗어났습니다. 파울 판정입니다.",
    badge: "파울",
  },
];

const argumentCards = [
  {
    side: "A측 주장",
    title: "AI 면접관은 사람마다 달라지는 평가 기준을 줄일 수 있다.",
    grounds: ["같은 질문과 기준을 반복 적용", "면접관 컨디션 영향 감소"],
    state: "근거 2개 · 반박 대기",
  },
  {
    side: "B측 반박",
    title: "학습 데이터가 편향되어 있으면 AI도 공정하다고 볼 수 없다.",
    grounds: ["데이터셋 구성 문제", "설명 가능성 부족"],
    state: "A-1 주장에 직접 반박",
  },
];

const features = [
  {
    icon: Mic2,
    title: "실시간 자막 중계",
    desc: "토론 발언을 실시간 텍스트로 변환하고, 누가 어떤 말을 했는지 분리합니다.",
  },
  {
    icon: ClipboardList,
    title: "주장·근거 자동 기록",
    desc: "발언 속 주장과 근거를 카드로 정리해 관중도 흐름을 놓치지 않게 합니다.",
  },
  {
    icon: GitBranch,
    title: "반박 관계 연결",
    desc: "상대의 반박이 어떤 주장에 꽂혔는지 연결해 논쟁 구조를 보여줍니다.",
  },
  {
    icon: BarChart3,
    title: "흐름 전광판",
    desc: "근거 수, 반박 성공, 논점 이탈, 흐름 변화를 야구 스코어보드처럼 시각화합니다.",
  },
];

const useCases = [
  ["인터넷 방송", "밸런스 게임, 토론 합방, 논쟁 콘텐츠를 더 재밌게 보여주기"],
  ["시사/정치 토론", "누가 어떤 근거로 말했는지 팬덤 싸움 대신 구조로 보기"],
  ["개발 회의", "기술 선택 논의에서 주장, 근거, 미해결 쟁점 남기기"],
  ["토론 교육", "학생 토론을 중계하듯 피드백하고 복기하기"],
];

export default function ArgucastLandingPage() {
  return (
    <main className="min-h-screen bg-[#f6f1e7] text-[#172018]">
      <section className="relative overflow-hidden border-b-4 border-[#172018] bg-[#f6f1e7]">
        <div className="absolute inset-0 opacity-[0.09] bg-[linear-gradient(90deg,#172018_1px,transparent_1px),linear-gradient(#172018_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-[#e6492d]/20 blur-3xl" />
        <div className="absolute -right-24 bottom-20 h-96 w-96 rounded-full bg-[#1f6f50]/20 blur-3xl" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 rotate-[-7deg] items-center justify-center rounded-full border-4 border-[#172018] bg-white shadow-[4px_4px_0_#172018]">
              <CircleDot className="h-6 w-6 fill-[#e6492d] text-[#e6492d]" />
            </div>
            <div>
              <p className="text-2xl font-black tracking-[-0.04em]">ARGUCAST</p>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#5e665b]">
                AI Debate Baseball Cast
              </p>
            </div>
          </div>

          <a
            href={FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border-4 border-[#172018] bg-[#f9c74f] px-5 py-2 text-sm font-black text-[#172018] shadow-[4px_4px_0_#172018] transition hover:-translate-y-1 hover:shadow-[6px_6px_0_#172018]"
          >
            의견 남기기
          </a>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:pb-28 lg:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex rotate-[-1deg] items-center gap-2 rounded-full border-4 border-[#172018] bg-white px-4 py-2 text-sm font-black shadow-[4px_4px_0_#172018]">
              <CircleDot className="h-4 w-4 fill-[#e6492d] text-[#e6492d]" />
              LIVE DEBATE BALLPARK
            </div>

            <h1 className="max-w-4xl text-6xl font-black leading-[0.9] tracking-[-0.08em] sm:text-7xl lg:text-8xl">
              토론을
              <span className="mt-2 block text-[#e6492d] drop-shadow-[3px_3px_0_#172018]">
                야구 중계처럼.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-xl font-semibold leading-9 text-[#3d473a]">
              ARGUCAST는 AI가 실시간으로 주장, 근거, 반박을 잡아내고 토론의
              흐름을 야구 게임 전광판처럼 보여주는 수요 검증용 아이디어입니다.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={FORM_URL}
                target="_blank"
                rel="noreferrer"
                className="group flex h-16 items-center justify-center gap-3 rounded-2xl border-4 border-[#172018] bg-[#e6492d] px-8 text-lg font-black text-white shadow-[6px_6px_0_#172018] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_#172018]"
              >
                이 아이디어 의견 남기기
                <ChevronRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <div className="rounded-2xl border-4 border-[#172018] bg-white px-5 py-3 text-sm font-black text-[#172018] shadow-[4px_4px_0_#172018]">
                만들지 말지 판단하려고 수요를 확인 중이에요.
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 1.5, y: 24 }}
            animate={{ opacity: 1, rotate: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-4 rotate-2 rounded-[2rem] border-4 border-[#172018] bg-[#1f6f50]" />
            <div className="relative overflow-hidden rounded-[2rem] border-4 border-[#172018] bg-[#244b32] text-white shadow-[10px_10px_0_#172018]">
              <div className="flex items-center justify-between border-b-4 border-[#172018] bg-[#f9c74f] px-5 py-4 text-[#172018]">
                <div className="flex items-center gap-3">
                  <div className="rounded-full border-2 border-[#172018] bg-[#e6492d] px-3 py-1 text-xs font-black text-white">
                    LIVE
                  </div>
                  <p className="font-black">AI 면접관 도입 토론 경기</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-black">
                  <Timer className="h-4 w-4" />
                  08:34
                </div>
              </div>

              <div className="grid grid-cols-[1fr_auto_1fr] border-b-4 border-[#172018]">
                <div className="bg-[#e6492d] p-5">
                  <p className="text-sm font-black opacity-80">A SIDE</p>
                  <p className="mt-2 text-7xl font-black tracking-tighter">7</p>
                  <p className="text-sm font-black">주장 5 · 근거 8 · 반박 3</p>
                </div>
                <div className="flex w-20 flex-col items-center justify-center bg-[#f6f1e7] text-[#172018]">
                  <Trophy className="h-7 w-7" />
                  <p className="mt-1 text-xs font-black">VS</p>
                </div>
                <div className="bg-[#2d6cdf] p-5 text-right">
                  <p className="text-sm font-black opacity-80">B SIDE</p>
                  <p className="mt-2 text-7xl font-black tracking-tighter">6</p>
                  <p className="text-sm font-black">주장 4 · 근거 6 · 반박 2</p>
                </div>
              </div>

              <div className="grid grid-cols-5 border-b-4 border-[#172018] bg-[#f6f1e7] text-[#172018]">
                {scoreboard.map((item) => (
                  <div
                    key={item.inning}
                    className={`border-r-4 border-[#172018] p-3 text-center last:border-r-0 ${
                      item.active ? "bg-[#f9c74f]" : "bg-white"
                    }`}
                  >
                    <p className="text-xs font-black">{item.inning}</p>
                    <p className="mt-1 text-sm font-black">
                      {item.red} : {item.blue}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 bg-[#244b32] p-5 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-2xl border-4 border-[#172018] bg-[#f6f1e7] p-4 text-[#172018]">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="font-black">🎙️ 중계석 코멘터리</p>
                    <Megaphone className="h-5 w-5 text-[#e6492d]" />
                  </div>
                  <div className="space-y-3">
                    {liveEvents.map((event) => (
                      <div
                        key={event.text}
                        className="rounded-xl border-2 border-[#172018] bg-white p-3 shadow-[3px_3px_0_#172018]"
                      >
                        <div className="mb-1 flex items-center justify-between gap-2">
                          <p className="text-xs font-black text-[#e6492d]">
                            {event.label}
                          </p>
                          <span className="rounded-full bg-[#f9c74f] px-2 py-1 text-[10px] font-black">
                            {event.badge}
                          </span>
                        </div>
                        <p className="text-sm font-bold leading-6">
                          {event.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  {argumentCards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-2xl border-4 border-[#172018] bg-white p-4 text-[#172018] shadow-[4px_4px_0_#172018]"
                    >
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <p className="text-sm font-black text-[#2d6cdf]">
                          {card.side}
                        </p>
                        <span className="rounded-full bg-[#1f6f50] px-3 py-1 text-xs font-black text-white">
                          {card.state}
                        </span>
                      </div>
                      <p className="text-base font-black leading-7">
                        {card.title}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {card.grounds.map((ground) => (
                          <span
                            key={ground}
                            className="rounded-full border-2 border-[#172018] bg-[#f6f1e7] px-3 py-1 text-xs font-black"
                          >
                            {ground}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b-4 border-[#172018] bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#e6492d]">
                What is this?
              </p>
              <h2 className="mt-4 text-5xl font-black leading-tight tracking-[-0.05em]">
                AI 심판이 아니라,
                <br />
                AI 해설자입니다.
              </h2>
              <p className="mt-6 text-lg font-semibold leading-8 text-[#3d473a]">
                ARGUCAST는 토론의 승패를 단정하지 않습니다. 대신 어떤 주장이
                나왔고, 어떤 근거가 붙었고, 어떤 반박이 흐름을 바꿨는지 보기
                쉽게 중계합니다.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="rounded-[1.5rem] border-4 border-[#172018] bg-[#f6f1e7] p-6 shadow-[5px_5px_0_#172018] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_#172018]"
                  >
                    <div className="mb-6 flex h-12 w-12 rotate-[-5deg] items-center justify-center rounded-xl border-4 border-[#172018] bg-[#f9c74f]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-black tracking-[-0.03em]">
                      {feature.title}
                    </h3>
                    <p className="mt-3 font-semibold leading-7 text-[#4e5849]">
                      {feature.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f1e7] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#2d6cdf]">
                Use Cases
              </p>
              <h2 className="mt-4 text-5xl font-black tracking-[-0.05em]">
                토론이 열리면,
                <br />
                중계가 시작됩니다.
              </h2>
            </div>
            <p className="max-w-xl text-lg font-semibold leading-8 text-[#3d473a]">
              인터넷 방송, 시사 토론, 개발 회의, 토론 교육까지. ARGUCAST는
              다양한 논의 상황을 하나의 야구 중계 화면처럼 보여줍니다.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {useCases.map(([title, desc], index) => (
              <div
                key={title}
                className="rounded-[1.5rem] border-4 border-[#172018] bg-white p-6 shadow-[5px_5px_0_#172018]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="rounded-full bg-[#1f6f50] px-3 py-1 text-xs font-black text-white">
                    CASE {index + 1}
                  </span>
                  <Flag className="h-6 w-6 text-[#e6492d]" />
                </div>
                <h3 className="text-2xl font-black tracking-[-0.03em]">
                  {title}
                </h3>
                <p className="mt-3 font-semibold leading-7 text-[#4e5849]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1f6f50] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border-4 border-white bg-[#f9c74f] px-4 py-2 text-sm font-black text-[#172018] shadow-[4px_4px_0_#172018]">
              <MessageCircleQuestion className="h-4 w-4" />
              수요 확인 중
            </div>
            <h2 className="text-5xl font-black leading-tight tracking-[-0.05em] sm:text-6xl">
              이 아이디어,
              <br />
              만들면 써볼 것 같나요?
            </h2>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-green-50">
              ARGUCAST는 아직 개발 전 아이디어 검증 단계입니다. 여러분의 의견을
              바탕으로 실제 개발 여부와 기능 우선순위를 정하려고 합니다.
            </p>
          </div>

          <div className="rounded-[2rem] border-4 border-[#172018] bg-[#f6f1e7] p-6 text-[#172018] shadow-[8px_8px_0_#172018]">
            <p className="text-2xl font-black tracking-[-0.04em]">
              이런 의견을 받고 있어요
            </p>
            <ul className="mt-5 space-y-3 text-base font-bold leading-7">
              <li>• 실제로 재미있어 보이는지</li>
              <li>• 어떤 상황에서 써보고 싶은지</li>
              <li>• 꼭 필요해 보이는 기능은 무엇인지</li>
              <li>• 반대로 별로라면 왜 별로인지</li>
            </ul>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-7 flex h-14 items-center justify-center gap-3 rounded-2xl border-4 border-[#172018] bg-[#e6492d] px-6 text-base font-black text-white shadow-[5px_5px_0_#172018] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_#172018]"
            >
              의견 남기러 가기
              <ChevronRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
