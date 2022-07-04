import { useEffect, useMemo, useState } from 'react';

export default function useInfiniteScroll(data, limit, loadRef) {

  const [list, setList] = useState(data.slice(0, limit) ?? []);
  const [loadMore, setLoadMore] = useState(false);

  const hasMore = useMemo(() => {
    return list.length < data.length;
  }, [data.length, list.length])

  // Handle intersection with load more div
  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setLoadMore(true);
    }
  }

  //Initialize the intersection observer API
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    });
    if (loadRef.current) {
      observer.observe(loadRef.current);
    }
  }, [loadRef]);

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length;
      const nextResults = currentLength < data.length
        ? data.slice(currentLength, currentLength + limit)
        : [];
      setList([...list, ...nextResults]);
      setLoadMore(false);
    }
  }, [loadMore, hasMore]);

  return list;
}
