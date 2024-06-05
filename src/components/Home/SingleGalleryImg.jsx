// eslint-disable-next-line react/prop-types
export default function SingleGalleryImg({ jersey }) {
  // eslint-disable-next-line react/prop-types
  const { img_url } = jersey;
  return (
    <div>
      <div className="card bg-base-100">
        <figure>
          <img
            src={img_url}
            alt="Jersey"
            className="rounded-xl w-[300] h-[300px]"
          />
        </figure>
      </div>
    </div>
  );
}
