{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetaData = Pick<Video, "id" | "title">; //이런식으로 만들어서 재사용성을 높여주는게 좋다.

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://",
      data: "byte-data",
    };
  }

  function getVideoMetaData(id: string): VideoMetaData {
    //type중 원하는것만 골라서 할수있다.
    return {
      id,
      title: "title",
    };
  }
}
