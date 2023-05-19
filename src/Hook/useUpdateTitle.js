import { useEffect } from "react";

const useUpdateTitle = (title) => {
  useEffect(() => {
    document.title = `Hero Verse | ${title}`;
  }, [title]);
};

export default useUpdateTitle;
