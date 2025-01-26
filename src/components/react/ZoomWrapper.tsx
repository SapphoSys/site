import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import ZoomContent from './ZoomContent';

export default function ZoomWrapper(props) {
  return (
    <Zoom ZoomContent={ZoomContent}>
      <figure>
        {props.image}

        {props.alt}
      </figure>
    </Zoom>
  );
}
