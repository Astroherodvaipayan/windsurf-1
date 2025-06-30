'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function NotebookOverlay() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen the notebook before
    const hasSeenNotebook = localStorage.getItem('hasSeenNotebook');
    
    if (!hasSeenNotebook) {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenNotebook', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        aria-label="Close notebook"
      >
        <X className="w-6 h-6 text-gray-600" />
      </button>

      {/* Notebook content */}
      <div className="relative max-w-full max-h-full overflow-auto">
        <div 
          className="notebook"
          style={{
            width: '210mm',
            height: '297mm',
            background: '#fff',
            boxShadow: `
              0 0 20px rgba(0, 0, 0, 0.1),
              inset 0 0 0 1px #e0e0e0
            `,
            borderRadius: '0',
            overflow: 'hidden',
            position: 'relative',
            margin: '20px auto',
          }}
        >
          {/* Red margin line */}
          <div
            style={{
              content: '',
              position: 'absolute',
              left: '40px',
              top: '0',
              bottom: '0',
              width: '2px',
              background: '#ff6b6b',
              zIndex: 1,
            }}
          />

          {/* Date */}
          <div
            style={{
              position: 'absolute',
              top: '50px',
              right: '40px',
              fontSize: '16px',
              color: '#7f8c8d',
              transform: 'rotate(1deg)',
              fontFamily: "'Kalam', cursive",
            }}
          >
            June 30, 2025
          </div>

          {/* Notebook page */}
          <div
            className="page"
            style={{
              padding: '40px 40px 40px 80px',
              background: `
                repeating-linear-gradient(
                  transparent,
                  transparent 31px,
                  #e8f4f8 32px,
                  #e8f4f8 33px
                )
              `,
              height: '100%',
              position: 'relative',
              fontFamily: "'Kalam', cursive",
            }}
          >
            <div
              style={{
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: '700',
                color: '#2c3e50',
                marginBottom: '40px',
                textDecoration: 'underline',
                textDecorationColor: '#3498db',
                fontFamily: "'Kalam', cursive",
              }}
            >
              My Notebook
            </div>

            {/* Notebook lines */}
            <div className="space-y-1">
              <NotebookLine text="Today I learned something amazing..." />
              <NotebookLine editable placeholder="Click here to write..." />
              <NotebookLine editable placeholder="Write your thoughts..." color="blue" />
              <NotebookLine text="• Remember to practice coding daily" color="green" />
              <NotebookLine editable placeholder="Add your notes here..." color="purple" />
              <NotebookLine text="The key to success is consistency and patience." />
              <NotebookLine editable placeholder="What did you discover today?" />
              <NotebookLine editable placeholder="Your ideas go here..." color="green" />
              <NotebookLine editable placeholder="Continue writing..." />
              <NotebookLine editable placeholder="Express yourself..." color="blue" />
              <NotebookLine editable placeholder="Keep writing..." />
              <NotebookLine editable placeholder="More thoughts..." color="purple" />
              <NotebookLine editable placeholder="Continue your story..." />
              <NotebookLine editable placeholder="What's next?" />
              <NotebookLine editable placeholder="Final thoughts..." color="green" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap');
        
        @media (max-width: 220mm) {
          .notebook {
            width: 100% !important;
            height: auto !important;
            min-height: 90vh !important;
            margin: 10px !important;
          }
        }
      `}</style>
    </div>
  );
}

interface NotebookLineProps {
  text?: string;
  editable?: boolean;
  placeholder?: string;
  color?: 'blue' | 'green' | 'purple';
}

function NotebookLine({ text, editable, placeholder, color }: NotebookLineProps) {
  const [value, setValue] = useState('');
  
  const getColor = () => {
    switch (color) {
      case 'blue': return '#3498db';
      case 'green': return '#27ae60';
      case 'purple': return '#8e44ad';
      default: return '#2c3e50';
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const editables = Array.from(document.querySelectorAll('.notebook-input'));
      const currentIndex = editables.indexOf(e.target as Element);
      if (currentIndex < editables.length - 1) {
        (editables[currentIndex + 1] as HTMLElement).focus();
      }
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const rotation = (Math.random() - 0.5) * 2;
    e.target.style.transform = `rotate(${rotation}deg)`;
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    e.target.style.width = '20px';
    e.target.style.width = (e.target.scrollWidth + 10) + 'px';
  };

  const lineStyle = {
    height: '32px',
    display: 'flex',
    alignItems: 'baseline',
    marginBottom: '1px',
    position: 'relative' as const,
  };

  const textStyle = {
    fontSize: '18px',
    color: getColor(),
    lineHeight: '32px',
    letterSpacing: '0.5px',
    transform: 'rotate(-0.5deg)',
    display: 'inline-block',
    marginLeft: '5px',
    fontFamily: "'Kalam', cursive",
  };

  const inputStyle = {
    ...textStyle,
    outline: 'none',
    border: 'none',
    background: 'transparent',
    width: '100%',
  };

  return (
    <div style={lineStyle}>
      {editable ? (
        <input
          type="text"
          className="notebook-input focus:bg-blue-50 focus:bg-opacity-20 focus:rounded"
          style={inputStyle}
          placeholder={placeholder}
          value={value}
          onChange={handleInput}
          onKeyPress={handleKeyPress}
          onFocus={handleFocus}
        />
      ) : (
        <span style={textStyle}>{text}</span>
      )}
    </div>
  );
} 