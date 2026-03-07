import { useState } from "react";

export function ChatInput({ onSend }: { onSend: (v: string) => void }) {
  const [value, setValue] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    if (!value.trim()) return;
    onSend(value);
    setValue("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border-t border-border flex items-center gap-2"
    >
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
    </form>
  );
}
