import { ReactNode } from 'react';

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: ReactNode;
}

export default function TabButton({
  active,
  selectTab,
  children,
}: TabButtonProps) {
  const buttonClasses = active
    ? ' font-semibold border-third border-b-4'
    : 'text-black';

  return (
    <button
      onClick={selectTab}
      className={`border-b-4 px-4 py-3 hover:border-base-300 hover:border-b-4 ${buttonClasses}`}
    >
      {children}
    </button>
  );
}
