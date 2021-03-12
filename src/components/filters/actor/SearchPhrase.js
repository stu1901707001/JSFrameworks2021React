import { FormGroup, Label, Input } from 'reactstrap';
import { setSearchPhrase } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const SearchPhrase = (props) => {

    const selectedSearchPhrase = useSelector(state => state.selectedActorFilters.searchPhrase);
    const dispatch = useDispatch();

    const changeSearchPhrase = (event) => {
        dispatch(setSearchPhrase(event.target.value));
    }

    return (
        <FormGroup>
            <Label for="input-search-phrase">Search by</Label>
            <Input
                onChange={changeSearchPhrase}
                value={selectedSearchPhrase}
                type="text"
                name="input-search-phrase"
                id="input-search-phrase"
            >
            </Input>
        </FormGroup>
    );
}

export default SearchPhrase;