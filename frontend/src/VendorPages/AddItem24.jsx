import { Link } from "react-router-dom";
export default function AddItem24() {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-6 z-50">
      {/* CARD */}
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* HEADER */}
        <div className="p-8 border-b border-gray-100 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight uppercase">
              Add New <span className="text-blue-600">Menu Item</span>
            </h2>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">
              Enter the name of your dish
            </p>
          </div>
          <Link to="/v7" className="text-gray-400 hover:text-gray-700">
            ✕
          </Link>
        </div>

        {/* BODY */}
        <div className="p-8 space-y-6">
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Item Name
            </label>

            <input
              type="text"
              placeholder="e.g., Kadai Paneer, Spring Rolls"
              className="w-full border border-gray-200 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder-gray-300"
              autoFocus
            />
          </div>
        </div>

        {/* FOOTER */}
        <div className="p-8 bg-gray-50 flex gap-4">
          <Link
            to="/v7"
            className="flex-1 py-4 rounded-2xl border border-gray-200 text-xs font-bold uppercase tracking-widest text-gray-500 hover:bg-gray-100 transition text-center"
          >
            Cancel
          </Link>

          <button className="flex-[2] py-4 rounded-2xl bg-blue-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-blue-500 shadow-lg transition">
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
}
