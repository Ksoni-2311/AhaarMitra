import { useState } from "react";

const Icon = ({ name, className = "" }) => (
  <span className={`material-symbols-outlined ${className}`}>{name}</span>
);

/* ── initial messages ── */
const initialMessages = [
  {
    id: 1,
    from: "bot",
    text: "Hello! I'm your AhaarMitra assistant. How can I help you today? You can ask about your active subscriptions, billing, or delivery issues.",
    time: "10:42 AM",
    suggestions: null,
  },
  {
    id: 2,
    from: "user",
    text: "I want to change the delivery time for my Shree Tiffin subscription starting tomorrow.",
    time: "10:44 AM",
    suggestions: null,
  },
  {
    id: 3,
    from: "bot",
    text: "I see you have an active plan with Shree Tiffin. I can certainly help with that! Would you like to move it to a earlier slot (11:30 AM) or later (1:30 PM)?",
    time: "10:45 AM",
    suggestions: ["Earlier (11:30 AM)", "Later (1:30 PM)"],
  },
];

const articles = [
  {
    title: "Changing delivery instructions",
    desc: "Learn how to update your drop-off point or gate codes...",
  },
  {
    title: "Refund policy for missed meals",
    desc: "Our 24-hour window policy for meal cancellations...",
  },
  {
    title: "Bulk subscription discounts",
    desc: "Save up to 15% when subscribing for 3+ months...",
  },
];

export default function AhaarMitraSupport() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const sendMessage = (text) => {
    const msg = text || input;
    if (!msg.trim()) return;
    const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), from: "user", text: msg, time: now, suggestions: null },
    ]);
    setInput("");
  };

  return (
    <main className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
      {/* Page Header */}
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-gray-900">
          Support Concierge
        </h1>
        <p className="text-gray-400 font-medium">
          Get instant help with your subscriptions or talk to our team.
        </p>
      </header>

      <div className="grid grid-cols-12 gap-8 items-start">
        {/* ── Chat Panel ── */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col shadow-sm">

            {/* Chat header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
                    <Icon name="support_agent" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                </div>
                <div>
                  <h2 className="font-bold text-lg text-gray-900">Live Support</h2>
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">
                    Active • Response time: ~2 mins
                  </p>
                </div>
              </div>
              <button className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors">
                <Icon name="more_vert" />
              </button>
            </div>

            {/* Messages */}
            <div
              className="p-8 overflow-y-auto space-y-6 flex flex-col bg-gray-50/40"
              style={{ height: "calc(100vh - 350px)", minHeight: "500px" }}
            >
              {messages.map((msg) =>
                msg.from === "bot" ? (
                  /* Bot bubble */
                  <div key={msg.id} className="flex items-start gap-4 max-w-[80%]">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                      <Icon name="smart_toy" className="text-sm text-gray-500" />
                    </div>
                    <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-200 shadow-sm">
                      <p className="text-sm leading-relaxed text-gray-700">{msg.text}</p>
                      {msg.suggestions && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {msg.suggestions.map((s) => (
                            <button
                              key={s}
                              onClick={() => sendMessage(s)}
                              className="px-3 py-1.5 rounded-lg border border-gray-200 text-[11px] font-bold text-gray-600 hover:bg-gray-100 transition-colors"
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      )}
                      <span className="text-[10px] text-gray-400 mt-2 block font-medium">{msg.time}</span>
                    </div>
                  </div>
                ) : (
                  /* User bubble */
                  <div key={msg.id} className="flex items-start gap-4 max-w-[80%] ml-auto flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center shrink-0">
                      <Icon name="person" className="text-sm text-white" />
                    </div>
                    <div className="bg-gray-900 text-white p-4 rounded-2xl rounded-tr-none shadow-sm">
                      <p className="text-sm leading-relaxed font-medium">{msg.text}</p>
                      <span className="text-[10px] text-white/50 mt-2 block font-bold">{msg.time}</span>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Input bar */}
            <div className="p-6 border-t border-gray-100 bg-white">
              <div className="flex items-center gap-4 bg-gray-50 rounded-2xl border border-gray-200 p-2 pl-4">
                <button className="text-gray-300 hover:text-gray-600 transition-colors">
                  <Icon name="add_circle" />
                </button>
                <input
                  className="flex-1 bg-transparent border-none outline-none focus:ring-0 text-sm text-gray-800 placeholder:text-gray-400"
                  placeholder="Type your message..."
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button
                  onClick={() => sendMessage()}
                  className="w-10 h-10 bg-gray-900 text-white rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Icon name="arrow_forward" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right Sidebar ── */}
        <div className="col-span-12 lg:col-span-4 space-y-6">

          {/* Quick Assistance */}
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-3">
            <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4 px-2">
              Quick Assistance
            </h3>
            <button className="w-full flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                <Icon name="phone_callback" />
              </div>
              <div className="text-left">
                <span className="block text-sm font-bold text-gray-800">Request a Callback</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  Connect in 15 mins
                </span>
              </div>
            </button>
            <button className="w-full flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                <Icon name="upload_file" />
              </div>
              <div className="text-left">
                <span className="block text-sm font-bold text-gray-800">Attach Files</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  Invoices, Screenshots
                </span>
              </div>
            </button>
          </div>

          {/* Recommended Articles */}
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm">
            <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6 px-2">
              Recommended Articles
            </h3>
            <div className="space-y-1">
              {articles.map((a) => (
                <a
                  key={a.title}
                  href="#"
                  className="block p-4 rounded-2xl hover:bg-gray-50 transition-colors group border border-transparent hover:border-gray-100"
                >
                  <h4 className="text-sm font-bold mb-1 text-gray-800 group-hover:text-amber-500 transition-colors">
                    {a.title}
                  </h4>
                  <p className="text-[11px] text-gray-400 leading-relaxed">{a.desc}</p>
                </a>
              ))}
              <button className="w-full mt-2 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-gray-700 transition-colors">
                View Help Center
              </button>
            </div>
          </div>

          {/* Current Context */}
          <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                Current Context
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 overflow-hidden shrink-0">
                <img
                  alt="Vendor"
                  className="w-full h-full object-cover opacity-70"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMBmIchnkIkoQGR77HPKNPe8Mi87AWVXdlxtSOo0_aqUzxSiao8g8wNuB6MLnue5hBiJqoCqYqYf_QwyAx8srHTmiWQLzDoSpBgjo79alSoDbXQZ1BxnJSwyVy8He4b-CbkpWuTgncU4YcUKtpcr-pZOyPo1hbVYNmqrmfArc3zZZuFPXAiqx6A5bpLRmZEtfGqskXEk_ur5KQcptvlknPuRIA86F4SmByElS4qXuo1rcrzcBC2SHCGJ1fTtaHQtFIc92CaW3sgiyX"
                />
              </div>
              <div>
                <span className="block text-xs font-bold text-gray-800">Shree Tiffin Services</span>
                <span className="text-[10px] text-gray-400 font-bold">Plan #AM-98234</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
