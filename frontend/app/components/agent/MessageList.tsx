export function MessageList({ messages }: { messages: any[] }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`max-w-[80%] p-3 rounded-xl ${
            msg.role === "user"
              ? "ml-auto bg-primary text-primaryForeground"
              : "mr-auto bg-surfaceAlt border border-border text-text"
          }`}
        >
          {msg.content}
        </div>
      ))}
    </div>
  );
}