{
  type Video = {
    title: string;
    author: string;
    description: string;
  };

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for .. in을 사용하는것처럼 사용한다.
  }; // 재사용성이 높아진다.

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: "afaf",
  };

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    name: "string",
  };

  const video: ReadOnly<Video> = {
    title: "adad",
    author: "afa",
    description: "faf",
  };

  // video.author= "afaf"; //Readonly기 떄문에 갑 변경이 불가능하다.

  type Nullable<T> = { [P in keyof T]: T[P] | null };

  const obj2: Nullable<Video> = {
    // valuer값으로 null도 가능하고 기존 type도 가능하다.
    title: null,
    author: null,
    description: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
