/** 확인,취소 버튼이 표시되는 모달입니다. */
import useModalStore from "@/hooks/modalStore";

interface ModalProps {
  content: string;
  clickEvent?: () => void;
}

const AlertModal: React.FC<ModalProps> = ({ content, clickEvent }) => {
  const { close } = useModalStore();

  const onClickConfirmBtn = () => {
    if (clickEvent) {
      clickEvent();
      return;
    }
    close();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 sm:px-10 md:px-14 lg:px-20 rounded-lg shadow-lg text-center">
        <h3 className="font-bold text-xl md:text-xl lg:text-2xl mb-4">알림</h3>
        <p className="text-xl sm:text-base md:text-lg lg:text-xl py-4">
          {content}
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <button
            className="btn bg-gray-700 px-6 py-2 rounded-md text-white"
            onClick={onClickConfirmBtn}
          >
            확인
          </button>
          <button
            className="btn px-6 py-2 rounded-md bg-gray-200"
            onClick={close}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
