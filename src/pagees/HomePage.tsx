import CreatePostForm from "components/Forms/CreatePostForm";
import AddButton from "components/Interface/AddButton";
import Modal from "components/Modal";
import ListPosts from "components/Blog/ListPosts";
import Greetings from "components/Greetings/Greetings";
import RepeatConfirmEmailForm from "components/Forms/RepeatConfirmEmailForm/RepeatConfirmEmailForm";
import { posts } from "components/Blog/ListPosts/posts";
import useModal from "hooks/useModal";
import { useAppSelector } from "hooks/useAppSelector";
import { getUser } from "redux/user/userSelectors";

const HomePage: React.FC<{}> = () => {
  const user = useAppSelector(getUser);
  const { checkQueryParam, openModal, modalsName } = useModal();

  return (
    <>
      <AddButton
        width="100%"
        height={120}
        margin="0 0 var(--medium-indent) 0"
        handleClick={() => openModal(modalsName.CREATE_POST)}
      />
      <ListPosts posts={posts} />

      {checkQueryParam(modalsName.CREATE_POST) && (
        <Modal title="Create a new post">
          <CreatePostForm />
        </Modal>
      )}
      {checkQueryParam(modalsName.GREETINGS) && (
        <Modal title={`Welcome ${user?.firstName} ${user?.lastName}`}>
          <Greetings />
        </Modal>
      )}
      {checkQueryParam(modalsName.REPEAT_CONFIRM_EMAIL) && (
        <Modal title="Send activation email again">
          <RepeatConfirmEmailForm />
        </Modal>
      )}
    </>
  );
};

export default HomePage;
