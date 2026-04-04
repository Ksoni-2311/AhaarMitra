export default function VendorCard({ vendor }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white rounded-[1rem] overflow-hidden flex flex-col border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group w-full max-w-[300px]">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={vendor.img}
          alt={vendor.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          {vendor.badges?.map((b) => (
            <span
              key={b.label}
              className={`${b.color} px-2.5 py-1 rounded-full text-[10px] font-black uppercase`}
            >
              {b.label}
            </span>
          ))}
        </div>

        {/* Favourite */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur border border-gray-200 flex items-center justify-center"
        >
          <span
            className={`material-symbols-outlined text-lg ${
              liked ? "text-red-500" : "text-gray-400"
            }`}
            style={liked ? { fontVariationSettings: "'FILL' 1" } : {}}
          >
            favorite
          </span>
        </button>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Name + Rating */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-black text-black leading-tight">
            {vendor.name}
          </h3>

          <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
            <span className="material-symbols-outlined text-amber-500 text-sm">
              star
            </span>
            <span className="text-xs font-bold text-amber-600">
              {vendor.rating}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 border-y border-gray-100 py-4 mb-4">
          <div>
            <p className="text-[10px] font-bold uppercase text-gray-400">
              Price / Meal
            </p>
            <p className="text-lg font-black text-black">{vendor.price}</p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase text-gray-400">
              Active Now
            </p>
            <p className="text-lg font-black text-amber-500">{vendor.subs}</p>
          </div>
        </div>

        {/* Button */}
        <Link to="/1">
          <button className="w-full bg-black text-white font-bold py-3 rounded-xl hover:bg-amber-500 transition-all text-xs uppercase tracking-widest">
            View Meal Plans
          </button>
        </Link>
      </div>
    </div>
  );
}