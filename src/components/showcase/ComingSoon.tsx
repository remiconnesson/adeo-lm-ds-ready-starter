import styles from "./ComingSoon.module.scss";

export function ComingSoon({ name, slug }: { name: string; slug: string }) {
  return (
    <div className={styles.box}>
      <h2 className={styles.title}>{name} demo coming soon</h2>
      <p className={styles.body}>
        The SCSS is already wired up via{" "}
        <code>@use &quot;@mozaic-ds/styles/components/{slug}&quot;</code>. A live
        example for this component has not been authored yet.
      </p>
    </div>
  );
}
