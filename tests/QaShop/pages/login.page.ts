import { type Page, type Locator, expect, test } from "@playwright/test";
export class QAShopLoginPage {
  readonly path: string = "/login";
  readonly page: Page;
  readonly loginPageContainer: Locator;
  readonly qaShopTitle: Locator;
  readonly loginFormHeading: Locator;
  readonly loginFormContainer: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginSubmitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginPageContainer = page.getByTestId("login-page");
    this.qaShopTitle = this.loginPageContainer.getByText("QA Shop", {
      exact: true,
    });
    
    this.loginFormHeading = this.loginPageContainer.getByRole("heading", {
      name: "Welcome Back",
    });

    this.loginFormContainer = this.loginPageContainer.getByTestId("login-form");
    this.emailInput = this.loginFormContainer.getByTestId("login-email-input");
    this.passwordInput = this.loginFormContainer.getByTestId(
      "login-password-input",
    );
    this.loginSubmitButton = this.loginFormContainer.getByRole("button", {
      name: "Login",
    });
  }

  public async loginPage() {}

  public async goto(baseUrl:string) {
    await this.page.goto(`${baseUrl}${this.path}`);
  }
}
