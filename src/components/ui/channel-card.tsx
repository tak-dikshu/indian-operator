import { Button } from "./button"

interface ChannelCardProps {
  type: "youtube" | "telegram" | "whatsapp" | "instagram";
  label: string;
  memberCount: string;
  url: string;
  isPrimary?: boolean;
}

export function ChannelCard({ type, label, memberCount, url }: ChannelCardProps) {
  const iconMap = {
    youtube: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><path d="M2.5 7.1c0-1.7 1.4-3.1 3.1-3.1h12.8c1.7 0 3.1 1.4 3.1 3.1v9.8c0 1.7-1.4 3.1-3.1-3.1H5.6c-1.7 0-3.1-1.4-3.1-3.1V7.1z"/><path d="m10 15 5-3-5-3v6z"/></svg>,
    telegram: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>,
    whatsapp: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
    instagram: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  };

  const styleMap = {
    youtube: {
      bg: "bg-red-500/10 border-red-500/20",
      btn: "bg-red-600 hover:bg-red-500 text-white shadow-[0_0_30px_rgba(239,68,68,0.2)]",
      glow: "from-red-500/20 via-transparent to-transparent",
      text: "Subscribe Now"
    },
    telegram: {
      bg: "bg-blue-500/10 border-blue-500/20",
      btn: "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_30px_rgba(59,130,246,0.2)]",
      glow: "from-blue-500/20 via-transparent to-transparent",
      text: "Join Now"
    },
    whatsapp: {
      bg: "bg-green-500/10 border-green-500/20",
      btn: "bg-green-600 hover:bg-green-500 text-white shadow-[0_0_30px_rgba(34,197,94,0.2)]",
      glow: "from-green-500/20 via-transparent to-transparent",
      text: "Join Now"
    },
    instagram: {
      bg: "bg-pink-500/10 border-pink-500/20",
      btn: "bg-pink-600 hover:bg-pink-500 text-white shadow-[0_0_30px_rgba(236,72,153,0.2)]",
      glow: "from-pink-500/20 via-transparent to-transparent",
      text: "Follow Now"
    }
  };

  const config = styleMap[type];

  return (
    <div className={`p-8 rounded-3xl flex flex-col items-center text-center group bg-transparent relative h-full w-full justify-center min-h-[300px] transition-transform duration-500 hover:-translate-y-2`}>
      {/* Decorative gradient overlay based on brand color */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b ${config.glow} rounded-3xl pointer-events-none`} />
      
      <div className={`w-20 h-20 ${config.bg} flex items-center justify-center rounded-2xl mb-6 border transition-transform duration-500 group-hover:scale-110 relative z-10`}>
        {iconMap[type]}
      </div>
      <h3 className="text-2xl font-display font-bold uppercase mb-2 text-white relative z-10">{label}</h3>
      <p className="text-emerald-400 font-medium mb-8 text-lg relative z-10">{memberCount}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="w-full mt-auto relative z-10 transition-transform duration-300 hover:scale-105 active:scale-95 block">
        <Button 
          className={`w-full text-lg h-14 rounded-xl transition-all ${config.btn}`}
        >
          {config.text}
        </Button>
      </a>
    </div>
  );
}
