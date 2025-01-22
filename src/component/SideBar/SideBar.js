import SideBarFooter from './SideBarFooter';
import SideBarHeader from './SideBarHeader';
import '../css/SideBar.css';
import MemoList from './MemoList';

export default function SideBar({
  memo,
  setSelectedMemoIndex,
  selectedMemoIndex,
}) {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MemoList
        memo={memo}
        setSelectedMemoIndex={setSelectedMemoIndex}
        selectedMemoIndex={selectedMemoIndex}
      />
      <SideBarFooter />
    </div>
  );
}
