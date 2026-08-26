import React from 'react';

/**
 * 프로젝트 설명에서 쓰는 최소 서식만 처리한다.
 *   **굵게**  →  <strong>
 *   `코드`    →  <code>
 * dangerouslySetInnerHTML 을 쓰지 않으려고 직접 토큰화한다.
 */
export const renderRich = (text: string): React.ReactNode[] =>
  text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).filter(Boolean).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="text-zinc-900 font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={i} className="font-mono bg-zinc-200 px-1 py-0.5 rounded text-zinc-800">
          {part.slice(1, -1)}
        </code>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
