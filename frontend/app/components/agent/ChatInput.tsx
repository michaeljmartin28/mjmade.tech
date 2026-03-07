export function ChatInput() {
  return (
    <div className="p-4 border-t border-border flex items-center gap-2 opacity-50 cursor-not-allowed">
      <input
        disabled
        className="flex-1 bg-surfaceAlt border border-border rounded-lg px-3 py-2 text-textMuted"
        placeholder="Chat assistant coming soon..."
      />
      <button
        disabled
        className="bg-primary text-primaryForeground px-4 py-2 rounded-lg opacity-50"
      >
        Send
      </button>
    </div>
  );
}
