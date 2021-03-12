import React, { useEffect } from 'react';
import SelectRegion from './SelectRegion';
import SearchPhrase from './SearchPhrase';
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getActors } from '../../../redux/actions';

const ActorFilters = (props) => {

    const selectedRegion = useSelector(state => state.selectedActorFilters.selectedRegion);
    const searchPhrase = useSelector(state => state.selectedActorFilters.searchPhrase);

    const dispatch = useDispatch();

    const loadActors = () => {
        dispatch(getActors({
            query: searchPhrase,
            page: 1,
            region: selectedRegion,
        }));
    }

    useEffect(() => {
        loadActors();
    }, []);

    return (
        <>
            <div className="row">
                <div className="col-md-4">
                    <SearchPhrase />
                </div>
                <div className="col-md-4">
                    <SelectRegion />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <Button color="primary" onClick={loadActors}>Search</Button>
                </div>
            </div>
        </>
    );
}

export default ActorFilters;