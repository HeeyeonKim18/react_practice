import { useNavigate } from 'react-router-dom';

export default function ActionButtons({ questionsLength, step }) {
  const isLast = step === Number(questionsLength - 1);
  const navigate = useNavigate();
  return (
    <div>
      {step === 0 || (
        <button
          onClick={() => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </button>
      )}
      {isLast ? (
        <button
          onClick={() => {
            navigate(`/done`);
          }}
        >
          {' '}
          제출{' '}
        </button>
      ) : (
        <button
          onClick={() => {
            navigate(`${step + 1}`);
          }}
        >
          {' '}
          다음{' '}
        </button>
      )}
    </div>
  );
}
