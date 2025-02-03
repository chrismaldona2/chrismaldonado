import WavingHand from "@/components/ui/WavingHand";
import { useTranslations } from "next-intl";

const Intro = () => {
  const t = useTranslations("home.intro");

  return (
    <section className="cursor-default text-xl">
      <div className="flex gap-2 items-center">
        <WavingHand size="7" />
        <span className="dark:text-neutral-50 text-neutral-600">
          {t("greeting")}
        </span>
      </div>
      <h1 className="flex flex-col">
        <span className="text-6xl/snug sm:text-7xl/snug font-bold -ml-1 dark:text-neutral-50 text-neutral-700">
          {t("name")}
        </span>
        <span className="text-xl dark:text-neutral-400 text-neutral-500">
          {t("profession")}
        </span>
      </h1>
    </section>
  );
};

export default Intro;
