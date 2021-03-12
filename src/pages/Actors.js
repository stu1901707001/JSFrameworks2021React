import ActorGridItem from '../components/actor/ActorGridItem';
import ActorListItem from '../components/actor/ActorListItem';
import ActorFilters from '../components/filters/actor/ActorFilters';
import { useSelector, useDispatch } from "react-redux";
import { Button, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faList } from '@fortawesome/free-solid-svg-icons';
import { setListView } from '../redux/actions';


function Actors(props) {

    const actors = useSelector(state => state.actors);
    const isListView = useSelector(state => state.listView);

    const dispatch = useDispatch();

    const getActors = () => {

        if (!actors.length) {
            return <div className="col">
                <Alert color="secondary" className="text-center p-5 mt-3">
                    There are no actors
                </Alert>
            </div>
        }

        if (isListView) {
            const actorList = actors.filter(a => a.profile_path != null).map(actor => {
                return <ActorListItem
                    key={actor.id}
                    id={actor.id}
                    name={actor.name}
                    known_for_department={actor.known_for_department}
                    profile_path={actor.profile_path}
                />
            })
            return actorList;
        }

        const actorGridList = actors.filter(a => a.profile_path != null).map(actor => {
            return <ActorGridItem
                key={actor.id}
                id={actor.id}
                name={actor.name}
                known_for_department={actor.known_for_department}
                profile_path={actor.profile_path}
            />
        })
        return actorGridList;
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
            <ActorFilters />
            <div className="row">
                <div className="col">
                    <div className="d-flex justify-content-end pb-1">
                        <Button color="light" onClick={toggleListView}>
                            <FontAwesomeIcon icon={getListIcon()} />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="row">
                {getActors()}
            </div>
        </div>
    </>
}
export default Actors;