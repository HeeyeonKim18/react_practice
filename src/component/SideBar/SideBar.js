import SideBarFooter from './SideBarFooter';
import SideBarHeader from './SideBarHeader';
import './SideBar.css';
import MemoList from './MemoList';

export default function SideBar({
  memo,
  setSelectedMemoIndex,
  selectedMemoIndex,
  addMemo,
  deleteMemo,
}) {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MemoList
        memo={memo}
        setSelectedMemoIndex={setSelectedMemoIndex}
        selectedMemoIndex={selectedMemoIndex}
        deleteMemo={deleteMemo}
      />
      <SideBarFooter onClick={addMemo} />
    </div>
  );
}
