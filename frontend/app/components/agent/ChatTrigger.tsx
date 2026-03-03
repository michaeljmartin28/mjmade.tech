export function ChatTrigger({
  onOpen,
  isVisible,
}: {
  onOpen: () => void;
  isVisible: boolean;
}) {
  return (
    <button
      onClick={onOpen}
      className={`${isVisible ? "" : "hidden"} fixed bottom-6 right-6 z-50 rounded-full bg-primary text-primaryForeground p-4 shadow-lg hover:shadow-xl transition-shadow`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8L3 20l1.2-3.6A7.94 7.94 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    </button>
  );
}
