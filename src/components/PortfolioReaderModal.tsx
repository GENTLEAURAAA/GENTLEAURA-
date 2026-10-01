import React, { useEffect, useState } from 'react';
import { X, Check, Copy } from 'lucide-react';
import { PortfolioProject } from '../data/portfolioData';

interface PortfolioReaderModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const PortfolioReaderModal: React.FC<PortfolioReaderModalProps> = ({
  project,
  onClose,
}) => {
  const [activeTabId, setActiveTabId] = useState<string>('');
  const [copiedSample, setCopiedSample] = useState<boolean>(false);

  useEffect(() => {
    if (project && project.manuscriptSections.length > 0) {
      setActiveTabId(project.manuscriptSections[0].id);
    }
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  const activeSection =
    project.manuscriptSections.find((s) => s.id === activeTabId) ||
    project.manuscriptSections[0];

  const handleCopyExcerpt = () => {
    const textToCopy = activeSection.blocks
      .map((b) => `${b.heading}\n${b.body.join('\n\n')}`)
      .join('\n\n---\n\n');
    navigator.clipboard.writeText(
      `${project.title} — ${activeSection.tabLabel}\nWritten by Abdulsalam Omobolaji (GentleAura)\n\n${textToCopy}`
    );
    setCopiedSample(true);
    setTimeout(() => setCopiedSample(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#0E0E12] text-[#FAFAFA] rounded-2xl border border-[#272732] overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#22222C] bg-[#0E0E12] shrink-0">
          <div className="text-xs text-[#A1A1AA] truncate">
            {project.metadataLine}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close sample reader"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#FAFAFA] bg-[#1C1C24] hover:bg-[#9333EA] hover:text-white rounded-lg transition-colors duration-150 whitespace-nowrap cursor-pointer"
          >
            <span>Close</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <p className="text-xs text-[#C084FC] font-medium">
              {project.category}
            </p>
            <h2
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#FAFAFA]"
            >
              {project.title}
            </h2>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Sample Switcher & Copy Action */}
          <div className="pt-6 border-t border-[#22222C] space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              {project.manuscriptSections.length > 1 ? (
                <div
                  className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#16161D] border border-[#252530] rounded-lg"
                  role="tablist"
                >
                  {project.manuscriptSections.map((section) => {
                    const isSelected = section.id === activeSection.id;
                    return (
                      <button
                        key={section.id}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => setActiveTabId(section.id)}
                        className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-[#9333EA] text-white'
                            : 'text-[#A1A1AA] hover:text-white'
                        }`}
                      >
                        {section.tabLabel}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <span className="text-xs font-medium text-[#FAFAFA]">
                  {activeSection.tabLabel}
                </span>
              )}

              <button
                type="button"
                onClick={handleCopyExcerpt}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[#1C1C24] text-[#FAFAFA] hover:bg-[#9333EA] rounded-lg transition-colors cursor-pointer"
              >
                {copiedSample ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#C084FC]" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Sample</span>
                  </>
                )}
              </button>
            </div>

            {/* Clean Writing Sheet */}
            <div className="bg-[#13131A] border border-[#252530] rounded-xl p-6 space-y-6">
              <div className="text-xs text-[#A1A1AA] pb-3 border-b border-[#22222C]">
                {activeSection.frameworkUsed}
              </div>
              {activeSection.blocks.map((block, idx) => (
                <div
                  key={block.heading}
                  className={
                    idx > 0
                      ? 'pt-6 border-t border-[#22222C] space-y-2'
                      : 'space-y-2'
                  }
                >
                  {block.stageTag && (
                    <div className="text-xs font-mono-tabular text-[#C084FC] font-medium">
                      {block.stageTag}
                    </div>
                  )}
                  <h3 className="text-base sm:text-lg font-semibold text-[#FAFAFA]">
                    {block.heading}
                  </h3>
                  <div className="space-y-2.5">
                    {block.body.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-[15px] text-[#D4D4D8] leading-relaxed whitespace-pre-line"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
