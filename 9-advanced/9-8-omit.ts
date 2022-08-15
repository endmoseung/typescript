{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetaData = Omit<Video, "url" | "data" | "nothing">; // Omit은 pick의 반대 원하는것만 뺼 수 있다. pick과는 다르게 원래 없던것을 넣어도
  // 있다면 제외하기 떄문에 상관없다.

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://",
      data: "byte-data",
    };
  }

  function getVideoMetaData(id: string): VideoMetaData {
    return {
      id,
      title: "title",
    };
  }
}
