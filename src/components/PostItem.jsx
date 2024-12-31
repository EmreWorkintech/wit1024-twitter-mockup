/* eslint-disable react/prop-types */
import { formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";

function PostItem({ item }) {
  const postDate = formatDistanceToNow(item.createdAt, {
    addSuffix: true,
    locale: tr,
  });
  return (
    <div className="flex items-start gap-4 border-t-2 border-slate-300 p-6">
      <img
        className="rounded-full w-16"
        src={`https://picsum.photos/200?${item.id}`}
      />
      <div className="flex-grow">
        <div>
          <span className="font-bold">{item.name}</span>
          <span className="text-slate-500">{`@${item.name} - ${postDate}`}</span>
        </div>
        <div>{item.desc}</div>
      </div>
      <i className="fa-solid fa-ellipsis fa-2xl"></i>
    </div>
  );
}

export default PostItem;
