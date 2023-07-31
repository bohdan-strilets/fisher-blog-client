import CreatePostForm from "components/Forms/CreatePostForm";
import AddButton from "components/Interface/AddButton";

const App: React.FC<{}> = () => {
  return (
    <>
      <AddButton width="100%" height={120} margin="0 0 var(--small-indent) 0" />
      <CreatePostForm />
    </>
  );
};

export default App;
