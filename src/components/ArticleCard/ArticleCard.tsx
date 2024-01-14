import { FC, useEffect, useRef, useState } from 'react';
import { ArticleCardProps } from './ArticleCard.types';
import Phone from '$svgs/phone';
import Email from '$svgs/email';
import { truncateText } from '$utils/functions';

const ArticleCard: FC<ArticleCardProps> = ({ author, email, phoneNumber, snippet, title }) => {
  const [isMore, setIsMore] = useState(true);
  const snippetContainerRef = useRef<HTMLDivElement | null>(null);
  const snippetRef = useRef<HTMLQuoteElement | null>(null);
  const truncatedSnippet = truncateText(snippet, 80);

  useEffect(() => {
    const snippetEl = snippetRef?.current;
    const snippetContainerEl = snippetContainerRef?.current;
    const observer = new ResizeObserver(() => {
      if (snippetContainerEl && snippetEl) {
        snippetContainerEl.style.height = `${snippetEl.clientHeight}px`;
      }
    });
    if (snippetEl) observer.observe(snippetEl);

    return () => {
      if (snippetEl) observer.unobserve(snippetEl);
    };
  }, [snippetRef]);

  return (
    <article className="w-full min-h-[250px] rounded-lg bg-[aliceblue] transition-all shadow-article-card pt-10 flex flex-col items-start justify-start">
      <div className="text-left w-full flex flex-col justify-between">
        <div className="px-5 flex flex-col items-start gap-3 mb-3">
          <h3 className="text-lg md:text-2xl font-semibold text-blue-800">{title}</h3>
          <div className="transition-all min-h-[48px]" ref={snippetContainerRef}>
            <blockquote ref={snippetRef} className="leading-relaxed text-base italic break-words">
              {isMore ? truncatedSnippet?.truncatedTest : snippet}
            </blockquote>
          </div>

          <button
            className={`${truncatedSnippet?.isTruncated ? 'visible' : 'invisible'}`}
            onClick={() => setIsMore((prevIsMore) => !prevIsMore)}
          >
            {isMore ? 'Read more' : 'Read less'}
          </button>

          <h3 className="text-sm font-bold text-gray-900">By {author}</h3>
        </div>
        <div className="flex flex-wrap gap-2 justify-between py-4 px-5 border-t border-t-blue-300">
          <small className="inline-flex items-center justify-center gap-1">
            <Email />
            <span className="text-xs font-medium">{email}</span>
          </small>
          <small className="inline-flex items-center justify-center gap-1">
            <Phone />
            <span className="text-xs font-medium">{phoneNumber}</span>
          </small>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
