import React, { useEffect } from 'react';
import {
    useParams
} from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { getActor, setActor } from '../redux/actions';
import { Link } from 'react-router-dom';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
} from 'reactstrap';
import constants from '../constants';

function ActorDetails(props) {

    const actor = useSelector(state => state.actor);
    const dispatch = useDispatch();
    const { id } = useParams();

    // Equivalent to componentDidMount
    useEffect(() => {
        dispatch(getActor({
            actorId: id
        }))

        //Equivalent to componentWillUnmount
        return () => {
            dispatch(setActor({}))
        }
    }, [])

    const getActorImage = () => {
        if (!actor.profile_path) {
            return null;
        }
        return <CardImg
            top
            width="100%"
            src={`${constants.posterPath}${actor.profile_path}`}
        />
    }
    return <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <Card className="mb-3">
                        <div className="row">
                            <div className="col-3">
                                {getActorImage()}
                            </div>
                            <div className="col">
                                <CardBody>
                                    <CardTitle tag="h5" className="text-truncate">{actor.name}</CardTitle>
                                    <CardSubtitle>{actor.known_for_department}</CardSubtitle>
                                    <CardText className="actor-description">{actor.biography}</CardText>
                                    <Link to={`/actors`} className="btn btn-secondary">
                                        Go Back
                  </Link>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>

    </>
}
export default ActorDetails;