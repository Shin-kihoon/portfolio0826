import React from 'react';

/** 연봉닥터의 데이터 출처 3곳. 이 프로젝트 고유 UI. */
export const SalaryDoctorPipeline: React.FC = () => (
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
);
