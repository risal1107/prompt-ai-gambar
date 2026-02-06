import { useMemo, useState } from "react";

import { PromptCard } from "../../components/PromptCard";
import { prompts } from "../../data/prompts";

export const Gallery = () => {
  const [query, setQuery] = useState("");

  const filteredPrompts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return prompts;
    }

    return prompts.filter((prompt) => {
      const matchesTitle = prompt.title.toLowerCase().includes(normalizedQuery);
      const matchesPrompt = prompt.prompt.toLowerCase().includes(normalizedQuery);
      const matchesTags = prompt.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));

      return matchesTitle || matchesPrompt || matchesTags;
    });
  }, [query]);

  return (
    <section className="gallery">
      <header className="gallery__header">
        <h1>Prompt Gallery</h1>
        <p className="gallery__lead">
          Jelajahi koleksi prompt AI beserta metadata, tag, dan contoh hasilnya.
        </p>
      </header>

      <div className="gallery__search">
        <div>
          <h2>Cari Prompt</h2>
          <p>Filter berdasarkan keyword atau tag.</p>
        </div>
        <input
          className="gallery__search-input"
          type="search"
          placeholder="Ketik keyword atau tag..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      {filteredPrompts.length === 0 ? (
        <div className="gallery__empty">Tidak ada prompt yang cocok dengan pencarianmu.</div>
      ) : (
        <div className="gallery__grid">
          {filteredPrompts.map((item) => (
            <PromptCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
};
