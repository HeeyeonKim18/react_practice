export default function SideBarFooter({ onClick }) {
  return (
    <div className="SideBarFooter">
      <button className="inputMemoButton" onClick={onClick}>
        +
      </button>
    </div>
  );
}
