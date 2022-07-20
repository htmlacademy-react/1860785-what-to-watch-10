import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type AddReviewProps = {
  id: number;
};

function AddReview({id}: AddReviewProps): JSX.Element {
  return (
    <Link to={`${AppRoute.Films}${id}${AppRoute.Review}`} className="btn film-card__button">Add review</Link>
  );
}

export default AddReview;
