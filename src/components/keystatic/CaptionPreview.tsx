interface ImageData {
  data: Uint8Array;
  extension: string;
  filename: string;
}

interface Props {
  value: {
    src: {
      discriminant: boolean;
      value: ImageData | string | null;
    };
    alt: string;
    caption: string;
  };
}

const getImageUrl = (src: Props['value']['src']['value']) => {
  if (typeof src === 'string') {
    return src;
  }

  if (src?.data) {
    return URL.createObjectURL(new Blob([src.data.buffer]));
  }

  return undefined;
};

const Preview = (props: Props) => {
  const src = getImageUrl(props.value.src.value);

  return (
    <div>
      <img src={src} alt={props.value.alt} />
      <figcaption style={{ fontStyle: 'italic' }}>Caption: {props.value.caption}</figcaption>
    </div>
  );
};

export default Preview;
