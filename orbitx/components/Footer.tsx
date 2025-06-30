// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="w-full py-6 mt-12 border-t text-center text-sm text-gray-500 dark:text-gray-400">
      &copy; {new Date().getFullYear()} OrbitX. All rights reserved.
    </footer>
  )
}
