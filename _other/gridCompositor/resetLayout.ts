import type {Trigger} from "o-types";

export class ResetLayout implements Trigger {
  public static readonly type = "ResetLayout";

  readonly _eventType: string = ResetLayout.type;
  readonly _timestamp: Number = new Date().getTime();

  id:string;

  constructor(targetId:string)
  {
    this.id = targetId;
  }

}
