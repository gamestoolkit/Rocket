import assets from './assets'
import deepFreeze from 'deep-freeze'
import Constants from '../common/constants';

describe('assets reducer', () => {
  it('should handle initial state', () => {
    expect(
      assets(undefined, {})
    ).toEqual({isLoading: true})
  })

  it('should handle FETCHING_DATA for a new state', () => {
    const stateBefore = {};
    const action = {
      type: Constants.ACTIONS.FETCHING_ASSETS      
    }
    
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      assets(stateBefore, action)
    ).toEqual({isLoading: true})
  })

  it('should handle RECEIVING_ASSETS after loading', () => {
    const stateBefore = { isLoading: true };
    const action = {
      type: Constants.ACTIONS.RECEIVING_ASSETS,      
      payload: { an: 'object' }
    }
    
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      assets(stateBefore, action)
    ).toEqual({ isLoading: false, data: { an: 'object' } })
  })
})

