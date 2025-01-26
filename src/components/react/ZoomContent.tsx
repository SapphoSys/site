const ZoomContent = (props) => {
  console.log(props.img.props);
  return (
    <figure className="[&_img]:bg-default text-center [&_img]:rounded-md [&_img]:border">
      {props.img}

      <figcaption className="pt-14 italic text-ctp-text">{props.img.props.alt}</figcaption>
    </figure>
  );
};

export default ZoomContent;
