import { FormGroup, Label, Input } from 'reactstrap';
import { setSelectedYear } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const SelectYear = (props) => {

    const selectedYear = useSelector(state => state.selectedFilters.selectedYear);
    const dispatch = useDispatch();

    const changeSelectedYear = (event) => {
        dispatch(setSelectedYear(event.target.value));
    }
    return (
        <FormGroup>
            <Label for="select-year">Year from</Label>
            <Input
                onChange={changeSelectedYear}
                value={selectedYear}
                type="select"
                name="select"
                id="select-year"
            >
                <option value="2021-01-01">2021</option>
                <option value="2020-01-01">2020</option>
                <option value="2019-01-01">2019</option>
                <option value="2018-01-01">2018</option>
                <option value="2017-01-01">2017</option>
                <option value="2016-01-01">2016</option>
                <option value="2015-01-01">2015</option>
                <option value="2014-01-01">2014</option>
            </Input>
        </FormGroup>
    );
}

export default SelectYear;