import React, { useEffect } from 'react';
import {
    useParams
} from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { getTV, setTV } from '../redux/actions';
import { Link } from 'react-router-dom';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle
} from 'reactstrap';
import constants from '../constants';

function TVDetails(props) {

    const tv = useSelector(state => state.tv);
    const dispatch = useDispatch();
    const { id } = useParams();

    // Equivalent to componentDidMount
    useEffect(() => {
        dispatch(getTV({
            tvId: id
        }))

        //Equivalent to componentWillUnmount
        return () => {
            dispatch(setTV({}))
        }
    }, [])

    const getTVItemImage = () => {
        if (!tv.poster_path) {
            return null;
        }
        return <CardImg
            top
            width="100%"
            src={`${constants.largePosterPath}${tv.poster_path}`}
        />
    }
    return <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <Card className="mb-3">
                        <div className="row">
                            <div className="col-4">
                                {getTVItemImage()}
                            </div>
                            <div className="col">
                                <CardBody>
                                    <CardTitle tag="h2" className="text-truncate">{tv.name}</CardTitle>
                                    <CardSubtitle>Start date: {tv.first_air_date}</CardSubtitle>
                                    <CardSubtitle>Rating: {tv.vote_average} ({tv.vote_count} votes)</CardSubtitle>
                                    <CardText className="tv-description">{tv.overview}</CardText>
                                    <Link to={`/`} className="btn btn-secondary">
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
export default TVDetails;