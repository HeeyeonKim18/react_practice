export default function MemoItem({
  children,
  isSelected,
  onClickItem,
  onClickDelete,
}) {
  return (
    <div
      className={'MemoItem' + (isSelected ? ' selected' : '')}
      onClick={onClickItem}
    >
      {children}
      <button className="delBtn" onClick={onClickDelete}>
        X
      </button>
    </div>
  );
}
