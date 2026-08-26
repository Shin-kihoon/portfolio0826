import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Code, Play, ExternalLink, Github, CheckCircle2, XCircle, AlertTriangle, Cpu, Terminal, RefreshCw, GitBranch, Layers } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  // Simulator State for Deposit Token Contract
  const [testScenario, setTestScenario] = useState<'valid' | 'invalid_region' | 'invalid_mcc' | 'expired'>('valid');

  // Simulation outcomes
  const scenarioResults = {
    valid: {
      status: 'SUCCESS',
      txResult: '0x3a4f... confirmed in block #194821',
      gasUsed: '48,210 gas',
      revertMsg: null,
      kycState: 'KYC Verified (Sender & Registered Merchant)',
      burnRemint: 'Bank A (-50,000 KRW Token) → Burn → Bank B (+50,000 KRW Token) → Remint',
      totalSupplyInvariant: 'Total Supply Δ = 0 (Constant)',
    },
    invalid_region: {
      status: 'REVERTED',
      txResult: 'Transaction execution reverted by EVM',
      gasUsed: '21,340 gas',
      revertMsg: 'CustomError: RegionMismatch(senderLoc: "Gwanak", merchantLoc: "Gangnam")',
      kycState: 'Enforcement Checked: Out-of-region merchant boundary',
      burnRemint: 'Execution Aborted (No Token Burned)',
      totalSupplyInvariant: 'Total Supply Untouched',
    },
    invalid_mcc: {
      status: 'REVERTED',
      txResult: 'Transaction execution reverted by EVM',
      gasUsed: '22,010 gas',
      revertMsg: 'CustomError: RestrictedMerchantCategory(mcc: 7995 /* Gaming/Entertainment */)',
      kycState: 'Enforcement Checked: MCC Disallowed for Local Currency Subsidy',
      burnRemint: 'Execution Aborted (No Token Burned)',
      totalSupplyInvariant: 'Total Supply Untouched',
    },
    expired: {
      status: 'REVERTED',
      txResult: 'Transaction execution reverted by EVM',
      gasUsed: '20,890 gas',
      revertMsg: 'CustomError: VoucherExpired(blockTimestamp > validUntil)',
      kycState: 'Enforcement Checked: Voucher expiration timestamp passed',
      burnRemint: 'Execution Aborted (No Token Burned)',
      totalSupplyInvariant: 'Total Supply Untouched',
    },
  };

  const currentResult = scenarioResults[testScenario];

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-zinc-200/80 bg-zinc-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-900" />
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-mono-code">
              Engineering & Systems Projects
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 font-serif-heading">
                연구·개발 프로젝트
              </h2>
              <p className="text-base text-zinc-600 font-sans">
                금융제도 주제를 실제 동작하는 코드로 옮긴 작업입니다
              </p>
            </div>
            <span className="text-xs font-mono-code text-zinc-500 bg-white px-3 py-1.5 rounded-lg border border-zinc-200">
              Solidity 0.8.26 · Python · CI/CD Automation
            </span>
          </div>
        </div>

        {/* Project 1: Deposit Token */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 space-y-8 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 border-b border-zinc-100 pb-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono-code font-bold bg-zinc-900 text-zinc-100">
                  Solidity 0.8.26
                </span>
                <span className="px-2.5 py-0.5 rounded text-xs font-mono-code bg-emerald-50 text-emerald-800 border border-emerald-200">
                  54 Tests Passed (29 EVM + 25 jsdom)
                </span>
              </div>
              <h3 className="text-2xl font-bold text-zinc-950">
                지역사랑상품권 예금토큰 (Local Currency Deposit Token)
              </h3>
              <p className="text-sm font-medium text-zinc-600">
                사용처 제한을 사후 적발에서 사전 불가능성으로
              </p>
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                id="token-repo-btn"
                href="https://github.com/Shin-kihoon/krw-deposit-token"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-200 transition-colors font-mono-code"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
              </a>
              <a
                id="token-demo-btn"
                href="https://shin-kihoon.github.io/krw-deposit-token/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-zinc-50 transition-colors font-mono-code shadow-xs"
              >
                <Play className="w-3.5 h-3.5 text-emerald-400" />
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Key Bullet Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 space-y-2">
              <div className="text-xs font-bold text-zinc-800 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>사용처를 실행 조건으로 강제</span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                가맹점을 등록해두고 위반을 나중에 적발하는 대신, 업종(MCC)·지역 코드·유효기한을 계약의 실행 조건으로 확인해 조건을 만족하지 못하면 <code className="font-mono bg-zinc-200 px-1 py-0.5 rounded text-zinc-800 font-bold">revert</code> 합니다. 적발되는 것이 아니라 애초에 성립하지 않습니다.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 space-y-2">
              <div className="text-xs font-bold text-zinc-800 flex items-center gap-1.5">
                <RefreshCw className="w-4 h-4 text-indigo-600" />
                <span>기명증서 모델 & 소각-재발행(Burn & Remint)</span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                토큰을 이용자가 자기 거래은행에 대해 갖는 청구권으로 정의했습니다. 임의 주소로의 이전이라는 개념이 없어 KYC 경계가 유지되고, 은행 간 결제는 지급인 은행에서 소각 후 수취인 은행에서 재발행하므로 <strong>총 발행량이 변하지 않습니다</strong>.
              </p>
            </div>
          </div>

          {/* Interactive EVM Contract Simulation Box */}
          <div className="rounded-xl border border-zinc-200 bg-zinc-900 text-zinc-100 p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold font-mono-code text-zinc-200">
                  Smart Contract Revert & State Verification Simulator
                </span>
              </div>
              <span className="text-[11px] text-zinc-400 font-mono-code">
                Solidity 0.8.26 Runtime
              </span>
            </div>

            {/* Scenario Selector Buttons */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono-code text-zinc-400">결제 시나리오 선택:</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono-code">
                <button
                  id="scenario-valid"
                  onClick={() => setTestScenario('valid')}
                  className={`p-2 rounded-lg border text-left transition-all cursor-pointer ${
                    testScenario === 'valid'
                      ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold'
                      : 'bg-zinc-800/80 border-zinc-700 text-zinc-300 hover:bg-zinc-800'
                  }`}
                >
                  ✓ 1. 정상 결제
                  <span className="block text-[10px] text-zinc-400 font-normal">관할 지역/업종 일치</span>
                </button>

                <button
                  id="scenario-region"
                  onClick={() => setTestScenario('invalid_region')}
                  className={`p-2 rounded-lg border text-left transition-all cursor-pointer ${
                    testScenario === 'invalid_region'
                      ? 'bg-rose-950/80 border-rose-500 text-rose-300 font-bold'
                      : 'bg-zinc-800/80 border-zinc-700 text-zinc-300 hover:bg-zinc-800'
                  }`}
                >
                  ✗ 2. 지역 위반
                  <span className="block text-[10px] text-zinc-400 font-normal">타 지자체 상권 결제</span>
                </button>

                <button
                  id="scenario-mcc"
                  onClick={() => setTestScenario('invalid_mcc')}
                  className={`p-2 rounded-lg border text-left transition-all cursor-pointer ${
                    testScenario === 'invalid_mcc'
                      ? 'bg-rose-950/80 border-rose-500 text-rose-300 font-bold'
                      : 'bg-zinc-800/80 border-zinc-700 text-zinc-300 hover:bg-zinc-800'
                  }`}
                >
                  ✗ 3. 제한 업종
                  <span className="block text-[10px] text-zinc-400 font-normal">사행성/유흥 MCC</span>
                </button>

                <button
                  id="scenario-expired"
                  onClick={() => setTestScenario('expired')}
                  className={`p-2 rounded-lg border text-left transition-all cursor-pointer ${
                    testScenario === 'expired'
                      ? 'bg-rose-950/80 border-rose-500 text-rose-300 font-bold'
                      : 'bg-zinc-800/80 border-zinc-700 text-zinc-300 hover:bg-zinc-800'
                  }`}
                >
                  ✗ 4. 기한 경과
                  <span className="block text-[10px] text-zinc-400 font-normal">유효기간 만료 바우처</span>
                </button>
              </div>
            </div>

            {/* EVM Execution Output Terminal */}
            <div className="p-3.5 rounded-lg bg-zinc-950 border border-zinc-800 font-mono-code text-xs space-y-2">
              <div className="flex items-center justify-between text-[11px] pb-1 border-b border-zinc-800/80">
                <span className="text-zinc-400">Execution Status:</span>
                <span
                  className={`font-bold px-2 py-0.5 rounded ${
                    currentResult.status === 'SUCCESS'
                      ? 'bg-emerald-900/60 text-emerald-400 border border-emerald-700'
                      : 'bg-rose-900/60 text-rose-400 border border-rose-700'
                  }`}
                >
                  {currentResult.status}
                </span>
              </div>

              <div className="space-y-1 text-zinc-300">
                <div>&gt; {currentResult.txResult}</div>
                {currentResult.revertMsg && (
                  <div className="text-rose-400 font-bold">
                    [EVM REVERT] {currentResult.revertMsg}
                  </div>
                )}
                <div className="text-zinc-400 text-[11px] pt-1">
                  • KYC Boundary Check: <span className="text-zinc-200">{currentResult.kycState}</span>
                </div>
                <div className="text-zinc-400 text-[11px]">
                  • Interbank Settlement: <span className="text-zinc-200">{currentResult.burnRemint}</span>
                </div>
                <div className="text-zinc-400 text-[11px]">
                  • Invariant Check: <span className="text-emerald-400 font-semibold">{currentResult.totalSupplyInvariant}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2: Salary Doctor (연봉닥터) */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 space-y-8 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 border-b border-zinc-100 pb-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono-code font-bold bg-zinc-900 text-zinc-100">
                  팀 프로젝트
                </span>
                <span className="px-2.5 py-0.5 rounded text-xs font-mono-code bg-indigo-50 text-indigo-800 border border-indigo-200">
                  Team Project · 56 Commits
                </span>
                <span className="px-2.5 py-0.5 rounded text-xs font-mono-code bg-zinc-100 text-zinc-700">
                  OECD SDMX · Yahoo Finance · Frankfurter
                </span>
              </div>
              <h3 className="text-2xl font-bold text-zinc-950">
                연봉닥터 (Salary Doctor)
              </h3>
              <p className="text-sm font-medium text-zinc-600">
                내 연봉 인상률은 물가를 이기고 있나
              </p>
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                id="salarydoctor-live-btn"
                href="https://fintech-team-final.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-zinc-50 transition-colors font-mono-code shadow-xs"
              >
                <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                <span>Live Service</span>
              </a>
            </div>
          </div>

          {/* Key Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 space-y-2">
              <div className="text-xs font-bold text-zinc-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>적자인데 "양호"로 진단하던 문제</span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                연봉 3,600만원에 생활비 연 6,000만원을 넣어도 "괜찮아요"로 진단됐습니다. 판정이 <strong>"인상률이 물가를 이겼나"만 보고 수지 여부를 묻지 않은 것</strong>이 원인이라, 물가 판정은 그대로 두고 수지 판정을 별도 축으로 추가했습니다.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 space-y-2">
              <div className="text-xs font-bold text-zinc-800 flex items-center gap-1.5">
                <GitBranch className="w-4 h-4 text-indigo-600" />
                <span>봇 PR 데드락 해결과 가짜 데이터 차단</span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                GitHub은 봇이 만든 PR에 워크플로를 돌리지 않아, 필수 검사가 영영 통과되지 않고 데이터 자동 갱신이 3일간 멈췄습니다. 잡이 같은 검사를 직접 돌린 뒤 커밋 상태 API로 기록하도록 바꿨습니다. 함께 <code className="font-mono bg-zinc-200 px-1 py-0.5 rounded text-zinc-800">np.random</code> 등 난수·하드코딩 수치를 PR 단계에서 차단하는 검사를 추가했습니다.
              </p>
            </div>
          </div>

          {/* Data Pipeline Flow Diagram */}
          <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-3">
            <div className="text-xs font-bold text-zinc-800 font-mono-code flex items-center justify-between">
              <span>AUTOMATED MULTI-SOURCE DATA PIPELINE (GitHub Actions Daily Cron)</span>
              <span className="text-emerald-700">실제 데이터만 사용</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono-code">
              <div className="p-3 bg-white rounded-lg border border-zinc-200 space-y-1">
                <div className="text-zinc-500 text-[10px]">SOURCE 1</div>
                <div className="font-bold text-zinc-900">OECD SDMX API</div>
                <div className="text-[11px] text-zinc-600 font-sans">
                  COICOP 12품목별 소비자물가 (실시간 조회)
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-zinc-200 space-y-1">
                <div className="text-zinc-500 text-[10px]">SOURCE 2</div>
                <div className="font-bold text-zinc-900">Yahoo Finance</div>
                <div className="text-[11px] text-zinc-600 font-sans">
                  10년 월말 종가 — Actions 가 매일 수집해 커밋
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-zinc-200 space-y-1">
                <div className="text-zinc-500 text-[10px]">SOURCE 3</div>
                <div className="font-bold text-zinc-900">Frankfurter FX</div>
                <div className="text-[11px] text-zinc-600 font-sans">
                  원/달러 환율 (실시간 조회)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
