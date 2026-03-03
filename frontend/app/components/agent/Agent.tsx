"use client";

import { useState } from "react";
import { ChatTrigger } from "./ChatTrigger";
import { ChatPanel } from "./ChatPanel";
import { MessageList } from "./MessageList";
import { ChatInput } from "./ChatInput";

export default function ChatUI() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);

  function handleSend(content: string) {
    setMessages((prev) => [...prev, { role: "user", content }]);

    // placeholder assistant response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Thinking..." },
      ]);
    }, 400);
  }

  return (
    <>
      <ChatTrigger onOpen={() => setOpen(true)} isVisible={!open} />
      <ChatPanel open={open} onClose={() => setOpen(false)}>
        <MessageList messages={messages} />
        <ChatInput onSend={handleSend} />
      </ChatPanel>
    </>
  );
}
