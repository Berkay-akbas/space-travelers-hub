import missionReducer, { addMissions, joinMissions, leaveMissions } from '../redux/missions/missions';

test('should return the initial state', () => {
  expect(missionReducer(undefined, { type: undefined })).toEqual({
    missions: [],
  });
});

test('should handle a missions being added to an empty list', () => {
  const previousState = {
    missions: [],
  };
  const missions = [{
    mission_id: 'test1',
    mission_name: 'test1',
    description: 'test1',
    reserved: false,
  }, {
    mission_id: 'test2',
    mission_name: 'test2',
    description: 'test2',
    reserved: false,
  }];
  expect(missionReducer(previousState, addMissions(missions))).toEqual({
    missions: [{
      description: 'test1', mission_id: 'test1', mission_name: 'test1', reserved: false,
    }, {
      description: 'test2', mission_id: 'test2', mission_name: 'test2', reserved: false,
    }],
  });
});

test('should handle joining a mission', () => {
  const previousState = {
    missions: [{
      description: 'test1', mission_id: 'test1', mission_name: 'test1', reserved: false,
    }, {
      description: 'test2', mission_id: 'test2', mission_name: 'test2', reserved: false,
    }],
  };

  expect(missionReducer(previousState, joinMissions('test1'))).toEqual({
    missions: [{
      description: 'test1', mission_id: 'test1', mission_name: 'test1', reserved: true,
    }, {
      description: 'test2', mission_id: 'test2', mission_name: 'test2', reserved: false,
    }],
  });
});

test('should handle leaving a mission', () => {
  const previousState = {
    missions: [{
      description: 'test1', mission_id: 'test1', mission_name: 'test1', reserved: true,
    }, {
      description: 'test2', mission_id: 'test2', mission_name: 'test2', reserved: false,
    }],
  };

  expect(missionReducer(previousState, leaveMissions('test1'))).toEqual({
    missions: [{
      description: 'test1', mission_id: 'test1', mission_name: 'test1', reserved: false,
    }, {
      description: 'test2', mission_id: 'test2', mission_name: 'test2', reserved: false,
    }],
  });
});
