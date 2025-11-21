import { useEffect, useState } from 'react'
import './HackerTerminal.css'

export default function HackerTerminal() {
  const [terminalText, setTerminalText] = useState('')

  useEffect(() => {
    const messages = [
      'initializing portfolio...',
      'loading skills...',
      'compiling projects...',
      'connecting to network...',
      'system ready...',
    ]

    let messageIndex = 0
    let charIndex = 0
    let isDeleting = false

    const typeEffect = setInterval(() => {
      const currentMessage = messages[messageIndex]

      if (!isDeleting) {
        setTerminalText(currentMessage.substring(0, charIndex + 1))
        charIndex++

        if (charIndex === currentMessage.length) {
          isDeleting = true
          setTimeout(() => {}, 1000)
        }
      } else {
        setTerminalText(currentMessage.substring(0, charIndex - 1))
        charIndex--

        if (charIndex === 0) {
          isDeleting = false
          messageIndex = (messageIndex + 1) % messages.length
        }
      }
    }, 50)

    return () => clearInterval(typeEffect)
  }, [])

  return (
    <>
      {/* Terminal Window */}
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <div className="terminal-btn close"></div>
            <div className="terminal-btn minimize"></div>
            <div className="terminal-btn maximize"></div>
          </div>
          <span className="terminal-title">portfolio_terminal.exe</span>
        </div>
        <div className="terminal-content">
          <div className="terminal-line">$ <span className="terminal-text">{terminalText}</span><span className="terminal-cursor">_</span></div>
        </div>
      </div>

      {/* Scanline Effect */}
      <div className="scanlines"></div>

      {/* Noise Effect */}
      <div className="noise"></div>

      {/* RGB Shift Lines */}
      <div className="rgb-line rgb-1"></div>
      <div className="rgb-line rgb-2"></div>
      <div className="rgb-line rgb-3"></div>

      {/* Hacker Grid */}
      <div className="hacker-grid"></div>

      {/* Code Blocks */}
      <div className="code-block block-1">
        <div className="code-bracket">&lt;</div>
        <div className="code-text">HACK</div>
        <div className="code-bracket">&gt;</div>
      </div>
      <div className="code-block block-2">
        <div className="code-bracket">{'{}'}</div>
        <div className="code-text">CODE</div>
      </div>
      <div className="code-block block-3">
        <div className="code-bracket">[ ]</div>
        <div className="code-text">BUILD</div>
      </div>

      {/* Digital Rain */}
      <div className="digital-rain">
        {[...Array(15)].map((_, i) => (
          <div key={i} className={`rain-char rain-${i}`}>
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      {/* Pulse Waves */}
      <div className="pulse-wave wave-1"></div>
      <div className="pulse-wave wave-2"></div>
      <div className="pulse-wave wave-3"></div>

      {/* Corner Brackets */}
      <div className="corner-bracket corner-tl">&lt;</div>
      <div className="corner-bracket corner-tr">&gt;</div>
      <div className="corner-bracket corner-bl">&lt;</div>
      <div className="corner-bracket corner-br">&gt;</div>

      {/* Neon Dots */}
      <div className="neon-dot dot-1"></div>
      <div className="neon-dot dot-2"></div>
      <div className="neon-dot dot-3"></div>
      <div className="neon-dot dot-4"></div>
    </>
  )
}
