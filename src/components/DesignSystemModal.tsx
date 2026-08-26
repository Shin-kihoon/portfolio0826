import React from 'react';
import { X, Layers, Layout, Type, Palette, Sparkles, Smartphone, ArrowRight } from 'lucide-react';

interface DesignSystemModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DesignSystemModal: React.FC<DesignSystemModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/70 backdrop-blur-xs overflow-y-auto">
      <div
        id="design-system-modal"
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl border border-zinc-200 shadow-2xl p-6 sm:p-8 space-y-6 overflow-y-auto"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-zinc-900 text-zinc-100">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-zinc-950">
                설계 시스템 명세표 및 원본 대비 변경점 요약
              </h3>
              <p className="text-xs text-zinc-500 font-mono-code">
                Design System Specification & Editorial Translation Matrix
              </p>
            </div>
          </div>
          <button
            id="design-modal-close-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 1. One-line summary */}
        <div className="p-4 rounded-xl bg-zinc-900 text-zinc-100 space-y-1.5">
          <div className="text-xs font-mono-code font-bold text-emerald-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>원본 대비 변경점 (색상·폰트·콘텐츠 매핑) 한 줄 요약</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans">
            "클래식한 스위스 국제 타이포그래피 및 정밀 학술 금융(Editorial Quantitative Finance) 스타일을 채택하여, 원본의 레이아웃 위계와 간격 리듬을 유지하면서도 <strong className="text-white">Plus Jakarta Sans + Instrument Serif + JetBrains Mono</strong>의 3중 서체 조합과 <strong className="text-emerald-300">신뢰성 높은 슬레이트·에메랄드 톤</strong>으로 서울대 경영대학원 신기훈 연구자의 실증금융 데이터·스마트계약 포트폴리오에 최적화하여 독자적으로 전면 재설계함."
          </p>
        </div>

        {/* 2. Structured System Specification Table */}
        <div className="space-y-6">
          <h4 className="text-sm font-bold text-zinc-900 flex items-center gap-2">
            <Layout className="w-4 h-4 text-zinc-700" />
            <span>설계 시스템 요약표 (Design System Specification)</span>
          </h4>

          <div className="border border-zinc-200 rounded-xl overflow-hidden text-xs">
            <table className="w-full text-left border-collapse">
              <thead className="bg-zinc-100/80 border-b border-zinc-200 text-zinc-700 font-mono-code">
                <tr>
                  <th className="p-3 font-bold w-1/4">시스템 영역</th>
                  <th className="p-3 font-bold w-1/3">적용 스펙 / 규칙</th>
                  <th className="p-3 font-bold">포트폴리오 맞춤 설계 목적</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200/80 text-zinc-700 font-sans">
                <tr>
                  <td className="p-3 font-bold text-zinc-900 font-mono-code bg-zinc-50/50">
                    간격 스케일 (Spacing Scale)
                  </td>
                  <td className="p-3 font-mono-code text-[11px]">
                    4px(1), 8px(2), 12px(3), 16px(4), 24px(6), 32px(8), 48px(12), 64px(16), 96px(24)
                  </td>
                  <td className="p-3">
                    수학적 8pt/4pt 베이스라인 그리드를 적용하여 계량 회귀 표, 데이터 칩, 섹션 간 여백의 정밀한 위계 구현
                  </td>
                </tr>

                <tr>
                  <td className="p-3 font-bold text-zinc-900 font-mono-code bg-zinc-50/50">
                    타이포 스케일 (Typography Scale)
                  </td>
                  <td className="p-3 font-mono-code text-[11px]">
                    Title: 48–60px (Instrument Serif)<br/>
                    Heading: 24–36px (Semibold)<br/>
                    Body: 14–16px (Plus Jakarta Sans, lh: 1.6)<br/>
                    Data/Code: 11–13px (JetBrains Mono)
                  </td>
                  <td className="p-3">
                    학술 논문의 권위감과 최신 핀테크 개발자의 현대적 가독성을 동시에 만족하는 세리프/산세리프/모노 서체 페어링
                  </td>
                </tr>

                <tr>
                  <td className="p-3 font-bold text-zinc-900 font-mono-code bg-zinc-50/50">
                    색상 팔레트 (Color Palette)
                  </td>
                  <td className="p-3 font-mono-code text-[11px]">
                    Canvas: Zinc-50 (#FAFAFA)<br/>
                    Surface: Pure White (#FFFFFF)<br/>
                    Text: Zinc-950 / Zinc-700<br/>
                    Accent: Emerald-600 / Dark Slate (Zinc-900)
                  </td>
                  <td className="p-3">
                    인위적인 보라/네온 그라데이션을 철저히 배제하고, 금융 저널 및 퀀트 터미널 특유의 고대비 흑백 및 신뢰의 에메랄드 그린 포인트 구축
                  </td>
                </tr>

                <tr>
                  <td className="p-3 font-bold text-zinc-900 font-mono-code bg-zinc-50/50">
                    인터랙션 스펙 (Interaction Specs)
                  </td>
                  <td className="p-3 font-mono-code text-[11px]">
                    Hover: scale-98 active feedback, transition 200ms ease-out<br/>
                    Interactive Simulator: EVM revert state machine, live tabs, one-click email/BibTeX copy
                  </td>
                  <td className="p-3">
                    단순 정적 이력서가 아닌, 배당 알파 회귀 모형과 예금토큰 온체인 실행 결과를 직접 검증할 수 있는 인터랙티브 연구 쇼케이스 제공
                  </td>
                </tr>

                <tr>
                  <td className="p-3 font-bold text-zinc-900 font-mono-code bg-zinc-50/50">
                    반응형 브레이크포인트 (Breakpoints)
                  </td>
                  <td className="p-3 font-mono-code text-[11px]">
                    sm: 640px (1열 모바일 스택)<br/>
                    md: 768px (2열 그리드 및 탭 네비게이션)<br/>
                    lg: 1024px (12열 대화형 아키텍처 뷰)<br/>
                    max-w-6xl (1152px 센터링)
                  </td>
                  <td className="p-3">
                    모바일에서는 터치 타깃 44px 이상 확보, 데스크톱에서는 퀀트 데이터 대시보드 형태의 고밀도 레이아웃 지원
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end pt-2 border-t border-zinc-100">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-zinc-900 text-white hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            확인 (Close)
          </button>
        </div>
      </div>
    </div>
  );
};
