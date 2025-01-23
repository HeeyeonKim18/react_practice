import './MemoContainer.css';

export default function MemoContainer({ memo, setMemo }) {
  if (memo === undefined) {
    return (
      <div>
        <h1>저장된 메모가 없습니다.</h1>
        <h2>새로운 메모를 추가해주세요.</h2>
      </div>
    );
  }
  return (
    <div className="MemoContainer">
      <input
        type="text"
        className="MemoContainer_title"
        value={memo.title}
        onChange={(e) => {
          setMemo({
            ...memo,
            title: e.target.value,
            updatedAt: new Date().getTime(),
          });
        }}
      />
      <textarea
        className="MemoContainer_content"
        value={memo.content}
        onChange={(e) => {
          setMemo({
            ...memo,
            content: e.target.value,
            updatedAt: new Date().getTime(),
          });
        }}
      ></textarea>
    </div>
  );
}
