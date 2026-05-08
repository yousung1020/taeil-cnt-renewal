import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Post } from '../../data/news';

interface PostListProps {
  posts: Post[];
  basePath: string;
  title: string;
}

const PostList: React.FC<PostListProps> = ({ posts, basePath, title }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  // Pagination calculation
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Scroll to top when page changes
  };

  return (
    <div className="flex-grow lg:ml-12 mt-10 lg:mt-0">
      <div className="border-b-2 border-taeil-dark pb-4 mb-8 flex justify-between items-end">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h3>
        <p className="hidden lg:block text-sm text-gray-500">홈 &gt; 홍보센터 &gt; {title}</p>
      </div>

      <div className="space-y-6 md:space-y-8">
        {currentPosts.map((post) => (
          <div 
            key={post.id} 
            className="flex flex-col md:flex-row border-b border-gray-200 pb-6 md:pb-8 group cursor-pointer"
            onClick={() => navigate(`/${basePath}/${post.id}`)}
          >
            <div className="w-full md:w-56 lg:w-64 h-48 md:h-36 lg:h-40 overflow-hidden flex-shrink-0 bg-gray-100 rounded-lg md:rounded-none mb-4 md:mb-0">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="md:ml-6 lg:ml-8 flex flex-col justify-between py-1">
              <div>
                <h4 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-taeil-light transition-colors mb-2 line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-sm md:text-base text-gray-600 line-clamp-2 mb-4 md:mb-0">
                  {post.description}
                </p>
              </div>
              <span className="text-gray-400 text-xs md:text-sm">{post.date}</span>
            </div>
          </div>
        ))}
        {posts.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            게시글이 없습니다.
          </div>
        )}
      </div>

      {/* Dynamic Pagination */}
      <div className="mt-12 flex justify-center space-x-2">
        <button 
          onClick={() => paginate(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          &lt;
        </button>
        
        {Array.from({ length: Math.max(1, totalPages) }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`px-4 py-2 rounded border ${
              currentPage === number 
                ? 'bg-taeil-dark text-white border-taeil-dark font-bold' 
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            {number}
          </button>
        ))}

        <button 
          onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages || totalPages === 0}
          className={`px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default PostList;
