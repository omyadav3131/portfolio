import { useEffect } from 'react';
import { FiX, FiExternalLink, FiDownload } from 'react-icons/fi';
import '../styles/ResumeViewer.css';

function ResumeViewer({ isOpen, onClose }) {
  // Prevent scrolling when modal is open
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

  if (!isOpen) return null;

  return (
    <div className={`resume-modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
        
        <button className="resume-modal-close" onClick={onClose} aria-label="Close resume viewer">
          <FiX />
        </button>

        <div className="resume-modal-left">
          <span className="resume-modal-tag">Resume</span>
          <h2 className="resume-modal-title">
            View my<br />
            resume<br />
            inline.
          </h2>
          <p className="resume-modal-desc">
            Open the resume viewer to see the PDF directly in your browser. 
            No download prompt, just a clean read.
          </p>
          
          <div className="resume-modal-actions">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn resume-btn-primary">
              OPEN_RESUME <FiExternalLink />
            </a>
            <a href="/resume.pdf" download className="resume-btn resume-btn-secondary">
              PDF_FILE <FiDownload />
            </a>
          </div>
        </div>

        <div className="resume-modal-right">
          <iframe 
            src="/resume.pdf#view=FitH&navpanes=0" 
            title="Om Yadav Resume PDF Viewer"
          />
        </div>
        
      </div>
    </div>
  );
}

export default ResumeViewer;
