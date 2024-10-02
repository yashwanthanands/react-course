export default function TabButton({ children }) {
  function handleClick() {
    console.log("Hello Yash. You have clicked ", {children})
  }
  return (
  <li>
    <button onClick={handleClick}>{children}</button>
  </li>
);
}