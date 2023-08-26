import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "redux/post/postApi";
import Background from "components/Interface/Background";
import TagList from "../TagList";
import PostStats from "../PostStats";
import MoreInfo from "../MoreInfo";
import Loader from "components/Interface/Loader";
import findLabelsByValues from "helpers/findLabelsByValues";
import { fishingOptions } from "helpers/dropdownOptions";
import { TitleWrapper, Title, Category, StatsWrapper } from "./Post.styled";

const tags = ["fishing", "sport", "hobby", "sport-fishing"];

const Post: React.FC<{}> = () => {
  const { postId } = useParams();
  const { data } = useGetPostByIdQuery(postId ? postId : "");
  const post = data?.data;

  return post ? (
    <div>
      <Background
        url={post.posterURL}
        gradient="linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))"
        borderRadius="5px"
        height={450}
        shadow={true}
      >
        {postId && <MoreInfo postId={postId} />}
        <TitleWrapper>
          <Title>{post.title}</Title>
          <Category>
            {findLabelsByValues(post.category, fishingOptions)}
          </Category>
        </TitleWrapper>
      </Background>
      <StatsWrapper>
        <p>
          ID: <span>{post._id}</span>
        </p>
        <PostStats
          numberComments={post.statistics.numberComments}
          numberLikes={post.statistics.numberLikes}
          numberViews={post.statistics.numberViews}
          readingTime={post.statistics.readingTime}
        />
      </StatsWrapper>
      <TagList
        tags={tags}
        margin="var(--small-indent) 0"
        background="var(--accent-color)"
        color="var(--white-color)"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error commodi
        similique eos voluptatum cum maxime praesentium, cupiditate accusamus
        earum libero, asperiores sequi possimus doloribus omnis sed dolore
        reiciendis ex temporibus ad pariatur facere eum explicabo obcaecati
        incidunt! Odio doloribus earum aliquid, consequatur totam provident?
        Velit vero ipsa cupiditate consequuntur laudantium eius dolor nam
        possimus, voluptates dolorum blanditiis accusantium magnam consectetur
        repellendus explicabo nostrum praesentium similique iusto optio amet
        tempora tenetur, tempore adipisci. Atque quos dolorem sed fugit deleniti
        natus earum autem voluptatibus dolor expedita excepturi eaque vel,
        itaque optio harum praesentium corporis! Repellendus numquam et delectus
        dolorum iste ratione, magnam laudantium accusantium quis minima suscipit
        voluptate nesciunt sunt possimus, corporis nihil aut id eos animi minus
        velit officiis. Vero voluptatum provident ab fuga, nihil tempore
        consequuntur vitae harum eaque sapiente at iusto, excepturi eum!
        Corrupti aut atque quis nesciunt? Autem doloribus eveniet nemo quod iste
        ipsum quasi, eius libero nostrum ipsa accusamus in, repudiandae
        dignissimos. Voluptates in, totam debitis, ad consectetur magnam cumque
        officiis repudiandae tempora velit temporibus dolorem non dolores atque
        hic eos natus iusto nostrum, odio minus et itaque rerum! Eligendi
        sapiente soluta recusandae qui veritatis officia aliquam modi aperiam
        quos vel dignissimos quod obcaecati ipsam facilis, laudantium quidem
        placeat nisi laboriosam, nulla cum totam magni, quia praesentium?
        Assumenda inventore dolorum consectetur itaque. Voluptas ea dolores cum
        at mollitia illum repellendus, possimus dicta delectus iste hic tempora
        sunt! Voluptate maxime officia earum laboriosam, quisquam quam
        voluptatum a unde non, nostrum voluptatibus aut, placeat consequatur
        quae? Qui labore expedita tenetur. Illum voluptatem est ullam nulla
        eveniet amet molestias iusto sapiente expedita laudantium officiis a
        rem, aspernatur asperiores consequuntur praesentium, eligendi maxime
        libero totam, sunt molestiae perspiciatis. Reprehenderit officia odio
        quas, non animi magni rerum deserunt dolorem molestias magnam reiciendis
        aliquam esse consequatur eligendi, voluptatem quo. Exercitationem
        repellat repellendus optio amet beatae nisi itaque, doloribus minus
        quibusdam odit ad quae sunt reprehenderit doloremque iure deserunt ipsa.
        Tempore praesentium ab sint sapiente magnam rem. Voluptatibus,
        reprehenderit! Distinctio totam non sunt sit enim quod, similique
        voluptates porro odio, sed nam tempora iure delectus corrupti ad ratione
        ipsa eos cum! Quo, optio vitae, animi quae repudiandae odit facilis
        doloremque exercitationem voluptates neque perspiciatis harum esse
        officiis asperiores voluptas? Neque quae officiis blanditiis doloremque
        eos dolor tempore eum laborum sequi fugiat minus corrupti voluptatum
        iure iusto ea iste reprehenderit minima nesciunt quod assumenda,
        doloribus aliquid qui aut natus! Veniam accusamus unde suscipit
        laudantium explicabo labore harum magni tenetur dicta reiciendis
        delectus maiores fugit nam, possimus autem excepturi at culpa modi
        corporis in omnis sint porro accusantium sunt? Labore nostrum harum
        rerum eius nisi facere earum, accusantium veniam magni, facilis minus
        veritatis ratione? Ea aspernatur tempora cum ducimus impedit quis soluta
        doloremque, repellendus mollitia officia magni perferendis ipsa debitis
        quasi minima reiciendis incidunt praesentium, at suscipit repudiandae.
        Eveniet ab optio dolore ut! In accusantium eum incidunt quaerat
        assumenda iste voluptates culpa cumque illo velit aliquam dignissimos
        dolore nisi laborum tempore quo quam perspiciatis dolor, a deleniti?
        Laudantium, ullam. Quos vitae illo nisi doloribus animi quis.
      </p>
    </div>
  ) : (
    <Loader />
  );
};

export default Post;
