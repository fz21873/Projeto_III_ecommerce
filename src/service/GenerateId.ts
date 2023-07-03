import { v4 } from "uuid"

export class GenerateId{
  public idGnerate(): string{
    return v4()
  }
}