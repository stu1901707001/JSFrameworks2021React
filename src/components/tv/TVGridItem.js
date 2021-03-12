import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import constants from '../../constants';

const TVGridItem = props => {

  const getTVItemImage = () => {
    if (!props.poster_path) {
      return null;
    }
    return <CardImg
      top
      width="100%"
      src={`${constants.posterPath}${props.poster_path}`}
    />
  }

  return (
    <div className="col-md-3">
      <Card className="mb-3">
        {getTVItemImage()}
        <CardBody>
          <CardTitle tag="h5" className="text-truncate">{props.name}</CardTitle>
          <CardText className="tv-description">{props.overview}</CardText>
          <Link to={`/tv/${props.id}`} className="btn btn-secondary">
            More ...
            </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default TVGridItem;
