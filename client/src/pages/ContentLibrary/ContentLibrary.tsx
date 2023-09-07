import React, { useState, useEffect } from 'react';

const mockData = [
  {
    id: 9,
    title: 'Article 9',
    author: 'Author I',
    date: '2023-05-28',
    topic: 'Business'
  },
  {
    id: 4,
    title: 'Article 4',
    author: 'Author D',
    date: '2023-07-25',
    topic: 'Business'
  },
  {
    id: 7,
    title: 'Article 7',
    author: 'Author G',
    date: '2023-06-20',
    topic: 'Technology'
  },
  {
    id: 1,
    title: 'Article 1',
    author: 'Author A',
    date: '2023-09-01',
    topic: 'Technology'
  },
  {
    id: 2,
    title: 'Article 2',
    author: 'Author B',
    date: '2023-08-15',
    topic: 'Science'
  },
  {
    id: 5,
    title: 'Article 5',
    author: 'Author E',
    date: '2023-07-15',
    topic: 'Science'
  },
  {
    id: 10,
    title: 'Article 10',
    author: 'Author J',
    date: '2023-05-15',
    topic: 'Technology'
  },
  {
    id: 6,
    title: 'Article 6',
    author: 'Author F',
    date: '2023-06-30',
    topic: 'Business'
  },
  {
    id: 3,
    title: 'Article 3',
    author: 'Author C',
    date: '2023-08-10',
    topic: 'Technology'
  },
  {
    id: 8,
    title: 'Article 8',
    author: 'Author H',
    date: '2023-06-10',
    topic: 'Science'
  },
  {
    id: 11,
    title: 'Article 11',
    author: 'Author K',
    date: '2023-09-05',
    topic: 'Science'
  },
  {
    id: 12,
    title: 'Article 12',
    author: 'Author L',
    date: '2023-08-05',
    topic: 'Technology'
  },
  {
    id: 13,
    title: 'Article 13',
    author: 'Author M',
    date: '2023-07-20',
    topic: 'Business'
  },
  {
    id: 14,
    title: 'Article 14',
    author: 'Author N',
    date: '2023-08-25',
    topic: 'Science'
  }
];

const ContentLibrary = () => {
  const [content, setContent] = useState(mockData);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBy, setFilterBy] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  useEffect(() => {
    const filteredContent = mockData.filter((item) => {
      return (
        (filterBy === 'all' || item.topic === filterBy) &&
        (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.author.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });

    if (sortBy === 'date') {
      filteredContent.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'author') {
      filteredContent.sort((a, b) => a.author.localeCompare(b.author));
    }

    setContent(filteredContent);

    console.log(sortBy);
  }, [searchQuery, filterBy, sortBy]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-3xl font-bold">Content Library</h1>
      <div className="mb-4 flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search..."
          className="w-1/3 border p-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          value={filterBy}
          onChange={(e) => setFilterBy(e.target.value)}
          className="border p-2"
        >
          <option value="all">All Topics</option>
          <option value="Technology">Technology</option>
          <option value="Science">Science</option>
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border p-2"
        >
          <option value="date">Sort by Date</option>
          <option value="author">Sort by Author</option>
        </select>
      </div>
      <ul>
        {content.map((item) => (
          <li key={item.id} className="mb-2">
            <strong className="text-blue-700">{item.title}</strong> by{' '}
            {item.author} ({item.date}) {` - ${item.topic}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentLibrary;
