export default function TextInput({ label, type }) {
  return (
    <label className="flex flex-col text-slate-600 capitalize">
      {label}
      <input
        type={type}
        className="p-3 outline outline-1 outline-blue-500 rounded-sm"
      />
    </label>
  );
}
