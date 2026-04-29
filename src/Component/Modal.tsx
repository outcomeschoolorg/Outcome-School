import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  imageSrc?: string;
  linkedinUrl: string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  imageSrc,
  linkedinUrl,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button (fixed at top-right) */}
        <div className="absolute top-4 right-6 z-10">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition-colors"
            aria-label="Close"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="max-h-[85vh] overflow-y-auto">
          {/* Header with title */}
          <div className="px-8 pt-10 pb-4">
            <h2 className="uppercase font-bold text-3xl">{title}</h2>
          </div>

          {/* Main content (scrolls) */}
          <div className="px-8 text-lg leading-relaxed">
            {children}
          </div>

          {/* LinkedIn + Image section (always visible at bottom) */}
          <div className="px-8 pt-10  border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-8 pb-10">
              <div>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-black hover:text-[#6036E1] transition-colors"
                >
                  <i className="fa-brands fa-linkedin text-4xl"></i>
                  <div>
                    <span className="font-medium hover:underline block">Visit LinkedIn</span>
                    <i className="fa-solid fa-arrow-right text-lg"></i>
                  </div>
                </a>
              </div>

              {imageSrc && (
                <img
                  src={imageSrc}
                  alt={title}
                  className="w-40 h-40 object-cover rounded-full shadow-lg"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}