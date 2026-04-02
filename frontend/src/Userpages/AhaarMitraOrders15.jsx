import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body, .ahaar-root {
    font-family: 'Manrope', sans-serif;
    background: #F8F7F4;
    color: #0A0A0A;
    min-height: 100vh;
  }

  .material-symbols-outlined {
    font-family: 'Material Symbols Outlined';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  }

  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
  }

  .calendar-day {
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 700;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .day-completed {
    background: rgba(34, 197, 94, 0.12);
    color: #16a34a;
    border: 1px solid rgba(34, 197, 94, 0.25);
  }

  .day-upcoming {
    background: rgba(0,0,0,0.04);
    color: #737373;
    border: 1px solid rgba(0,0,0,0.08);
  }

  .day-skipped {
    background: rgba(239, 68, 68, 0.07);
    color: #ef4444;
    border: 1px dashed rgba(239, 68, 68, 0.35);
    text-decoration: line-through;
  }

  .day-active {
    background: #0A0A0A;
    color: #FFFFFF;
    border: 1px solid #0A0A0A;
  }

  .order-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .order-card:hover {
    border-color: rgba(0,0,0,0.2) !important;
    box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: #D4D4D4; border-radius: 10px; }
  ::-webkit-scrollbar-thumb:hover { background: #A3A3A3; }
`;

const Icon = ({ name, style, className }) => (
  <span className={`material-symbols-outlined ${className || ""}`} style={style}>{name}</span>
);

const CalendarWidget = ({ days, mealsRemaining, daysLeft, daysLeftColor, summaryItems, scheduleLabel, startLabel, endLabel, startActive }) => (
  <div style={{ width: "100%", maxWidth: 320, flexShrink: 0 }}>
    <div style={{ marginBottom: 16 }}>
      <h4 style={{ fontSize: 11, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em", color: "#0A0A0A", marginBottom: 8 }}>
        {scheduleLabel}
      </h4>
      <div style={{ display: "flex", gap: 8 }}>
        <button style={{
          padding: "6px 12px", borderRadius: 8,
          background: startActive ? "#0A0A0A" : "transparent",
          color: startActive ? "#fff" : "#737373",
          border: startActive ? "none" : "1px solid #E5E5E5",
          fontSize: 10, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer"
        }}>{startLabel}</button>
        <button style={{
          padding: "6px 12px", borderRadius: 8,
          background: !startActive ? "#0A0A0A" : "transparent",
          color: !startActive ? "#fff" : "#737373",
          border: !startActive ? "none" : "1px solid #E5E5E5",
          fontSize: 10, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer"
        }}>{endLabel}</button>
      </div>
    </div>
    <div style={{ padding: 16, background: "#FFFFFF", borderRadius: 16, border: "1px solid #E5E5E5" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, padding: "0 4px" }}>
        <span style={{ fontSize: 12, fontWeight: 700 }}>May 2024</span>
        <div style={{ display: "flex", gap: 8 }}>
          <Icon name="chevron_left" style={{ fontSize: 18, color: "#D4D4D4", cursor: "pointer" }} />
          <Icon name="chevron_right" style={{ fontSize: 18, color: "#D4D4D4", cursor: "pointer" }} />
        </div>
      </div>
      <div className="calendar-grid" style={{ marginBottom: 4 }}>
        {["M","T","W","T","F","S","S"].map((d, i) => (
          <div key={i} style={{ fontSize: 9, fontWeight: 900, color: "#C4C4C4", textAlign: "center", textTransform: "uppercase" }}>{d}</div>
        ))}
      </div>
      <div className="calendar-grid">
        {days.map((d, i) => (
          <div key={i} className={`calendar-day day-${d.type}`} style={d.faded ? { opacity: 0.2 } : {}}>{d.num}</div>
        ))}
      </div>
      <div style={{ marginTop: 24, paddingTop: 16, borderTop: "1px solid #F0F0F0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <div>
            <span style={{ fontSize: 9, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em", color: "#A3A3A3", display: "block", marginBottom: 2 }}>Meals Remaining</span>
            <span style={{ fontSize: 20, fontWeight: 900, color: "#0A0A0A" }}>{mealsRemaining}</span>
          </div>
          <div style={{ textAlign: "right" }}>
            <span style={{ fontSize: 9, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em", color: "#A3A3A3", display: "block", marginBottom: 2 }}>Days Left</span>
            <span style={{ fontSize: 20, fontWeight: 900, color: daysLeftColor }}>{daysLeft}</span>
          </div>
        </div>
        <div style={{ background: "#F8F7F4", borderRadius: 12, border: "1px solid #EFEFEF", padding: 12, display: "flex", flexDirection: "column", gap: 12 }}>
          {summaryItems.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, opacity: item.faded ? 0.3 : 1 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "#EFEFEF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name={item.icon} style={{ fontSize: 16, color: item.iconColor }} />
              </div>
              <div>
                <span style={{ fontSize: 12, fontWeight: 900, color: "#0A0A0A", display: "block" }}>{item.label}</span>
                <span style={{ fontSize: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#C4C4C4" }}>{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const SlotCard = ({ label, time, ampm, icon, menu, active = true }) => (
  <div style={{
    background: active ? "#FFFFFF" : "#F5F5F5",
    borderRadius: 12,
    padding: 20,
    border: "1px solid #EFEFEF",
    opacity: active ? 1 : 0.5,
    filter: active ? "none" : "grayscale(1)",
    position: "relative",
    overflow: "hidden"
  }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
      <div>
        <div style={{ fontSize: 10, fontWeight: 900, color: "#A3A3A3", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 4 }}>{label}</div>
        <div style={{ fontSize: 20, fontWeight: 900, color: "#0A0A0A" }}>
          {time} <span style={{ fontSize: 11, fontWeight: 700, color: "#A3A3A3", textTransform: "uppercase" }}>{ampm}</span>
        </div>
      </div>
      <Icon name={icon} style={{ fontSize: 22, color: "#D4D4D4" }} />
    </div>
    <div style={{ fontSize: 10, fontWeight: 900, color: "#C4C4C4", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 4 }}>Menu Preview</div>
    <div style={{ fontSize: 13, fontWeight: 700, color: "#3A3A3A", lineHeight: 1.4 }}>{menu}</div>
    <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #F0F0F0", display: "flex", gap: 8 }}>
      {active ? (
        <>
          <button style={{
            flex: 1, padding: "8px", borderRadius: 8,
            background: "rgba(239,68,68,0.06)", color: "#ef4444",
            fontSize: 9, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
            border: "1px solid rgba(239,68,68,0.15)", cursor: "pointer"
          }}>
            <Icon name="block" style={{ fontSize: 14 }} /> Skip
          </button>
          <button style={{
            padding: "8px 12px", borderRadius: 8,
            background: "#F5F5F5", fontSize: 9, fontWeight: 900,
            textTransform: "uppercase", letterSpacing: "0.1em", color: "#737373",
            border: "1px solid #E5E5E5", cursor: "pointer", display: "flex", alignItems: "center"
          }}>
            <Icon name="edit" style={{ fontSize: 14 }} />
          </button>
        </>
      ) : (
        <button style={{
          width: "100%", padding: "8px", borderRadius: 8,
          background: "#F5F5F5", color: "#C4C4C4",
          fontSize: 9, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em",
          border: "1px solid #EFEFEF", cursor: "not-allowed"
        }}>Slot Inactive</button>
      )}
    </div>
  </div>
);

const SubscriptionCard = ({ vendor, id, plan, planStatus, planStatusColor, iconName, iconColor, slots, calendarProps }) => (
  <div className="order-card" style={{
    background: "#FFFFFF",
    borderRadius: 20,
    border: "1px solid #E5E5E5",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
  }}>
    <div style={{ padding: "40px 40px", display: "flex", flexDirection: "column", gap: 32 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        {/* Header */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
              <div style={{ width: 64, height: 64, borderRadius: 16, background: "#F5F5F5", border: "1px solid #EFEFEF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name={iconName} style={{ fontSize: 28, color: iconColor }} />
              </div>
              <div>
                <h3 style={{ fontWeight: 900, fontSize: 22, letterSpacing: "-0.02em", color: "#0A0A0A" }}>{vendor}</h3>
                <div style={{ fontSize: 9, fontWeight: 700, color: "#C4C4C4", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 6 }}>{id}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#A3A3A3", textTransform: "uppercase", letterSpacing: "0.1em", padding: "2px 8px", border: "1px solid #E5E5E5", borderRadius: 4 }}>{plan}</span>
                  <span style={{ fontSize: 10, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em", color: planStatusColor }}>{planStatus}</span>
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
              {slots.map((slot, i) => <SlotCard key={i} {...slot} />)}
            </div>

            <button style={{
              width: "100%", padding: 16, background: "#F8F7F4",
              border: "1px solid #E5E5E5", borderRadius: 12,
              fontSize: 11, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#0A0A0A",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 12
            }}>
              <Icon name={calendarProps.contactIcon} style={{ fontSize: 20 }} /> Contact Vendor
            </button>
          </div>

          <CalendarWidget {...calendarProps} />
        </div>
      </div>
    </div>
  </div>
);

export default function AhaarMitraOrders15() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { key: "all", label: "All" },
    { key: "delivered", label: "Delivered" },
    { key: "cancelled", label: "Cancelled" },
    { key: "skipped", label: "Skipped" },
  ];

  const tabColors = { delivered: "#16a34a", cancelled: "#ef4444", skipped: "#737373" };

  const subscription1 = {
    vendor: "Shree Tiffin Services",
    id: "ID: AM-2024-STS-0182",
    plan: "Standard Veg Plan",
    planStatus: "Active",
    planStatusColor: "#16a34a",
    iconName: "lunch_dining",
    iconColor: "#F59E0B",
    slots: [
      { label: "Lunch Slot", time: "Today, 12:45", ampm: "PM", icon: "light_mode", menu: "Paneer Bhurji, 4x Roti, Dal Tadka & Salad", active: true },
      { label: "Dinner Slot", time: "Today, 08:30", ampm: "PM", icon: "dark_mode", menu: "Mixed Veg Curry, 4x Roti, Curd & Pickle", active: true },
    ],
    calendarProps: {
      scheduleLabel: "Schedule: May 2024 - Aug 2024",
      startLabel: "Start: May 1",
      endLabel: "Ends: Aug 31",
      startActive: true,
      contactIcon: "chat",
      days: [
        { num: 20, type: "completed" }, { num: 21, type: "completed" }, { num: 22, type: "completed" },
        { num: 23, type: "completed" }, { num: 24, type: "completed" }, { num: 25, type: "skipped" },
        { num: 26, type: "skipped" }, { num: 27, type: "completed" }, { num: 28, type: "active" },
        { num: 29, type: "upcoming" }, { num: 30, type: "upcoming" }, { num: 31, type: "upcoming" },
        { num: 1, type: "upcoming", faded: true }, { num: 2, type: "upcoming", faded: true },
      ],
      mealsRemaining: 42,
      daysLeft: 21,
      daysLeftColor: "#F59E0B",
      summaryItems: [
        { icon: "light_mode", iconColor: "#F59E0B", label: "21 Lunch Meals Left", sub: "Until Jun 18" },
        { icon: "dark_mode", iconColor: "#3B82F6", label: "21 Dinner Meals Left", sub: "Until Jun 18" },
      ]
    }
  };

  const subscription2 = {
    vendor: "Morning Brews",
    id: "ID: AM-2024-MBR-9941",
    plan: "Daily Espresso Bundle",
    planStatus: "Next delivery soon",
    planStatusColor: "#F59E0B",
    iconName: "local_cafe",
    iconColor: "#3B82F6",
    slots: [
      { label: "Morning Slot", time: "Today, 08:15", ampm: "AM", icon: "coffee", menu: "Double Shot Latte & Oat Cookie", active: true },
      { label: "Evening Slot", time: "Today, 04:30", ampm: "PM", icon: "bakery_dining", menu: "N/A - Weekly Plan Only", active: false },
    ],
    calendarProps: {
      scheduleLabel: "Schedule: May 2024 - Jul 2024",
      startLabel: "Start: May 15",
      endLabel: "Ends: Jul 15",
      startActive: false,
      contactIcon: "mail",
      days: [
        { num: 20, type: "completed" }, { num: 21, type: "completed" }, { num: 22, type: "completed" },
        { num: 23, type: "completed" }, { num: 24, type: "completed" }, { num: 25, type: "completed" },
        { num: 26, type: "completed" }, { num: 27, type: "completed" }, { num: 28, type: "active" },
        { num: 29, type: "upcoming" }, { num: 30, type: "upcoming" }, { num: 31, type: "upcoming" },
        { num: 1, type: "upcoming", faded: true }, { num: 2, type: "upcoming", faded: true },
      ],
      mealsRemaining: 12,
      daysLeft: 12,
      daysLeftColor: "#3B82F6",
      summaryItems: [
        { icon: "coffee", iconColor: "#3B82F6", label: "12 Morning Meals Left", sub: "Until Jun 09" },
        { icon: "bakery_dining", iconColor: "#A3A3A3", label: "0 Evening Meals Left", sub: "Not Subscribed", faded: true },
      ]
    }
  };

  const orders = [
    {
      date: "May 24, 2024", orderId: "ID: AM-ORD-2024-5512",
      icon: "restaurant", vendor: "Tadka House", items: "Paneer Tikka, Garlic Naan x2",
      mealType: "Dinner", mealIcon: "dark_mode",
      status: "Delivered", statusColor: "#16a34a", statusIcon: "check_circle",
      time: "08:42 PM", rating: 4
    },
    {
      date: "May 23, 2024", orderId: "ID: AM-ORD-2024-5489",
      icon: "set_meal", vendor: "Ocean Delights", items: "Grilled Sea Bass, Asparagus",
      mealType: "Lunch", mealIcon: "light_mode",
      status: "Cancelled", statusColor: "#ef4444", statusIcon: "cancel",
      time: "01:15 PM", rating: null
    },
  ];

  return (
    <div className="ahaar-root" style={{ fontFamily: "'Manrope', sans-serif", background: "#F8F7F4", minHeight: "100vh" }}>
      <style>{styles}</style>

      
      {/* Main */}
      <main style={{ paddingTop: 128, paddingBottom: 80, padding: "128px 48px 80px", maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <header style={{ marginBottom: 40, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
          <div>
            <h1 style={{ fontSize: 48, fontWeight: 900, letterSpacing: "-0.03em", color: "#0A0A0A", marginBottom: 12 }}>Order Management</h1>
            <p style={{ color: "#A3A3A3", fontWeight: 500, fontSize: 15 }}>Manage your active meal subscriptions and view full order history.</p>
          </div>
          <button style={{
            padding: "12px 24px", background: "#0A0A0A", color: "#FFFFFF",
            fontSize: 11, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em",
            borderRadius: 999, border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8,
            boxShadow: "0 4px 16px rgba(0,0,0,0.15)"
          }}>
            <Icon name="calendar_add_on" style={{ fontSize: 18 }} /> New Subscription
          </button>
        </header>

        {/* Active Subscriptions */}
        <section style={{ marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, display: "flex", alignItems: "center", gap: 12, color: "#0A0A0A" }}>
              <Icon name="verified" style={{ fontSize: 22, color: "#F59E0B" }} />
              Active Subscriptions (2)
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <SubscriptionCard {...subscription1} />
            <SubscriptionCard {...subscription2} />
          </div>
        </section>

        {/* Past Orders History */}
        <section>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#0A0A0A" }}>Past Orders History</h2>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center", background: "#FFFFFF", padding: "4px 8px", borderRadius: 999, border: "1px solid #E5E5E5" }}>
                {tabs.map(tab => (
                  <button key={tab.key} onClick={() => setActiveTab(tab.key)} style={{
                    padding: "8px 20px", fontSize: 10, fontWeight: activeTab === tab.key ? 900 : 700,
                    textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer",
                    background: "transparent", border: "none",
                    color: activeTab === tab.key ? "#0A0A0A" : "#A3A3A3",
                    borderBottom: activeTab === tab.key ? `2px solid ${tab.key === "all" ? "#0A0A0A" : tabColors[tab.key] || "#0A0A0A"}` : "none",
                    transition: "all 0.2s"
                  }}>{tab.label}</button>
                ))}
              </div>
              <button style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#A3A3A3", background: "transparent", border: "none", cursor: "pointer" }}>
                <Icon name="tune" style={{ fontSize: 18 }} />
              </button>
            </div>
          </div>

          <div style={{ background: "#FFFFFF", borderRadius: 20, border: "1px solid #E5E5E5", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid #F0F0F0", background: "#FAFAFA" }}>
                    {["Order Date", "Vendor & Items", "Meal Type", "Status", "Timestamp", "Rating"].map(h => (
                      <th key={h} style={{ padding: "16px 24px", fontSize: 10, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#C4C4C4", textAlign: "left", whiteSpace: "nowrap" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #F5F5F5", transition: "background 0.15s", cursor: "default" }}
                      onMouseEnter={e => e.currentTarget.style.background = "#FAFAFA"}
                      onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                      <td style={{ padding: "20px 24px" }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: "#0A0A0A" }}>{order.date}</div>
                        <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#C4C4C4", marginTop: 2 }}>{order.orderId}</div>
                      </td>
                      <td style={{ padding: "20px 24px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <div style={{ width: 32, height: 32, borderRadius: 8, background: "#F5F5F5", border: "1px solid #EFEFEF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <Icon name={order.icon} style={{ fontSize: 14, color: "#A3A3A3" }} />
                          </div>
                          <div>
                            <div style={{ fontSize: 13, fontWeight: 700, color: "#0A0A0A" }}>{order.vendor}</div>
                            <div style={{ fontSize: 10, fontWeight: 500, color: "#A3A3A3", maxWidth: 200, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{order.items}</div>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: "20px 24px" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 10px", borderRadius: 6, background: "#F5F5F5" }}>
                          <Icon name={order.mealIcon} style={{ fontSize: 12, color: "#A3A3A3" }} />
                          <span style={{ fontSize: 9, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em", color: "#3A3A3A" }}>{order.mealType}</span>
                        </div>
                      </td>
                      <td style={{ padding: "20px 24px" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, color: order.statusColor }}>
                          <Icon name={order.statusIcon} style={{ fontSize: 14 }} />
                          <span style={{ fontSize: 9, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em" }}>{order.status}</span>
                        </div>
                      </td>
                      <td style={{ padding: "20px 24px" }}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: "#737373" }}>{order.time}</div>
                      </td>
                      <td style={{ padding: "20px 24px" }}>
                        {order.rating ? (
                          <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
                            {[1,2,3,4,5].map(star => (
                              <Icon key={star} name="star" style={{ fontSize: 14, color: star <= order.rating ? "#F59E0B" : "#E5E5E5" }} />
                            ))}
                          </div>
                        ) : (
                          <span style={{ fontSize: 9, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em", color: "#C4C4C4", fontStyle: "italic" }}>N/A</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div style={{ padding: "16px 24px", background: "#FAFAFA", borderTop: "1px solid #F0F0F0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#C4C4C4" }}>Page 1 of 4</span>
              <div style={{ display: "flex", gap: 8 }}>
                <button style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8, border: "1px solid #E5E5E5", background: "#FFFFFF", cursor: "pointer", color: "#A3A3A3" }}>
                  <Icon name="chevron_left" style={{ fontSize: 18 }} />
                </button>
                <button style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8, background: "#0A0A0A", color: "#FFFFFF", fontSize: 10, fontWeight: 900, border: "none", cursor: "pointer" }}>1</button>
                <button style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8, border: "1px solid #E5E5E5", background: "#FFFFFF", fontSize: 10, fontWeight: 900, color: "#3A3A3A", cursor: "pointer" }}>2</button>
                <button style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8, border: "1px solid #E5E5E5", background: "#FFFFFF", cursor: "pointer", color: "#A3A3A3" }}>
                  <Icon name="chevron_right" style={{ fontSize: 18 }} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #E5E5E5", background: "#FFFFFF", padding: "48px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, alignItems: "start" }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#0A0A0A", marginBottom: 12 }}>AhaarMitra</div>
            <p style={{ fontSize: 10, color: "#A3A3A3", textTransform: "uppercase", letterSpacing: "0.1em", lineHeight: 1.8 }}>The Premium Digital Hearth for Modern Nutrition.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <h4 style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#0A0A0A", marginBottom: 4 }}>Legal</h4>
            {["Privacy Policy", "Terms of Service"].map(l => (
              <a key={l} href="#" style={{ fontSize: 10, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "#A3A3A3", textDecoration: "none" }}>{l}</a>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <h4 style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#0A0A0A", marginBottom: 4 }}>Support</h4>
            {["Contact Support", "Partner with Us"].map(l => (
              <a key={l} href="#" style={{ fontSize: 10, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "#A3A3A3", textDecoration: "none" }}>{l}</a>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-end" }}>
            <div style={{ display: "flex", gap: 16 }}>
              {["brand_awareness", "share", "public"].map(icon => (
                <Icon key={icon} name={icon} style={{ fontSize: 20, color: "#C4C4C4", cursor: "pointer" }} />
              ))}
            </div>
            <div style={{ fontSize: 9, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "#C4C4C4", textAlign: "right" }}>
              © 2024 AhaarMitra Editorial. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
