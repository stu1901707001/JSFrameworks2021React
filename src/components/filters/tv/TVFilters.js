import React, { useEffect } from 'react';
import SelectYear from './SelectYear';
import SelectGenres from './SelectGenres';
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getTVs } from '../../../redux/actions';

const TVFilters = (props) => {

    const selectedYear = useSelector(state => state.selectedFilters.selectedYear);
    const selectedGenres = useSelector(state => state.selectedFilters.selectedGenres);

    const dispatch = useDispatch();

    const loadTVList = () => {
        dispatch(getTVs({
            "first_air_date.gte": selectedYear,
            page: 1,
            with_genres: selectedGenres.toString(),
        }));
    }

    useEffect(() => {
        loadTVList();
    }, []);

    return (
        <>
            <div className="row">
                <div className="col-md-2">
                    <SelectYear />
                </div>
                <div className="col-md-8">
                    <SelectGenres />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <Button color="dark" onClick={loadTVList}>Filter</Button>
                </div>
            </div>
        </>
    );
}

export default TVFilters;