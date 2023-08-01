import { TitleProps } from "types/TitleProps";
import { H1, H2, H3, H4, H5 } from "./Title.styled";

const Title: React.FC<TitleProps> = ({
  type,
  title,
  margin,
  background,
  fontSize,
}) => {
  switch (type) {
    case "h2":
      return (
        <H2 margin={margin} background={background} fontSize={fontSize}>
          {title}
        </H2>
      );

    case "h3":
      return (
        <H3 margin={margin} background={background} fontSize={fontSize}>
          {title}
        </H3>
      );

    case "h4":
      return (
        <H4 margin={margin} background={background} fontSize={fontSize}>
          {title}
        </H4>
      );

    case "h5":
      return (
        <H5 margin={margin} background={background} fontSize={fontSize}>
          {title}
        </H5>
      );

    default:
      return (
        <H1 margin={margin} background={background} fontSize={fontSize}>
          {title}
        </H1>
      );
  }
};

export default Title;
