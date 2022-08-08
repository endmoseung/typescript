class TimeoutError extends Error {}

class OfflineError extends Error {}

class NetworkClient {
  tryConnect(): void {
    throw new OfflineError("no network!");
  }
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
      //show Dialog to user
    }
  }
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();
