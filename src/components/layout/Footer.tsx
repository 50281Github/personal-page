export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} DEV.PORTFOLIO. All rights reserved.
        </p>
        <p className="text-zinc-600 text-sm mt-2 md:mt-0">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}