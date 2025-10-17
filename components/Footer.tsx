export function Footer() {
  return (
    <footer className="border-t border-marigold-200/60 dark:border-marigold-800/60 flex justify-center">
      <div className="container p-6 text-sm flex flex-col sm:flex-row gap-2 items-center justify-between text-ink-700">
        <p>&copy; {new Date().getFullYear()} Charlotte Billiet</p>
        <div className="flex gap-4">
          <a
            href="https://github.com/CharlotteB25"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/charlotte-billiet-740814222"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:charlotte.billiet25@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
