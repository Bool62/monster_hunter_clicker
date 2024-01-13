export namespace ClickerGameActions {
  // Actions pour mettre à jour le personnage
  export class Click {
    static readonly type = '[ClickGame] Event';
    constructor() {}
  }

  export class StartCollectQuest {
    static readonly type = '[ClickGame] Start collect quest';
    constructor(public payload: {idQuest: number}) {}
  }

  export class StartCombatQuest {
    static readonly type = '[ClickGame] Start combat quest';
    constructor(public payload: {idQuest: number}) {}
  }
}
