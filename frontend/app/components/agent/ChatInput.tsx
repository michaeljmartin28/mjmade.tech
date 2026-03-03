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
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-1 bg-surfaceAlt border border-border rounded-lg px-3 py-2 text-text focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder="Ask something..."
      />
      <button
        type="submit"
        className="bg-primary text-primaryForeground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
      >
        Send
      </button>
    </form>
  );
}
