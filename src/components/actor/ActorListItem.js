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

const ActorListItem = props => {

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
    <div className="col-12">
      <Card className="mb-3">
        <div className="row">
          <div className="col-3">
            {getActorImage()}
          </div>
          <div className="col">
            <CardBody>
              <CardTitle tag="h5" className="text-truncate">{props.name}</CardTitle>
              <CardText className="actor-description">{props.known_for_department}</CardText>
              <Link to={`/actor/${props.id}`} className="btn btn-secondary">
                Actor details
                  </Link>
            </CardBody>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ActorListItem;
