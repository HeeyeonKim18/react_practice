import MemoItem from './MemoItem';

export default function MemoList({
  memo,
  setSelectedMemoIndex,
  selectedMemoIndex,
  deleteMemo,
}) {
  return (
    <div className="memoList">
      {memo.map((m, idx) => (
        <MemoItem
          key={idx}
          onClickItem={() => {
            setSelectedMemoIndex(idx);
          }}
          onClickDelete={(e) => {
            deleteMemo(idx);
            e.preventDefault();
            e.stopPropagation();
          }}
          isSelected={idx === selectedMemoIndex}
        >
          {m.title}
        </MemoItem>
      ))}
    </div>
  );
}
