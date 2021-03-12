import TVGridItem from '../components/tv/TVGridItem';
import TVListItem from '../components/tv/TVListItem';
import TVFilters from '../components/filters/tv/TVFilters';
import { useSelector, useDispatch } from "react-redux";
import { Button, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faList } from '@fortawesome/free-solid-svg-icons';
import { setListView } from '../redux/actions';


function TVList(props) {

    const tvList_ = useSelector(state => state.tvList);
    const isListView = useSelector(state => state.listView);

    const dispatch = useDispatch();

    const getTVList = () => {

        if (!tvList_.length) {
            return <div className="col">
                <Alert color="secondary" className="text-center p-5 mt-3">
                    There are no tv items to display
                </Alert>
            </div>
        }

        if (isListView) {
            const tvList = tvList_.map(tv => {
                return <TVListItem
                    key={tv.id}
                    id={tv.id}
                    name={tv.name}
                    overview={tv.overview}
                    poster_path={tv.poster_path}
                />
            })
            return tvList;
        }

        const tvGridList = tvList_.map(tv => {
            return <TVGridItem
                key={tv.id}
                id={tv.id}
                name={tv.name}
                overview={tv.overview}
                poster_path={tv.poster_path}
            />
        })
        return tvGridList;
    }

    const toggleListView = () => {
        dispatch(setListView(!isListView));
    }
    const getListIcon = () => {
        if (isListView) {
            return faTh
        }
        return faList
    }
    return <>
        <div className="container">
            <TVFilters />
            <div className="row">
                <div className="col">
                    <div className="d-flex justify-content-end pb-1 mb-3">
                        <Button color="light" onClick={toggleListView}>
                            <FontAwesomeIcon icon={getListIcon()} />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="row">
                {getTVList()}
            </div>
        </div>
    </>
}
export default TVList;