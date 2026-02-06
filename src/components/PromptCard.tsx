import type { PromptItem } from "../data/prompts";

type PromptCardProps = {
  item: PromptItem;
};

export const PromptCard = ({ item }: PromptCardProps) => {
  return (
    <article className="prompt-card">
      <img className="prompt-card__image" src={item.imageUrl} alt={item.title} loading="lazy" />
      <div className="prompt-card__content">
        <div>
          <h3 className="prompt-card__title">{item.title}</h3>
          <p className="prompt-card__description">{item.prompt}</p>
        </div>
        <div className="tag-list">
          {item.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
