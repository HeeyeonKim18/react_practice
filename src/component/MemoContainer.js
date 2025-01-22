import './css/MemoContainer.css';

export default function MemoContainer({ memo, setMemo }) {
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
