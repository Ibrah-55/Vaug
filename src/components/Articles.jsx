import React, { useState } from 'react';

function Articles() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState([]);

  const articles = [
    {
      title: "Three-piece set with matching headband and knickers.",
      category: "Browser",
      summary: "Three-piece set with matching headband and knickers...",
      author: "Ankit",
      authorImage: "/images/person/6.jpg",
      date: "13 January, 2022",
      readTime: "6",
      image: "/images/blog/1.jpg",
      link: "https://vaug.in/?cat=2",
    },
    {
      title: "Three-piece set with matching headband and knickers.",
      category: "Creative",
      summary: "Design is our playground.While we create an awesome...",
      author: "Ankit",
      authorImage: "/images/person/6.jpg",
      date: "213 January, 2022 ",
      readTime: "3",
      image: "/images/blog/2.jpg",
      link: "https://vaug.in/?cat=3",
    },
    {
        title: "Performed suspicion in certainty so frankness by attention pretended.",
        category: "Development",
        summary: " While we create an awesome experience, we like...",
        author: "Ankit",
        authorImage: "/images/person/6.jpg",
        date: "20 Mar 2023",
        readTime: "6",
        image: "/images/blog/1.jpg",
        link: "https://vaug.in/?cat=4",
      },
      
    // Add more articles here...
  ];
  
  // ...
    

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.category.toLowerCase().includes(query.toLowerCase())

    );
    setFilteredArticles(filtered);
  };

  const displayedArticles = searchQuery.length > 0 ? filteredArticles : articles;

  return (
    <div className="w-full p-6 bg-gray-200">
        <p className="title flex justify-center mb-4 text-3xl font-bold text-purple-800">
          Learn with our Informative Blogs
          </p>
          <p className="text-2xl font-light text-gray-800">
Read All the latest trends of SEO in 2023
       </p>
      <div className="flex items-end justify-between mb-12 header">
        <div className="title">
        <p>Suggested Reads: </p>

        </div>
        <div className="text-end">
          <form
            className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0"
            onSubmit={(e) => e.preventDefault()} 
          >
            <div className=" relative ">
              <input
                type="text"
                id="&quot;form-subscribe-Search"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Enter a title"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
            </div>
            <button
              className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {displayedArticles.map((article, index) => (
          <div
            key={index}
            className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-full"
          >
            <a href={article.link} className="block w-full h-full">
              {/* <img
                alt="blog photo"
                src={article.image}
                className="object-cover w-full max-h-40"
              /> */}
              <div className="w-full p-4 bg-white dark:bg-gray-800">
                <p className="font-medium text-yellow-500 text-md">
               <p className='text-purple-500'>  Category:</p>  {article.category}
                </p>
                <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                  {article.title}
                </p>
                <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                  {article.summary}
                </p>
                <div className="flex items-center mt-4">
                  {/* <a href="#" className="relative block">
                    <img
                      alt="profil"
                      src={article.authorImage}
                      className="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </a> */}
                  <p className="mb-2 text-sm italic font-medium text-gray-800 dark:text-white">
                  {article.author}
                </p>
                  <div className="flex flex-col justify-between ml-4 text-sm">
                    
                    <p className="text-gray-400 dark:text-gray-300">
                      {article.date} - {article.readTime} min read 

                    </p>

                  </div>
                  <div type="button" onClick= {article.link} className="ml-6 px-3 py-2 text-x font-medium text-center text-blue-500 underline"> Read More</div>

                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;
