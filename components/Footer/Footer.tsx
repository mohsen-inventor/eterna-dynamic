import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} Eterna Dynamic. Built with Next.js 15, Sass, and Sanity CMS.</p>
      </div>
    </footer>
  );
}

