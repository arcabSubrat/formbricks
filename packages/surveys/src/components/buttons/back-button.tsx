import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

interface BackButtonProps {
  onClick: () => void;
  backButtonLabel?: string;
  tabIndex?: number;
}

export function BackButton({ onClick, backButtonLabel, tabIndex = 2 }: BackButtonProps) {
  const { t } = useTranslation();
  return (
    <button
      dir="auto"
      tabIndex={tabIndex}
      type="button"
      className={cn(
        "mb-1 inline-flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium uppercase transition-colors",
        "bg-slate-100 text-slate-900 hover:bg-slate-200",
        "focus:ring-2 focus:ring-offset-2 focus:outline-none"
      )}
      onClick={onClick}>
      {backButtonLabel || t("common.back")}
    </button>
  );
}
