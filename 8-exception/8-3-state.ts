{
  type NetworkErrorState = {
    //성공적인상태, 실패인상태를 구분해서 타입지정해주는게 좋다.
    result: "fail";
    reason: "offline" | "down" | "timeout";
  };

  type SuccessState = {
    result: "success";
  };
  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {
    tryConnect(): ResultState {}
  }

  class UserService {
    constructor(private client: NetworkClient) {
      //dependency injection ,composition
    }

    login() {
      //어정쩡하게 login에서 잡는게 아니라 이걸 다룰수있는 App에서 핸들링한다.
      this.client.tryConnect();
    }
  }

  // service.login();

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        //show Dialog to use
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
