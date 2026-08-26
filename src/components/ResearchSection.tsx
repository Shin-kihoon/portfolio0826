import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Database, TrendingUp, CheckCircle2, AlertCircle, Sparkles, FileCode, Layers, ArrowRight, Table, BarChart2 } from 'lucide-react';
import { THESIS_DATA } from '../data/portfolioData';

export const ResearchSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'empirical' | 'identification' | 'pipeline'>('empirical');
  const [selectedModelIdx, setSelectedModelIdx] = useState<number>(0);

  const selectedModel = THESIS_DATA.regressions[selectedModelIdx];

  return (
    <section id="research" className="py-16 md:py-24 border-b border-zinc-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-900" />
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-mono-code">
              Master's Thesis Research
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 font-serif-heading">
                한국 상장기업의 배당 정밀도와 주식수익률
              </h2>
              <p className="text-base text-zinc-600 mt-1 font-sans">
                Dennis & Weston (2025, <em className="italic">JCF</em>) "Lazy Dividends" 연구의 한국 자본시장 복제 및 확장 분석
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono-code text-xs text-zinc-600 bg-zinc-50 px-3 py-1.5 rounded-lg border border-zinc-200">
              <BookOpen className="w-3.5 h-3.5 text-zinc-700" />
              <span>서울대학교 경영대학원 석사학위논문</span>
            </div>
          </div>
        </div>

        {/* 4 Summary Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-2">
            <div className="flex items-center justify-between text-xs text-zinc-500 font-mono-code">
              <span>표본 크기</span>
              <Database className="w-3.5 h-3.5 text-zinc-400" />
            </div>
            <div className="text-2xl font-bold text-zinc-900 font-mono-code">
              19,519 <span className="text-xs font-normal text-zinc-500">개</span>
            </div>
            <p className="text-xs text-zinc-600 leading-snug">
              2000~2024년 KIS-Value 한국 상장기업 firm-year 패널
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
            <div className="flex items-center justify-between text-xs text-emerald-700 font-mono-code">
              <span>FF5 요인 알파 (α60)</span>
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            </div>
            <div className="text-2xl font-bold text-emerald-950 font-mono-code">
              +9.98 <span className="text-xs font-normal">bp/월</span>
            </div>
            <p className="text-xs text-emerald-800 leading-snug font-medium">
              t = 3.38 (p &lt; 0.001) 정밀 배당 포트폴리오 초과수익 추정
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-2">
            <div className="flex items-center justify-between text-xs text-zinc-500 font-mono-code">
              <span>공변량 1:1 매칭</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" />
            </div>
            <div className="text-2xl font-bold text-zinc-900 font-mono-code">
              615 <span className="text-xs font-normal text-zinc-500">쌍</span>
            </div>
            <p className="text-xs text-zinc-600 leading-snug">
              산업 Exact + 3대 공변량 Mahalanobis 매칭 후 +10.88 bp/월 (t=2.61)
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-2">
            <div className="flex items-center justify-between text-xs text-zinc-500 font-mono-code">
              <span>모형 사양 검증</span>
              <FileCode className="w-3.5 h-3.5 text-zinc-400" />
            </div>
            <div className="text-2xl font-bold text-zinc-900 font-mono-code">
              ln(DPS) <span className="text-xs font-normal text-zinc-500">통제</span>
            </div>
            <p className="text-xs text-zinc-600 leading-snug">
              계층적 회귀를 통한 누락변수 편의 식별 및 모형 사양 교정
            </p>
          </div>
        </div>

        {/* Deep-Dive Interactive Explorer */}
        <div className="rounded-2xl border border-zinc-200/90 bg-zinc-50/50 p-6 md:p-8 space-y-6">
          {/* Navigation Subtabs */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 pb-4">
            <div className="flex items-center gap-1.5 bg-zinc-200/70 p-1 rounded-lg text-xs font-medium">
              <button
                id="thesis-tab-empirical"
                onClick={() => setActiveTab('empirical')}
                className={`px-3.5 py-1.5 rounded-md transition-all cursor-pointer ${
                  activeTab === 'empirical'
                    ? 'bg-white text-zinc-950 font-bold shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                1. 회귀분석 및 알파 추정
              </button>
              <button
                id="thesis-tab-identification"
                onClick={() => setActiveTab('identification')}
                className={`px-3.5 py-1.5 rounded-md transition-all cursor-pointer ${
                  activeTab === 'identification'
                    ? 'bg-white text-zinc-950 font-bold shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                2. 누락변수 편의(ln DPS) 식별
              </button>
              <button
                id="thesis-tab-pipeline"
                onClick={() => setActiveTab('pipeline')}
                className={`px-3.5 py-1.5 rounded-md transition-all cursor-pointer ${
                  activeTab === 'pipeline'
                    ? 'bg-white text-zinc-950 font-bold shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                3. 패널 데이터 파이프라인
              </button>
            </div>

            <span className="text-xs text-zinc-500 font-mono-code hidden sm:inline">
              Methodology: Empirical Asset Pricing
            </span>
          </div>

          {/* Tab 1: Empirical Regression Explorer */}
          {activeTab === 'empirical' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: Model Selector & Stats Cards */}
                <div className="lg:col-span-5 space-y-2.5">
                  <div className="text-xs font-bold text-zinc-700 uppercase tracking-wider font-mono-code">
                    Select Econometric Specification:
                  </div>
                  {THESIS_DATA.regressions.map((reg, idx) => {
                    const isSelected = idx === selectedModelIdx;
                    return (
                      <div
                        key={idx}
                        id={`model-select-${idx}`}
                        onClick={() => setSelectedModelIdx(idx)}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-white border-zinc-900 shadow-xs ring-1 ring-zinc-900'
                            : 'bg-white/60 border-zinc-200 hover:bg-white hover:border-zinc-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-zinc-900">
                            {reg.model}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded text-[11px] font-mono-code font-bold ${
                              reg.significance === '***'
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-zinc-100 text-zinc-600'
                            }`}
                          >
                            t = {reg.tStat} {reg.significance}
                          </span>
                        </div>
                        <div className="flex items-center justify-between mt-2 text-xs font-mono-code text-zinc-600">
                          <span>Alpha: <strong className="text-zinc-900">{reg.alpha}</strong></span>
                          <span>N = {reg.obs}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Right: Detailed Econometric Specification Breakdown & Visual Bar */}
                <div className="lg:col-span-7 rounded-xl bg-white border border-zinc-200 p-5 space-y-5">
                  <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                    <div>
                      <h4 className="text-base font-bold text-zinc-900">
                        {selectedModel.model}
                      </h4>
                      <p className="text-xs text-zinc-500 font-mono-code mt-0.5">
                        Dependent Variable: {selectedModel.dependentVar}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-50 text-xs font-mono-code font-bold">
                      {selectedModel.alpha}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-100">
                      <div className="text-[11px] text-zinc-500 font-mono-code uppercase">
                        t-statistic
                      </div>
                      <div className="text-xl font-bold text-zinc-900 font-mono-code mt-0.5">
                        {selectedModel.tStat}
                      </div>
                      <div className="text-[10px] text-emerald-700 font-medium font-mono-code mt-0.5">
                        {selectedModel.significance === '***' ? 'p < 0.001 (Highly Sig.)' : 'Placebo Invariant'}
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-100">
                      <div className="text-[11px] text-zinc-500 font-mono-code uppercase">
                        Sample Count
                      </div>
                      <div className="text-xl font-bold text-zinc-900 font-mono-code mt-0.5">
                        {selectedModel.obs.split(' ')[0]}
                      </div>
                      <div className="text-[10px] text-zinc-500 font-mono-code mt-0.5">
                        {selectedModel.obs.split(' ').slice(1).join(' ')}
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-100">
                      <div className="text-[11px] text-zinc-500 font-mono-code uppercase">
                        R-Squared (Adj.)
                      </div>
                      <div className="text-xl font-bold text-zinc-900 font-mono-code mt-0.5">
                        {selectedModel.rSquared || 'N/A'}
                      </div>
                      <div className="text-[10px] text-zinc-500 font-mono-code mt-0.5">
                        Explanatory Power
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200/70 text-xs text-zinc-700 space-y-1.5">
                    <div className="font-semibold text-zinc-900 flex items-center gap-1.5">
                      <BarChart2 className="w-3.5 h-3.5 text-zinc-600" />
                      <span>모형 상세 명세 및 통제 변수</span>
                    </div>
                    <p className="leading-relaxed">
                      {selectedModel.description}
                    </p>
                  </div>

                  {/* Visual Relative Alpha Magnitude Chart */}
                  <div className="space-y-2 pt-1">
                    <div className="text-xs font-semibold text-zinc-700 flex items-center justify-between">
                      <span>수익률 알파 비교 차트 (bp/month)</span>
                      <span className="text-[10px] text-zinc-400 font-mono-code">Baseline vs Placebo</span>
                    </div>
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-mono-code">
                          <span className="text-zinc-700 font-medium">1. FF5 Alpha (Precise - Round)</span>
                          <span className="text-emerald-700 font-bold">+9.98 bp/mo (t=3.38)</span>
                        </div>
                        <div className="w-full h-3 bg-zinc-100 rounded-full overflow-hidden flex">
                          <div className="h-full bg-emerald-600 rounded-full transition-all duration-500" style={{ width: '85%' }} />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-mono-code">
                          <span className="text-zinc-700 font-medium">2. Mahalanobis Matched (615 Pairs)</span>
                          <span className="text-emerald-700 font-bold">+10.88 bp/mo (t=2.61)</span>
                        </div>
                        <div className="w-full h-3 bg-zinc-100 rounded-full overflow-hidden flex">
                          <div className="h-full bg-emerald-700 rounded-full transition-all duration-500" style={{ width: '92%' }} />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-mono-code">
                          <span className="text-zinc-700 font-medium">3. Donut Placebo Synthetic Cutoff</span>
                          <span className="text-zinc-500 font-medium">+0.42 bp/mo (t=0.28 n.s.)</span>
                        </div>
                        <div className="w-full h-3 bg-zinc-100 rounded-full overflow-hidden flex">
                          <div className="h-full bg-zinc-300 rounded-full transition-all duration-500" style={{ width: '4%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Tab 2: Identification & ln(DPS) Omitted Variable Bias */}
          {activeTab === 'identification' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="rounded-xl bg-white border border-zinc-200 p-6 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-zinc-100 text-zinc-800 text-xs font-mono-code font-bold border border-zinc-200">
                    인과추론 & 식별 이슈 (Identification)
                  </span>
                  <h3 className="text-lg font-bold text-zinc-900">
                    계층적 회귀를 통한 누락변수 편의(Omitted Variable Bias) 식별 및 해결
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-zinc-50 border border-zinc-200 space-y-2">
                    <div className="text-xs font-bold text-zinc-500 font-mono-code">
                      Step 1. 현상 발견
                    </div>
                    <div className="text-sm font-semibold text-zinc-900">
                      계수 부호의 예상 밖 반전
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      기본 단일 회귀에서 정밀 배당 계수가 유의한 양(+)의 부호였으나, 다중 통제변수를 동시 투입하자 음(-)으로 반전되는 이상 현상 포착.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-zinc-50 border border-zinc-200 space-y-2">
                    <div className="text-xs font-bold text-zinc-500 font-mono-code">
                      Step 2. 계층적 분해 분석
                    </div>
                    <div className="text-sm font-semibold text-zinc-900">
                      변수 순차적 투입 & VIF 진단
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      16개 재무 지표를 계층적으로 1개씩 추가 회귀하며 계수 궤적을 추적하고, 분산팽창지수(VIF)와 다중공선성 매트릭스를 정밀 분석.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 space-y-2">
                    <div className="text-xs font-bold text-emerald-700 font-mono-code">
                      Step 3. 최종 원인 특정 & 해결
                    </div>
                    <div className="text-sm font-semibold text-emerald-950">
                      주당배당금 로그 ln(DPS) 특정
                    </div>
                    <p className="text-xs text-emerald-800 leading-relaxed">
                      배당금 액면 크기 <code className="font-mono font-bold">ln(DPS)</code>가 배당 정밀도와 고도로 상관되어 발생한 누락변수 편의임을 규명하고 모형 사양을 바로잡음.
                    </p>
                  </div>
                </div>

                {/* Mathematical Formula Display */}
                <div className="p-4 rounded-lg bg-zinc-900 text-zinc-100 font-mono-code text-xs space-y-2 overflow-x-auto">
                  <div className="text-zinc-400 text-[11px] uppercase tracking-wider">
                    Econometric Model Specification with 2-way Clustering:
                  </div>
                  <div className="text-emerald-400 font-semibold py-1">
                    ROA_{'{i, t+1}'} = α + β_1 · Precise_Dividend_{'{i, t}'} + β_2 · ln(DPS)_{'{i, t}'} + γ' · Controls_{'{i, t}'} + μ_i + λ_t + ε_{'{i, t}'}
                  </div>
                  <div className="text-zinc-400 text-[11px] pt-1">
                    * Clustered SE by Firm (i) and Year (t) following Petersen (2009)
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Tab 3: Panel Pipeline Architecture */}
          {activeTab === 'pipeline' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="rounded-xl bg-white border border-zinc-200 p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-zinc-900">
                    재현 가능한(Reproducible) 16개 분석 스크립트 파이프라인
                  </h3>
                  <p className="text-xs text-zinc-500 font-mono-code mt-0.5">
                    KIS-Value Raw DB → Cleaning & Winsorizing → Mahalanobis Matching → Empirical Tables (213¶ / 18 Tables)
                  </p>
                </div>

                {/* Pipeline Flow Steps */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
                  <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200 space-y-1.5">
                    <div className="font-mono-code font-bold text-zinc-500">01. DATA INGESTION</div>
                    <div className="font-semibold text-zinc-900">원천 데이터 결합</div>
                    <ul className="text-zinc-600 space-y-1 text-[11px]">
                      <li>• KIS-Value 재무·주가 패널</li>
                      <li>• KSIC 산업 대·중분류</li>
                      <li>• 외국인지분율 & KCGS ESG</li>
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200 space-y-1.5">
                    <div className="font-mono-code font-bold text-zinc-500">02. FILTER & WINSOR</div>
                    <div className="font-semibold text-zinc-900">정제 및 윈저라이징</div>
                    <ul className="text-zinc-600 space-y-1 text-[11px]">
                      <li>• 12월 결산 상장법인 필터</li>
                      <li>• 자본잠식/금융업 제외</li>
                      <li>• 1% 및 99% 상하단 윈저라이징</li>
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200 space-y-1.5">
                    <div className="font-mono-code font-bold text-zinc-500">03. MATCHING & REG</div>
                    <div className="font-semibold text-zinc-900">계량 모형 추정</div>
                    <ul className="text-zinc-600 space-y-1 text-[11px]">
                      <li>• Mahalanobis 615쌍 1:1 매칭</li>
                      <li>• FF5 + 모멘텀 요인 회귀</li>
                      <li>• 2-way 군집표준오차 FE</li>
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-lg bg-emerald-50 border border-emerald-200 space-y-1.5">
                    <div className="font-mono-code font-bold text-emerald-700">04. ROBUSTNESS & DOC</div>
                    <div className="font-semibold text-emerald-950">강건성 및 논문화</div>
                    <ul className="text-emerald-800 space-y-1 text-[11px]">
                      <li>• Donut Placebo 가상 검증</li>
                      <li>• 논문 본문 213문단 완성</li>
                      <li>• 18개 실증 표 자동 빌드</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
