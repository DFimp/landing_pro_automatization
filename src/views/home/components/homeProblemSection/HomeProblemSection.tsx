import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";
import { Container } from "@/shared/ui/layout";
import { HOME_PAGE_COPY } from "@/views/home/content";
import styles from "./HomeProblemSection.module.css";

export function HomeProblemSection() {
  const { problem } = HOME_PAGE_COPY;
  const problemLead = "amoCRM работает так, как вы её настроите.";
  const problemBody =
    "Большинство компаний теряют лиды, тратят время на Excel и не понимают, где «сливаются» клиенты — просто потому что CRM не адаптирована под их процессы.";
  const problemAccent = "Мы это исправляем.";

  return (
    <Container as="section" padding="none">
      <ScrollReveal
        as="div"
        className={`${styles.showcase} relative overflow-hidden rounded-[40px] bg-[#101725] px-6 py-8 text-white sm:px-10 sm:py-12`}
        yFrom={26}
        scaleFrom={0.97}
        blurPx={6}
        durationMs={920}
        amount={0.18}
      >
        <div
          className={`${styles.orb} ${styles.orbLeft} absolute left-[-110px] top-[-140px] h-[280px] w-[280px] rounded-full bg-[#3760E7]/28 blur-3xl`}
          aria-hidden
        />
        <div
          className={`${styles.orb} ${styles.orbRight} absolute bottom-[-140px] right-[-60px] h-[250px] w-[250px] rounded-full bg-[#1B46D4]/30 blur-3xl`}
          aria-hidden
        />
        <div className={styles.beam} aria-hidden />

        <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(260px,0.95fr)] lg:gap-10">
          <div className={styles.left}>
            <span className={`${styles.badge} inline-flex rounded-full border border-white/14 bg-white/8 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-white/88`}>
              Почему важна настройка
            </span>

            <h2 className={`${styles.title} mt-4 max-w-[760px] text-2xl font-semibold leading-tight sm:text-h2`}>
              {problem.title}
            </h2>
          </div>

          <div className={`${styles.panel} rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.05)_100%)] p-5 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-7`}>
            <p className={`${styles.lead} text-[20px] font-medium leading-[1.45] text-white/92 sm:text-[24px]`}>
              {problemLead}
            </p>

            <div className={`${styles.divider} mt-5 h-px w-full bg-[linear-gradient(90deg,rgba(158,178,255,0.65)_0%,rgba(158,178,255,0)_100%)]`} />

            <p className={`${styles.body} mt-5 max-w-[34rem] text-[16px] leading-8 text-white/76 sm:text-[18px]`}>
              {problemBody}
            </p>

            <div className={`${styles.accent} mt-6 inline-flex rounded-full border border-[#89A7FF]/30 bg-[#3760E7]/16 px-4 py-2 text-[13px] font-semibold tracking-[0.03em] text-[#B7C8FF] sm:text-[14px]`}>
              {problemAccent}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </Container>
  );
}
