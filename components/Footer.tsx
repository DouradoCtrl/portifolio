export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 text-center bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-neutral-500 dark:text-neutral-400">
          © {currentYear} DouradoCtrl. Todos os direitos reservados.
        </p>
        {/* <p className="text-sm mt-2 text-neutral-400 dark:text-neutral-500">
          Construído com Next.js, Tailwind CSS e Framer Motion.
        </p> */}
      </div>
    </footer>
  );
}
