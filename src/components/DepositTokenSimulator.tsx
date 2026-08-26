import React, { useState } from 'react';
import { Terminal, CheckCircle2, XCircle, AlertTriangle, Cpu, Layers, Code } from 'lucide-react';

/** 예금토큰 계약의 revert 시나리오를 눌러보는 데모. 이 프로젝트 고유 UI. */
export const DepositTokenSimulator: React.FC = () => {
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
  );
};
