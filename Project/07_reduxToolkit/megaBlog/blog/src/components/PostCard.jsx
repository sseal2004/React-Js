import React from 'react';
import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';

const PostCard = React.forwardRef(({ $id, title, featuredImage }, ref) => {
    return (
        <Link to={`/post/${$id}`} ref={ref}>
            <div className="w-full bg-white p-4 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-full justify-center mb-4">
                    <img
                        src={appwriteService.getFilePreview(featuredImage, 400, 300)}
                        alt={title}
                        className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                </div>
                <h2 className="font-bold text-xl text-gray-800">{title}</h2>
            </div>
        </Link>
    );
});

export default PostCard;
