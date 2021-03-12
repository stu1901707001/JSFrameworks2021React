import { FormGroup, Label, Input } from 'reactstrap';
import { setSelectedRegion } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const SelectRegion = (props) => {
    const selectedRegion = useSelector(state => state.selectedFilters.selectedRegion);
    const dispatch = useDispatch();

    const changeSelectedRegion = (event) => {
        dispatch(setSelectedRegion(event.target.value));
    }
    return (
        <FormGroup>
            <Label for="select-region">Region from</Label>
            <Input
                onChange={changeSelectedRegion}
                value={selectedRegion}
                type="select"
                name="select"
                id="select-region"
            >
                <option value="uk">United kingdom</option>
                <option value="eu">Europe</option>
                <option value="de">Germany</option>
                <option value="ru">Russia</option>
                <option value="cn">China</option>
                <option value="br">Brasil</option>
                <option value="us">USA</option>
                <option value="ca">Canada</option>
            </Input>
        </FormGroup>
    );
}

export default SelectRegion;


