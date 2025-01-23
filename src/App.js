import { useState } from 'react';
import './App.css';
import MemoContainer from './component/MemoContainer/MemoContainer';
import SideBar from './component/SideBar/SideBar';

function App() {
  const [memos, setMemos] = useState([
    {
      title: 'Memo1',
      content: 'This is Memo 1',
      createdAt: 1737527945083,
      updatedAt: 1737527945083,
    },
    {
      title: 'Memo2',
      content: 'This is Memo 2',
      createdAt: 1737527955926,
      updatedAt: 1737527955926,
    },
  ]);

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = (newMemo) => {
    const newMemos = [...memos];
    newMemos[selectedMemoIndex] = newMemo;
    setMemos(newMemos);
  };

  const addMemo = () => {
    const now = new Date().getTime();
    setMemos([
      ...memos,
      {
        title: 'Untitled',
        content: '',
        createdAt: now,
        updatedAt: now,
      },
    ]);
    setSelectedMemoIndex(memos.length);
  };

  const deleteMemo = (idx) => {
    const newMemos = [...memos];
    newMemos.splice(idx, 1);
    setMemos(newMemos);
    if (idx === selectedMemoIndex) {
      setSelectedMemoIndex(0);
    }
  };

  return (
    <div className="App">
      <SideBar
        memo={memos}
        setSelectedMemoIndex={setSelectedMemoIndex}
        selectedMemoIndex={selectedMemoIndex}
        addMemo={addMemo}
        deleteMemo={deleteMemo}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
