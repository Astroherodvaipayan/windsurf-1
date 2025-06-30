'use client';

import React, { useState } from 'react';

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
      const editables = Array.from(document.querySelectorAll('.notebook-section-input'));
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
    fontSize: '16px',
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
          className="notebook-section-input focus:bg-blue-50 focus:bg-opacity-20 focus:rounded"
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

export function NotebookSection() {
  return (
    <div className="flex justify-center py-8">
      <div className="flex gap-8 max-w-full flex-col lg:flex-row">
        {/* First Page */}
        <div 
          className="notebook-section"
          style={{
            width: '210mm',
            maxWidth: '100%',
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
              minHeight: '700px',
              position: 'relative',
              fontFamily: "'Kalam', cursive",
            }}
          >
            <div
              style={{
                textAlign: 'center',
                fontSize: '22px',
                fontWeight: '700',
                color: '#2c3e50',
                marginBottom: '30px',
                textDecoration: 'underline',
                textDecorationColor: '#3498db',
                fontFamily: "'Kalam', cursive",
              }}
            >
              Rethinking Developer Tools
            </div>

            {/* Notebook lines */}
            <div className="space-y-1">
              <NotebookLine text="Why Windsurf Is Poised to Do Better" color="purple" />
              <NotebookLine text="" />
              <NotebookLine text="In the rapidly growing space of AI-assisted developer" />
              <NotebookLine text="tools, the majority of solutions today operate on a" />
              <NotebookLine text="predictable pattern: wrapping large language models" />
              <NotebookLine text="around a code editor and calling it innovation." />
              <NotebookLine text="" />
              <NotebookLine text="While these tools offer marginal improvements in" />
              <NotebookLine text="productivity through autocomplete, inline explanations," />
              <NotebookLine text="and code chats, they tend to fall short when it comes" />
              <NotebookLine text="to real, long-term developer workflows." />
              <NotebookLine text="" />
              <NotebookLine text="This is where Windsurf stands out." color="blue" />
              <NotebookLine text="It does not iterate on what has already been done" color="blue" />
              <NotebookLine text="but reimagines the role of AI in the developer" color="blue" />
              <NotebookLine text="lifecycle. Instead of building reactive, short-term" color="blue" />
              <NotebookLine text="assistants, Windsurf aims for something deeper—" color="blue" />
              <NotebookLine text="a system that grows with the codebase." color="blue" />
              <NotebookLine text="" />
              <NotebookLine text="What's Missing From Current Landscape" color="green" />
              <NotebookLine text="" />
              <NotebookLine text="Most existing tools feel like productivity hacks." />
              <NotebookLine text="They are helpful in the moment, yes, but come" />
              <NotebookLine text="with clear limitations. They rely heavily on" />
              <NotebookLine text="prompt engineering, suffer from session-based" />
              <NotebookLine text="amnesia, and offer little in terms of proactive" />
              <NotebookLine text="guidance." />
              <NotebookLine text="" />
              <NotebookLine text="The AI does not remember decisions, does not" />
              <NotebookLine text="challenge bad design, and certainly does not" />
              <NotebookLine text="evolve with the codebase. It answers questions," />
              <NotebookLine text="but it does not ask any." />
            </div>
          </div>
        </div>

        {/* Second Page */}
        <div 
          className="notebook-section"
          style={{
            width: '210mm',
            maxWidth: '100%',
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
            Page 2
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
              minHeight: '700px',
              position: 'relative',
              fontFamily: "'Kalam', cursive",
            }}
          >
            {/* Notebook lines */}
            <div className="space-y-1">
              <NotebookLine text="That leaves a wide-open space. Who is building" />
              <NotebookLine text="the tool that learns, collaborates, and grows" />
              <NotebookLine text="as the software grows?" />
              <NotebookLine text="Windsurf is attempting to answer that." color="purple" />
              <NotebookLine text="" />
              <NotebookLine text="Where Windsurf Can Lead" color="green" />
              <NotebookLine text="" />
              <NotebookLine text="1. Persistent Memory Beyond the Prompt" color="blue" />
              <NotebookLine text="Windsurf is designed to retain context at the" />
              <NotebookLine text="project level, not just within a chat window." />
              <NotebookLine text="It tracks patterns, understands previous changes," />
              <NotebookLine text="and can offer guidance that takes into account" />
              <NotebookLine text="how a repository has evolved over time." />
              <NotebookLine text="" />
              <NotebookLine text="2. Task-Specific AI Agents" color="blue" />
              <NotebookLine text="Rather than relying on a single general-purpose" />
              <NotebookLine text="model, Windsurf is building toward a multi-agent" />
              <NotebookLine text="system. Different specialized agents can handle" />
              <NotebookLine text="testing, optimization, refactoring, or documentation." />
              <NotebookLine text="" />
              <NotebookLine text="3. Team-Oriented Collaboration Features" color="blue" />
              <NotebookLine text="Most tools today are individual-centric. Windsurf" />
              <NotebookLine text="is focusing on features that benefit teams:" />
              <NotebookLine text="persistent AI reviewers, shared memory across" />
              <NotebookLine text="contributors, and feedback systems that learn" />
              <NotebookLine text="from pull request discussions." />
              <NotebookLine text="" />
              <NotebookLine text="4. Hybrid Code Graph and RAG-Based Architecture" color="blue" />
              <NotebookLine text="While others rely mainly on token limits and" />
              <NotebookLine text="vague embedding-based search, Windsurf is working" />
              <NotebookLine text="on structured code graphs combining ASTs," />
              <NotebookLine text="embeddings, and historical diffs." />
              <NotebookLine text="" />
              <NotebookLine text="Building AI that can understand, adapt, and" color="purple" />
              <NotebookLine text="participate meaningfully in software development." color="purple" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap');
        
        @media (max-width: 1024px) {
          .notebook-section {
            width: 100% !important;
            margin: 10px !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
} 