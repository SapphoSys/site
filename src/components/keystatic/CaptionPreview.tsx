interface ImageData {
  data: Uint8Array;
  extension: string;
  filename: string;
}

interface Props {
  fields: {
    src: {
      value: ImageData | string | null;
    };
    alt: {
      value: string;
    };
    caption: {
      value: string;
    };
  };
}

function getImageUrl(src: ImageData | string | null): string {
  if (typeof src === 'string') {
    return src;
  } else if (src?.data) {
    return URL.createObjectURL(new Blob([src.data.buffer]));
  }
  return '';
}

export default function Preview(props: Props) {
  const src = getImageUrl(props.fields.src.value);

  return (
    <div>
      <img src={src} alt={props.fields.alt.value} />
      <figcaption style={{ fontStyle: 'italic' }}>Caption: {props.fields.caption.value}</figcaption>
    </div>
  );
}
