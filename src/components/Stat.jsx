export default function StatCard({ title, value, color = "text-white" }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
      <p className="text-sm text-neutral-400 mb-1">{title}</p>
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
    </div>
  );
}
