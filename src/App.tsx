import CreatePostForm from "components/Forms/CreatePostForm";
import AddButton from "components/Interface/AddButton";
import Modal from "components/Modal";
import ShortPost from "components/Blog/ShortPost";
import useModal from "hooks/useModal";

const posterUrl =
  "https://cdn.pixabay.com/photo/2019/05/03/13/59/fisherman-4175917_1280.jpg";
const tags = ["fish", "fishing", "sea", "spining", "float", "fishman"];
const text =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit illo unde, voluptatem repellat, ullam voluptate a officiis dignissimos, magnam est explicabo doloribus sunt quasi rerum iste consequatur? Perferendis, exercitationem.";
const statistacs = {
  readingTime: 23,
  numberLikes: 78,
  numberViews: 452,
  numberComments: 12,
};

const App: React.FC<{}> = () => {
  const { checkQueryParam, openModal, modalsName } = useModal();

  return (
    <>
      <AddButton
        width="100%"
        height={120}
        margin="0 0 var(--medium-indent) 0"
        handleClick={() => openModal(modalsName.CREATE_POST)}
      />
      <ShortPost
        posterUrl={posterUrl}
        title="My first post for the fishing"
        text={text}
        category={["Fishing on sea"]}
        statistics={statistacs}
        tags={tags}
        updatedAt="2023-08-01 16:07"
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
