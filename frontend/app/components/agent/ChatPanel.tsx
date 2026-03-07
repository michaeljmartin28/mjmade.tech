export function ChatPanel({ open, onClose, children }: any) {
  setTimeout(() => {
    // auto-close after 2 seconds for demo purposes
    onClose();
  }, 2000);

  return (
    <div
      className={`fixed bottom-0 right-0 w-full max-w-md h-[70vh] bg-surface border border-border rounded-t-xl shadow-2xl transform transition-transform ${
        open ? "translate-y-0 bottom-20 z-100" : "translate-y-full bottom-0 z-0"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="font-semibold text-text">AI Assistant coming soon!</div>
        <button
          onClick={onClose}
          className="text-textMuted hover:text-text transition-colors"
        >
          ✕
        </button>
      </div>

      <div className="flex flex-col h-full p-4 ">{children}</div>
    </div>
  );
}
