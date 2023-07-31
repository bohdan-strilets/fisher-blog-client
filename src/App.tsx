import CreatePostForm from "components/Forms/CreatePostForm";
import AddButton from "components/Interface/AddButton";
import Modal from "components/Modal";
import useModal from "hooks/useModal";

const App: React.FC<{}> = () => {
  const { checkQueryParam, openModal, modalsName } = useModal();

  return (
    <>
      <AddButton
        width="100%"
        height={120}
        margin="0 0 var(--small-indent) 0"
        handleClick={() => openModal(modalsName.CREATE_POST)}
      />

      {checkQueryParam(modalsName.CREATE_POST) && (
        <Modal title="Create a new post">
          <CreatePostForm />
        </Modal>
      )}
    </>
  );
};

export default App;
