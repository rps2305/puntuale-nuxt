type ContentRecord = {
  path?: string;
  stem?: string;
  extension?: string;
};

const matchesContent = (
  item: ContentRecord,
  path: string,
  stem?: string,
  extension?: string,
) => {
  const matchesPath = item.path === path;
  const matchesStem = stem ? item.stem === stem : false;
  const matchesExtension = extension ? item.extension === extension : true;
  return matchesExtension && (matchesPath || matchesStem);
};

export const useContentPage = async <T>(
  key: string,
  path: string,
  stem?: string,
  extension?: string,
) =>
  await useAsyncData(key, async () => {
    const byPath = await queryContent<T>().where({ path }).findOne();
    if (byPath) {
      return byPath;
    }
    if (stem) {
      const byStem = await queryContent<T>().where({ stem }).findOne();
      if (byStem) {
        return byStem;
      }
    }
    const all = await queryContent<T>().find();
    return all.find((item) => matchesContent(item as ContentRecord, path, stem, extension));
  });
