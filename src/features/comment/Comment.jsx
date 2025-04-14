import './comment.scss';

export const Comment = ({ star, name, title }) => {
  return (
    <div className="comment">
      <img src={star} alt="" />
      <h2>{title}</h2>
      <b>{name}</b>
    </div>
  )
}
