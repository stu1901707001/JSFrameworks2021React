import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import constants from '../../constants';

const TVListItem = props => {

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
    <div className="col-12">
      <Card className="mb-3">
        <div className="row">
          <div className="col-3">
            {getTVItemImage()}
          </div>
          <div className="col">
            <CardBody>
              <CardTitle tag="h5" className="text-truncate">{props.name}</CardTitle>
              <CardText className="tv-description">{props.overview}</CardText>
              <Link to={`/tv/${props.id}`} className="btn btn-secondary float-right m-3">
                More...
                  </Link>
            </CardBody>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TVListItem;
