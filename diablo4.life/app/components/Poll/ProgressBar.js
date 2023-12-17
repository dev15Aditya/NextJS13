export default function ProgressBar({ isChecked }) {
  const progressBarColor = isChecked ? '#cb4848' : '#5a657a';

  return (
    <div className="w-full bg-[#252630] rounded-sm h-4">
      <div
        class="h-4 rounded-sm"
        style={{ width: '45%', backgroundColor: progressBarColor }}
      ></div>
    </div>
  );
}
