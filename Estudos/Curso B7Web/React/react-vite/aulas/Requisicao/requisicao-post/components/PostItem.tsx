import { Post } from '../Post'

type Props = {
    data: Post;
}

export const PostItem = ({ data }: Props) => {
    return(
        <div className="my-4">
            <h4 className="font-bold">{data.title}</h4>
            <small>#{data.id} - {data.userId}</small>
            <p>{data.body}</p>
        </div>
    )
}