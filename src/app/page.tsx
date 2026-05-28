import Link from "next/link";
import { COMPONENTS } from "@/lib/components-registry";
import { EXAMPLES } from "@/lib/examples-registry";
import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <span className={styles.eyebrow}>Adeo · Leroy Merlin</span>
        <h1 className={styles.title}>Welcome to the Adeo / LM design system starter</h1>
        <p className={styles.lede}>
          This starter is made to be modified by an agent. Ask v0 what you want
          to build, and it will replace this app with the one you describe.
        </p>
      </header>

      <section className={styles.guide}>
        <h2 className={styles.guideTitle}>What should I do?</h2>

        <div className={styles.steps}>
          <article className={styles.step}>
            <span className={styles.stepNumber}>1</span>
            <h3 className={styles.stepTitle}>Ask v0 to implement a feature</h3>
            <p className={styles.stepBody}>
              Drag and drop files into the chatbox to attach PRDs, screenshots,
              or sketches. Talk to v0 the way you would to a freelance
              developer. If you&apos;re not sure how to phrase it, imagine
              you&apos;re writing them an email.
            </p>
          </article>

          <Link href="/c" className={`${styles.step} ${styles.stepLink}`}>
            <span className={styles.stepNumber}>2</span>
            <h3 className={styles.stepTitle}>
              Explore the design system components
              <span aria-hidden className={styles.arrow}>→</span>
            </h3>
            <p className={styles.stepBody}>
              {COMPONENTS.length} components are ready to use. Browse the grid
              to see what&apos;s available before you brief v0.
            </p>
          </Link>

          <Link href="/examples" className={`${styles.step} ${styles.stepLink}`}>
            <span className={styles.stepNumber}>3</span>
            <h3 className={styles.stepTitle}>
              Explore the example pages
              <span aria-hidden className={styles.arrow}>→</span>
            </h3>
            <p className={styles.stepBody}>
              {EXAMPLES.length} end-to-end pages built by composing components
              from the design system. Useful as inspiration or as a starting
              point for what to ask v0.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
