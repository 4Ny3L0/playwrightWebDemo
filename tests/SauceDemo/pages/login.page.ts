import { type Page, type Locator, expect, test, Frame, FrameLocator } from "@playwright/test";
export class SauceDemoLoginPage {
  readonly path: string = "/";
  readonly page: Page;
  readonly mainContainerPage: Locator;
  readonly loginPageContainer: Locator;
  readonly sauceDemoTitle: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginSubmitButton: Locator;
  readonly errorMessage: Locator;
  readonly errorButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mainContainerPage = page.locator("#root");
    this.loginPageContainer = page.getByTestId("login-container");
    this.sauceDemoTitle = this.mainContainerPage.getByText("Swag Labs", {
      exact: true,
    });
    
    this.emailInput = this.page.getByTestId("username");
    this.passwordInput = this.page.getByTestId(
      "password",
    );
    this.loginSubmitButton = this.page.getByTestId("login-button");
    this.errorMessage = this.page.getByTestId("error");
    this.errorButton = this.errorMessage.getByTestId("error-button");
  }

  public async goto(baseUrl:string) {
    await this.page.goto(`${baseUrl}${this.path}`);
  }

  public async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginSubmitButton.click();
  }
}
