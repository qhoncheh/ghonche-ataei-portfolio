
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center cursor-pointer rounded-full bg-primary border-2 border-gray-600 shadow-lg hover:bg-secondary hover:border-gray-500 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp className="h-5 w-5 text-white group-hover:text-black transition-colors" />
        </button>
      )}
    </>
  );
}