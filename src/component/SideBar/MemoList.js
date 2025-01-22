import MemoItem from './MemoItem';

export default function MemoList({
  memo,
  setSelectedMemoIndex,
  selectedMemoIndex,
}) {
  return (
    <div className="memoList">
      {memo.map((m, idx) => (
        <MemoItem
          key={idx}
          onClick={() => {
            setSelectedMemoIndex(idx);
          }}
          isSelected={idx === selectedMemoIndex}
        >
          {m.title}
        </MemoItem>
      ))}
    </div>
  );
}
