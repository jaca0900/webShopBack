export class StarterController {
  constructor(
    private  message: string
  ) {}

  public say() {
    return this.message;
  }
}