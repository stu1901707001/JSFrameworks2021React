import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import constants from '../../constants';

const ActorGridItem = props => {

  const getActorImage = () => {
    if (!props.profile_path) {
      return null;
    }
    return <CardImg
      top
      width="100%"
      src={`${constants.posterPath}${props.profile_path}`}
    />
  }

  return (
    <div className="col-md-3">
      <Card className="mb-3">
        {getActorImage()}
        <CardBody>
          <CardTitle tag="h5" className="text-truncate">{props.name}</CardTitle>
          <CardText className="actor-description">{props.known_for_department}</CardText>
          <Link to={`/actor/${props.id}`} className="btn btn-secondary">
            Actor details
            </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default ActorGridItem;
