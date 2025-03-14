export function Btn_primary({ text, color = "green", size }) {
  return (
    <button
      style={{
        color: color,
        fontSize: size,
      }}
    >
      {text}
    </button>
  );
}
