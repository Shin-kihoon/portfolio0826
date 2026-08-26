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
                스마트계약 기반 금융 아키텍처 및 재현 가능한 데이터 파이프라인 엔지니어링
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
                스마트계약 기반 온체인 사용처 강제 및 기명증서 은행 간 결제 시스템
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
                <span>사전 온체인 사용처 강제 (Pre-execution Enforcement)</span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                사후 영수증 검증이나 이상거래 탐지가 아닌, 스마트계약 실행 조건으로 업종(MCC), 관할 지자체 지역 코드, 유효기한을 확인하여 부적격 시 트랜잭션을 즉각 <code className="font-mono bg-zinc-200 px-1 py-0.5 rounded text-zinc-800 font-bold">revert</code> 처리합니다.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 space-y-2">
              <div className="text-xs font-bold text-zinc-800 flex items-center gap-1.5">
                <RefreshCw className="w-4 h-4 text-indigo-600" />
                <span>기명증서 모델 & 소각-재발행(Burn & Remint)</span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                무기명 전송을 배제한 기명식 증서 모델로 은행 간 KYC 경계를 완벽히 유지하며, 타 은행 가맹점 결제 시 원본 토큰 소각 후 대상 은행에서 재발행하여 <strong>총 통화량(Total Supply) 불변</strong>을 보장합니다.
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
                  Full-Stack FinTech
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
                실질임금 진단 및 거시경제 지표 연동 자산배분 시뮬레이터
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
                <span>진단 알고리즘 결함 수정 및 판정 분리</span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                가계 지출이 소득을 초과하여 적자인 상태임에도 실질임금 지표 일부가 개선되었다는 이유로 "재무상태 양호"로 판정하던 중대 로직 결함을 발견하고, <strong>[물가 디플레이터 판정]</strong>과 <strong>[가계 수지 건전성 판정]</strong>을 독립 모듈로 엄밀히 분리하였습니다.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 space-y-2">
              <div className="text-xs font-bold text-zinc-800 flex items-center gap-1.5">
                <GitBranch className="w-4 h-4 text-indigo-600" />
                <span>CI 무결성 가드 & 봇 PR 데드락 해결</span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                PR 단계에서 <code className="font-mono bg-zinc-200 px-1 py-0.5 rounded text-zinc-800">np.random</code> 등 난수로 생성된 가짜 데이터가 프로덕션에 병합되지 않도록 AST 분석 기반 CI 룰을 구축하였으며, 자동화 봇 PR 시 발생하는 Commit Status API 권한 충돌 데드락을 해소하였습니다.
              </p>
            </div>
          </div>

          {/* Data Pipeline Flow Diagram */}
          <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-3">
            <div className="text-xs font-bold text-zinc-800 font-mono-code flex items-center justify-between">
              <span>AUTOMATED MULTI-SOURCE DATA PIPELINE (GitHub Actions Daily Cron)</span>
              <span className="text-emerald-700">Zero-Mocking Policy</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono-code">
              <div className="p-3 bg-white rounded-lg border border-zinc-200 space-y-1">
                <div className="text-zinc-500 text-[10px]">SOURCE 1</div>
                <div className="font-bold text-zinc-900">OECD SDMX API</div>
                <div className="text-[11px] text-zinc-600 font-sans">
                  국가별 실시간 CPI, 실질임금 지수 수집
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-zinc-200 space-y-1">
                <div className="text-zinc-500 text-[10px]">SOURCE 2</div>
                <div className="font-bold text-zinc-900">Yahoo Finance</div>
                <div className="text-[11px] text-zinc-600 font-sans">
                  글로벌 주요 자산군(주식·채권·원자재) 일간 수익률
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-zinc-200 space-y-1">
                <div className="text-zinc-500 text-[10px]">SOURCE 3</div>
                <div className="font-bold text-zinc-900">Frankfurter FX</div>
                <div className="text-[11px] text-zinc-600 font-sans">
                  실시간 환율 변동성 및 통화 가치 정규화
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
