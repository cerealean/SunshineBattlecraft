import { DiceRoller } from './dice-roller';

describe('DiceRoller', () => {
  let component: DiceRoller;

  beforeEach(() => {
    component = new DiceRoller();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
