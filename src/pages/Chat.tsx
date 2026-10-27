import { useState, useRef, useEffect } from "react";
import {
  Search,
  Send,
  Paperclip,
  Smile,
  Phone,
  Video,
  MoreVertical,
  CheckCheck,
  Check,
  Image as ImageIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const conversations = [
  {
    id: "c1",
    name: "James Okoro",
    role: "Electrician",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    online: true,
    last: "Sure, I can come by tomorrow at 2 PM.",
    time: "5m",
    unread: 2,
  },
  {
    id: "c2",
    name: "Maria Santos",
    role: "Plumber",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    online: true,
    last: "The parts will arrive on Friday.",
    time: "1h",
    unread: 0,
  },
  {
    id: "c3",
    name: "David Chen",
    role: "Carpenter",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    online: false,
    last: "Thanks for the opportunity!",
    time: "1d",
    unread: 0,
  },
  {
    id: "c4",
    name: "Aisha Patel",
    role: "Painter",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    online: false,
    last: "I'll send the color samples.",
    time: "2d",
    unread: 0,
  },
];

const initialMessages = [
  {
    id: 1,
    sender: "them",
    text: "Hi! I saw your job request for electrical panel repair. I can definitely help with that.",
    time: "10:30 AM",
  },
  {
    id: 2,
    sender: "me",
    text: "Great! When would you be available to come take a look?",
    time: "10:32 AM",
  },
  {
    id: 3,
    sender: "them",
    text: "I have an opening tomorrow afternoon. Would 2 PM work for you?",
    time: "10:35 AM",
  },
  {
    id: 4,
    sender: "me",
    text: "2 PM is perfect. What should I prepare beforehand?",
    time: "10:36 AM",
    status: "read",
  },
  {
    id: 5,
    sender: "them",
    text: "Sure, I can come by tomorrow at 2 PM. Just make sure the panel area is accessible. I'll bring all the tools needed.",
    time: "10:40 AM",
  },
];

const emojis = [
  "😀",
  "😂",
  "👍",
  "❤️",
  "🙏",
  "🎉",
  "🔥",
  "✨",
  "👏",
  "💪",
  "😊",
  "😎",
];

export default function Chat() {
  const [activeId, setActiveId] = useState("c1");
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [showMobileList, setShowMobileList] = useState(true);
  const endRef = useRef<HTMLDivElement>(null);

  const active = conversations.find((c) => c.id === activeId);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      {
        id: Date.now(),
        sender: "me",
        text: input,
        time: "Now",
        status: "sent",
      },
    ]);
    setInput("");
    setShowEmoji(false);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "them",
          text: "Got it! I'll see you then. 👍",
          time: "Now",
        },
      ]);
    }, 2000);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm flex h-[calc(100vh-8rem)]">
        {/* Conversation list */}
        <div
          className={cn(
            "w-full sm:w-80 border-r border-border flex flex-col",
            showMobileList ? "flex" : "hidden sm:flex",
          )}
        >
          <div className="p-4 border-b border-border">
            <h1 className="font-heading font-bold text-lg mb-3">Messages</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                placeholder="Search conversations..."
                className="w-full rounded-xl border border-border bg-muted/50 pl-9 pr-3 py-2 text-sm outline-none focus:border-primary"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversations.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveId(c.id);
                  setShowMobileList(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 p-3 hover:bg-muted/50 transition-colors text-left border-l-2",
                  activeId === c.id
                    ? "bg-primary/5 border-primary"
                    : "border-transparent",
                )}
              >
                <div className="relative shrink-0">
                  <img
                    src={c.avatar}
                    alt={c.name}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  {c.online && (
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-card" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm truncate">
                      {c.name}
                    </span>
                    <span className="text-xs text-muted-foreground shrink-0">
                      {c.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs text-muted-foreground truncate">
                      {c.last}
                    </span>
                    {c.unread > 0 && (
                      <span className="bg-primary text-primary-foreground rounded-full h-5 min-w-5 px-1 grid place-items-center text-xs font-semibold">
                        {c.unread}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat window */}
        <div
          className={cn(
            "flex-1 flex flex-col min-w-0",
            showMobileList ? "hidden sm:flex" : "flex",
          )}
        >
          {/* Header */}
          <div className="flex items-center gap-3 p-4 border-b border-border">
            <button
              onClick={() => setShowMobileList(true)}
              className="sm:hidden text-muted-foreground"
            >
              ←
            </button>
            <div className="relative">
              <img
                src={active?.avatar}
                alt={active?.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              {active?.online && (
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-card" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm">{active?.name}</div>
              <div className="text-xs text-emerald-600 flex items-center gap-1">
                {typing ? (
                  <span className="flex gap-0.5">
                    {[".", ".", "."].map((d, i) => (
                      <span
                        key={i}
                        className="animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      >
                        {d}
                      </span>
                    ))}{" "}
                    typing
                  </span>
                ) : active?.online ? (
                  "Online"
                ) : (
                  "Last seen recently"
                )}
              </div>
            </div>
            <div className="flex items-center gap-1">
              {[Phone, Video, MoreVertical].map((Icon, i) => (
                <button
                  key={i}
                  className="grid h-9 w-9 place-items-center rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-secondary/30">
            <div className="text-center">
              <span className="text-xs text-muted-foreground bg-card rounded-full px-3 py-1">
                Today
              </span>
            </div>
            {messages.map((m) => (
              <div
                key={m.id}
                className={cn(
                  "flex",
                  m.sender === "me" ? "justify-end" : "justify-start",
                )}
              >
                <div
                  className={cn(
                    "max-w-[75%] sm:max-w-md",
                    m.sender === "me" ? "items-end" : "items-start",
                    "flex flex-col gap-1",
                  )}
                >
                  <div
                    className={cn(
                      "rounded-2xl px-4 py-2.5 text-sm",
                      m.sender === "me"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-card border border-border rounded-bl-md",
                    )}
                  >
                    {m.text}
                  </div>
                  <div
                    className={cn(
                      "flex items-center gap-1 text-xs text-muted-foreground px-1",
                      m.sender === "me" ? "flex-row-reverse" : "",
                    )}
                  >
                    {m.time}
                    {m.sender === "me" &&
                      (m.status === "read" ? (
                        <CheckCheck className="h-3.5 w-3.5 text-sky-500" />
                      ) : (
                        <Check className="h-3.5 w-3.5" />
                      ))}
                  </div>
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-card border border-border rounded-2xl rounded-bl-md px-4 py-3 flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Emoji picker */}
          {showEmoji && (
            <div className="border-t border-border p-3 flex flex-wrap gap-1 bg-card">
              {emojis.map((e) => (
                <button
                  key={e}
                  onClick={() => setInput(input + e)}
                  className="text-2xl hover:bg-muted rounded-lg p-1 transition-colors"
                >
                  {e}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-border flex items-center gap-2">
            <button
              onClick={() => setShowEmoji(!showEmoji)}
              className="grid h-9 w-9 place-items-center rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            >
              <Smile className="h-5 w-5" />
            </button>
            <button className="grid h-9 w-9 place-items-center rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
              <Paperclip className="h-5 w-5" />
            </button>
            <button className="grid h-9 w-9 place-items-center rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
              <ImageIcon className="h-5 w-5" />
            </button>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type a message..."
              className="flex-1 rounded-xl border border-border bg-muted/50 px-4 py-2.5 text-sm outline-none focus:border-primary focus:bg-card"
            />
            <button
              onClick={send}
              className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shrink-0"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
