import "./PageContainer.css";

export default function PageContainer({ children, pt, pl, pr, minH }) {
  return (
    <div
      className={
        (pt ? `my-pt-${pt}` : "my-pt-28") +
        (pl ? ` my-pl-${pl}` : " my-pl-10") +
        (pr ? ` my-pr-${pr}` : " my-pr-10")
      }
    >
      <div
        className={
          "bg-white rounded-lg shadow-lg p-5" + (minH ? ` my-h-${minH}` : "")
        }
      >
        {children}
      </div>
    </div>
  );
}
